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

  return (
    <div style={{ backgroundColor: '#0f172a', color: 'white', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <nav style={{ padding: '20px', borderBottom: '1px solid #1e293b', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ margin: 0, color: '#38bdf8' }}>ITA-TV <span style={{ color: '#ef4444', fontSize: '0.7rem' }}>● LIVE</span></h2>
      </nav>

      <main style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ margin: '0 0 10px 0', fontSize: '0.9rem', color: '#38bdf8' }}>{broadcast.title}</h3>
          <div style={{ width: '100%', aspectRatio: '16/9', backgroundColor: '#000', borderRadius: '12px', overflow: 'hidden', border: '1px solid #334155' }}>
            <iframe 
              width="100%" height="100%" 
              src={"https://www.youtube.com/embed/" + broadcast.videoId + "?autoplay=1&mute=0"} 
              title="ITA-TV Broadcast" frameBorder="0" allowFullScreen>
            </iframe>
          </div>
        </div>

        <section style={{ marginBottom: '30px' }}>
          <h3 style={{ borderLeft: '4px solid #38bdf8', paddingLeft: '10px' }}>About ITA-TV</h3>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Practical Technical Skills. Broadcast 24/7.</p>
        </section>

        <button onClick={() => window.location.href="https://wa.me/260779417675"} style={{ width: '100%', backgroundColor: '#22c55e', color: 'white', border: 'none', padding: '18px', borderRadius: '8px', fontWeight: 'bold' }}>
          Enquire via WhatsApp
        </button>
      </main>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode><AcademyApp /></React.StrictMode>)
