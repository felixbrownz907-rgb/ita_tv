import React, { useEffect, useState, useRef } from 'react';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

// UPDATED WITH YOUR EXACT KEYS FROM 4991.jpg
const firebaseConfig = {
  apiKey: "AIzaSyCMTsYMsXuH55f18tKDL9gSk_h_UjKPjwU",
  authDomain: "ita-tv-db475.firebaseapp.com",
  databaseURL: "https://ita-tv-db475-default-rtdb.firebaseio.com/",
  projectId: "ita-tv-db475",
  storageBucket: "ita-tv-db475.firebasestorage.app",
  messagingSenderId: "745163337566",
  appId: "1:745163337566:web:2bb85775e8dcc1ee9ca9cf",
  measurementId: "G-2DM4BZTS8Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function App() {
  const [videoUrl, setVideoUrl] = useState("");
  const [programTitle, setProgramTitle] = useState("LOADING...");
  const videoRef = useRef(null);

  useEffect(() => {
    // This connects to the 'station' node you created in 4988.jpg
    const stationRef = ref(db, 'station');
    onValue(stationRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setVideoUrl(data.mainVideo);
        setProgramTitle(data.programName || "ITA TV LIVE");
      }
    });
  }, []);

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      }
      
      // Orientation lock for professional training viewing
      if (window.screen.orientation && window.screen.orientation.lock) {
        window.screen.orientation.lock("landscape").catch(err => console.log(err));
      }
    }
  };

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'Arial' }}>
      <header style={{ padding: '15px', borderBottom: '2px solid red', textAlign: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '1.4rem' }}>IT INTERNATIONAL ACADEMY TV</h1>
      </header>

      <div style={{ padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '10px', height: '10px', backgroundColor: 'red', borderRadius: '50%', marginRight: '8px' }}></div>
          <span>{videoUrl ? 'LIVE' : 'CONNECTING...'}</span>
        </div>
        <div style={{ backgroundColor: 'red', padding: '4px 8px', fontWeight: 'bold', borderRadius: '4px' }}>
          {programTitle}
        </div>
      </div>

      <main style={{ padding: '0 10px' }}>
        {videoUrl ? (
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <video 
              ref={videoRef}
              src={videoUrl} 
              controls 
              autoPlay 
              style={{ width: '100%', borderRadius: '8px', border: '1px solid #444' }}
            />
            <button 
              onClick={handleFullscreen}
              style={{ width: '100%', marginTop: '15px', padding: '15px', backgroundColor: '#222', color: 'white', border: '1px solid #444', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}
            >
              ENTER FULLSCREEN (LANDSCAPE)
            </button>
          </div>
        ) : (
          <div style={{ height: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <p>Fetching Latest Broadcast...</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
