import { Link,Route, Routes } from 'react-router-dom';
import Feed from './Feed';
import '../styles/Home.css';
import Profile from './Profile';
const Home = () => {
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

    
      <div className='body'>
        <Routes>
          <Route path="profile" element={<Profile />} />
        </Routes>
        <Feed />
        <div className="post">
          <div className="icons">
            <span><i className="fa fa-heart"></i></span> 
            <span><i className="fa fa-comment"></i></span> 
            <span><i className="fa fa-share"></i></span>
            <span className="save"><i className="fa fa-download"></i></span>
          </div>
          <p className="likes">9,152 likes</p>
          <p className="caption"><strong>Spandana</strong> Do you feel the same 🥰🫶🏻</p>
          <a href="#" className="view-comments">View all 31 comments</a>
          <input type="text" className="comment-box" placeholder="Add a comment..." />
        </div>

        {/* Video Post */}
        <div className="video-container">
          <video controls width="500">
            <source src="/videos/f1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="post">
          <div className="icons">
            <span><i className="fa fa-heart"></i></span> 
            <span><i className="fa fa-comment"></i></span> 
            <span><i className="fa fa-share"></i></span>
            <span className="save"><i className="fa fa-download"></i></span>
          </div>
          <p className="likes">14,789 likes</p>
          <p className="caption"><strong>Angelin Daisy</strong> F1 vibes 💨🔥</p>
          <a href="#" className="view-comments">View all 21 comments</a>
          <input type="text" className="comment-box" placeholder="Add a comment..." />
        </div>
      </div>

      {/* Right Sidebar */}
      <div className='rightmenu'>
        <h1>My Friends</h1>
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

export default Home;
