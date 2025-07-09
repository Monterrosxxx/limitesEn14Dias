import React from 'react';
import "../styles/Home.css";

// Importar imágenes de ejercicios
import imgEjercicio1 from '../exerciseImages/imgEjercicio1.png';
import imgA from "../exerciseImages/imgA.jpg";
import imgB from '../exerciseImages/imgB.jpg';
import imgC from '../exerciseImages/imgC.jpg';
import imgD from '../exerciseImages/imgD.jpg';
import imgE from '../exerciseImages/imgE.jpg';
import imgF from '../exerciseImages/imgF.jpg';
import imgG from '../exerciseImages/imgG.jpg';
import imgH from '../exerciseImages/imgH.jpg';

// Importar imágenes de GeoGebra
import graficaEjercicio2 from '../geoGeebraImages/graficaEjercicio2.png';
import graficaEjercicio3 from '../geoGeebraImages/graficaEjercicio3.png';
import graficaEjercicioA from '../geoGeebraImages/graficaEjercicioA.png';
import graficaEjercicioB from '../geoGeebraImages/graficaEjercicioB.png';
import graficaEjercicioC from '../geoGeebraImages/graficaEjercicioC.png';
import graficaEjercicioD from '../geoGeebraImages/graficaEjercicioD.png';
import graficaEjercicioE from '../geoGeebraImages/graficaEjercicioE.png';
import graficaEjercicioF from '../geoGeebraImages/graficaEjercicioF.png';
import graficaEjercicioG from '../geoGeebraImages/graficaEjercicioG.png';
import graficaEjercicioH from '../geoGeebraImages/graficaEjercicioH.png';

