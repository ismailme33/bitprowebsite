'use client';

import { useState } from 'react';
import {
  FaCheckCircle,
  FaCashRegister,
  FaBoxes,
  FaChartLine,
  FaUsers,
  FaTruck,
  FaFileInvoiceDollar,
  FaUserTie,
  FaShieldAlt,
  FaBars,
  FaTimes,
  FaArrowRight,
  FaPlay,
  FaBuilding,
  FaClock,
  FaGlobe
} from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: <FaCashRegister className="w-8 h-8" />,
      title: 'POS System',
      description: 'Advanced point-of-sale with ZATCA e-invoicing, thermal printing, and multi-payment support'
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: 'ERP System',
      description: 'Complete enterprise resource planning for sales, purchases, accounting, and HR'
    },
    {
      icon: <FaBoxes className="w-8 h-8" />,
      title: 'Asset Management',
      description: 'Track assets, maintenance schedules, depreciation with device receipts'
    },
    {
      icon: <FaBoxes className="w-8 h-8" />,
      title: 'Inventory Management',
      description: 'Real-time tracking, barcode integration, stock alerts, and transfers'
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: 'Customer Management',
      description: 'CRM with profiles, purchase history, and loyalty programs'
    },
    {
      icon: <FaTruck className="w-8 h-8" />,
      title: 'Vendor Management',
      description: 'Supplier database, purchase orders, and payment tracking'
    },
    {
      icon: <FaFileInvoiceDollar className="w-8 h-8" />,
      title: 'Financial Reporting',
      description: 'Comprehensive reports, P&L statements, ZATCA integration'
    },
    {
      icon: <FaUserTie className="w-8 h-8" />,
      title: 'Employee Management',
      description: 'HR module with attendance, payroll, and performance tracking'
    }
  ];

  const stats = [
    { number: '15+', label: 'Years in KSA' },
    { number: '1000+', label: 'Active Businesses' },
    { number: '100%', label: 'ZATCA Compliant' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#1e4d5f] rounded-xl relative flex-shrink-0">
                <div className="absolute w-[35%] h-[35%] bg-white left-[20%] top-[20%] rounded-sm"></div>
                <div className="absolute w-[30%] h-0.5 bg-white left-[20%] bottom-[35%]"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-[#1a1a1a] leading-tight">BitPro</span>
                <span className="text-[10px] tracking-[0.2em] text-[#666] uppercase">Global Software</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-[#1a1a1a] hover:text-[#1e4d5f] transition">Features</a>
              <a href="#modules" className="text-[#1a1a1a] hover:text-[#1e4d5f] transition">Modules</a>
              <a href="#zatca" className="text-[#1a1a1a] hover:text-[#1e4d5f] transition">ZATCA</a>
              <a href="#contact" className="text-[#1a1a1a] hover:text-[#1e4d5f] transition">Contact</a>
              <button className="bg-[#1e4d5f] text-white px-6 py-2.5 rounded-lg hover:bg-[#2d7a92] transition font-medium">
                Start Free Trial
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#1a1a1a]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden py-4 border-t"
            >
              <div className="flex flex-col gap-4">
                <a href="#features" className="text-[#1a1a1a] hover:text-[#1e4d5f] transition">Features</a>
                <a href="#modules" className="text-[#1a1a1a] hover:text-[#1e4d5f] transition">Modules</a>
                <a href="#zatca" className="text-[#1a1a1a] hover:text-[#1e4d5f] transition">ZATCA</a>
                <a href="#contact" className="text-[#1a1a1a] hover:text-[#1e4d5f] transition">Contact</a>
                <button className="bg-[#1e4d5f] text-white px-6 py-2.5 rounded-lg hover:bg-[#2d7a92] transition font-medium">
                  Start Free Trial
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1e4d5f] via-[#2d7a92] to-[#4a9bb5]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6">
                <FaShieldAlt className="w-4 h-4" />
                <span className="text-sm font-medium">ZATCA Phase 2 Certified</span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
                Complete Business Management for Saudi Arabia
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                The only ZATCA Phase 2 compliant e-invoicing platform you need. Trusted by businesses across KSA for 15 years.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-[#1e4d5f] px-8 py-4 rounded-lg hover:bg-gray-100 transition font-semibold text-lg flex items-center justify-center gap-2">
                  Start Free Trial
                  <FaArrowRight className="w-5 h-5" />
                </button>
                <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/20 transition font-semibold text-lg border-2 border-white/30 flex items-center justify-center gap-2">
                  <FaPlay className="w-4 h-4" />
                  Watch Demo
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="bg-white rounded-xl p-6 shadow-2xl">
                  <div className="flex items-center gap-3 mb-6 pb-6 border-b">
                    <div className="w-10 h-10 bg-[#1e4d5f] rounded-lg flex items-center justify-center">
                      <FaFileInvoiceDollar className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1a1a1a]">E-Invoice Generated</h3>
                      <p className="text-sm text-[#666]">ZATCA Phase 2 Compliant</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[#666]">Status</span>
                      <span className="flex items-center gap-2 text-[#4caf50] font-medium">
                        <FaCheckCircle />
                        Approved
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#666]">Invoice Number</span>
                      <span className="font-mono text-[#1a1a1a]">INV-2025-001234</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#666]">Amount</span>
                      <span className="text-lg font-bold text-[#1e4d5f]">12,500 SAR</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#666]">VAT (15%)</span>
                      <span className="font-semibold text-[#1a1a1a]">1,875 SAR</span>
                    </div>
                    <div className="pt-4 border-t">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-[#1a1a1a]">Total</span>
                        <span className="text-2xl font-bold text-[#1e4d5f]">14,375 SAR</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl font-bold text-[#1e4d5f] mb-2">{stat.number}</div>
                <div className="text-[#666] font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ZATCA Compliance Section */}
      <section id="zatca" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-[#4caf50]/10 text-[#4caf50] px-4 py-2 rounded-full mb-4">
                <FaShieldAlt className="w-4 h-4" />
                <span className="text-sm font-medium">Fully Certified</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#1a1a1a] mb-6">
                ZATCA Phase 2 E-Invoicing Ready
              </h2>
              <p className="text-xl text-[#666] max-w-3xl mx-auto">
                Stay compliant with Saudi Arabia's e-invoicing regulations. BitPro is fully certified for ZATCA Phase 2 implementation.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaFileInvoiceDollar className="w-8 h-8" />,
                title: 'E-Invoice Generation',
                description: 'Generate compliant e-invoices with QR codes, digital signatures, and real-time ZATCA integration'
              },
              {
                icon: <FaShieldAlt className="w-8 h-8" />,
                title: 'Digital Signatures',
                description: 'Cryptographic signatures ensuring invoice authenticity and non-repudiation per ZATCA requirements'
              },
              {
                icon: <FaCheckCircle className="w-8 h-8" />,
                title: 'Real-time Validation',
                description: 'Instant validation and clearance from ZATCA portal with automatic error handling and retry logic'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#1e4d5f] to-[#2d7a92] rounded-xl flex items-center justify-center text-white mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">{item.title}</h3>
                <p className="text-[#666] leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-[#1a1a1a] mb-6">
                Complete Business Management Suite
              </h2>
              <p className="text-xl text-[#666] max-w-3xl mx-auto">
                Everything you need to run your business efficiently - from POS to ERP, all integrated in one powerful platform.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition group cursor-pointer"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#1e4d5f] to-[#2d7a92] rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">{feature.title}</h3>
                <p className="text-[#666] text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose BitPro Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-[#1a1a1a] mb-6">
                Why Businesses Trust BitPro
              </h2>
              <p className="text-xl text-[#666] mb-8">
                15 years of experience serving businesses across Saudi Arabia with reliable, compliant, and comprehensive business management solutions.
              </p>
              <div className="space-y-6">
                {[
                  {
                    icon: <FaBuilding />,
                    title: 'Enterprise-Grade Platform',
                    description: 'Built for businesses of all sizes with scalability and reliability at its core'
                  },
                  {
                    icon: <FaClock />,
                    title: '15 Years in KSA',
                    description: 'Deep understanding of local business needs, regulations, and market dynamics'
                  },
                  {
                    icon: <FaGlobe />,
                    title: 'Arabic & English Support',
                    description: 'Full bilingual interface with RTL support for seamless Arabic operations'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 bg-[#1e4d5f]/10 rounded-lg flex items-center justify-center text-[#1e4d5f] flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">{item.title}</h3>
                      <p className="text-[#666]">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-[#1e4d5f] to-[#2d7a92] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Trusted by Leading Businesses</h3>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    'Retail Stores',
                    'Restaurants',
                    'Wholesalers',
                    'Service Providers',
                    'Manufacturing',
                    'Healthcare',
                    'Education',
                    'Real Estate'
                  ].map((industry, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <FaCheckCircle className="w-5 h-5 text-[#4caf50]" />
                      <span>{industry}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1e4d5f] to-[#2d7a92]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of businesses using BitPro for ZATCA-compliant operations. Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#1e4d5f] px-8 py-4 rounded-lg hover:bg-gray-100 transition font-semibold text-lg">
                Start Free Trial - No Credit Card Required
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/20 transition font-semibold text-lg border-2 border-white/30">
                Schedule a Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#1a1a1a] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white rounded-xl relative flex-shrink-0">
                  <div className="absolute w-[35%] h-[35%] bg-[#1e4d5f] left-[20%] top-[20%] rounded-sm"></div>
                  <div className="absolute w-[30%] h-0.5 bg-[#1e4d5f] left-[20%] bottom-[35%]"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold leading-tight">BitPro</span>
                  <span className="text-[10px] tracking-[0.2em] text-gray-400 uppercase">Global Software</span>
                </div>
              </div>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Complete business management platform with ZATCA Phase 2 e-invoicing compliance. Trusted by businesses across Saudi Arabia for 15 years.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-white transition">Features</a></li>
                <li><a href="#modules" className="text-gray-400 hover:text-white transition">Modules</a></li>
                <li><a href="#zatca" className="text-gray-400 hover:text-white transition">ZATCA Compliance</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Pricing</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-lg mb-4">Contact Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@bitproglobal.com</li>
                <li>Phone: +966 XX XXX XXXX</li>
                <li>Address: Riyadh, Saudi Arabia</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 BitPro Global Software. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
