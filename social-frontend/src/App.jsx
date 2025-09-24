import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Components
import SplashScreen from './components/SplashScreen.jsx';
import Home from './components/Home.jsx';
import Profile from './components/Profile.jsx';
import MyFriends from './components/MyFriends.jsx';
import Settings from './components/Settings.jsx';
import Trending from './components/Trending.jsx';
import Messenger from './components/Messenger.jsx';
import LoginPage from './components/LoginPage.jsx';
import Signup from './components/Signup.jsx';
import Groups from './components/Groups.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home/*" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/myfriends" element={<MyFriends />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/trending" element={<Trending />} />
      <Route path="/messenger" element={<Messenger />} />
      <Route path="/populargroups" element={<Groups />} />
    </Routes>
  );
}

export default App;
