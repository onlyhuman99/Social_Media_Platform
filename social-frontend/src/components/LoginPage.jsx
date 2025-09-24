import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/LoginPage.css";

function Loginpage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const stored = JSON.parse(localStorage.getItem("voxora_user"));
    if (stored && stored.email === email && stored.password === password) {
      navigate("/home");
    } else {
      setError("Invalid credentials.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">Login</button>
        {error && <p className="error">{error}</p>}
      </form>
      <p>Don’t have an account? <span className="link" onClick={() => navigate('/')}>Sign Up</span></p>
    </div>
  );
}

export default Loginpage;
