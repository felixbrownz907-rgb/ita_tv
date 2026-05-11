import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const App = () => {
  const [currentVideo, setCurrentVideo] = useState('https://www.youtube.com/watch?v=9No-FiE9G8Q');
  const [channelName, setChannelName] = useState('ITA ACADEMY TV');

  const channels = [
    { name: 'ITA LIVE NEWS', url: 'https://www.youtube.com/watch?v=live1' },
    { name: 'ITA ACADEMY TV', url: 'https://www.youtube.com/watch?v=9No-FiE9G8Q' },
    { name: 'ITA MARKETING TV', url: 'https://www.youtube.com/watch?v=marketing1' },
    { name: 'ITA SUCCESS STORIES', url: 'https://www.youtube.com/watch?v=success1' },
    { name: 'ITA PARTNERSHIP TV', url: 'https://www.youtube.com/watch?v=partner1' }
  ];

  return (
    <div style={{ background: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <header style={{ padding: '20px', textAlign: 'center', background: '#d4af37', color: '#000' }}>
        <h1>🎓 IT INTERNATIONAL ACADEMY TV</h1>
      </header>

      <div style={{ padding: '10px' }}>
        <div style={{ position: 'relative', paddingTop: '56.25%', border: '2px solid #d4af37' }}>
          <ReactPlayer 
            url={currentVideo} 
            playing={true} 
            controls={true} 
            width="100%" 
            height="100%" 
            style={{ position: 'absolute', top: 0, left: 0 }} 
          />
        </div>
        
        <h2 style={{ color: '#d4af37' }}>Now Playing: {channelName}</h2>

        <div style={{ marginTop: '20px' }}>
          <h3>SELECT CHANNEL:</h3>
          {channels.map((ch) => (
            <button 
              key={ch.name}
              onClick={() => { setCurrentVideo(ch.url); setChannelName(ch.name); }}
              style={{
                display: 'block', width: '100%', padding: '15px', margin: '5px 0',
                background: channelName === ch.name ? '#d4af37' : '#222',
                color: channelName === ch.name ? '#000' : '#fff',
                border: 'none', borderRadius: '5px', fontWeight: 'bold'
              }}
            >
              📺 {ch.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
