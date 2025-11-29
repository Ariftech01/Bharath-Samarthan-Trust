import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, MessageCircle, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Gavel, GraduationCap, Users } from 'lucide-react';
import { Button } from './Shared';

// --- Announcement Bar ---
const AnnouncementBar = () => (
  <div className="bg-primary-900 text-white text-xs md:text-sm py-2 px-4 flex justify-between items-center sticky top-0 z-50">
    <p className="font-medium truncate mr-2">
      📢 Support legal aid & education. Your contribution changes lives.
    </p>
    <Link to="/donate" className="underline hover:text-accent-500 font-semibold whitespace-nowrap">
      Donate Now &rarr;
    </Link>
  </div>
);

// --- Navbar ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Causes', path: '/causes' },
    { name: 'Impact', path: '/impact' },
    { name: 'Legal Aid', path: '/legal' },
    { name: 'Resources', path: '/resources' },
    { name: 'Volunteer', path: '/volunteer' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm sticky top-[32px] md:top-[36px] z-40 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary-700 rounded-full flex items-center justify-center text-white">
                <Heart size={20} fill="white" />
              </div>
              <div>
                <span className="block text-lg font-bold text-slate-900 leading-tight">Bharath</span>
                <span className="block text-sm font-medium text-primary-700 leading-tight">Samarthan Trust</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path) ? 'text-primary-700 font-bold' : 'text-slate-600 hover:text-primary-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/donate">
              <Button variant="primary" size="sm">Donate</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center xl:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-slate-900">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="xl:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-medium ${
                  isActive(link.path) ? 'bg-primary-50 text-primary-700' : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 px-3">
               <Link to="/donate" onClick={() => setIsOpen(false)}>
                <Button className="w-full justify-center">Donate Now</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

// --- Footer ---
const Footer = () => (
  <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      
      {/* Col 1 */}
      <div>
        <div className="flex items-center gap-2 mb-4 text-white">
          <Heart className="h-6 w-6 text-accent-500" />
          <span className="font-bold text-xl">Bharath Samarthan</span>
        </div>
        <p className="text-sm leading-relaxed mb-6 text-slate-400">
          Empowering communities through legal aid, education, and social justice. We believe in a self-reliant India where every citizen has access to rights and resources.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-white"><Facebook size={20} /></a>
          <a href="#" className="hover:text-white"><Twitter size={20} /></a>
          <a href="#" className="hover:text-white"><Instagram size={20} /></a>
          <a href="#" className="hover:text-white"><Linkedin size={20} /></a>
        </div>
      </div>

      {/* Col 2 */}
      <div>
        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
        <ul className="space-y-2 text-sm">
          <li><Link to="/about" className="hover:text-accent-500">About Us</Link></li>
          <li><Link to="/causes" className="hover:text-accent-500">Our Causes</Link></li>
          <li><Link to="/legal" className="hover:text-accent-500">Legal Aid</Link></li>
          <li><Link to="/resources" className="hover:text-accent-500">Resources</Link></li>
          <li><Link to="/volunteer" className="hover:text-accent-500">Volunteer</Link></li>
        </ul>
      </div>

      {/* Col 3 */}
      <div>
        <h3 className="text-white font-semibold mb-4">Contact Us</h3>
        <ul className="space-y-3 text-sm">
          <li className="flex items-start gap-3">
            <MapPin size={18} className="mt-0.5 text-accent-500" />
            <span>123, Samarthan Bhavan, MG Road,<br/>Bangalore, KA 560001</span>
          </li>
          <li className="flex items-center gap-3">
            <Phone size={18} className="text-accent-500" />
            <span>+91 80 1234 5678</span>
          </li>
          <li className="flex items-center gap-3">
            <Mail size={18} className="text-accent-500" />
            <span>contact@bharathsamarthan.org</span>
          </li>
        </ul>
      </div>

      {/* Col 4 */}
      <div>
        <h3 className="text-white font-semibold mb-4">Newsletter</h3>
        <p className="text-xs mb-4 text-slate-400">Stay updated with our latest impact stories.</p>
        <form className="flex flex-col gap-2">
          <input 
            type="email" 
            placeholder="Your email" 
            className="bg-slate-800 border-none rounded px-3 py-2 text-sm focus:ring-1 focus:ring-accent-500 text-white placeholder-slate-500"
          />
          <Button variant="secondary" size="sm">Subscribe</Button>
        </form>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-xs text-center text-slate-500">
      <p>&copy; {new Date().getFullYear()} Bharath Samarthan Trust. All Rights Reserved.</p>
    </div>
  </footer>
);

// --- Chatbot ---
const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { label: "👋 I want to donate", action: "/donate" },
    { label: "🤝 I want to volunteer", action: "/volunteer" },
    { label: "⚖️ I need legal help", action: "/legal" },
    { label: "📚 Show resources", action: "/resources" },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="mb-4 bg-white rounded-lg shadow-xl border border-slate-200 w-72 overflow-hidden animate-fade-in-up">
          <div className="bg-primary-700 p-4 text-white flex justify-between items-center">
            <span className="font-semibold">Samarthan Assistant</span>
            <button onClick={() => setIsOpen(false)}><X size={18}/></button>
          </div>
          <div className="p-4 bg-slate-50 h-64 overflow-y-auto">
            <div className="mb-4">
              <p className="bg-white p-3 rounded-br-xl rounded-tr-xl rounded-bl-xl shadow-sm text-sm text-slate-700 inline-block">
                Namaste! How can we help you today?
              </p>
            </div>
            <div className="flex flex-col gap-2">
              {options.map((opt, i) => (
                <Link 
                  key={i} 
                  to={opt.action} 
                  className="text-sm bg-primary-50 text-primary-700 p-2 rounded-lg hover:bg-primary-100 text-left transition-colors border border-primary-100"
                  onClick={() => setIsOpen(false)}
                >
                  {opt.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="h-14 w-14 bg-accent-500 hover:bg-accent-600 text-white rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-105"
      >
        <MessageCircle size={28} />
      </button>
    </div>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};