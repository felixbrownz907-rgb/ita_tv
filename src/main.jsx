import React from 'react'
import ReactDOM from 'react-dom/client'

const AcademyApp = () => {
  return (
    <div style={{ backgroundColor: '#0f172a', color: 'white', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <nav style={{ padding: '20px', borderBottom: '1px solid #1e293b', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ margin: 0, color: '#38bdf8' }}>ITA-TV</h2>
        <div>
          <span style={{ marginLeft: '15px', fontSize: '0.8rem' }}>Intakes</span>
          <span style={{ marginLeft: '15px', fontSize: '0.8rem' }}>Bursaries</span>
        </div>
      </nav>

      <main style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ backgroundColor: '#1e293b', borderRadius: '12px', padding: '30px', textAlign: 'center', marginBottom: '20px' }}>
          <h1 style={{ fontSize: '1.5rem' }}>Future of IT Education</h1>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Practical technical skills for Zambia's digital economy.</p>
        </div>

        {/* New Bursary & Intake Hub */}
        <h3 style={{ borderLeft: '4px solid #38bdf8', paddingLeft: '10px' }}>Bursary & Intake Hub</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '15px', marginBottom: '30px' }}>
          <div style={{ backgroundColor: '#1e293b', padding: '15px', borderRadius: '8px', border: '1px solid #334155' }}>
            <h4 style={{ margin: '0 0 5px 0', color: '#38bdf8' }}>July Intake - Open</h4>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#cbd5e1' }}>Apply now for technical diplomas and certifications.</p>
          </div>
          <div style={{ backgroundColor: '#1e293b', padding: '15px', borderRadius: '8px', border: '1px solid #334155' }}>
            <h4 style={{ margin: '0 0 5px 0', color: '#38bdf8' }}>Bursary Opportunities</h4>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#cbd5e1' }}>Partial bursaries available for eligible IT candidates.</p>
          </div>
        </div>

        <button style={{ width: '100%', backgroundColor: '#38bdf8', color: '#0f172a', border: 'none', padding: '15px', borderRadius: '8px', fontWeight: 'bold' }}>
          Enquire via WhatsApp
        </button>
      </main>

      <footer style={{ textAlign: 'center', padding: '40px', color: '#64748b', fontSize: '0.75rem' }}>
        © 2026 IT International Academy TV
      </footer>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AcademyApp />
  </React.StrictMode>
)
