import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import { StripeProvider } from './components/StripeProvider';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Assessment from './pages/Assessment';
import CareerExplorer from './pages/CareerExplorer';
import Pathways from './pages/Pathways';
import Resources from './pages/Resources';
import Progress from './pages/Progress';
import Profile from './pages/Profile';
import Pricing from './pages/Pricing';
import Success from './pages/Success';
import NotFound from './pages/NotFound';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import ForgotPassword from './pages/auth/ForgotPassword';

function App() {
  return (
    <StripeProvider>
      <AuthProvider>
        <ThemeProvider>
          <Router>
            <div className="flex flex-col min-h-screen bg-gray-50">
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/assessment" element={<Assessment />} />
                  <Route path="/explore" element={<CareerExplorer />} />
                  <Route path="/pathways" element={<Pathways />} />
                  <Route path="/resources" element={<Resources />} />
                  <Route path="/progress" element={<Progress />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="/success" element={<Success />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </ThemeProvider>
      </AuthProvider>
    </StripeProvider>
  );
}

export default App;