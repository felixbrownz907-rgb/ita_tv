
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { initializeApp } from "firebase/app";
import { getFirestore, doc, onSnapshot } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCMTsYMsXuH55f18tKDL9gSk_h_UjKPjwU",
  authDomain: "ita-tv-db475.firebaseapp.com",
  projectId: "ita-tv-db475",
  storageBucket: "ita-tv-db475.firebasestorage.app",
  messagingSenderId: "745163337566",
  appId: "1:745163337566:web:2bb85775e8dcc1ee9ca9cf",
  measurementId: "G-2DM4BZTSSQ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const AcademyApp = () => {
  const [broadcast, setBroadcast] = useState({ title: "Connecting to ITA-TV...", videoId: "dQw4w9WgXcQ" });

  useEffect(() => {
    // This listens for your manual updates in Firebase
    const unsub = onSnapshot(doc(db, "station", "live"), (doc) => {
      if (doc.exists()) {
        setBroadcast(doc.data());
      }
    });
    return () => unsub();
  }, []);
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      controls: 0,          // Hides the play bar
      modestbranding: 1,    // Hides the YouTube logo
      rel: 0,               // No suggested videos
      showinfo: 0,
      iv_load_policy: 3,    // No pop-ups
      disablekb: 1          // No keyboard shortcuts
    },
  };

   return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', background: '#000', overflow: 'hidden' }}>
      {/* CLICK SHIELD: This stops people from clicking the video to go to YouTube */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 10 }}></div>
      
      {/* STATION HEADER */}
      <div style={{ position: 'absolute', top: 0, width: '100%', padding: '12px', background: 'rgba(0,0,0,0.85)', color: 'white', zIndex: 20, textAlign: 'center', borderBottom: '2px solid red' }}>
        <p style={{ margin: 0, fontWeight: 'bold', fontSize: '1rem' }}>ITA ACADEMY TV | LIVE</p>
      </div>

      <div style={{ width: '100%', height: '100%' }}>
        {broadcast.videoId && (
          <YouTube videoId={broadcast.videoId} opts={opts} style={{ height: '100%', width: '100%' }} />
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