function Home({ onNavigate }) {
  const ejerciciosAnaliticos = [
    { literal: 'A', imagen: imgA, grafica: graficaEjercicioA },
    { literal: 'B', imagen: imgB, grafica: graficaEjercicioB },
    { literal: 'C', imagen: imgC, grafica: graficaEjercicioC },
    { literal: 'D', imagen: imgD, grafica: graficaEjercicioD },
    { literal: 'E', imagen: imgE, grafica: graficaEjercicioE },
    { literal: 'F', imagen: imgF, grafica: graficaEjercicioF },
    { literal: 'G', imagen: imgG, grafica: graficaEjercicioG },
    { literal: 'H', imagen: imgH, grafica: graficaEjercicioH }
  ];

  return (
    <div className="home-container">
      {/* Header Creativo */}
      <header className="creative-header">
        <div className="header-background">
          <div className="floating-math-symbols">
            <span className="symbol s1">∞</span>
            <span className="symbol s2">∑</span>
            <span className="symbol s3">∫</span>
            <span className="symbol s4">∂</span>
            <span className="symbol s5">π</span>
            <span className="symbol s6">∆</span>
          </div>
          <div className="header-content">
            <h1 className="site-title">
              <span className="title-emoji">📚</span>
              Límites en 14 Días
              <span className="title-emoji">📊</span>
            </h1>
            <div className="student-info">
              <div className="info-card">
                <h3>👨‍🎓 Estudiante:</h3>
                <p className="student-name">Rodrigo Josué Monterrosa Jorge</p>
              </div>
              <div className="info-grid">
                <div className="info-item">
                  <span className="info-label">🔧 Especialidad:</span>
                  <span className="info-value">Desarrollo de Software - Grupo 1</span>
                </div>
                <div className="info-item">
                  <span className="info-label">📋 Sección:</span>
                  <span className="info-value">A - 1</span>
                </div>
                <div className="info-item">
                  <span className="info-label">🏫 Institución:</span>
                  <span className="info-value">Instituto Técnico Ricaldone</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="main-content">
        
        {/* Ejercicio 1 - Análisis Gráfico */}
        <section className="exercise-section">
          <h2 className="section-title">
            <span className="section-number">1</span>
            Análisis Gráfico de Límites
          </h2>
          
          <div className="exercise-content">
            <p className="exercise-description">
              🔍 Observa la <strong>gráfica roja</strong> de la función f(x) y completa cada uno de los límites del recuadro de la derecha:
            </p>
            
            <div className="exercise-layout">
              <div className="graph-container">
                <img src={imgEjercicio1} alt="Gráfica del Ejercicio 1" className="exercise-image" />
              </div>
              
              <div className="limits-table-container">
                <h4 className="table-title">Límites a evaluar:</h4>
                <div className="limits-table">
                  <div className="limit-row">
                    <span className="limit-expression">lim<sub>x→-1⁻</sub> f(x) =</span>
                    <span className="limit-result">2</span>
                  </div>
                  <div className="limit-row">
                    <span className="limit-expression">lim<sub>x→-1⁺</sub> f(x) =</span>
                    <span className="limit-result">3</span>
                  </div>
                  <div className="limit-row">
                    <span className="limit-expression">lim<sub>x→-1</sub> f(x) =</span>
                    <span className="limit-result no-exist">No existe</span>
                  </div>
                  <div className="limit-row">
                    <span className="limit-expression">lim<sub>x→0⁻</sub> f(x) =</span>
                    <span className="limit-result">4</span>
                  </div>
                  <div className="limit-row">
                    <span className="limit-expression">lim<sub>x→0⁺</sub> f(x) =</span>
                    <span className="limit-result">4</span>
                  </div>
                  <div className="limit-row">
                    <span className="limit-expression">lim<sub>x→0</sub> f(x) =</span>
                    <span className="limit-result">4</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ejercicio 2 - GeoGebra */}
        <section className="exercise-section">
          <h2 className="section-title">
            <span className="section-number">2</span>
            Análisis con GeoGebra
          </h2>
          
          <div className="exercise-content">
            <p className="exercise-description">
              📐 Usando el software GeoGebra, grafica la función <code>f(x) = x²/(x-1)</code> y a partir de la gráfica obtenida responde:
            </p>
            
            <div className="exercise-layout">
              <div className="graph-container">
                <img src={graficaEjercicio2} alt="Gráfica del Ejercicio 2" className="exercise-image" />
              </div>
              
              <div className="question-container">
                <h4 className="question-title">
                  ¿Existe el límite de la función cuando x se acerca a uno (x → 1)?
                </h4>
                <div className="answer-box">
                  <h5>Respuesta:</h5>
                  <p>
                    No existe, por que por la izquierda se va para abajo y por la derecha se va para arriba, entonces no es igual.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ejercicio 3 - Método Tabular */}
        <section className="exercise-section">
          <h2 className="section-title">
            <span className="section-number">3</span>
            Método Tabular
          </h2>
          
          <div className="exercise-content">
            <p className="exercise-description">
              📊 Dada la función <code>f(x) = (x² - 4)/(x - 2)</code>, encuentra el límite cuando x tiende a 2 con el método <strong>tabular</strong>, luego grafica la función utilizando GeoGebra.
            </p>
            
            <div className="tabular-layout">
              <div className="tables-container">
                <div className="table-group">
                  <h4>Aproximación por la izquierda (x → 2⁻)</h4>
                  <table className="tabular-table">
                    <tr>
                      <th>x</th>
                      <td>1.9</td>
                      <td>1.99</td>
                      <td>1.999</td>
                      <td>1.99999...</td>
                    </tr>
                    <tr>
                      <th>f(x)</th>
                      <td>3.9</td>
                      <td>3.99</td>
                      <td>3.999</td>
                      <td>3.99999</td>
                    </tr>
                  </table>
                </div>
                
                <div className="table-group">
                  <h4>Aproximación por la derecha (x → 2⁺)</h4>
                  <table className="tabular-table">
                    <tr>
                      <th>x</th>
                      <td>2.1</td>
                      <td>2.01</td>
                      <td>2.001</td>
                      <td>2.00001...</td>
                    </tr>
                    <tr>
                      <th>f(x)</th>
                      <td>4.1</td>
                      <td>4.01</td>
                      <td>4.001</td>
                      <td>4.00001</td>
                    </tr>
                  </table>
                </div>
                
                <div className="conclusion">
                  <h4>Por lo tanto:</h4>
                  <p className="limit-conclusion">
                    lim<sub>x→2</sub> f(x) = <strong>No existe</strong>
                  </p>
                </div>
              </div>
              
              <div className="graph-container">
                <img src={graficaEjercicio3} alt="Gráfica del Ejercicio 3" className="exercise-image" />
              </div>
            </div>
          </div>
        </section>

        {/* Ejercicios Analíticos */}
        <section className="exercise-section analytical-section">
          <h2 className="section-title">
            <span className="section-number">4</span>
            Resolución Analítica de Límites
          </h2>
          
          <div className="analytical-intro">
            <p className="exercise-description">
              🧮 A continuación se presentan ejercicios resueltos de forma analítica junto con sus respectivas gráficas en GeoGebra:
            </p>
          </div>

          <div className="analytical-exercises-grid">
            {ejerciciosAnaliticos.map((ejercicio, index) => (
              <div key={ejercicio.literal} className="analytical-exercise">
                <h3 className="exercise-label">Literal {ejercicio.literal}</h3>
                
                <div className="exercise-images">
                  <div className="resolution-container">
                    <h4>Resolución:</h4>
                    <img 
                      src={ejercicio.imagen} 
                      alt={`Resolución del Ejercicio ${ejercicio.literal}`} 
                      className="resolution-image" 
                    />
                  </div>
                  
                  <div className="graph-container">
                    <h4>Gráfica:</h4>
                    <img 
                      src={ejercicio.grafica} 
                      alt={`Gráfica del Ejercicio ${ejercicio.literal}`} 
                      className="exercise-image" 
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>📚 Límites en 14 Días - Matemática Avanzada</p>
          <p>Instituto Técnico Ricaldone - 2025</p>
        </div>
        <button 
          onClick={() => onNavigate && onNavigate('welcome')}
          className="back-button"
        >
          ← Volver al Inicio
        </button>
      </footer>
    </div>
  );
}

export default Home;