const nodemailer = require('nodemailer');


const emailConfig = {
  user: 'your-email@gmail.com',
  pass: 'your-email-password',
  to: 'recipient-email@example.com',
};


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: emailConfig.user,
    pass: emailConfig.pass,
  },
});


const mailOptions = {
  from: emailConfig.user,
  to: emailConfig.to,
  subject: 'Test Email from Node.js',
  text: 'Hello, this is a test email sent from Node.js using nodemailer.',
};


transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error:', error.message);
  } else {
    console.log('Email sent:', info.response);
  }
});

