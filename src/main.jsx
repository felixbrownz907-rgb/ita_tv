import React from 'react'
import ReactDOM from 'react-dom/client'

const App = () => (
  <div style={{ 
    padding: '40px', 
    textAlign: 'center', 
    backgroundColor: '#1a1a1a', 
    color: 'white', 
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontFamily: 'sans-serif' 
  }}>
    <h1 style={{ color: '#646cff' }}>🚀 ITA-TV is Live!</h1>
    <p style={{ fontSize: '1.2rem' }}>The International Academy TV platform is now connected.</p>
    <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #333', borderRadius: '8px' }}>
       Admin: Felix Chisenga
    </div>
  </div>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
