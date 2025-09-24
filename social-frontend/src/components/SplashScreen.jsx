import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SplashScreen.css';

const SplashScreen = () => {
  const [showLogo, setShowLogo] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setShowLogo(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleLoginClick = () => {
    navigate('/signup');
  };

  return (
    <div className="splash-container">
      {!showLogo ? (
        <div className="welcome-screen">Welcome</div>
      ) : (
        <div className="logo-section">
          <img src="/images/logo.jpg" alt="Logo" className="logo" />
          <button onClick={handleLoginClick}>Login</button>
        </div>
      )}
    </div>
  );
};

export default SplashScreen;
