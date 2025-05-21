import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { AuthProvider } from '../../context/AuthContext';
import { TimelineProvider } from '../../context/TimelineContext';
import { FeedProvider } from '../../context/FeedContext';

const Layout: React.FC = () => {
  return (
    <AuthProvider>
      <TimelineProvider>
        <FeedProvider>
          <div className="min-h-screen flex flex-col bg-neutral-50">
            <Header />
            <main className="flex-grow">
              <Outlet />
            </main>
            <Footer />
          </div>
        </FeedProvider>
      </TimelineProvider>
    </AuthProvider>
  );
};

export default Layout;