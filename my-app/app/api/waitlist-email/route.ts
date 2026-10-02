import { Resend } from "resend";
import { getWaitlistEmailHtml } from "@/app/emails/waitlistEmail";
import { getCompanyWaitlistEmailHtml } from "@/app/emails/companyWaitlistEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

const TEAM_EMAIL = "tryshelf@gmail.com";

export async function POST(request: Request) {
  try {
    const { email, name, location, role } = await request.json();

    const origin = request.headers.get("origin") || process.env.NEXT_PUBLIC_APP_URL || "https://shelf.africa";

    // Generate HTML bodies using styled templates with logo asset & brand font stacks
    const customerHtml = getWaitlistEmailHtml({ name, baseUrl: origin });
    const companyHtml = getCompanyWaitlistEmailHtml({ name, email, location, role, baseUrl: origin });

    // 1. Send user confirmation email
    const userEmailPromise = resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "You're officially on the Shelf waitlist!",
      html: customerHtml,
    });

    // 2. Send team notification email
    const teamEmailPromise = resend.emails.send({
      from: "onboarding@resend.dev",
      to: TEAM_EMAIL,
      subject: `🚀 New Waitlist Signup: ${name || email}`,
      html: companyHtml,
    });

    const [userRes, teamRes] = await Promise.all([userEmailPromise, teamEmailPromise]);

    if (userRes.error) {
      console.warn("User Confirmation Email Warning:", userRes.error);
    } else {
      console.log("User Confirmation Email Sent:", userRes.data);
    }

    if (teamRes.error) {
      console.warn("Team Notification Email Warning:", teamRes.error);
    } else {
      console.log("Team Notification Email Sent:", teamRes.data);
    }

    return Response.json({
      success: true,
      userEmail: userRes,
      teamEmail: teamRes,
    });
  } catch (error: any) {
    console.error("Waitlist Email Route Error:", error);

    return Response.json(
      { success: false, error: error?.message || "Failed to send emails" },
      { status: 500 }
    );
  }
}
