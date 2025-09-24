import React, { useState } from 'react';
import '../styles/Groups.css';

const initialChannelData = [
  {
    category: 'Explore channels',
    items: [
      { name: 'Cravings✔', followers: '9.5M', image: '/images/cravings.jpg', isFollowing: false },
      { name: 'News18 India✔', followers: '17.1M', image: '/images/News18India.jpg', isFollowing: false },
      { name: 'Hindi Behind Talkies✔', followers: '4.4M', image: '/images/behindtalks.jpg', isFollowing: false },
      { name: 'Total Gaming✔', followers: '13.3M', image: '/images/gaming.jpg', isFollowing: false },
    ],
  },
  {
    category: 'Entertainment',
    items: [
      { name: 'Koimoi✔', followers: '1.3M', image: '/images/koimoi.jpg', isFollowing: false },
      { name: 'ABP News✔', followers: '15.7M', image: '/images/abd.jpg', isFollowing: false },
      { name: 'Behind Talkies✔', followers: '4.3M', image: '/images/talks.jpg', isFollowing: false },
      { name: 'TV9 Telugu✔', followers: '6.9M', image: '/images/talks.jpg', isFollowing: false },
    ],
  },
  {
    category: 'Sports',
    items: [
      { name: 'Royal Challengers Bengaluru✔', followers: '9.6M', image: '/images/rcb.jpg', isFollowing: false },
      { name: 'Chennai Super Kings✔', followers: '7.2M', image: '/images/chennai.png', isFollowing: false },
      { name: 'Mumbai Indians✔', followers: '5.8M', image: '/images/mumbai.jpg', isFollowing: false },
      { name: 'Star Sports India✔', followers: '2.7M', image: '/images/starsports.jpg', isFollowing: false },
    ],
  },
];

const Groups = () => {
  const [channelData, setChannelData] = useState(initialChannelData);

  const toggleFollow = (categoryIndex, itemIndex) => {
    const updatedData = [...channelData];
    updatedData[categoryIndex].items[itemIndex].isFollowing = !updatedData[categoryIndex].items[itemIndex].isFollowing;
    setChannelData(updatedData);
  };

  return (
    <div className="groups-container">
      {channelData.map((section, catIdx) => (
        <div key={catIdx} className="category-section">
          <div className="category-header">
            <h3>{section.category}</h3>
            <a href="#" className="see-all">See all</a>
          </div>
          {section.items.map((channel, idx) => (
            <div className="channel-card" key={idx}>
              <img src={channel.image} alt={channel.name} className="channel-image" />
              <div className="channel-info">
                <div className="channel-name">{channel.name}</div>
                <div className="followers">{channel.followers} followers</div>
              </div>
              <button
                className="follow-button"
                onClick={() => toggleFollow(catIdx, idx)}
              >
                {channel.isFollowing ? 'Following' : 'Follow'}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Groups;
