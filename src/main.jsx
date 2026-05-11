import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import YouTube from 'react-youtube';
import { db } from './firebase';
import { doc, onSnapshot } from 'firebase/firestore';

const AcademyApp = () => {
  const [broadcast, setBroadcast] = useState({ title: "ITA ACADEMY TV | LIVE", videoId: "" });

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "station", "live"), (doc) => {
      if (doc.exists()) {
        setBroadcast(doc.data());
      }
    });
    return () => unsub();
  }, []);

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
      controls: 0,
      muted: 1,
      modestbranding: 1,
      rel: 0,
      playsinline: 1,
      iv_load_policy: 3,
    },
  };

  // This function FORCES the video to play the millisecond it loads
  const onPlayerReady = (event) => {
    event.target.playVideo();
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: '#000', overflow: 'hidden' }}>
      
      {/* 1. THE PLAYER (Bottom Layer) */}
      <div style={{ width: "100%", height: "100%" }}>
        {broadcast.videoId && (
          <YouTube 
            videoId={broadcast.videoId} 
            opts={opts} 
            onReady={onPlayerReady}
            style={{ width: '100%', height: '100%' }} 
          />
        )}
      </div>

      {/* 2. THE SHIELD (Middle Layer - Hides YouTube Sign) */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 10, pointerEvents: 'none' }}></div>
      
      {/* 3. STATION HEADER (Top Layer) */}
      <div style={{ position: 'absolute', top: 0, width: '100%', zIndex: 20, background: 'rgba(0,0,0,0.7)', color: 'white', textAlign: 'center', padding: '8px' }}>
        <p style={{ margin: 0, fontWeight: 'bold', fontSize: '14px' }}>{broadcast.title}</p>
      </div>

    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AcademyApp />
  </React.StrictMode>
);
