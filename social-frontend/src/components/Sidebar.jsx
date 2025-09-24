import React from "react";
import '../styles/SideBar.css';

const Sidebar = () => {
  const contacts = [
    {
      name: "Lisa Benet",
      time: "12:35 am",
      message: "You sent a sticker.",
      profilePic: "/images/pp1.jpg"
    },
    {
      name: "Andrea Mittelstaedt",
      time: "12:59 am",
      message: "You: Be right there!",
      profilePic: "/images/pp2.jpg"
    },
    {
      name: "Weekend Trip",
      time: "2:30 am",
      message: "Thomas Phillips: That's Okk",
      profilePic: "/images/pp3.jpg"
    },
    {
      name: "Alex Risteski",
      time: "9:56 pm",
      message: "Yep",
      profilePic: "/images/pp4.jpg"
    },
    {
      name: "Mac Tyler",
      time: "Wed",
      message: "What time?",
      profilePic: "/images/pp5.jpg"
    },
    {
      name: "Shenwei Liu",
      time: "Wed",
      message: "See you there!",
      profilePic: "/images/pp2.jpg"
    },
    {
      name: "Kari Lee",
      time: "Fri",
      message: "That works for me",
      profilePic: "/images/pp3.jpg"
    },
    {
      name: "Thomas Phillips",
      time: "Sat",
      message: "How’s your trip?",
      profilePic: "/images/pp4.jpg"
    },
    {
      name: "Carissa",
      time: "Sun",
      message: "I got you!!!",
      profilePic: "/images/pp3.jpg"
    }
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <span>Recent</span>
        <button className="add-button">+</button>
      </div>
      <input className="search-bar" placeholder="Search for people and groups" />
      <div className="contact-list">
        {contacts.map((contact, index) => (
          <div key={index} className="contact-item">
            <img className="avatar" src={contact.profilePic} alt="Profile" />
            <div className="contact-details">
              <div className="contact-name">{contact.name}</div>
              <div className="contact-msg">{contact.message}</div>
            </div>
            <div className="contact-time">{contact.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
