const nodemailer = require('nodemailer');
require('dotenv').config();

exports.handler = async (event, context) => {
    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        // Parse the body from the request
        const { name, email, subject, message } = JSON.parse(event.body);

        // Validate input
        if (!name || !email || !subject || !message) {
            return {
                statusCode: 400,
                body: JSON.stringify({
                    success: false,
                    message: 'Missing required fields'
                })
            };
        }

        // Create a transporter using your email credentials
        const transporter = nodemailer.createTransport({
            service: 'gmail',  // You can change this based on your email provider
            auth: {
                user: process.env.EMAIL_USER,     // Your email address
                pass: process.env.EMAIL_PASSWORD  // Your email password or app password
            }
        });

        // Setup email data
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'azatvepakulyyev@gmail.com',  // Your email where you want to receive contact messages
            subject: `Contact Form: ${subject}`,
            html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        return {
            statusCode: 200,
            body: JSON.stringify({
                success: true,
                message: 'Email sent successfully!'
            })
        };
    } catch (error) {
        console.error('Error sending email:', error);

        return {
            statusCode: 500,
            body: JSON.stringify({
                success: false,
                message: 'Failed to send email. Please try again later.'
            })
        };
    }
};