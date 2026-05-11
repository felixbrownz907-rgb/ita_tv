import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import YouTube from 'react-youtube';
import { db } from './firebase';
import { doc, onSnapshot } from 'firebase/firestore';

const AcademyApp = () => {
  const [broadcast, setBroadcast] = useState({ title: "ITA ACADEMY TV", videoId: "" });

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "station", "live"), (doc) => {
      if (doc.exists()) setBroadcast(doc.data());
    });
    return () => unsub();
  }, []);

  const opts = {
    height: '220', // This height stops the "abnormal" stretching
    width: '100%',
    playerVars: { autoplay: 1, controls: 1, muted: 1, playsinline: 1 }
  };

  return (
    <div style={{ background: '#111', minHeight: '100vh', color: 'white', fontFamily: 'sans-serif' }}>
      
      {/* 1. SYSTEM HEADER */}
      <div style={{ background: 'red', padding: '15px', textAlign: 'center', fontWeight: 'bold' }}>
        🎓 IT INTERNATIONAL ACADEMY TV
      </div>

      {/* 2. THE TV SCREEN (Standard Size) */}
      <div style={{ width: '100%', background: '#000' }}>
        {broadcast.videoId ? (
          <YouTube videoId={broadcast.videoId} opts={opts} />
        ) : (
          <div style={{ height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            Connecting to Live Stream...
          </div>
        )}
      </div>

      {/* 3. CHANNEL SELECTOR (From your System Plan) */}
      <div style={{ padding: '20px' }}>
        <p style={{ fontSize: '12px', color: '#888', marginBottom: '10px' }}>TV CHANNELS:</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <button style={btnStyle}>📺 LIVE NEWS</button>
          <button style={btnStyle}>📚 ACADEMY TV</button>
          <button style={btnStyle}>📈 MARKETING</button>
          <button style={btnStyle}>🔥 SUCCESS</button>
        </div>
      </div>

      {/* 4. ADMIN SECTION */}
      <div style={{ marginTop: '20px', padding: '20px', textAlign: 'center', borderTop: '1px solid #222' }}>
        <p style={{ margin: 0, color: '#25D366', fontWeight: 'bold' }}>Admin: Felix Chisenga</p>
        <p style={{ fontSize: '12px', color: '#666' }}>System: Online & Stable</p>
      </div>
    </div>
  );
};

const btnStyle = {
  background: '#222',
  color: 'white',
  border: '1px solid #444',
  padding: '12px',
  borderRadius: '8px',
  fontSize: '12px',
  textAlign: 'left'
};

ReactDOM.createRoot(document.getElementById('root')).render(<AcademyApp />);
