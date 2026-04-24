import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowDown, Mail, Phone, Linkedin, Twitter } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-semibold tracking-tight text-gray-900">Abdulsobur</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {['about', 'services', 'experience', 'skills'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-sm font-medium text-gray-700 hover:text-amber-700 transition-colors capitalize"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2 bg-amber-700 text-white text-sm font-medium rounded-lg hover:bg-amber-800 transition-colors"
            >
              Get In Touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-6 py-4 flex flex-col gap-4">
              {['about', 'services', 'experience', 'skills'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-sm font-medium text-gray-700 hover:text-amber-700 transition-colors capitalize text-left"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="px-4 py-2 bg-amber-700 text-white text-sm font-medium rounded-lg w-full"
              >
                Get In Touch
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Social Media <span className="text-amber-700">Strategy</span> That Moves
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              I help brands tell stories that connect, inspire, and convert. From content creation to audience growth, let's build something remarkable together.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-amber-700 text-white font-medium rounded-lg hover:bg-amber-800 transition-colors"
              >
                Start A Project
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="px-8 py-3 border-2 border-gray-300 text-gray-900 font-medium rounded-lg hover:border-amber-700 hover:text-amber-700 transition-colors"
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="mt-16 animate-bounce" style={{ animationDuration: '3s' }}>
            <ArrowDown size={28} className="text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I'm a creative strategist and social media manager with a passion for telling brand stories that connect, inspire, and convert. Over the past few years, I've worked with wellness brands, lifestyle companies, and small businesses to design and execute campaigns that deliver real results.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                My approach blends creativity, analytics, and a deep understanding of digital trends. At the heart of everything is one simple belief: social media is not just about posting — it's about building meaningful relationships between brands and people.
              </p>
              <div className="flex gap-4">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-amber-700">6.1K</div>
                  <p className="text-sm text-gray-600">Followers Managed</p>
                </div>
                <div className="flex-1">
                  <div className="text-3xl font-bold text-amber-700">50+</div>
                  <p className="text-sm text-gray-600">Campaigns Executed</p>
                </div>
                <div className="flex-1">
                  <div className="text-3xl font-bold text-amber-700">3+</div>
                  <p className="text-sm text-gray-600">Years Experience</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl h-96 flex items-center justify-center text-gray-400">
              <div className="text-center">
                <div className="text-6xl mb-4">📸</div>
                <p>Professional photo goes here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-amber-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">What I Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Content Strategy',
                description: 'Develop tailored social media plans that align with your business goals and resonate with your target audience.'
              },
              {
                title: 'Campaign Management',
                description: 'Design and execute campaigns that drive engagement, build brand awareness, and deliver measurable results.'
              },
              {
                title: 'Audience Growth',
                description: 'Build loyal, engaged communities through strategic posting, community management, and authentic storytelling.'
              },
              {
                title: 'Content Creation',
                description: 'Craft compelling copy, striking visuals, and engaging videos that capture attention and drive action.'
              },
              {
                title: 'Analytics & Reporting',
                description: 'Track performance, optimize strategies, and provide clear insights on what's working and why.'
              },
              {
                title: 'Paid Social Advertising',
                description: 'Maximize ROI with targeted ads that reach the right people at the right time on the right platforms.'
              }
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl border border-gray-200 hover:border-amber-700 hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-16">Experience</h2>
          <div className="space-y-12">
            <div className="border-l-4 border-amber-700 pl-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Head of Content & Strategy</h3>
              <p className="text-amber-700 font-medium mb-4">The DEW Centre — Wellness & Lifestyle</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-amber-700 mr-3">•</span>
                  <span>Developed and executed content strategies for wellness services including yoga, pilates, dance, and spa packages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-700 mr-3">•</span>
                  <span>Increased Instagram engagement through storytelling-focused Reels and wellness tips</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-700 mr-3">•</span>
                  <span>Led awareness campaigns showcasing unique value proposition, resulting in improved brand recognition and bookings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-700 mr-3">•</span>
                  <span>Managed cross-platform content across Instagram, Facebook, YouTube, and X</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-amber-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-16">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              'Social Media Strategy & Campaign Planning',
              'Content Creation (Video, Photo, Copywriting)',
              'Community Management & Engagement',
              'Analytics & Performance Reporting',
              'Brand Storytelling & Positioning',
              'Social Media Advertising (Paid Campaigns)'
            ].map((skill, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200">
                <p className="text-lg font-medium text-gray-900">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-16">Education</h2>
          <div className="bg-amber-50 p-12 rounded-xl border-2 border-amber-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Bachelor of Arts in Communication and Language Arts</h3>
            <p className="text-amber-700 font-medium mb-4">University of Ibadan</p>
            <p className="text-gray-600">2021 - 2025</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-b from-amber-700 to-amber-800 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Tell Your Story</h2>
          <p className="text-xl mb-12 text-amber-100">Ready to take your social media to the next level? I'd love to help.</p>
          
          <div className="space-y-4 mb-12">
            <a
              href="mailto:abdulsobur.content@gmail.com"
              className="flex items-center justify-center gap-3 bg-white text-amber-700 px-8 py-4 rounded-lg font-medium hover:bg-amber-50 transition-colors"
            >
              <Mail size={20} />
              abdulsobur.content@gmail.com
            </a>
            <a
              href="tel:+2348180845607"
              className="flex items-center justify-center gap-3 border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-amber-600 transition-colors"
            >
              <Phone size={20} />
              +234 818 084 5607
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a href="#" className="hover:text-amber-100 transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" className="hover:text-amber-100 transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p>© 2025 Abdulsobur Olatunji. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
