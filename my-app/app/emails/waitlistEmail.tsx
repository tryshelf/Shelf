export interface WaitlistEmailProps {
  name: string;
  baseUrl?: string;
}

export function getWaitlistEmailHtml({
  name,
  baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://shelf.africa",
}: WaitlistEmailProps): string {
  const displayName = name ? name.trim() : "there";
  const logoUrl = `${baseUrl.replace(/\/$/, "")}/Assets/logo.png`;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>You're on the Shelf waitlist!</title>
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
      font-family: 'Instrument Serif', Georgia, serif;
      font-size: 38px;
      line-height: 1.15;
      font-weight: 400;
      color: #1C1917;
      margin: 0 0 24px 0;
    }
    .heading em {
      font-style: italic;
      font-family: 'Instrument Serif', Georgia, serif;
    }
    .paragraph {
      font-family: 'DM Sans', sans-serif;
      font-size: 15px;
      line-height: 1.65;
      color: #4A443F;
      margin-bottom: 20px;
    }
    .quote-box {
      border-left: 3px solid #c75738;
      padding-left: 16px;
      margin: 28px 0;
    }
    .quote-text {
      font-family: 'Instrument Serif', Georgia, serif;
      font-size: 22px;
      font-style: italic;
      color: #1C1917;
      margin: 0;
    }
    .cta-container {
      margin: 32px 0 36px 0;
    }
    .cta-button {
      display: inline-block;
      background-color: #c75738;
      color: #FFFFFF !important;
      text-decoration: none;
      font-family: 'DM Sans', sans-serif;
      font-size: 14px;
      font-weight: 600;
      padding: 14px 28px;
      border-radius: 9999px;
      box-shadow: 0 2px 8px rgba(199, 87, 56, 0.25);
    }
    .signoff {
      font-family: 'DM Sans', sans-serif;
      font-size: 15px;
      line-height: 1.6;
      color: #4A443F;
      margin-top: 28px;
    }
    .footer {
      background-color: #FAF6F0;
      padding: 32px 48px;
      text-align: center;
      border-top: 1px solid #F0EAE1;
    }
    .footer-tagline {
      font-family: 'DM Sans', sans-serif;
      font-size: 13px;
      color: #786F66;
      margin-bottom: 12px;
    }
    .footer-support {
      font-family: 'DM Sans', sans-serif;
      font-size: 13px;
      color: #4A443F;
      margin-bottom: 20px;
    }
    .footer-support a {
      color: #c75738;
      text-decoration: none;
      font-weight: 600;
    }
    .social-icons {
      margin-bottom: 20px;
    }
    .social-icon {
      display: inline-block;
      width: 32px;
      height: 32px;
      line-height: 32px;
      border-radius: 50%;
      border: 1px solid #E4DBD1;
      color: #786F66;
      text-decoration: none;
      font-size: 12px;
      margin: 0 4px;
      background-color: #FFFFFF;
      font-family: 'DM Sans', sans-serif;
    }
    .footer-links {
      font-family: 'DM Sans', sans-serif;
      font-size: 12px;
      color: #c75738;
      margin-bottom: 16px;
    }
    .footer-links a {
      color: #c75738;
      text-decoration: none;
      margin: 0 6px;
    }
    .footer-disclaimer {
      font-family: 'DM Sans', sans-serif;
      font-size: 11px;
      color: #9E948A;
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
        padding: 28px 24px !important;
      }
      .heading {
        font-size: 32px !important;
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

        <!-- Eyebrow Tag (font-mono) -->
        <div class="eyebrow">YOU'RE ON THE LIST</div>

        <!-- Main Title (font-serif) -->
        <h1 class="heading">There’s always<br />room for <em>a story.</em></h1>

        <!-- Body Content (font-sans) -->
        <p class="paragraph">
          You’re on the Shelf waitlist, <strong>${displayName}</strong>. That means you’re here while we’re still making space for the stories, authors, and readers who will call it home.
        </p>

        <p class="paragraph">
          We’ll write when there’s something worth sharing. Until then, thank you for believing in this little beginning.
        </p>

        <!-- Quote (font-serif) -->
        <div class="quote-box">
          <p class="quote-text">Every story deserves a shelf.</p>
        </div>

        <!-- CTA Button (font-sans) -->
        <div class="cta-container">
          <a href="${baseUrl}/journal" class="cta-button" target="_blank">
            Read the Shelf Journal &nbsp;&nearr;
          </a>
        </div>

        <!-- Sign-off -->
        <div class="signoff">
          With warmth,<br />
          <strong>The Shelf team</strong>
        </div>
      </div>

      <!-- Footer Section -->
      <div class="footer">
        <div class="footer-tagline">A home for authors. A room for readers.</div>
        
        <div class="footer-support">
          Questions? We’re here at <a href="mailto:hello@shelf.africa">hello@shelf.africa</a>
        </div>

        <!-- Social Links -->
        <div class="social-icons">
          <a href="https://x.com" class="social-icon" target="_blank" title="X / Twitter">&#120143;</a>
          <a href="https://instagram.com" class="social-icon" target="_blank" title="Instagram">&#128247;</a>
          <a href="https://tiktok.com" class="social-icon" target="_blank" title="TikTok">&#9834;</a>
          <a href="https://youtube.com" class="social-icon" target="_blank" title="YouTube">&#9654;</a>
          <a href="https://linkedin.com" class="social-icon" target="_blank" title="LinkedIn">in</a>
        </div>

        <!-- Footer Quick Links -->
        <div class="footer-links">
          <a href="${baseUrl}/journal">Journal</a> &middot; 
          <a href="${baseUrl}/privacy">Privacy</a> &middot; 
          <a href="${baseUrl}/terms">Terms</a> &middot; 
          <a href="${baseUrl}/help">Help centre</a>
        </div>

        <div class="footer-disclaimer">
          You’re receiving this because you signed up for Shelf.
        </div>

        <div class="footer-copyright">
          &copy; ${new Date().getFullYear()} Shelf Africa. Stories live here.
        </div>
      </div>
    </div>
  </div>
</body>
</html>
  `;
}
