import React from 'react';
import { Link } from 'wouter';
import { Shield, Eye, Lock, UserCheck, Globe, FileText, ArrowLeft, CheckCircle, AlertCircle, Database, Users } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.15),transparent_50%)]" />
      
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-8 sm:py-12">
          <Link href="/">
            <button className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 transition-colors mb-8 group">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </button>
          </Link>

          {/* Hero Section */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your privacy is our priority. Learn how we protect and manage your data with transparency and care.
            </p>
            <div className="flex items-center justify-center gap-2 mt-4 text-gray-500">
              <FileText className="w-4 h-4" />
              <span>Last updated: {new Date().toLocaleDateString()}</span>
            </div>
          </div>

          {/* Key Principles */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Transparency</h3>
              <p className="text-sm text-gray-600">Clear and open about data practices</p>
            </div>
            
            <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Security</h3>
              <p className="text-sm text-gray-600">Industry-standard protection measures</p>
            </div>
            
            <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserCheck className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Control</h3>
              <p className="text-sm text-gray-600">You control your personal information</p>
            </div>
            
            <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Compliance</h3>
              <p className="text-sm text-gray-600">GDPR and privacy law compliant</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Information We Collect */}
            <section className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Database className="w-6 h-6 text-indigo-600" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Information We Collect</h2>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  At CareerToDo, we are committed to protecting your privacy. This policy explains how we collect, use, and safeguard your information with the utmost care and transparency.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <h3 className="font-semibold text-lg mb-4 text-blue-900 flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      Personal Information
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Name and email address</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Professional background and experience</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Career goals and preferences</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Payment information (processed securely)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                    <h3 className="font-semibold text-lg mb-4 text-purple-900 flex items-center gap-2">
                      <Globe className="w-5 h-5" />
                      Usage Data
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>Platform interaction patterns</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>Feature usage statistics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>Performance metrics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>Device and browser information</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Eye className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">How We Use Your Information</h2>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  We use your information responsibly to provide you with the best possible career development experience:
                </p>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    'Provide and improve our career simulation services',
                    'Personalize your learning experience',
                    'Process payments and manage subscriptions',
                    'Send important updates and support communications',
                    'Analyze usage patterns to enhance platform features',
                    'Ensure platform security and prevent fraud'
                  ].map((use, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{use}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Data Protection */}
            <section className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Lock className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Data Protection</h2>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  We implement industry-standard security measures to protect your data:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    {[
                      { icon: Shield, text: 'SSL encryption for all data transmissions', color: 'blue' },
                      { icon: Lock, text: 'Secure data storage with limited access', color: 'green' },
                      { icon: AlertCircle, text: 'Regular security audits and updates', color: 'orange' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className={`w-10 h-10 bg-${item.color}-100 rounded-full flex items-center justify-center flex-shrink-0`}>
                          <item.icon className={`w-5 h-5 text-${item.color}-600`} />
                        </div>
                        <span className="pt-2">{item.text}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-lg border border-indigo-200">
                    <h3 className="font-semibold text-lg mb-3 text-indigo-900">Security Certifications</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-indigo-600" />
                        <span className="text-sm">SOC 2 Type II Compliant</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-indigo-600" />
                        <span className="text-sm">ISO 27001 Certified</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-indigo-600" />
                        <span className="text-sm">GDPR Compliant</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <UserCheck className="w-6 h-6 text-orange-600" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Your Rights</h2>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  You have complete control over your personal data:
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { right: 'Access your personal data', desc: 'Request a copy of all your information' },
                    { right: 'Correct inaccurate information', desc: 'Update or fix any errors in your data' },
                    { right: 'Delete your account', desc: 'Remove your data permanently from our systems' },
                    { right: 'Opt-out of marketing', desc: 'Unsubscribe from promotional communications' },
                    { right: 'Data portability', desc: 'Export your data in a usable format' },
                    { right: 'Restrict processing', desc: 'Limit how we use your information' }
                  ].map((item, index) => (
                    <div key={index} className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-1">{item.right}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-xl p-8 lg:p-10 text-white">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <AlertCircle className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-4">Questions About Your Privacy?</h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  We're here to help. If you have any questions about this Privacy Policy or how we handle your data, please don't hesitate to reach out.
                </p>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
                  <p className="font-semibold text-lg mb-2">CareerToDo Privacy Team</p>
                  <p className="text-white/80 mb-1">Email: privacy@careertodo.com</p>
                  <p className="text-white/80">Address: 123 Career Street, Professional City, PC 12345</p>
                </div>
                
                <div className="mt-8">
                  <Link href="/contact">
                    <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                      Contact Privacy Team
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

export default PrivacyPolicy;