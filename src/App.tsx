import React from 'react';
import Navbar from './components/Navbar';
import ServiceCard from './components/ServiceCard';
import { Cloud, Shield, LineChart, Users, Mail, Phone, MapPin, ArrowRight, Laptop } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen relative">
      {/* Background Image with Overlay */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-white/85 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_white_100%)] opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
                Empowering Small Businesses<br />Through Technology
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                We provide cutting-edge solutions to help your business grow, 
                streamline operations, and stay ahead in the digital age.
              </p>
              <div className="flex justify-center gap-4">
                <a href="#contact" className="bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-3 rounded-lg hover:from-red-700 hover:to-red-600 transition-all duration-500 flex items-center shadow-lg hover:shadow-xl">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a href="#services" className="bg-white/80 backdrop-blur-sm border border-red-600 text-red-600 px-8 py-3 rounded-lg hover:bg-white transition-all duration-500 shadow-lg hover:shadow-xl">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">Our Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard 
                Icon={Cloud}
                title="Cloud Solutions"
                description="Secure and scalable cloud infrastructure to power your business operations."
              />
              <ServiceCard 
                Icon={Shield}
                title="Cybersecurity"
                description="Protect your business with enterprise-grade security solutions."
              />
              <ServiceCard 
                Icon={LineChart}
                title="Digital Strategy"
                description="Data-driven strategies to accelerate your business growth."
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">Why Choose Us?</h2>
                <p className="text-gray-600 mb-6">
                  With over a decade of experience helping small businesses thrive, 
                  we understand the unique challenges you face. Our team of experts 
                  delivers personalized solutions that drive real results.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Users className="h-5 w-5 text-red-600 mr-2" />
                    <span>Dedicated support team</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 text-red-600 mr-2" />
                    <span>Enterprise-grade security</span>
                  </li>
                  <li className="flex items-center">
                    <LineChart className="h-5 w-5 text-red-600 mr-2" />
                    <span>Data-driven solutions</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-[1.02] bg-white/50 backdrop-blur-sm p-1">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">Get In Touch</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6 bg-white/50 backdrop-blur-sm p-8 rounded-lg shadow-lg">
                <div className="flex items-center transform transition-all duration-500 hover:translate-x-2">
                  <Mail className="h-6 w-6 text-red-600 mr-3" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">contact@techflow.com</p>
                  </div>
                </div>
                <div className="flex items-center transform transition-all duration-500 hover:translate-x-2">
                  <Phone className="h-6 w-6 text-red-600 mr-3" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center transform transition-all duration-500 hover:translate-x-2">
                  <MapPin className="h-6 w-6 text-red-600 mr-3" />
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-gray-600">123 Tech Street, Silicon Valley, CA</p>
                  </div>
                </div>
              </div>
              <form className="space-y-4 bg-white/50 backdrop-blur-sm p-8 rounded-lg shadow-lg">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" className="w-full px-4 py-2 bg-white/80 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" className="w-full px-4 py-2 bg-white/80 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea rows={4} className="w-full px-4 py-2 bg-white/80 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-500"></textarea>
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-3 rounded-lg hover:from-red-700 hover:to-red-600 transition-all duration-500 shadow-lg hover:shadow-xl">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-12 relative z-10 mt-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <Laptop className="h-8 w-8 text-red-400" />
                  <span className="ml-2 text-xl font-bold">TechFlow</span>
                </div>
                <p className="text-gray-400">
                  Empowering small businesses through innovative technology solutions.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="#services" className="text-gray-400 hover:text-white transition-all duration-500">Services</a></li>
                  <li><a href="#solutions" className="text-gray-400 hover:text-white transition-all duration-500">Solutions</a></li>
                  <li><a href="#about" className="text-gray-400 hover:text-white transition-all duration-500">About</a></li>
                  <li><a href="#contact" className="text-gray-400 hover:text-white transition-all duration-500">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-red-400 transition-all duration-500">LinkedIn</a>
                  <a href="#" className="text-gray-400 hover:text-red-400 transition-all duration-500">Twitter</a>
                  <a href="#" className="text-gray-400 hover:text-red-400 transition-all duration-500">Facebook</a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 TechFlow. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;