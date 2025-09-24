import React from 'react';
import SideBar from './Sidebar.jsx';
import ChatWindow from './ChatWindow.jsx';
import '../styles/Messenger.css';

const Messenger = () => {
  return (
    <div className="messenger-container">
      <SideBar />
      <ChatWindow />
    </div>
  );
};

export default Messenger;
