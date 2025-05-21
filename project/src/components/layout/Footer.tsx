import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../core/Logo';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-neutral-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="mb-6 md:mb-0">
            <Logo size="sm" />
            <p className="mt-2 text-neutral-500 max-w-xs">
              Your World. Your Way. Connect with the people and groups that matter most to you.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-neutral-800 mb-3">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-neutral-500 hover:text-primary-600 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/features" className="text-neutral-500 hover:text-primary-600 transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="/business" className="text-neutral-500 hover:text-primary-600 transition-colors">
                    Business Plans
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-neutral-800 mb-3">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/help" className="text-neutral-500 hover:text-primary-600 transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-neutral-500 hover:text-primary-600 transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-neutral-500 hover:text-primary-600 transition-colors">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h3 className="font-semibold text-neutral-800 mb-3">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:info@hideinn.com" className="text-neutral-500 hover:text-primary-600 transition-colors">
                    info@hideinn.com
                  </a>
                </li>
                <li>
                  <Link to="/contact" className="text-neutral-500 hover:text-primary-600 transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Hide Inn. All rights reserved.
          </p>
          <div className="flex items-center text-neutral-500 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 mx-1 text-primary-600" fill="#E94E1B" />
            <span>for your privacy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;