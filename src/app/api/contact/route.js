import { NextResponse } from "next/server";
import { mailOptions, transporter } from "../../../config/nodemailer";

const CONTACT_MESSAGE_FIELDS = {
  name: "Name",
  email: "Email",
  subject: "Subject",
  message: "Message",
};

const generateEmailContent = (data) => {
  const textContent = Object.entries(data)
    .map(([key, val]) => `${CONTACT_MESSAGE_FIELDS[key]}: ${val}\n`)
    .join("\n");

  const htmlContent = Object.entries(data)
    .map(
      ([key, val]) =>
        `<h3 class="form-heading">${CONTACT_MESSAGE_FIELDS[key]}</h3><p class="form-answer">${val}</p>`
    )
    .join("");

  return {
    text: textContent,
    html: `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <title>New Message</title>
          <style>
            body {
              margin: 0;
              padding: 0;
              font-family: Arial, sans-serif;
              background: #f5f5f5;
            }
            .container {
              max-width: 800px;
              margin: auto;
              padding: 20px;
              background-color: #ffffff;
              border-radius: 8px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }
            .header {
              text-align: center;
              margin-bottom: 30px;
            }
            .logo {
              width:100%;
              height:100px;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .title {
              font-size: 24px;
              color: #333;
              margin-bottom: 15px;
              font-weight: 600;
            }
            .message-content {
              background: #f9f9f9;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
              margin-top: 20px;
            }
            .form-heading {
              font-size: 18px;
              margin-bottom: 8px;
              color: #2a2a2a;
              font-weight: bold;
            }
            .form-answer {
              font-size: 16px;
              color: #333;
              line-height: 1.5;
            }
            .footer {
              text-align: center;
              margin-top: 30px;
              font-size: 14px;
              color: #888;
            }
            .footer a {
              color: #f13024;
              text-decoration: none;
            }
            .footer a:hover {
              text-decoration: underline;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
               <div class="logo">
                <img src="https://firebasestorage.googleapis.com/v0/b/tshilitech-d707b.firebasestorage.app/o/logoFire.png?alt=media&token=219fb64e-f108-484c-ae0a-8399cf5c97d9" width="100" height="94" alt="Tshilitech Logo" />
              </div>
              <h2 class="title">New Message Notification</h2>
            </div>
            <div class="message-content">
              <h3 class="form-heading">Message Details:</h3>
              <div class="form-answer">${htmlContent}</div>
            </div>
            <div class="footer">
              <p>Thank you for contacting us. If you have any further questions, feel free to <a href="mailto:mail@tshilitech.com">reach out</a>.</p>
            </div>
          </div>
        </body>
      </html>

    `,
  };
};

export async function POST(request) {
  try {
    const data = await request.json();
    if (!data.name || !data.email || !data.subject || !data.message) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    await transporter.sendMail({
      ...mailOptions,
      ...generateEmailContent(data),
      subject: data.subject,
    });

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Email sending error:", error.message);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
