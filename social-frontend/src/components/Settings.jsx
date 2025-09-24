import '../styles/Settings.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Settings = () => {
  return (
    <div className='parent'>
      
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

      
      <div className='settings-container'>
        <h2>Settings</h2>
        <div className='settings-section'>
          <h4>Account Settings</h4>
          <ul>
            <li>Account <span>&gt;</span></li>
            <li>Notification <span>&gt;</span></li>
            <li>Connection and Discovery <span>&gt;</span></li>
            <li>Content Filters <span>&gt;</span></li>
          </ul>
        </div>

        <div className='settings-section'>
          <h4>Privacy Settings</h4>
          <ul>
            <li>Privacy <span>&gt;</span></li>
            <li>Data <span>&gt;</span></li>
          </ul>
        </div>

        <div className='settings-section'>
          <h4>App Settings</h4>
          <ul>
            <li>Accessibility <span>&gt;</span></li>
            <li>Language <span>&gt;</span></li>
          </ul>
        </div>

        <div className='settings-section'>
          <h4>Support</h4>
          <ul>
            <li>Feedback <span>&gt;</span></li>
            <li>Help Center <span>&gt;</span></li>
          </ul>
        </div>

        <div className='settings-section'>
          <ul>
            <li className="logout">Log Out</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Settings;
