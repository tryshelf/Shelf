export interface CompanyWaitlistEmailProps {
  name?: string;
  email: string;
  location?: string;
  role?: string;
  baseUrl?: string;
}

export function getCompanyWaitlistEmailHtml({
  name,
  email,
  location,
  role,
  baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://shelf.africa",
}: CompanyWaitlistEmailProps): string {
  const displayName = name ? name.trim() : "Not provided";
  const displayLocation = location ? location.trim() : "Not provided";
  const displayRole = role ? role.trim() : "Not provided";
  const logoUrl = `${baseUrl.replace(/\/$/, "")}/Assets/logo.png`;

  const formattedDate = new Date().toLocaleString("en-US", {
    dateStyle: "full",
    timeStyle: "short",
  });

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Waitlist Submission - Shelf</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Instrument+Serif:ital@0;1&display=swap');

    body {
      margin: 0;
      padding: 0;
      background-color: #F3EFEA;
      font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      color: #2D2723;
      -webkit-font-smoothing: antialiased;
    }
    table {
      border-collapse: collapse;
    }
    .wrapper {
      width: 100%;
      table-layout: fixed;
      background-color: #F3EFEA;
      padding: 40px 10px;
    }
    .main-card {
      background-color: #FFFFFF;
      max-width: 580px;
      margin: 0 auto;
      border-radius: 4px;
      overflow: hidden;
      box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04);
    }
    .top-bar {
      height: 5px;
      background-color: #c75738;
    }
    .content {
      padding: 40px 48px;
    }
    .logo-container {
      padding-bottom: 24px;
      border-bottom: 1px solid #EBE5DF;
      margin-bottom: 32px;
    }
    .eyebrow {
      font-family: 'DM Mono', Consolas, monospace;
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: #c75738;
      margin-bottom: 16px;
    }
    .heading {
      font-family: 'Instrument Serif', serif;
      font-size: 34px;
      line-height: 1.2;
      font-weight: 400;
      color: #1C1917;
      margin: 0 0 16px 0;
    }
    .heading em {
      font-style: italic;
      font-family: 'Instrument Serif',  serif;
    }
    .subheading {
      font-family: 'DM Sans', sans-serif;
      font-size: 15px;
      line-height: 1.6;
      color: #786F66;
      margin-bottom: 28px;
    }
    .details-card {
      background-color: #FAF6F0;
      border: 1px solid #EBE3D9;
      border-left: 4px solid #c75738;
      border-radius: 6px;
      padding: 24px;
      margin-bottom: 28px;
    }
    .detail-row {
      margin-bottom: 16px;
    }
    .detail-row:last-child {
      margin-bottom: 0;
    }
    .detail-label {
      font-family: 'DM Mono', Consolas, monospace;
      font-size: 11px;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      color: #786F66;
      margin-bottom: 4px;
    }
    .detail-value {
      font-family: 'DM Sans', sans-serif;
      font-size: 16px;
      font-weight: 600;
      color: #1C1917;
    }
    .quote-box {
      border-left: 3px solid #c75738;
      padding-left: 16px;
      margin: 28px 0;
    }
    .quote-text {
      font-family: 'Instrument Serif', Georgia, serif;
      font-size: 20px;
      font-style: italic;
      color: #1C1917;
      margin: 0;
    }
    .signoff {
      font-family: 'DM Mono', Consolas, monospace;
      font-size: 13px;
      line-height: 1.6;
      color: #786F66;
      margin-top: 28px;
    }
    .footer {
      background-color: #FAF6F0;
      padding: 24px 48px;
      text-align: center;
      border-top: 1px solid #F0EAE1;
    }
    .footer-tagline {
      font-family: 'DM Sans', sans-serif;
      font-size: 12px;
      color: #786F66;
      margin-bottom: 6px;
    }
    .footer-copyright {
      font-family: 'DM Mono', Consolas, monospace;
      font-size: 11px;
      color: #9E948A;
    }
    @media only screen and (max-width: 600px) {
      .content {
        padding: 28px 24px !important;
      }
      .footer {
        padding: 24px 24px !important;
      }
      .heading {
        font-size: 28px !important;
      }
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="main-card">
      <div class="top-bar"></div>
      
      <div class="content">
        <!-- Logo Section with public/Assets/logo.png -->
        <div class="logo-container">
          <table role="presentation" width="100%">
            <tr>
              <td>
                <a href="${baseUrl}" target="_blank" style="text-decoration: none;">
                  <img 
                    src="${logoUrl}" 
                    alt="Shelf logo" 
                    height="36" 
                    style="height: 36px; width: auto; max-height: 36px; display: block; border: 0;"
                  />
                </a>
              </td>
            </tr>
          </table>
        </div>

        <!-- Eyebrow Tag (DM Mono) -->
        <div class="eyebrow">🚀 NEW WAITLIST SIGNUP</div>

        <!-- Main Title (Instrument Serif) -->
        <h1 class="heading">Someone just joined <em>shelf.</em></h1>
        <p class="subheading">
          A new member has signed up for the Shelf waitlist. Here are their submission details:
        </p>

        <!-- User Submission Details Card -->
        <div class="details-card">
          <div class="detail-row">
            <div class="detail-label">Full Name</div>
            <div class="detail-value">${displayName}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Email Address</div>
            <div class="detail-value"><a href="mailto:${email}" style="color: #c75738; text-decoration: none;">${email}</a></div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Location</div>
            <div class="detail-value">${displayLocation}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Role / Interest</div>
            <div class="detail-value">${displayRole}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Signup Timestamp</div>
            <div class="detail-value" style="font-family: 'DM Mono', Consolas, monospace; font-size: 13px; font-weight: 500; color: #786F66;">${formattedDate}</div>
          </div>
        </div>

        <!-- Quote (Instrument Serif) -->
        <div class="quote-box">
          <p class="quote-text">Every story deserves a shelf.</p>
        </div>

        <!-- Sign-off (DM Mono) -->
        <div class="signoff">
          Shelf Notifications &middot; Team Internal Alert
        </div>
      </div>

      <!-- Footer Section -->
      <div class="footer">
        <div class="footer-tagline">Shelf Admin & Waitlist Management</div>
        <div class="footer-copyright">
          &copy; ${new Date().getFullYear()} Shelf Africa. Internal Team Notification.
        </div>
      </div>
    </div>
  </div>
</body>
</html>
  `;
}
