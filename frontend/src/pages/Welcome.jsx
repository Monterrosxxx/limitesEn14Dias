import { useState } from 'react';
import '../styles/Welcome.css';

function Welcome({ onNavigate }) {
  const [showModal, setShowModal] = useState(true);
  const [userName, setUserName] = useState('');
  const [showContent, setShowContent] = useState(false);

  const handleNameSubmit = () => {
    if (userName.trim()) {
      setShowModal(false);
      setShowContent(true);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && userName.trim()) {
      handleNameSubmit();
    }
  };

  return (
    <div className="welcome-container">
      {/* Modal de bienvenida */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2>🎓 Bienvenido al Blog de Límites</h2>
              <p>Descubre el fascinante mundo de los límites matemáticos en 14 días</p>
            </div>
            <div className="modal-body">
              <div className="input-group">
                <label htmlFor="userName">¿Cuál es tu nombre?</label>
                <input
                  type="text"
                  id="userName"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Escribe tu nombre aquí..."
                  className="name-input"
                />
              </div>
              {userName.trim() && (
                <button className="btn-primary" onClick={handleNameSubmit}>
                  ¡Vamos! 🚀
                </button>
              )}
            </div>
            <div className="modal-decoration">
              <div className="math-symbols">
                <span>∞</span>
                <span>∑</span>
                <span>∫</span>
                <span>∂</span>
                <span>π</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contenido principal */}
      {showContent && (
        <div className="main-content">
          <header className="hero-section">
            <div className="hero-background">
              <div className="floating-equations">
                <span className="equation eq1">lim(x→0) sin(x)/x = 1</span>
                <span className="equation eq2">lim(x→∞) (1+1/x)^x = e</span>
                <span className="equation eq3">lim(x→a) f(x) = L</span>
                <span className="equation eq4">f'(x) = lim(h→0) [f(x+h)-f(x)]/h</span>
              </div>
              <div className="hero-content">
                <h1 className="main-title">
                  Hola, <span className="user-name">{userName}</span>! 👋
                </h1>
                <h2 className="subtitle">
                  Límites Matemáticos en 14 Días
                </h2>
                <p className="description">
                  Explora el fascinante mundo de los límites a través de ejercicios detallados,
                  gráficas interactivas de GeoGebra y análisis profundos.
                </p>
              </div>
            </div>
          </header>

          <section className="features-section">
            <div className="container">
              <h3 className="section-title">¿Qué encontrarás aquí?</h3>
              <div className="features-grid">
                <div className="feature-card">
                  <div className="feature-icon">📊</div>
                  <h4>Análisis Gráfico</h4>
                  <p>Visualiza el comportamiento de funciones y sus límites con gráficas interactivas de GeoGebra</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">📋</div>
                  <h4>Métodos de Tabulación</h4>
                  <p>Comprende los límites a través de tablas de valores y aproximaciones numéricas</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">🔢</div>
                  <h4>Forma Analítica</h4>
                  <p>Domina las técnicas algebraicas para resolver límites de manera precisa</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">🎯</div>
                  <h4>Ejercicios Detallados</h4>
                  <p>Resuelve problemas paso a paso con explicaciones claras y metodológicas</p>
                </div>
              </div>
            </div>
          </section>

          <section className="journey-section">
            <div className="container">
              <h3 className="section-title">Tu Viaje de Aprendizaje</h3>
              <div className="journey-timeline">
                <div className="timeline-item">
                  <div className="timeline-marker">1</div>
                  <div className="timeline-content">
                    <h4>Fundamentos</h4>
                    <p>Conceptos básicos y definición formal de límites</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker">2</div>
                  <div className="timeline-content">
                    <h4>Técnicas</h4>
                    <p>Métodos algebraicos y propiedades de los límites</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker">3</div>
                  <div className="timeline-content">
                    <h4>Aplicaciones</h4>
                    <p>Límites infinitos, al infinito y aplicaciones avanzadas</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="cta-section">
            <div className="container">
              <div className="cta-content">
                <h3>¿Listo para comenzar tu aventura matemática?</h3>
                <p>Sumérgete en 14 días de aprendizaje intensivo sobre límites matemáticos</p>
                <button className="btn-cta" onClick={() => onNavigate && onNavigate('home')}>
                  🚀 Ir a los Ejercicios
                </button>
              </div>
              <div className="cta-decoration">
                <div className="math-graph">
                  <svg viewBox="0 0 200 100" className="limit-graph">
                    <defs>
                      <linearGradient id="graphGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#667eea" />
                        <stop offset="100%" stopColor="#764ba2" />
                      </linearGradient>
                    </defs>
                    <path d="M 10 80 Q 50 20 100 50 T 190 30" 
                          fill="none" 
                          stroke="url(#graphGradient)" 
                          strokeWidth="3" 
                          className="graph-curve" />
                    <circle cx="100" cy="50" r="4" fill="#ff6b6b" className="limit-point" />
                    <text x="105" y="45" fontSize="8" fill="#333">L</text>
                  </svg>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export default Welcome;