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
    height: '220', // Fixed height to stop the "Abnormal" stretching
    width: '100%',
    playerVars: { autoplay: 1, controls: 1, muted: 1, playsinline: 1 }
  };

  return (
    <div style={{ background: '#111', minHeight: '100vh', color: 'white', fontFamily: 'sans-serif' }}>
      
      {/* 1. TOP NAVIGATION (From your Plan) */}
      <div style={{ background: 'red', padding: '10px', textAlign: 'center', fontWeight: 'bold', fontSize: '14px' }}>
        🎓 IT INTERNATIONAL ACADEMY TV
      </div>

      {/* 2. THE TV SCREEN (Fixed Layout) */}
      <div style={{ width: '100%', background: '#000', borderTop: '1px solid #333', borderBottom: '1px solid #333' }}>
        {broadcast.videoId ? (
          <YouTube videoId={broadcast.videoId} opts={opts} />
        ) : (
          <div style={{ height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            Broadcasting...
          </div>
        )}
      </div>

      {/* 3. CHANNEL SELECTOR (Part 2 of your Plan) */}
      <div style={{ padding: '15px' }}>
        <p style={{ fontSize: '12px', color: '#888', marginBottom: '10px' }}>SELECT CHANNEL:</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <button style={btnStyle}>📺 ITA LIVE NEWS</button>
          <button style={btnStyle}>📚 ACADEMY TV</button>
          <button style={btnStyle}>📈 MARKETING TV</button>
          <button style={btnStyle}>🔥 SUCCESS STORIES</button>
        </div>
      </div>

      {/* 4. ADMIN FOOTER */}
      <div style={{ marginTop: 'auto', padding: '20px', textAlign: 'center', borderTop: '1px solid #222' }}>
        <p style={{ margin: 0, fontSize: '14px', color: '#25D366' }}>● LIVE | Admin: Felix Chisenga</p>
      </div>
    </div>
  );
};

const btnStyle = {
  background: '#222',
  color: 'white',
  border: '1px solid #444',
  padding: '10px',
  borderRadius: '5px',
  fontSize: '11px',
  textAlign: 'left'
};

ReactDOM.createRoot(document.getElementById('root')).render(<AcademyApp />);
