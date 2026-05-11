import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import YouTube from 'react-youtube';
import { db } from './firebase';
import { doc, onSnapshot } from 'firebase/firestore';

const AcademyApp = () => {
  const [broadcast, setBroadcast] = useState({ title: "ITA ACADEMY TV | LIVE", videoId: "", admin: "Felix Chisenga" });

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "station", "live"), (doc) => {
      if (doc.exists()) {
        setBroadcast(doc.data());
      }
    });
    return () => unsub();
  }, []);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
      controls: 0,
      muted: 1,
      modestbranding: 1,
      rel: 0,
      playsinline: 1,
    },
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', background: '#f0f0f0', minHeight: '100vh', paddingBottom: '50px' }}>
      {/* HEADER */}
      <div style={{ background: '#000', color: '#fff', padding: '15px', textAlign: 'center' }}>
        <h2 style={{ margin: 0, fontSize: '18px' }}>{broadcast.title}</h2>
      </div>

      {/* VIDEO AREA (Normal Size) */}
      <div style={{ width: '100%', maxWidth: '800px', margin: '20px auto', background: '#000' }}>
        {broadcast.videoId && (
          <YouTube videoId={broadcast.videoId} opts={opts} onReady={(e) => e.target.playVideo()} />
        )}
      </div>

      {/* ADMIN & INFO SECTION */}
      <div style={{ padding: '20px', textAlign: 'center', color: '#333' }}>
        <p><strong>Administrator:</strong> {broadcast.admin || "Felix Chisenga"}</p>
        <p style={{ fontSize: '14px', color: '#666' }}>Broadcasting Live from Lusaka, Zambia</p>
      </div>

      {/* WHATSAPP / CONTACT AREA */}
      <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 100 }}>
         {/* This is where your WhatsApp button lives */}
         <div style={{ background: '#25D366', color: 'white', padding: '10px 20px', borderRadius: '50px', fontWeight: 'bold', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>
           Chat on WhatsApp
         </div>
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AcademyApp />
  </React.StrictMode>
);
