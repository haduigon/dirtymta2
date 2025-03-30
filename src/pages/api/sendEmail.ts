import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';

async function handler(request: NextApiRequest, response: NextApiResponse) {
  console.log('request');
  
  if (request.method === 'POST') {
    const { name='DirtyMTA server', message } = request.body;

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      }
    });

    try {
      const mailOptions = {
        from: process.env.EMAIL_SENDER,
        to: process.env.EMAIL_RECEIVER1,
        subject: `Email from ${name}`,
        text: message
      };

      const sended = await transporter.sendMail(mailOptions);
      console.log(sended, 'sended emailSend');
      

      return response.status(200).json({ success: true });
    } catch (error) {
    return response.status(500).json({ meessage: error })
  }
  }
}

export default handler;