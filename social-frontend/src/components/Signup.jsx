import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';
import "../styles/SignUp.css";

function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [enteredOtp, setEnteredOtp] = useState('');
  const [message, setMessage] = useState('');

  const sendOtp = async () => {};

  const handleSignup = async () => {
    setMessage('');
    if (!email || !dob || !password || !username) {
      return setMessage('Please fill all fields.');
    }
    try {
      const res = await api.post('/auth/signup', { username, email, password, dob });
      if (res.data?.error) return setMessage(res.data.error);
      // Auto-login: persist basic session info and go to home
      localStorage.setItem("voxora_user", JSON.stringify({ email, password }));
      navigate('/home');
    } catch (e) {
      const err = e?.response?.data?.error || e?.message || 'Signup failed.';
      setMessage(err);
    }
  };

  return (
    
    <div className="signup-container">
      <div className='heading'>
          <img src="/images/logo.jpg" alt="Voxora Logo" height="70px" width="250px" />
      
    </div>
      <h2>Sign Up</h2>
      <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="date" placeholder="DOB" value={dob} onChange={e => setDob(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <div className="btn-group">
        <button onClick={handleSignup}>Sign Up</button>
      </div>
      <p className={message.includes("success") ? "success" : "error"}>{message}</p>
      <p>Already have an account? <span className="link" onClick={() => navigate('/login')}>Login</span></p>
    </div>
  );
}

export default Signup;