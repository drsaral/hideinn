import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import TimelinePage from './pages/TimelinePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="timeline" element={<TimelinePage />} />
          <Route path="explore" element={<div className="container mx-auto px-4 py-12 text-center">Explore page coming soon</div>} />
          <Route path="groups" element={<div className="container mx-auto px-4 py-12 text-center">Groups page coming soon</div>} />
          <Route path="profile" element={<div className="container mx-auto px-4 py-12 text-center">Profile page coming soon</div>} />
          <Route path="notifications" element={<div className="container mx-auto px-4 py-12 text-center">Notifications page coming soon</div>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;