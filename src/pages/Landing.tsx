import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Shield,
  Clock,
  TrendingUp,
  Users,
  CheckCircle,
  Star,
  Bot,
  Zap,
  BarChart3
} from 'lucide-react'

const Landing: React.FC = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-[#e0d4b8] via-white to-[#fcd46a]'>
      {/* Navigation Header */}
      <nav className='bg-white/90 backdrop-blur-sm shadow-lg sticky top-0 z-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            <div className='flex items-center'>
              <img
                src='/src/assets/logo.png'
                alt='WealthOnboard AI'
                className='h-10 w-auto'
              />
              <span className='ml-3 text-2xl font-bold text-[#0f3d66]'>
                WealthOnboard AI
              </span>
            </div>
            <div className='flex space-x-4'>
              <Link
                to='/login'
                className='px-6 py-2 text-[#0f3d66] border-2 border-[#0f3d66] rounded-lg hover:bg-[#0f3d66] hover:text-white transition-all duration-300 font-semibold'
              >
                Investor Login
              </Link>
              <Link
                to='/signup'
                className='px-6 py-2 bg-[#f8b319] text-[#0f3d66] rounded-lg hover:bg-[#fcd46a] transition-all duration-300 font-semibold shadow-lg'
              >
                Get Started
              </Link>
              <Link
                to='/ria-login'
                className='px-6 py-2 bg-[#0f3d66] text-white rounded-lg hover:bg-[#51779e] transition-all duration-300 font-semibold'
              >
                RIA Portal
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className='relative overflow-hidden py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className='space-y-8'
            >
              <h1 className='text-5xl lg:text-6xl font-bold text-[#0f3d66] leading-tight'>
                From Days to
                <span className='text-[#f8b319]'> Minutes</span> with
                WealthOnboard AI
              </h1>
              <p className='text-xl text-[#3a5054] leading-relaxed'>
                Revolutionary AI-powered platform that transforms investment
                onboarding for both
                <span className='font-semibold text-[#0f3d66]'>
                  {' '}
                  Investors
                </span>{' '}
                and
                <span className='font-semibold text-[#51779e]'>
                  {' '}
                  Registered Investment Advisors
                </span>
                . Automate KYC, streamline compliance, and accelerate
                time-to-market.
              </p>
              <div className='flex flex-col sm:flex-row gap-4'>
                <Link
                  to='/signup'
                  className='inline-flex items-center px-8 py-4 bg-[#f8b319] text-[#0f3d66] rounded-lg hover:bg-[#fcd46a] transition-all duration-300 font-semibold text-lg shadow-xl'
                >
                  Start as Investor
                  <ArrowRight className='ml-2 h-5 w-5' />
                </Link>
                <Link
                  to='/ria-login'
                  className='inline-flex items-center px-8 py-4 bg-[#0f3d66] text-white rounded-lg hover:bg-[#51779e] transition-all duration-300 font-semibold text-lg shadow-xl'
                >
                  RIA Portal Access
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='relative'
            >
              <div className='bg-white rounded-2xl shadow-2xl p-8 border border-[#fcd46a]'>
                <div className='flex items-center mb-6'>
                  <Bot className='h-8 w-8 text-[#f8b319] mr-3' />
                  <span className='text-lg font-semibold text-[#0f3d66]'>
                    AI Financial Co-pilot
                  </span>
                </div>
                <div className='space-y-4'>
                  <div className='bg-[#e0d4b8] rounded-lg p-4'>
                    <p className='text-[#3a5054] text-sm'>
                      "What's the risk profile of the Conservative Growth
                      model?"
                    </p>
                  </div>
                  <div className='bg-[#f8b319] rounded-lg p-4'>
                    <p className='text-[#0f3d66] text-sm'>
                      Based on our prospectus data, the Conservative Growth
                      model allocates 60% bonds, 40% equities with a target
                      volatility of 8-12%. Historical returns show...
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-[#0f3d66] mb-4'>
              Trusted by Leading Financial Institutions
            </h2>
            <div className='flex justify-center items-center space-x-12 opacity-60'>
              <div className='text-2xl font-bold text-[#3a5054]'>
                AWS Powered
              </div>
              <div className='text-2xl font-bold text-[#3a5054]'>
                SOC 2 Compliant
              </div>
              <div className='text-2xl font-bold text-[#3a5054]'>
                FINRA Ready
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Comparison */}
      <section className='py-20 bg-gradient-to-r from-[#e0d4b8] to-[#fcd46a]'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-[#0f3d66] mb-4'>
              The Transformation
            </h2>
            <p className='text-xl text-[#3a5054]'>
              See how WealthOnboard AI revolutionizes investment onboarding
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-12'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='bg-white rounded-2xl p-8 shadow-xl'
            >
              <h3 className='text-2xl font-bold text-red-600 mb-6'>
                Traditional Process
              </h3>
              <div className='space-y-4'>
                <div className='flex items-center text-[#3a5054]'>
                  <Clock className='h-5 w-5 mr-3 text-red-500' />
                  <span>2-3 weeks processing time</span>
                </div>
                <div className='flex items-center text-[#3a5054]'>
                  <Users className='h-5 w-5 mr-3 text-red-500' />
                  <span>Multiple back-office staff required</span>
                </div>
                <div className='flex items-center text-[#3a5054]'>
                  <BarChart3 className='h-5 w-5 mr-3 text-red-500' />
                  <span>Manual data entry and verification</span>
                </div>
                <div className='flex items-center text-[#3a5054]'>
                  <TrendingUp className='h-5 w-5 mr-3 text-red-500' />
                  <span>High operational costs</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='bg-white rounded-2xl p-8 shadow-xl border-2 border-[#f8b319]'
            >
              <h3 className='text-2xl font-bold text-[#f8b319] mb-6'>
                WealthOnboard AI
              </h3>
              <div className='space-y-4'>
                <div className='flex items-center text-[#3a5054]'>
                  <Zap className='h-5 w-5 mr-3 text-green-500' />
                  <span>5-minute automated onboarding</span>
                </div>
                <div className='flex items-center text-[#3a5054]'>
                  <Bot className='h-5 w-5 mr-3 text-green-500' />
                  <span>AI-powered assistance</span>
                </div>
                <div className='flex items-center text-[#3a5054]'>
                  <CheckCircle className='h-5 w-5 mr-3 text-green-500' />
                  <span>Automated KYC and compliance</span>
                </div>
                <div className='flex items-center text-[#3a5054]'>
                  <TrendingUp className='h-5 w-5 mr-3 text-green-500' />
                  <span>90% cost reduction</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition Trifecta */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-[#0f3d66] mb-4'>
              Triple Value Delivery
            </h2>
            <p className='text-xl text-[#3a5054]'>
              Benefits that transform every stakeholder
            </p>
          </div>

          <div className='grid lg:grid-cols-3 gap-8'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='bg-gradient-to-br from-[#f8b319] to-[#fcd46a] rounded-2xl p-8 text-center shadow-xl'
            >
              <TrendingUp className='h-16 w-16 text-[#0f3d66] mx-auto mb-6' />
              <h3 className='text-2xl font-bold text-[#0f3d66] mb-4'>
                Slash Costs
              </h3>
              <p className='text-[#0f3d66] mb-6'>
                Reduce operational expenses by 90% while eliminating human error
                in compliance processes.
              </p>
              <div className='text-3xl font-bold text-[#0f3d66]'>
                90% Cost Reduction
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='bg-gradient-to-br from-[#51779e] to-[#0f3d66] rounded-2xl p-8 text-center shadow-xl'
            >
              <Zap className='h-16 w-16 text-[#f8b319] mx-auto mb-6' />
              <h3 className='text-2xl font-bold text-white mb-4'>
                Instant Clarity
              </h3>
              <p className='text-white mb-6'>
                AI co-pilot provides real-time, data-backed answers to complex
                investment questions.
              </p>
              <div className='text-3xl font-bold text-[#f8b319]'>
                Real-time Insights
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className='bg-gradient-to-br from-[#3a5054] to-[#51779e] rounded-2xl p-8 text-center shadow-xl'
            >
              <Users className='h-16 w-16 text-[#f8b319] mx-auto mb-6' />
              <h3 className='text-2xl font-bold text-white mb-4'>
                Scale Rapidly
              </h3>
              <p className='text-white mb-6'>
                Serve more clients with higher precision without proportional
                hiring increases.
              </p>
              <div className='text-3xl font-bold text-[#f8b319]'>
                Unlimited Scale
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className='py-20 bg-gradient-to-r from-[#e0d4b8] to-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-[#0f3d66] mb-4'>
              What RIAs Are Saying
            </h2>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[
              {
                quote:
                  'WealthOnboard AI transformed our onboarding from a 3-week nightmare to a 5-minute delight. Our clients love the instant clarity.',
                author: 'Sarah Johnson',
                title: 'Managing Director, Apex Wealth'
              },
              {
                quote:
                  "The AI co-pilot answers questions I didn't even know my clients had. It's like having a senior advisor available 24/7.",
                author: 'Michael Chen',
                title: 'Founder, Chen Financial Group'
              },
              {
                quote:
                  "We've reduced our back-office costs by 85% while improving client satisfaction scores. This is the future of wealth management.",
                author: 'Lisa Rodriguez',
                title: 'COO, Premier Investment Solutions'
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className='bg-white rounded-2xl p-8 shadow-xl'
              >
                <div className='flex mb-4'>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className='h-5 w-5 text-[#f8b319] fill-current'
                    />
                  ))}
                </div>
                <p className='text-[#3a5054] mb-6 italic'>
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className='font-semibold text-[#0f3d66]'>
                    {testimonial.author}
                  </div>
                  <div className='text-[#51779e] text-sm'>
                    {testimonial.title}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-[#0f3d66] to-[#51779e]'>
        <div className='max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className='text-4xl lg:text-5xl font-bold text-white mb-6'>
              Ready to Transform Your Wealth Management?
            </h2>
            <p className='text-xl text-[#fcd46a] mb-8'>
              Join the AI revolution and give your clients the experience they
              deserve.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                to='/signup'
                className='inline-flex items-center px-8 py-4 bg-[#f8b319] text-[#0f3d66] rounded-lg hover:bg-[#fcd46a] transition-all duration-300 font-semibold text-lg shadow-xl'
              >
                Start Your Free Trial
                <ArrowRight className='ml-2 h-5 w-5' />
              </Link>
              <button className='inline-flex items-center px-8 py-4 border-2 border-[#f8b319] text-[#f8b319] rounded-lg hover:bg-[#f8b319] hover:text-[#0f3d66] transition-all duration-300 font-semibold text-lg'>
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-[#3a5054] text-white py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid md:grid-cols-4 gap-8'>
            <div>
              <div className='flex items-center mb-4'>
                <img
                  src='/src/assets/logo.png'
                  alt='WealthOnboard AI'
                  className='h-8 w-auto'
                />
                <span className='ml-2 text-xl font-bold'>WealthOnboard AI</span>
              </div>
              <p className='text-[#e0d4b8]'>
                Transforming wealth management with AI-powered automation and
                intelligence.
              </p>
            </div>
            <div>
              <h4 className='font-semibold mb-4'>Product</h4>
              <ul className='space-y-2 text-[#e0d4b8]'>
                <li>AI Co-pilot</li>
                <li>Automated KYC</li>
                <li>Portfolio Execution</li>
                <li>Compliance Suite</li>
              </ul>
            </div>
            <div>
              <h4 className='font-semibold mb-4'>Company</h4>
              <ul className='space-y-2 text-[#e0d4b8]'>
                <li>About Us</li>
                <li>Careers</li>
                <li>Press</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className='font-semibold mb-4'>Support</h4>
              <ul className='space-y-2 text-[#e0d4b8]'>
                <li>Documentation</li>
                <li>Help Center</li>
                <li>Security</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className='border-t border-[#51779e] mt-8 pt-8 text-center text-[#e0d4b8]'>
            <p>&copy; 2024 WealthOnboard AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Landing
