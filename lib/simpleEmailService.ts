// Simplified email sending service - no third-party connections required
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

    // Create email content
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

    // Use mailto: protocol to open default email client
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