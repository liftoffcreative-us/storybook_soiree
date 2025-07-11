// pages/api/send-email.js (Pages Router)

import { NextResponse } from 'next/server';

// or app/api/send-email/route.js (App Router)
const nodemailer = require('nodemailer');

export async function POST(request) {
  const body = await request.json();
  const message = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    // cc: process.env.CCEMAIL,
    subject: 'A New Retreat Information Request',
    html: `
    <h3>You have a new message from ${body.firstName} ${body.lastName} at ${body.email},</h3>
    <p>${body.message}</p>
    `,
    headers: { 'X-Entity-Ref-ID': 'newmail' },
  };
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
    // tls: {
    //   rejectUnauthorized: false,
    // },
  });
  console.log(JSON.stringify(body));

  try {
    await transporter.sendMail(message);
    return NextResponse.json(
      { message: 'Form Submitted Successfully' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
