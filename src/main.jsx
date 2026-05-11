import React from 'react'
import ReactDOM from 'react-dom/client'

const AcademyApp = () => {
  const contactWhatsApp = () => {
    const myNumber = "260779417675"; 
    const message = encodeURIComponent("Hello ITA-TV, I am interested in joining the IT International Academy.");
    window.location.href = "https://wa.me/" + myNumber + "?text=" + message;
  };

  return (
    <div style={{ backgroundColor: '#0f172a', color: 'white', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <nav style={{ padding: '20px', borderBottom: '1px solid #1e293b', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ margin: 0, color: '#38bdf8' }}>ITA-TV</h2>
        <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>IT International Academy</div>
      </nav>

      <main style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ backgroundColor: '#1e293b', borderRadius: '12px', padding: '30px', textAlign: 'center', marginBottom: '20px' }}>
          <h1 style={{ fontSize: '1.5rem', marginBottom: '5px' }}>IT International Academy</h1>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Independence through Practical Technical Skills.</p>
        </div>

        <h3 style={{ borderLeft: '4px solid #38bdf8', paddingLeft: '10px', fontSize: '1.1rem' }}>Bursary & Intake Hub</h3>
        <div style={{ backgroundColor: '#1e293b', padding: '15px', borderRadius: '8px', border: '1px solid #334155', marginBottom: '20px' }}>
          <h4 style={{ margin: '0 0 5px 0', color: '#38bdf8' }}>ITA Main Intake - Open</h4>
          <p style={{ margin: 0, fontSize: '0.85rem', color: '#cbd5e1' }}>Direct applications for our technical programs are now being processed.</p>
        </div>

        <div style={{ backgroundColor: '#0f172a', padding: '15px', borderRadius: '8px', border: '1px solid #38bdf8', marginBottom: '25px', textAlign: 'center' }}>
          <p style={{ margin: '0', fontSize: '0.9rem' }}>📞 0779417675 | 0766149405</p>
        </div>

        <h3 style={{ borderLeft: '4px solid #38bdf8', paddingLeft: '10px', fontSize: '1.1rem' }}>Technical Broadcasts</h3>
        <div style={{ height: '100px', backgroundColor: '#1e293b', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px dashed #334155', marginBottom: '30px' }}>
           <p style={{ color: '#64748b', fontSize: '0.85rem' }}>Practical IT Tutorials Coming Soon</p>
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
