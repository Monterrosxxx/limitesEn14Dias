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
import imgClaudiaMario from '../exerciseImages/imgClaudiaMario.jpg';

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
    { 
      literal: 'A', 
      imagen: imgA, 
      grafica: graficaEjercicioA,
      descripcion: {
        title: "🔍 Explicación del Proceso - Ejercicio A",
        content: [
          "Para resolver el límite, se aplicó el principio de sustitución directa. Este método es válido porque la función es continua en el punto al que tiende x (es decir, x=4), y el denominador no se convierte en cero al sustituir el valor.",
          "1️⃣ Se reemplazó cada x en la función por el número 4.",
          "2️⃣ Se realizaron las operaciones aritméticas tanto en el numerador como en el denominador.",
          "3️⃣ En el numerador: 2(4) + 1 = 8 + 1 = 9.",
          "4️⃣ En el denominador: √4 + 2 = 2 + 2 = 4.",
          "5️⃣ El resultado final es la fracción 9/4."
        ]
      }
    },
    { 
      literal: 'B', 
      imagen: imgB, 
      grafica: graficaEjercicioB,
      descripcion: {
        title: "🎯 Explicación del Proceso - Ejercicio B",
        content: [
          "1️⃣ Inicialmente, se intentó resolver el límite por sustitución directa, lo que resultó en la forma indeterminada 0/0. Esto indica que se debe simplificar la función para encontrar el límite.",
          "2️⃣ Para eliminar la indeterminación, se procedió a factorizar tanto el numerador como el denominador.",
          "3️⃣ En el numerador, primero se extrajo el factor común 2, y luego se factorizó la diferencia de cubos (x³ - 27).",
          "4️⃣ En el denominador, se factorizó la diferencia de cuadrados (x² - 9).",
          "5️⃣ Se canceló el término común (x - 3) que causaba la indeterminación en el numerador y el denominador.",
          "6️⃣ Finalmente, se aplicó la sustitución directa en la expresión ya simplificada, reemplazando x por 3, lo que dio como resultado final 9. ✅"
        ]
      }
    },
    { 
      literal: 'C', 
      imagen: imgC, 
      grafica: graficaEjercicioC,
      descripcion: {
        title: "📐 Explicación del Proceso - Ejercicio C",
        content: [
          "1️⃣ Al evaluar el límite por sustitución directa, se obtiene la forma indeterminada 0/0. 🚫",
          "2️⃣ Para resolver la indeterminación, se utiliza la técnica de racionalización. Se multiplica el numerador y el denominador por el conjugado del denominador, que es (1+√(x+1)).",
          "3️⃣ Al multiplicar los denominadores, se obtiene una diferencia de cuadrados que se simplifica a -x.",
          "4️⃣ Esto permite cancelar el factor (-x) que aparece tanto en el numerador como en el denominador, el cual era la causa de la indeterminación.",
          "5️⃣ Con la expresión simplificada 1+√(x+1), se vuelve a aplicar la sustitución directa con x=0, lo que da como resultado 1+1=2. ✅"
        ]
      }
    },
    { 
      literal: 'D', 
      imagen: imgD, 
      grafica: graficaEjercicioD,
      descripcion: {
        title: "🔧 Explicación del Proceso - Ejercicio D",
        content: [
          "1️⃣ El límite se evaluó primero por sustitución directa, reemplazando la x por 2. Esto llevó a la forma indeterminada 0/0, lo que significa que se necesita simplificar la expresión. 🚫",
          "2️⃣ Para resolver la indeterminación, se aplicó la técnica de racionalización, multiplicando el numerador y el denominador por el conjugado del denominador, que es (3+√(x²+5)).",
          "3️⃣ Al multiplicar los denominadores se obtiene una diferencia de cuadrados: (3)² - (√(x²+5))², que se simplifica a 9 - (x²+5) = 4 - x².",
          "4️⃣ Esto permitió cancelar el factor común (4-x²) del numerador y del denominador, eliminando así la indeterminación.",
          "5️⃣ Finalmente, se aplicó la sustitución directa a la expresión simplificada (3+√(x²+5)), dando como resultado 3+3=6. ✅"
        ]
      }
    },
    { 
      literal: 'E', 
      imagen: imgE, 
      grafica: graficaEjercicioE,
      descripcion: {
        title: "🎲 Explicación del Proceso - Ejercicio E",
        content: [
          "1️⃣ Para resolver este límite, se utilizaron las propiedades de los límites y el método de sustitución directa.",
          "2️⃣ Primero, se evaluó el límite de la base de la potencia, ya que la función es continua en x=2 (el denominador no se hace cero). Se sustituyó la x por 2 en la fracción (x-1)/(2x-5).",
          "3️⃣ La sustitución dio como resultado (2-1)/(4-5) = 1/(-1) = -1.",
          "4️⃣ Finalmente, este resultado se eleva a la potencia indicada en el límite, que es 3. El cálculo es (-1)³ = -1, lo que da la respuesta final. ✅"
        ]
      }
    },
    { 
      literal: 'F', 
      imagen: imgF, 
      grafica: graficaEjercicioF,
      descripcion: {
        title: "⚙️ Explicación del Proceso - Ejercicio F",
        content: [
          "1️⃣ Al intentar resolver el límite por sustitución directa, se llega a la forma indeterminada 0/0. 🚫",
          "2️⃣ Para resolver la indeterminación, se procede a factorizar el polinomio del numerador y del denominador.",
          "3️⃣ El numerador (x²+x-6) se factoriza como (x+3)(x-2).",
          "4️⃣ El denominador (x²-4), una diferencia de cuadrados, se factoriza como (x-2)(x+2).",
          "5️⃣ Se cancela el factor común (x-2) que causaba la indeterminación.",
          "6️⃣ Finalmente, se aplica la sustitución directa en la expresión simplificada (x+3)/(x+2), lo que da el resultado final de 5/4. ✅"
        ]
      }
    },
    { 
      literal: 'G', 
      imagen: imgG, 
      grafica: graficaEjercicioG,
      descripcion: {
        title: "🌟 Explicación del Proceso - Ejercicio G",
        content: [
          "1️⃣ El cálculo del límite por sustitución directa da como resultado la forma indeterminada 0/0. 🚫",
          "2️⃣ Para resolverlo, se racionaliza el numerador, multiplicando arriba y abajo por su conjugado, que es (√(12+4x)+√12).",
          "3️⃣ Esta operación simplifica el numerador a (12+4x) - 12 = 4x.",
          "4️⃣ Se cancela la x del numerador con la x del denominador, eliminando así la indeterminación.",
          "5️⃣ En la expresión resultante, 4/(√(12+4x)+√12), se sustituye x por 0, quedando 4/(√12+√12).",
          "6️⃣ Esto se simplifica a 4/(2√12) o 4/(4√3), que es igual a 1/√3.",
          "7️⃣ Finalmente, se racionaliza este último resultado para obtener la respuesta final de √3/3. ✅"
        ]
      }
    },
    { 
      literal: 'H', 
      imagen: imgH, 
      grafica: graficaEjercicioH,
      descripcion: {
        title: "🎪 Explicación del Proceso - Ejercicio H",
        content: [
          "1️⃣ Al intentar resolver el límite por sustitución directa, se obtiene la forma indeterminada 0/0. 🚫",
          "2️⃣ Para eliminar la indeterminación, se racionaliza la expresión multiplicando el numerador y el denominador por el conjugado del denominador, que es (3+√(x²-16)).",
          "3️⃣ Al realizar la multiplicación en el denominador, se obtiene una diferencia de cuadrados que se simplifica a 9 - (x² - 16) = 25 - x².",
          "4️⃣ Esto permite cancelar el factor común (25-x²) tanto en el numerador como en el denominador.",
          "5️⃣ Finalmente, se aplica la sustitución directa en la expresión ya simplificada, 3+√(x²-16), lo que da como resultado 3+3=6. ✅"
        ]
      }
    }
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
                  
                  {/* Descripción del ejercicio */}
                  <div className="description-container">
                    <h4 className="description-title">{ejercicio.descripcion.title}</h4>
                    <div className="description-content">
                      {ejercicio.descripcion.content.map((paragraph, idx) => (
                        <p key={idx} className="description-paragraph">
                          {paragraph}
                        </p>
                      ))}
                    </div>
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

        {/* Ejercicio Mario y Claudia */}
        <section className="exercise-section">
          <h2 className="section-title">
            <span className="section-number">5</span>
            Ejercicio Mario y Claudia
          </h2>
          
          <div className="exercise-content">
            <div className="analytical-exercise mario-claudia-exercise">
              <h3 className="exercise-label">🎭 Ejercicio Especial - Mario y Claudia</h3>
              
              <div className="exercise-images">
                <div className="resolution-container">
                  <h4>Resolución:</h4>
                  <img 
                    src={imgClaudiaMario} 
                    alt="Resolución del Ejercicio Mario y Claudia" 
                    className="resolution-image" 
                  />
                </div>
                
                {/* Descripción del ejercicio Mario y Claudia */}
                <div className="description-container">
                  <h4 className="description-title">🎪 Explicación del Proceso - Ejercicio Mario y Claudia</h4>
                  <div className="description-content">
                    <p className="description-paragraph">
                      Este ejercicio resuelve el límite de la función v(t) cuando t tiende a 1.
                    </p>
                    <p className="description-paragraph">
                      1️⃣ La sustitución directa de t=1 en la función original daría la forma indeterminada 0/0. 🚫
                    </p>
                    <p className="description-paragraph">
                      2️⃣ Para resolver la indeterminación, se racionaliza el numerador, multiplicando la parte de arriba y la de abajo de la fracción por el conjugado del numerador, que es (√(t+3)+2).
                    </p>
                    <p className="description-paragraph">
                      3️⃣ Al hacer esto, el numerador se simplifica a (t+3)-4, que es igual a (t-1).
                    </p>
                    <p className="description-paragraph">
                      4️⃣ Esto permite cancelar el factor (t-1) que se encuentra tanto en el numerador como en el denominador, eliminando así la indeterminación.
                    </p>
                    <p className="description-paragraph">
                      5️⃣ Finalmente, se sustituye t=1 en la expresión simplificada, 1/(√(t+3)+2), lo que da como resultado 1/4. ✅
                    </p>
                  </div>
                </div>
              </div>
            </div>
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