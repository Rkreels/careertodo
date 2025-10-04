// Enhanced email sending service with multiple fallback options
export interface ContactFormData {
  name: string
  email: string
  company?: string
  phone?: string
  subject: string
  message: string
}

export const sendContactEmail = async (data: ContactFormData): Promise<{ success: boolean; message: string }> => {
  try {
    // Validate required fields
    const { name, email, subject, message } = data
    
    if (!name || !email || !subject || !message) {
      return {
        success: false,
        message: 'Please fill in all required fields'
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return {
        success: false,
        message: 'Please enter a valid email address'
      }
    }

    // Try to send via Web3Forms API (free form service)
    try {
      const formData = new FormData();
      formData.append('access_key', 'YOUR_WEB3FORMS_KEY'); // You'll need to get this key
      formData.append('name', name);
      formData.append('email', email);
      formData.append('subject', `CareerToDo Contact: ${subject}`);
      formData.append('message', message);
      if (data.company) formData.append('company', data.company);
      if (data.phone) formData.append('phone', data.phone);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          return {
            success: true,
            message: 'Message sent successfully! We\'ll get back to you within 24 hours.'
          }
        }
      }
    } catch (apiError) {
      console.log('API sending failed, falling back to email client');
    }

    // Fallback: Use mailto: protocol to open default email client
    const emailContent = `
New Contact Form Submission
==========================

Contact Information:
- Name: ${name}
- Email: ${email}
${data.company ? `- Company: ${data.company}` : ''}
${data.phone ? `- Phone: ${data.phone}` : ''}
- Subject: ${subject}

Message:
${message}

---
This message was sent from the CareerToDo contact form on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}
    `.trim()

    const subjectLine = encodeURIComponent(`CareerToDo Contact: ${subject}`)
    const bodyContent = encodeURIComponent(emailContent)
    const mailtoUrl = `mailto:wthriver@gmail.com?subject=${subjectLine}&body=${bodyContent}`

    // Create a temporary link to trigger email client
    const link = document.createElement('a')
    link.href = mailtoUrl
    link.style.display = 'none'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // Delay return success message to give user time to see email client open
    await new Promise(resolve => setTimeout(resolve, 1000))

    return {
      success: true,
      message: 'Email client opened! Please send the email to complete your submission.'
    }

  } catch (error) {
    console.error('Contact form error:', error)
    return {
      success: false,
      message: 'Failed to open email client. Please try again or email us directly at wthriver@gmail.com'
    }
  }
}

// Backup option: generate email content for user to copy
export const generateEmailContent = (data: ContactFormData): string => {
  const emailContent = `
To: wthriver@gmail.com
Subject: CareerToDo Contact: ${data.subject}

Dear CareerToDo Team,

${data.message}

Best regards,
${data.name}
${data.email}
${data.company ? `Company: ${data.company}` : ''}
${data.phone ? `Phone: ${data.phone}` : ''}
---
Sent via CareerToDo Contact Form
  `.trim()

  return emailContent
}

// New function: Simulate direct email sending (for demo purposes)
export const simulateDirectEmailSending = async (data: ContactFormData): Promise<{ success: boolean; message: string }> => {
  try {
    // Validate required fields
    const { name, email, subject, message } = data
    
    if (!name || !email || !subject || !message) {
      return {
        success: false,
        message: 'Please fill in all required fields'
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return {
        success: false,
        message: 'Please enter a valid email address'
      }
    }

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Simulate successful email sending
    console.log('Email would be sent with data:', data)

    return {
      success: true,
      message: 'Message sent successfully! We\'ll get back to you within 24 hours.'
    }

  } catch (error) {
    console.error('Email sending error:', error)
    return {
      success: false,
      message: 'Failed to send message. Please try again.'
    }
  }
}