import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Profile.css';

const Profile = () => {
  const user = useMemo(() => {
    try { return JSON.parse(localStorage.getItem('voxora_user')) || {}; } catch { return {}; }
  }, []);

  const displayName = user?.username || user?.email?.split('@')[0] || 'User';
  const displayEmail = user?.email || '';

  return (
    <div className="parent"> {/* Full page container - same as Home */}

      {/* Header */}
      <div className='header'>
        <div className="header_image"> 
          <img src="/images/logo.jpg" alt="Voxora Logo" height="70px" width="250px" />
        </div>
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Search Voxora" />
          <button className="search-icon"><i className="fa fa-search"></i></button>
        </div>
        <section className="header_menu">
          <Link to="/login">Login</Link>
        </section>
      </div>

      {/* Left Menu */}
      <div className='leftmenu'>
        <section className="menu_bar">
          <Link to="/home"><i className="fa fa-home"></i><br />Home</Link>
          <Link to="/trending"><i className="fa fa-fire"></i><br />Trending</Link>
          <Link to="/myfriends"><i className="fa fa-user-friends"></i><br />My Friends</Link>
          <Link to="/messenger"><i className="fa fa-comment"></i><br />Ping</Link>
          <Link to="/populargroups"><i className="fa fa-star"></i><br />Popular Groups</Link>
          <Link to="/profile"><i className="fa fa-user-circle"></i><br />Profile</Link>
          <Link to="/settings"><i className="fa fa-cogs"></i><br />Settings</Link>
        </section>
      </div>

      {/* Main Profile Section */}
      <div className="body">
        <div className="profile-sidebar">
          <div className="profile-header">
            <img className="profile-pic" src="/images/pp1.jpg" alt="Profile" onError={(e) => { e.currentTarget.src = '/images/pp2.jpg'; }} />
            <h2 className="username">{displayName}</h2>
            {displayEmail && <p>{displayEmail}</p>}
            <p className="online-status">
              <span className="dot"></span> Online Status: On
            </p>
            <button className="create-avatar">Create Avatar</button>
          </div>

          <div className="profile-stats">
            <div className="stat">
              <strong>1</strong>
              <span>Karma</span>
            </div>
            <div className="stat">
              <strong>3</strong>
              <span>Achievements</span>
            </div>
            <div className="stat">
              <strong>3y 8m</strong>
              <span>Voxora Age</span>
            </div>
          </div>

          <div className="profile-menu">
            <a href="#">👤 Profile</a>
            <a href="#">➕ Create a community</a>
            <a href="#">💰 Contributor Program</a>
            <a href="#">🔒 Vault</a>
            <a href="#">⭐ Voxora Premium</a>
            <a href="#">🔖 Saved</a>
            <a href="#">🕘 History</a>
            <a href="#">⚙ Settings</a>
          </div>
        </div>
      </div>
 <div className='rightmenu'>
        <h1>Suggested for you</h1>
        <div className="profile-list">
          {[ 
            { name: 'Vaibhav', role: 'Fashion Designer', img: '/images/pp1.jpg' },
            { name: 'Angelin Daisy', role: 'Web Designer', img: '/images/pp2.jpg' },
            { name: 'Somesh', role: 'Interior Designer', img: '/images/pp3.jpg' },
            { name: 'Yasaswini', role: 'Graphic Designer', img: '/images/pp4.jpg' },
            { name: 'Pallavi', role: 'Fashion Designer', img: '/images/pp5.jpg' },
          ].map((friend, index) => (
            <div className="profile" key={index}>
              <img src={friend.img} alt={friend.name} />
              <div className="info">
                <h4>{friend.name}</h4>
                <p>{friend.role}</p>
              </div>
              <i className="fas fa-ellipsis-v"></i>
            </div>
          ))}
        </div>
      </div>
      {/* Footer */}
      <div className='footer'>
        <p>© All Rights Reserved 2025</p>
      </div>
    </div>
  );
};

export default Profile;
