import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const sendEmail = async (email, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.email,
        pass: process.env.password,
      },
    });
    await transporter.sendMail({
      from: "anishshrestha0912@gmail.com",
      to: email,
      subject: subject,
      text: text,
    });
  } catch (err) {
    console.log("error" + err);
  }
};
export default sendEmail;
