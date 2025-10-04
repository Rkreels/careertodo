import React from 'react';
import { Link } from 'wouter';
import { 
  ArrowLeft, 
  BookOpen, 
  Target, 
  Users, 
  Award, 
  Globe, 
  Heart, 
  Lightbulb, 
  Shield, 
  Zap, 
  CheckCircle,
  Star,
  TrendingUp,
  MessageCircle
} from 'lucide-react';

const About = () => {
  const stats = [
    { number: '50K+', label: 'Active Users', icon: Users, color: 'blue' },
    { number: '15+', label: 'Career Paths', icon: Target, color: 'green' },
    { number: '200+', label: 'Simulations', icon: BookOpen, color: 'purple' },
    { number: '95%', label: 'Success Rate', icon: TrendingUp, color: 'orange' }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we create, from content to user experience.',
      color: 'yellow'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We continuously push boundaries to create better learning experiences.',
      color: 'blue'
    },
    {
      icon: Heart,
      title: 'Accessibility',
      description: 'We believe quality career education should be accessible to everyone, everywhere.',
      color: 'red'
    },
    {
      icon: Target,
      title: 'Impact',
      description: 'We measure our success by the real-world impact we have on our users\' careers.',
      color: 'green'
    }
  ];

  const team = [
    {
      name: 'Jane Doe',
      role: 'CEO & Co-Founder',
      initials: 'JD',
      color: 'blue',
      description: 'Former VP of Learning at TechCorp with 15+ years in edtech innovation.'
    },
    {
      name: 'John Smith',
      role: 'CTO & Co-Founder',
      initials: 'JS',
      color: 'green',
      description: 'Ex-Google engineer specializing in educational technology and AI.'
    },
    {
      name: 'Sarah Johnson',
      role: 'Head of Content',
      initials: 'SJ',
      color: 'purple',
      description: 'Harvard Business School professor with expertise in career development.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.15),transparent_50%)]" />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-sky-600 to-blue-600 text-white py-20 sm:py-24 px-4">
          <div className="container mx-auto">
            <Link href="/">
              <button className="flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8 group">
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </button>
            </Link>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 rounded-full mb-8">
                <Target className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                About CareerToDo
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                Empowering professionals worldwide with immersive career simulations and practical skill development
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16 sm:py-20">
          {/* Mission Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-full mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                To bridge the gap between academic knowledge and real-world professional success through 
                interactive, hands-on career simulations.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-white/20 text-center group hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Learn by Doing</h3>
                <p className="text-gray-600 leading-relaxed">
                  Move beyond theory with practical, hands-on experience in real-world scenarios.
                </p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-white/20 text-center group hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Accelerate Growth</h3>
                <p className="text-gray-600 leading-relaxed">
                  Fast-track your career development with targeted skill building and immediate feedback.
                </p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-white/20 text-center group hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Build Confidence</h3>
                <p className="text-gray-600 leading-relaxed">
                  Gain the confidence to tackle real challenges through practice in a safe environment.
                </p>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="mb-20">
            <div className="bg-gradient-to-r from-sky-600 to-blue-600 rounded-2xl p-8 sm:p-12 text-white">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Impact</h2>
                <p className="text-xl text-white/90">
                  Numbers that speak to our commitment and success
                </p>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl sm:text-4xl font-bold mb-2">{stat.number}</div>
                    <div className="text-white/80">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Story Section */}
          <section className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-4 py-2 rounded-full mb-6">
                  <Star className="w-4 h-4" />
                  <span className="font-semibold">Our Story</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  From Vision to Reality
                </h2>
                <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                  <p>
                    CareerToDo was born from a simple observation: while traditional education provides 
                    valuable theoretical knowledge, many professionals struggle when faced with real-world 
                    workplace challenges.
                  </p>
                  <p>
                    Founded in 2023 by a team of educators, technologists, and industry veterans, 
                    we set out to create a platform that would transform passive learning into active experience.
                  </p>
                  <p>
                    Today, we're proud to serve thousands of professionals across 50+ countries, helping 
                    them develop the practical skills needed to thrive in their careers.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-8 rounded-2xl border border-sky-200">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-sky-600 mb-1">2023</div>
                    <div className="text-sm text-gray-600">Founded</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-purple-600 mb-1">50+</div>
                    <div className="text-sm text-gray-600">Countries</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-green-600 mb-1">1000+</div>
                    <div className="text-sm text-gray-600">Hours of Content</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-orange-600 mb-1">24/7</div>
                    <div className="text-sm text-gray-600">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-full mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-600">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 group">
                  <div className={`w-12 h-12 bg-${value.color}-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <value.icon className={`w-6 h-6 text-${value.color}-600`} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-full mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Leadership Team
              </h2>
              <p className="text-xl text-gray-600">
                The experts behind CareerToDo
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-white/20 text-center hover:shadow-xl transition-all duration-300">
                  <div className={`w-24 h-24 bg-gradient-to-br from-${member.color}-500 to-${member.color}-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold`}>
                    {member.initials}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className={`text-${member.color}-600 font-semibold mb-4`}>{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-sky-600 to-blue-600 rounded-2xl p-12 sm:p-16 text-white">
            <div className="max-w-3xl mx-auto">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Ready to Transform Your Career?
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Join thousands of professionals who are already accelerating their career growth with CareerToDo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup">
                  <button className="bg-white text-sky-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg hover:shadow-xl">
                    Get Started Free
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-sky-600 transition-colors text-lg">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;