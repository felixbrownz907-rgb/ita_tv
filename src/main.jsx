import React from 'react'
import ReactDOM from 'react-dom/client'

const AcademyApp = () => {
  return (
    <div style={{ backgroundColor: '#0f172a', color: 'white', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      {/* Navigation Header */}
      <nav style={{ padding: '20px', borderBottom: '1px solid #1e293b', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ margin: 0, color: '#38bdf8' }}>ITA-TV</h2>
        <div>
          <span style={{ marginLeft: '15px', fontSize: '0.9rem' }}>Courses</span>
          <span style={{ marginLeft: '15px', fontSize: '0.9rem' }}>Live Stream</span>
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ backgroundColor: '#1e293b', borderRadius: '12px', padding: '40px', textAlign: 'center', marginBottom: '30px' }}>
          <h1 style={{ marginBottom: '10px' }}>Welcome to the Future of IT Education</h1>
          <p style={{ color: '#94a3b8' }}>Broadcasting practical technical skills across Zambia.</p>
          <button style={{ backgroundColor: '#38bdf8', color: '#0f172a', border: 'none', padding: '12px 24px', borderRadius: '6px', fontWeight: 'bold', marginTop: '20px' }}>
            Start Learning
          </button>
        </div>

        {/* Video Placeholder Section */}
        <h3>Latest Tech Broadcasts</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
          <div style={{ height: '150px', backgroundColor: '#334155', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span>[ Video Player Placeholder ]</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '40px', color: '#64748b', fontSize: '0.8rem' }}>
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
