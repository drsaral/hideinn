import React from 'react';
import { Navigate } from 'react-router-dom';
import SignupForm from '../components/auth/SignupForm';
import { useAuth } from '../context/AuthContext';
import Logo from '../components/core/Logo';

const SignupPage: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-neutral-50">
      <div className="flex flex-col items-center mb-8">
        <Logo size="lg" />
        <h2 className="mt-4 text-xl text-neutral-600">Your World. Your Way.</h2>
      </div>
      <SignupForm />
    </div>
  );
};

export default SignupPage;