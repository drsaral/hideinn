import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bell, User, Search, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../core/Logo';
import { useAuth } from '../../context/AuthContext';

const Header: React.FC = () => {
  const { isAuthenticated, user } = useAuth();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Feed' },
    { path: '/explore', label: 'Explore' },
    { path: '/groups', label: 'Groups' },
    { path: '/timeline', label: 'Timeline' },
  ];

  return (
    <header className="bg-white border-b border-neutral-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex-shrink-0">
          <Logo />
        </Link>

        {isAuthenticated && (
          <>
            <nav className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium hover:text-primary-600 transition-colors ${
                    location.pathname === link.path
                      ? 'text-primary-600'
                      : 'text-neutral-600'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-neutral-100">
                <Search className="w-6 h-6 text-neutral-600" />
              </button>
              <Link to="/notifications" className="p-2 rounded-full hover:bg-neutral-100 relative">
                <Bell className="w-6 h-6 text-neutral-600" />
                <span className="absolute top-0 right-0 w-3 h-3 bg-primary-600 rounded-full border-2 border-white"></span>
              </Link>
              <Link 
                to="/profile" 
                className="flex items-center"
              >
                <img
                  src={user?.profilePicture || 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}
                  alt="Profile"
                  className="w-8 h-8 rounded-full object-cover"
                />
              </Link>
            </div>

            <button 
              className="md:hidden p-2"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              {showMobileMenu ? (
                <X className="w-6 h-6 text-neutral-600" />
              ) : (
                <Menu className="w-6 h-6 text-neutral-600" />
              )}
            </button>
          </>
        )}

        {!isAuthenticated && (
          <div className="flex items-center space-x-4">
            <Link 
              to="/login" 
              className="text-neutral-600 hover:text-primary-600 transition-colors"
            >
              Log in
            </Link>
            <Link 
              to="/signup" 
              className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md transition-colors"
            >
              Sign up
            </Link>
          </div>
        )}
      </div>

      <AnimatePresence>
        {showMobileMenu && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white overflow-hidden"
          >
            <div className="px-4 py-2 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block py-2 px-4 rounded-md ${
                    location.pathname === link.path
                      ? 'bg-neutral-100 text-primary-600'
                      : 'text-neutral-600'
                  }`}
                  onClick={() => setShowMobileMenu(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/notifications"
                className="block py-2 px-4 rounded-md text-neutral-600"
                onClick={() => setShowMobileMenu(false)}
              >
                Notifications
              </Link>
              <Link
                to="/profile"
                className="block py-2 px-4 rounded-md text-neutral-600"
                onClick={() => setShowMobileMenu(false)}
              >
                Profile
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;