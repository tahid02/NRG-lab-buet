import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Mail, MapPin, Phone, Linkedin, Twitter, Github } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Research', path: 'Research' },
    { name: 'Team', path: 'Team' },
    { name: 'Publications', path: 'Publications' },
    { name: 'News', path: 'News' },
    { name: 'Join Us', path: 'Join' },
  ];

  return (
    <footer className="bg-[#630e1d] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <h3
              className="text-2xl font-bold"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              NRG | BUET
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Nanocomposite Research Group at Bangladesh University of
              Engineering and Technology. Pioneering materials science for a
              sustainable future.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <span>
                  Department of Physics
                  <br />
                  BUET, Dhaka-1000
                  <br />
                  Bangladesh
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Mail size={18} className="flex-shrink-0" />
                <a
                  href="mailto:nrg@buet.ac.bd"
                  className="hover:text-white transition-colors"
                >
                  nrg@buet.ac.bd
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Phone size={18} className="flex-shrink-0" />
                <span>+880 2 9665650</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={createPageUrl(link.path)}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  BUET Homepage
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  Department of Physics
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  Research Portal
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  Student Resources
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} Nanocomposite Research Group, BUET.
              All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
