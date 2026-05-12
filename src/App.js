// Version 2.0 - Permanent Bypass
import React, { useEffect, useState, useRef } from 'react';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCMTsYMsXuH55f18tKDL9gSk_h_UjKPjwU",
  authDomain: "ita-tv-db475.firebaseapp.com",
  databaseURL: "https://ita-tv-db475-default-rtdb.firebaseio.com/",
  projectId: "ita-tv-db475",
  storageBucket: "ita-tv-db475.firebasestorage.app",
  messagingSenderId: "745163337566",
  appId: "1:745163337566:web:2bb85775e8dcc1ee9ca9cf"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function App() {
  const [currentUrl, setCurrentUrl] = useState("");
  const videoRef = useRef(null);

  useEffect(() => {
    // 1. ALWAYS LISTEN FOR THE MAIN VIDEO
    const stationRef = ref(db, 'station');
    onValue(stationRef, (snapshot) => {
      const data = snapshot.val();
      if (data) setCurrentUrl(data.mainVideo);
    });
  }, []);

  // 2. THE LOCK-TO-LANDSCAPE FULLSCREEN TRIGGER
  const handleFullscreen = async () => {
    try {
      if (videoRef.current.requestFullscreen) {
        await videoRef.current.requestFullscreen();
      }
      // Force Landscape orientation
      if (window.screen.orientation && window.screen.orientation.lock) {
        await window.screen.orientation.lock("landscape");
      }
    } catch (err) {
      console.log("Fullscreen/Orientation change requires interaction.");
    }
  };

  return (
    <div style={{ backgroundColor: 'black', height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      {/* 24/7 BRANDING LOGO */}
      <div style={{ position: 'absolute', top: '10px', left: '10px', color: 'red', fontSize: '18px', fontWeight: 'bold', zIndex: 100 }}>
        IT ACADEMY TV
      </div>

      {currentUrl ? (
        <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <video 
            ref={videoRef}
            src={currentUrl} 
            autoPlay 
            loop 
            playsInline
            style={{ width: '100%', maxHeight: '100vh' }}
          />
          {/* OVERLAY BUTTON TO TRIGGER LANDSCAPE */}
          <button 
            onClick={handleFullscreen}
            style={{ position: 'absolute', bottom: '20px', padding: '10px 20px', background: 'rgba(255,0,0,0.7)', color: 'white', border: 'none', borderRadius: '5px', zIndex: 101 }}
          >
            ENTER FULLSCREEN (LANDSCAPE)
          </button>
        </div>
      ) : (
        <div style={{ color: 'white' }}>CONNECTING TO BROADCAST...</div>
      )}
    </div>
  );
}

export default App;

