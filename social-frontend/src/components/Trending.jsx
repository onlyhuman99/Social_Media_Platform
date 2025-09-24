import '../styles/Trending.css';
import React from 'react';
import { Link } from 'react-router-dom';

const trendingData = [
  {
    id: 1,
    title: "Operation Sindoor: India Retaliates Against Pakistan",
    source: "Hindustan Times",
    link: "https://www.hindustantimes.com/india-news/operation-sindoor-india-retaliates-against-pakistan-101739842927278.html",
    count: "1M+",
  },
  {
    id: 2,
    title: "Gold Prices Fall Amid India-Pakistan Tensions",
    source: "ET Now",
    link: "https://www.etnownews.com/personal-finance/gold-prices-fall-india-pakistan-tension-operation-sindoor-yellow-metal-is-trending-article-151603233",
    count: "500K+",
  },
  {
    id: 3,
    title: "UNDP Human Development Index 2025: India's Rank",
    source: "Indian Express",
    link: "https://indianexpress.com/article/trending/undp-human-development-index-hdi-2025-top-10-highest-lowest-india-rank-9990114/",
    count: "200K+",
  },
  {
    id: 4,
    title: "Viral Video: Pakistan's Shelling Attack Caught on Camera",
    source: "LiveMint",
    link: "https://www.livemint.com/news/india/viral-video-pakistans-shelling-attack-against-india-caught-on-camera-in-jammu-and-kashmir-watch-11746781918887.html",
    count: "150K+",
  },
  {
    id: 5,
    title: "Fact Check: Did India Attack Pakistan? Know the Truth",
    source: "India TV",
    link: "https://www.indiatvnews.com/fact-check/fact-check-did-india-attack-pakistan-know-truth-behind-the-viral-video-2025-05-06-988857",
    count: "100K+",
  }
];

const Trending = () => {
  return (
    <div className='parent'>
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

      {/* Sidebar */}
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

      {/* Trending Content */}
      <div className='trending-container'>
        <h2>Trending News in India</h2>
        <h4>Saturday, May 10, 2025</h4>
        {trendingData.map((item) => (
          <div key={item.id} className="trend-card">
            <div className="trend-left">
              <h3>
                {item.id}.{' '}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="trend-title-link"
                >
                  {item.title}
                </a>
              </h3>
              <p>{item.source}</p>
            </div>
            <div className="trend-right">
              <span className="trend-count">{item.count} searches</span>
              <img src={item.image} alt={item.title} className="trend-img" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
