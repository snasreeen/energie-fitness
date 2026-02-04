import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Youtube,
} from 'lucide-react';

import logo from '../../assets/logo.jpeg'; // ✅ YOUR LOGO IMAGE

const Footer = () => {
  const quickLinks = [
    { to: '/programs', label: 'Programs' },
    { to: '/trainers', label: 'Trainers' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/transformations', label: 'Results' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/free-trial', label: 'Free Trial' },
  ];

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* LOGO SECTION */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img
                src={logo}
                alt="Energie Fitness Logo"
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-2xl font-bold">ENERGIE FITNESS-34</h3>
                
              </div>
            </div>

            <p className="text-gray-400 mb-6">
              Transform your body, elevate your mind, and achieve your fitness
              goals with expert guidance and premium facilities.
            </p>

           <div className="flex space-x-4">
  <a
    href="https://www.facebook.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
  >
    <Facebook size={20} />
  </a>

  <a
    href="https://www.instagram.com/energiefitness_34/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
  >
    <Instagram size={20} />
  </a>

  <a
    href="https://www.youtube.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
  >
    <Youtube size={20} />
  </a>
</div>

          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-red-500 transition-colors flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-red-500 group-hover:w-4 transition-all mr-0 group-hover:mr-2"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-red-500 mt-1" />
                <a
                  href="tel:07090920101"
                  className="text-gray-400 hover:text-red-500"
                >
                  70909 20101 ,8904120460
                </a>
              </li>

              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-red-500 mt-1" />
                <a
                  href="mailto:energie34fitness@gmail.com"
                  className="text-gray-400 hover:text-red-500 break-all"
                >
                  energie34fitness@gmail.com
                </a>
              </li>

              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-500 mt-1" />
                <span className="text-gray-400">
                 Hospet Road Opposite, St.philomena's PU college, Ballari, Karnataka 583104
                </span>
              </li>
            </ul>
          </div>

          {/* OPENING HOURS */}
          <div>
            <h4 className="text-xl font-bold mb-6">Opening Hours</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-red-500 mt-1" />
                <div>
                  <p className="text-white font-semibold">Mon - Sat</p>
                  <p className="text-gray-400">5:30 AM - 10:00 PM</p>
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-red-500 mt-1" />
                <div>
                  <p className="text-white font-semibold">Sunday</p>
                  <p className="text-gray-400">5:30 AM - 10:00 AM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Energie Fitness-34. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/contact" className="text-gray-400 hover:text-red-500">
                Privacy Policy
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-red-500">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
