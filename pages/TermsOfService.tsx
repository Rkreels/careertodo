import React from 'react';
import { Link } from 'wouter';
import { FileText, Shield, Users, CreditCard, AlertTriangle, CheckCircle, ArrowLeft, Scale, Clock, Ban, Eye } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.15),transparent_50%)]" />
      
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-8 sm:py-12">
          <Link href="/">
            <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors mb-8 group">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </button>
          </Link>

          {/* Hero Section */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mb-6">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
              Terms of Service
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Clear guidelines for using CareerToDo. We believe in transparency and fairness in everything we do.
            </p>
            <div className="flex items-center justify-center gap-2 mt-4 text-gray-500">
              <Clock className="w-4 h-4" />
              <span>Last updated: {new Date().toLocaleDateString()}</span>
            </div>
          </div>

          {/* Key Commitments */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Fair Use</h3>
              <p className="text-sm text-gray-600">Clear and reasonable usage policies</p>
            </div>
            
            <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Community</h3>
              <p className="text-sm text-gray-600">Respectful interaction guidelines</p>
            </div>
            
            <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Transparent</h3>
              <p className="text-sm text-gray-600">Clear payment and billing terms</p>
            </div>
            
            <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scale className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Balanced</h3>
              <p className="text-sm text-gray-600">Fair rights for all parties</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Agreement to Terms */}
            <section className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Agreement to Terms</h2>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  By accessing and using CareerToDo, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
                
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <p className="text-blue-900 font-medium mb-2">These Terms Apply To:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>All website visitors and platform users</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Free and paid service users</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Content creators and consumers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Third-party service integrators</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Description of Service */}
            <section className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Description of Service</h2>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  CareerToDo is a comprehensive career simulation platform providing:
                </p>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    'Interactive career path simulations',
                    'Skill development tools and resources',
                    'Professional training modules',
                    'Career assessment and guidance',
                    'Industry-specific learning experiences',
                    'Progress tracking and analytics'
                  ].map((service, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* User Accounts */}
            <section className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">User Accounts</h2>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Users className="w-4 h-4 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-blue-900">Registration</h3>
                    </div>
                    <p className="text-sm text-gray-700">
                      Provide accurate, current, and complete information during registration. You are responsible for maintaining the confidentiality of your account credentials.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <Shield className="w-4 h-4 text-green-600" />
                      </div>
                      <h3 className="font-semibold text-green-900">Security</h3>
                    </div>
                    <p className="text-sm text-gray-700">
                      You are responsible for safeguarding your password and all activities that occur under your account. Immediately notify us of unauthorized use.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-lg border border-orange-200">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                        <Ban className="w-4 h-4 text-orange-600" />
                      </div>
                      <h3 className="font-semibold text-orange-900">Termination</h3>
                    </div>
                    <p className="text-sm text-gray-700">
                      CareerToDo reserves the right to suspend or terminate your account at any time for violations of these terms or fraudulent activity.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Payment Terms */}
            <section className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-orange-600" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Payment Terms</h2>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                      <h4 className="font-semibold text-orange-900 mb-2">Subscription Fees</h4>
                      <p className="text-sm">Premium features require payment of subscription fees. All fees are non-refundable unless otherwise specified.</p>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-900 mb-2">Payment Processing</h4>
                      <p className="text-sm">Payments are processed securely through third-party providers. We do not store your payment information.</p>
                    </div>
                    
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                      <h4 className="font-semibold text-purple-900 mb-2">Auto-Renewal</h4>
                      <p className="text-sm">Subscriptions automatically renew unless cancelled before the renewal date.</p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-3">Refund Policy</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>14-day money-back guarantee for new subscriptions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Pro-rated refunds for annual plans</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>No refunds for used partial months</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* User Conduct */}
            <section className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">User Conduct</h2>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  You agree not to engage in any of the following prohibited activities:
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    'Use the service for any illegal or unauthorized purpose',
                    'Share your account credentials with others',
                    'Attempt to gain unauthorized access to our systems',
                    'Interfere with or disrupt the service',
                    'Upload malicious code or harmful content',
                    'Violate any applicable laws or regulations',
                    'Impersonate any person or entity',
                    'Harass, abuse, or harm other users'
                  ].map((prohibited, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-200">
                      <Ban className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{prohibited}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Intellectual Property */}
            <section className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Eye className="w-6 h-6 text-indigo-600" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Intellectual Property</h2>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  The service and its original content are owned by CareerToDo and protected by intellectual property laws.
                </p>
                
                <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
                  <h4 className="font-semibold text-indigo-900 mb-3">Your Rights & Responsibilities</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">You retain ownership of content you create</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">You grant us license to use your content for service improvement</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">You may not modify, reproduce, or distribute our content without permission</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-xl p-8 lg:p-10 text-white">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-4">Questions About These Terms?</h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  We believe in clear communication. If anything in these terms is unclear, please reach out to us.
                </p>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
                  <p className="font-semibold text-lg mb-2">CareerToDo Legal Team</p>
                  <p className="text-white/80 mb-1">Email: legal@careertodo.com</p>
                  <p className="text-white/80">Address: 123 Career Street, Professional City, PC 12345</p>
                </div>
                
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                      Contact Legal Team
                    </button>
                  </Link>
                  <Link href="/privacy">
                    <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                      View Privacy Policy
                    </button>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;