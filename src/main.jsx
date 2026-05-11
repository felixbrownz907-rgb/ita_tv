import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'

const AcademyApp = () => {
  const [currentProgram, setCurrentProgram] = useState({ title: "Loading...", id: "" });

  useEffect(() => {
    const checkSchedule = () => {
      const hour = new Date().getHours();
      if (hour >= 8 && hour < 12) setCurrentProgram({ title: "Morning Technical Lab", id: "3Gxnd_OpxH8" });
      else if (hour >= 12 && hour < 14) setCurrentProgram({ title: "Mid-Day Tech News", id: "7W-p0E_Lp3Q" });
      else if (hour >= 14 && hour < 18) setCurrentProgram({ title: "Afternoon Practical Session", id: "dQw4w9WgXcQ" });
      else setCurrentProgram({ title: "ITA-TV Night Broadcast", id: "5qap5aO4i9A" });
    };
    checkSchedule();
    const interval = setInterval(checkSchedule, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ backgroundColor: '#0f172a', color: 'white', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <nav style={{ padding: '20px', borderBottom: '1px solid #1e293b', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, backgroundColor: '#0f172a', zIndex: 100 }}>
        <h2 style={{ margin: 0, color: '#38bdf8' }}>ITA-TV <span style={{ color: '#ef4444', fontSize: '0.7rem' }}>● LIVE</span></h2>
      </nav>

      <main style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        {/* TV SECTION */}
        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ margin: '0 0 10px 0', fontSize: '0.9rem', color: '#38bdf8' }}>Now Playing: {currentProgram.title}</h3>
          <div style={{ width: '100%', aspectRatio: '16/9', backgroundColor: '#000', borderRadius: '12px', overflow: 'hidden', border: '1px solid #334155' }}>
            <iframe width="100%" height="100%" src={"https://www.youtube.com/embed/" + currentProgram.id + "?autoplay=1&mute=0"} frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>

        {/* ABOUT US SECTION */}
        <section style={{ marginBottom: '40px' }}>
          <h3 style={{ borderLeft: '4px solid #38bdf8', paddingLeft: '10px' }}>About IT International Academy</h3>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.6' }}>
            We are Zambia's premier digital education platform, focused on delivering <strong>practical</strong> technical training in networking, cybersecurity, and AI. Our mission is to bridge the gap between theory and real-world application.
          </p>
        </section>

        {/* MARKETING GALLERY SECTION */}
        <section style={{ marginBottom: '40px' }}>
          <h3 style={{ borderLeft: '4px solid #38bdf8', paddingLeft: '10px' }}>Marketing & Design Showcase</h3>
          <div style={{ display: 'flex', overflowX: 'auto', gap: '15px', paddingBottom: '10px' }}>
            <div style={{ minWidth: '200px', height: '250px', backgroundColor: '#1e293b', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #334155' }}>
              <span style={{ color: '#64748b', fontSize: '0.8rem' }}>Intake Flyer</span>
            </div>
            <div style={{ minWidth: '200px', height: '250px', backgroundColor: '#1e293b', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #334155' }}>
              <span style={{ color: '#64748b', fontSize: '0.8rem' }}>Bursary Poster</span>
            </div>
          </div>
        </section>

        {/* CTA BUTTON */}
        <button onClick={() => window.location.href="https://wa.me/260779417675"} style={{ width: '100%', backgroundColor: '#22c55e', color: 'white', border: 'none', padding: '18px', borderRadius: '8px', fontWeight: 'bold', fontSize: '1rem' }}>
          Enquire via WhatsApp
        </button>
      </main>

      <footer style={{ textAlign: 'center', padding: '40px', color: '#64748b', fontSize: '0.75rem' }}>
        © 2026 IT International Academy TV | Admin: Felix Chisenga
      </footer>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode><AcademyApp /></React.StrictMode>)
