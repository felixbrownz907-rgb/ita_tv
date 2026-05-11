import React from 'react'
import ReactDOM from 'react-dom/client'

const AcademyApp = () => {
  const contactWhatsApp = () => {
    // Replace with your actual number
    window.location.href = "https://wa.me/260770000000?text=Hello%20Felix,%20I%20am%20interested%20in%20the%20IT%20Academy%20Intake.";
  };

  return (
    <div style={{ backgroundColor: '#0f172a', color: 'white', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <nav style={{ padding: '20px', borderBottom: '1px solid #1e293b', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ margin: 0, color: '#38bdf8' }}>ITA-TV</h2>
        <div>
          <span style={{ marginLeft: '15px', fontSize: '0.8rem' }}>Intakes</span>
          <span style={{ marginLeft: '15px', fontSize: '0.8rem' }}>Marketing</span>
        </div>
      </nav>

      <main style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ backgroundColor: '#1e293b', borderRadius: '12px', padding: '30px', textAlign: 'center', marginBottom: '20px' }}>
          <h1 style={{ fontSize: '1.5rem', marginBottom: '5px' }}>IT Education Hub</h1>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Practical Technical Training & Professional Marketing.</p>
        </div>

        {/* Bursary & Intake Hub */}
        <h3 style={{ borderLeft: '4px solid #38bdf8', paddingLeft: '10px', fontSize: '1.1rem' }}>Bursary & Intake Hub</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '15px', marginBottom: '25px' }}>
          <div style={{ backgroundColor: '#1e293b', padding: '15px', borderRadius: '8px', border: '1px solid #334155' }}>
            <h4 style={{ margin: '0 0 5px 0', color: '#38bdf8' }}>Current Intakes</h4>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#cbd5e1' }}>Sunningdale & Rockview University applications now being processed.</p>
          </div>
        </div>

        {/* Marketing Gallery Placeholder */}
        <h3 style={{ borderLeft: '4px solid #38bdf8', paddingLeft: '10px', fontSize: '1.1rem' }}>Marketing Showcase</h3>
        <div style={{ height: '150px', backgroundColor: '#1e293b', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px dashed #334155', marginBottom: '30px' }}>
           <p style={{ color: '#64748b', fontSize: '0.85rem' }}>[ Gallery: Promotional Fliers & Posters ]</p>
        </div>

        <button 
          onClick={contactWhatsApp}
          style={{ width: '100%', backgroundColor: '#22c55e', color: 'white', border: 'none', padding: '15px', borderRadius: '8px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' }}
        >
          Enquire via WhatsApp
        </button>
      </main>

      <footer style={{ textAlign: 'center', padding: '40px', color: '#64748b', fontSize: '0.75rem' }}>
        © 2026 IT International Academy TV | Admin: Felix Chisenga
      </footer>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AcademyApp />
  </React.StrictMode>
)
