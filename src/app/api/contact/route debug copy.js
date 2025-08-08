import axios from 'axios';

// For App Router: /app/api/contact/route.js
// For Pages Router: /pages/api/contact.js

// App Router version (recommended for Next.js 13+)
export async function POST(request) {
  console.log('🚀 API Route Hit: /api/contact');
  
  try {
    const body = await request.json();
    console.log('📝 Form Data Received:', body);
    
    const { name, email, phone, service, message } = body;

    // Validation
    if (!name || !email || !message) {
      console.log('❌ Validation Failed: Missing required fields');
      return Response.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    console.log('✅ Validation Passed');

    // Mailtrap API configuration
    const MAILTRAP_TOKEN = process.env.MAILTRAP_API_TOKEN;
    console.log('🔑 API Token exists:', MAILTRAP_TOKEN ? 'Yes' : 'No');
    console.log('🔑 API Token (first 10 chars):', MAILTRAP_TOKEN ? MAILTRAP_TOKEN.substring(0, 10) + '...' : 'Not found');
    
    // For now, let's return success without actually sending the email
    // This will confirm the route is working properly
    console.log('📧 Email would be sent to Mailtrap (skipping for now)');
    
    return Response.json(
      { 
        message: 'Route is working! Email sending is disabled for testing.',
        debug: {
          receivedData: { name, email, phone, service, message },
          hasToken: !!MAILTRAP_TOKEN
        }
      },
      { status: 200 }
    );

    /* 
    // Uncomment this section when you're ready to test with real Mailtrap API
    const MAILTRAP_ENDPOINT = 'https://send.api.mailtrap.io/api/send';

    const emailData = {
      from: {
        email: "noreply@yourdomain.com", // Replace with your verified sender
        name: "DejaVu Move In/Out"
      },
      to: [
        {
          email: "your-email@yourdomain.com", // Replace with your email
          name: "DejaVu Team"
        }
      ],
      subject: `New Contact Form Submission - ${service || 'General Inquiry'}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        ${service ? `<p><strong>Service:</strong> ${service}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        ${phone ? `Phone: ${phone}` : ''}
        ${service ? `Service: ${service}` : ''}
        
        Message:
        ${message}
      `
    };

    const response = await axios.post(MAILTRAP_ENDPOINT, emailData, {
      headers: {
        'Authorization': `Bearer ${MAILTRAP_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    console.log('Email sent successfully:', response.data);

    return Response.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
    */

  } catch (error) {
    console.error('💥 Contact form error:', error);
    console.error('💥 Error details:', error.message);
    
    // Handle axios error response
    if (error.response) {
      console.error('🔥 Mailtrap API error status:', error.response.status);
      console.error('🔥 Mailtrap API error data:', error.response.data);
      return Response.json(
        { error: 'Failed to send email via Mailtrap', details: error.response.data },
        { status: error.response.status }
      );
    }

    return Response.json(
      { error: 'Failed to send message. Please try again.', details: error.message },
      { status: 500 }
    );
  }
}

// Pages Router version (if you're using Pages Router instead)
/*
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, service, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        error: 'Name, email, and message are required'
      });
    }

    // Mailtrap API configuration
    const MAILTRAP_TOKEN = process.env.MAILTRAP_API_TOKEN;
    const MAILTRAP_ENDPOINT = 'https://send.api.mailtrap.io/api/send';

    const emailData = {
      from: {
        email: "noreply@yourdomain.com",
        name: "DejaVu Move In/Out"
      },
      to: [
        {
          email: "your-email@yourdomain.com",
          name: "DejaVu Team"
        }
      ],
      subject: `New Contact Form Submission - ${service || 'General Inquiry'}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        ${service ? `<p><strong>Service:</strong> ${service}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        ${phone ? `Phone: ${phone}` : ''}
        ${service ? `Service: ${service}` : ''}
        
        Message:
        ${message}
      `
    };

    const response = await axios.post(MAILTRAP_ENDPOINT, emailData, {
      headers: {
        'Authorization': `Bearer ${MAILTRAP_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    console.log('Email sent successfully:', response.data);
    res.status(200).json({ message: 'Email sent successfully' });

  } catch (error) {
    console.error('Contact form error:', error);
    
    // Handle axios error response
    if (error.response) {
      console.error('Mailtrap API error:', error.response.data);
      return res.status(error.response.status).json({
        error: 'Failed to send email via Mailtrap'
      });
    }

    res.status(500).json({
      error: 'Failed to send message. Please try again.'
    });
  }
}
*/