import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';

async function handler(request: NextApiRequest, response: NextApiResponse) {
  console.log('request');
  
  if (request.method === 'POST') {
    const { name, message } = request.body;

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'haduigon@gmail.com',
        pass: 'dmwm jgzv eovf xzpt',
      }
    });

    try {
      const mailOptions = {
        from: 'haduigon@gmail.com',
        to: 'igor.khlyupin@gmail.com',
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