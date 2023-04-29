// @ts-ignore
import nodemailer from 'nodemailer';

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;
const fromEmail = process.env.FROM_EMAIL;

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: fromEmail,
        pass,
    }
});

export const mailOptions = {
    from: fromEmail,
    to: email
} 