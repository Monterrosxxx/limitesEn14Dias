import React from 'react';

function Home({ onNavigate }) {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>
        📚 Ejercicios de Límites
      </h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '600px' }}>
        Aquí irán todos los ejercicios de límites matemáticos con sus respectivas 
        gráficas de GeoGebra y análisis detallados.
      </p>
      
      <div style={{ 
        background: 'rgba(255, 255, 255, 0.1)',
        padding: '2rem',
        borderRadius: '15px',
        marginBottom: '2rem',
        backdropFilter: 'blur(10px)'
      }}>
        <h3>🚧 Próximamente...</h3>
        <p>Esta sección estará disponible muy pronto con contenido increíble</p>
      </div>

      <button 
        onClick={() => onNavigate && onNavigate('welcome')}
        style={{
          background: 'linear-gradient(135deg, #ff6b6b, #ee5a24)',
          color: 'white',
          border: 'none',
          borderRadius: '50px',
          padding: '1rem 2rem',
          fontSize: '1.1rem',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          boxShadow: '0 10px 30px rgba(255, 107, 107, 0.3)'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'translateY(-3px)';
          e.target.style.boxShadow = '0 15px 40px rgba(255, 107, 107, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 10px 30px rgba(255, 107, 107, 0.3)';
        }}
      >
        ← Volver al Inicio
      </button>
    </div>
  );
}

export default Home;