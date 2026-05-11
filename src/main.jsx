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
      iv_load_policy: 3,
      loop: 1,
      playsinline: 1,
      disablekb: 1,
    },
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', background: '#000', overflow: 'hidden' }}>
      {/* CLICK SHIELD: This kills the red button and protects the logo */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 10, pointerEvents: 'none' }}></div>
      
      {/* STATION HEADER */}
      <div style={{ position: 'absolute', top: 0, width: '100%', zIndex: 20, background: 'rgba(0,0,0,0.6)', color: 'white', textAlign: 'center', padding: '5px' }}>
        <p style={{ margin: 0, fontWeight: 'bold', fontSize: '14px' }}>{broadcast.title}</p>
      </div>

      <div style={{ width: "100%", height: "100%" }}>
        {broadcast.videoId && (
          <YouTube videoId={broadcast.videoId} opts={opts} style={{ width: '100%', height: '100%' }} />
        )}
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AcademyApp />
  </React.StrictMode>
);
