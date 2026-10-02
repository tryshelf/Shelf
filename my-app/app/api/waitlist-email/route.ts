import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const TEAM_EMAIL = "tryshelf@gmail.com";

export async function POST(request: Request) {
  try {
    const { email, name, location, role } = await request.json();

    // 1. Send user confirmation email
    const userEmailPromise = resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "You're officially on the Shelf waitlist!",
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
          <h2>You're on the list, ${name}! 🎉</h2>
          <p>Thank you for joining the Shelf waitlist.</p>
          <p>We're building something exciting and will keep you updated as we progress.</p>
          <br />
          <p>Best regards,<br /><strong>The Shelf Team</strong></p>
        </div>
      `,
    });

    // 2. Send team notification email
    const teamEmailPromise = resend.emails.send({
      from: "onboarding@resend.dev",
      to: TEAM_EMAIL,
      subject: `🚀 New Waitlist Signup: ${name}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
          <h2>New Waitlist Submission</h2>
          <p>A new user just joined the Shelf waitlist!</p>
          <ul>
            <li><strong>Name:</strong> ${name || "N/A"}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Location:</strong> ${location || "N/A"}</li>
            <li><strong>Role:</strong> ${role || "N/A"}</li>
          </ul>
        </div>
      `,
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
