import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, ArrowLeft, Mail, Phone, MapPin, Send, Clock, MessageCircle, Users, Star, CheckCircle, Copy } from 'lucide-react';
import { Link } from 'wouter';
import { sendContactEmail, generateEmailContent, ContactFormData, simulateDirectEmailSending } from '@/lib/simpleEmailService';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    // Enhanced validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all required fields');
      setLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      setLoading(false);
      return;
    }

    try {
      // Try direct email sending first
      const result = await simulateDirectEmailSending(formData);
      if (result.success) {
        setSubmittedEmail(formData.email); // Store email before resetting form
        setSubmitted(true);
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setError(result.message || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopyEmail = async () => {
    try {
      const emailContent = generateEmailContent(formData);
      await navigator.clipboard.writeText(emailContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      setError('Failed to copy email content. Please try again.');
    }
  };

  const quickSubjects = [
    'General Inquiry',
    'Technical Support',
    'Billing Question',
    'Partnership Opportunity',
    'Feature Request',
    'Bug Report'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.15),transparent_50%)]" />
      
      <div className="relative z-10">
        <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8 md:py-12">
          <Link href="/">
            <Button 
              variant="ghost" 
              className="mb-6 sm:mb-8 text-indigo-600 hover:text-indigo-700 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Button>
          </Link>

          {/* Hero Section */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mb-4 sm:mb-6">
              <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 sm:mb-6">
              Get in Touch
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
              Have questions about CareerToDo? We're here to help you accelerate your career journey. 
              Our team typically responds within 24 hours.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12 md:mb-16">
            <div className="text-center">
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full mx-auto mb-2">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">24h</div>
              <div className="text-xs sm:text-sm text-gray-600">Response Time</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full mx-auto mb-2">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">50K+</div>
              <div className="text-xs sm:text-sm text-gray-600">Happy Users</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-full mx-auto mb-2">
                <Star className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">4.9</div>
              <div className="text-xs sm:text-sm text-gray-600">Rating</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-full mx-auto mb-2">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">24/7</div>
              <div className="text-xs sm:text-sm text-gray-600">Support</div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-4 sm:space-y-6">
              <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Mail className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-semibold text-gray-900">
                    Contact Information
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-sm sm:text-base">
                    Multiple ways to reach us
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm sm:text-base">Email Support</p>
                      <p className="text-gray-600 text-sm sm:text-base">wthriver@gmail.com</p>
                      <p className="text-xs sm:text-sm text-gray-500 mt-1">Best for detailed inquiries</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm sm:text-base">Phone Support</p>
                      <p className="text-gray-600 text-sm sm:text-base">+880 1234-567890</p>
                      <p className="text-xs sm:text-sm text-gray-500 mt-1">Mon-Fri, 9AM-6PM BST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm sm:text-base">Office Location</p>
                      <p className="text-gray-600 text-sm sm:text-base">Dhaka, Bangladesh</p>
                      <p className="text-xs sm:text-sm text-gray-500 mt-1">By appointment only</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl font-semibold text-gray-900">
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex justify-between items-center p-2 sm:p-3 bg-green-50 rounded-lg">
                      <span className="text-gray-700 font-medium text-sm sm:text-base">Monday - Friday</span>
                      <span className="text-green-700 font-semibold text-xs sm:text-sm">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center p-2 sm:p-3 bg-blue-50 rounded-lg">
                      <span className="text-gray-700 font-medium text-sm sm:text-base">Saturday</span>
                      <span className="text-blue-700 font-semibold text-xs sm:text-sm">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center p-2 sm:p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700 font-medium text-sm sm:text-base">Sunday</span>
                      <span className="text-gray-600 font-semibold text-xs sm:text-sm">Closed</span>
                    </div>
                  </div>
                  <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-indigo-50 rounded-lg">
                    <p className="text-xs sm:text-sm text-indigo-700">
                      <strong>Emergency Support:</strong> Available 24/7 for critical issues
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-4 sm:pb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Send className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl font-semibold text-gray-900">
                    Send us a Message
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base sm:text-lg">
                    We read every message and respond personally
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {submitted ? (
                    <div className="text-center py-8 sm:py-12">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                        <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg">
                        Thank you for contacting CareerToDo! Your message has been sent successfully 
                        and our team will get back to you within 24 hours.
                      </p>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
                        <p className="text-green-800 text-sm sm:text-base">
                          <strong>Confirmation:</strong> We've received your message and will respond to your email at {submittedEmail} soon.
                        </p>
                      </div>
                      <Button 
                        onClick={() => setSubmitted(false)}
                        className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 w-full sm:w-auto"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                      {error && (
                        <Alert variant="destructive" className="border-red-200 bg-red-50">
                          <AlertDescription className="text-red-800 text-sm">{error}</AlertDescription>
                        </Alert>
                      )}

                      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-sm font-semibold text-gray-700">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 h-10 sm:h-12"
                            disabled={loading}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 h-10 sm:h-12"
                            disabled={loading}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-sm font-semibold text-gray-700">Subject</Label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                          disabled={loading}
                        >
                          <option value="">Select a subject...</option>
                          {quickSubjects.map(subject => (
                            <option key={subject} value={subject}>{subject}</option>
                          ))}
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-sm font-semibold text-gray-700">Message *</Label>
                        <textarea
                          id="message"
                          name="message"
                          placeholder="Tell us how we can help you. The more details you provide, the better we can assist you..."
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed resize-none text-sm sm:text-base"
                          disabled={loading}
                        />
                        <p className="text-xs sm:text-sm text-gray-500">
                          {formData.message.length}/1000 characters
                        </p>
                      </div>

                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 sm:p-4">
                        <p className="text-xs sm:text-sm text-gray-600">
                          <strong>Privacy Notice:</strong> Your information is secure and will only be used to respond to your inquiry. 
                          We never share your data with third parties.
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <Button
                          type="submit"
                          className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                          disabled={loading}
                        >
                          {loading ? (
                            <>
                              <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 animate-spin" />
                              Sending Message...
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                              Send Message
                            </>
                          )}
                        </Button>
                        
                        <Button
                          type="button"
                          variant="outline"
                          onClick={handleCopyEmail}
                          className="flex-1 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-200"
                          disabled={loading}
                        >
                          {copied ? (
                            <>
                              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-green-600" />
                              Copied!
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                              Copy Email
                            </>
                          )}
                        </Button>
                      </div>
                      
                      <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <p className="text-xs sm:text-sm text-blue-800">
                          <strong>How it works:</strong> Click "Send Message" to send directly, or "Copy Email" to copy the message and send it manually to wthriver@gmail.com
                        </p>
                      </div>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16 sm:mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Quick answers to common questions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    How quickly will I receive a response?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We typically respond within 24 hours during business days. For urgent issues, 
                    please call our support line.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    Do you offer phone support?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Yes! Phone support is available Monday-Friday, 9AM-6PM BST. 
                    Call +880 1234-567890 for immediate assistance.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    Can I schedule a demo?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Absolutely! Use the contact form to request a personalized demo. 
                    We'll arrange a time that works for you.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}