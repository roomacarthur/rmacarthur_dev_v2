// utils/nodemailer.js
import nodemailer from "nodemailer";

export async function sendEmail({ name, company, email, details }) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USERNAME,
    subject: `Contact form submission from ${name}`,
    text: `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nDetails: ${details}`,
  };

  try {
    const result = await transporter.sendMail(mailOptions);
    return result;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to send email");
  }
}
