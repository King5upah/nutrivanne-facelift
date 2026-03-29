import './style.css'

document.querySelector('#app').innerHTML = `
  <header class="glass container">
    <div class="nav-content">
      <div class="logo">
        <img src="/logo.jpg" alt="Nutrivanne Logo" style="height: 32px; width: auto; border-radius: 4px;">
        Nutrivanne
      </div>
      <a href="#plans" class="btn btn-primary">Comenzar</a>
    </div>
  </header>

  <main class="container">
    <section class="billboard-hero glass">
      <div class="billboard-image"></div>
      <div class="billboard-content">
        <div class="billboard-tag">Nutrición de Élite</div>
        <h1 class="billboard-title">TRANSFORMA-T</h1>
        <h2 class="billboard-subtitle">Tu estrategia maestra de nutrición y rendimiento</h2>
        <p class="billboard-desc">Un enfoque científico diseñado para tu cuerpo, tu metabolismo y tus objetivos reales.</p>
        
        <ul class="billboard-features">
          <li>Perfil Metabólico</li>
          <li>Macronutrientes Dinámicos</li>
          <li>Entrenamiento de Fuerza</li>
          <li>Bio-Feedback 24/7</li>
        </ul>
        
        <a href="#plans" class="btn btn-gold">INICIAR TRANSFORMACIÓN PRO ↗</a>
        <p style="margin-top: 1.5rem; font-size: 0.875rem; color: var(--text-muted); opacity: 0.8;">Acceso exclusivo a la plataforma personalizada.</p>
      </div>
    </section>

    <section class="assessment-section">
      <h2 style="text-align: center; color: var(--gold); margin-bottom: 0.5rem;">Forja tu Destino</h2>
      <p style="text-align: center; color: var(--text-muted); margin-bottom: 3rem;">Define tus metas para que nuestro motor de IA personalice tu plan.</p>
      
      <div class="assessment-card glass">
        <div class="progress-bar">
          <div class="progress-inner"></div>
        </div>
        
        <form id="assessment-form">
          <div class="form-group">
            <label for="goal">¿Cuál es tu objetivo prioritario?</label>
            <select id="goal" class="form-control" style="background: rgba(0,0,0,0.3); color: white; border-color: var(--glass-border);">
              <option value="weight-loss">Déficit Calórico / Definición</option>
              <option value="muscle-gain">Hipertrofia / Fuerza</option>
              <option value="wellness">Longevidad / Salud</option>
              <option value="energy">Rendimiento Atlético</option>
            </select>
          </div>
          
          <div class="form-group">
            <label for="activity">Volumen de entrenamiento semanal</label>
            <select id="activity" class="form-control" style="background: rgba(0,0,0,0.3); color: white; border-color: var(--glass-border);">
              <option value="sedentary">Bajo (Recuperación activa)</option>
              <option value="moderate">Moderado (3-4 sesiones)</option>
              <option value="active">Intenso (5-6 sesiones)</option>
              <option value="elite">Elite (Dobles sesiones)</option>
            </select>
          </div>

          <button type="button" class="btn btn-primary" style="width: 100%; margin-top: 2rem; font-size: 1.1rem;" onclick="alert('Analizando datos biométricos...')">Generar mi Estrategia ↗</button>
        </form>
      </div>
    </section>

    <section id="plans">
      <h2 style="text-align: center; margin-bottom: 4rem; font-size: 2.5rem;">Niveles de Membresía</h2>
      <div class="plans-grid">
        <!-- Plan Básico -->
        <article class="plan-card glass">
          <h3 style="color: var(--text-muted);">ESSENTIAL</h3>
          <p class="plan-price">$29.99<span style="font-size: 1rem; color: var(--text-muted); font-weight: 400;">/mes</span></p>
          <ul class="plan-features">
            <li>Algoritmo nutricional base</li>
            <li>Monitor de macronutrientes</li>
            <li>Acceso a la academia NutriVane</li>
            <li>Soporte vía tickets</li>
          </ul>
          <button class="btn btn-primary" style="background: transparent; border: 1px solid var(--primary); color: var(--primary);" onclick="alert('Iniciando checkout...')">Seleccionar</button>
        </article>

        <!-- Plan Premium -->
        <article class="plan-card glass" style="border: 1px solid var(--primary); position: relative; overflow: hidden;">
          <div style="background: var(--primary); color: black; padding: 4px 16px; font-size: 0.75rem; font-weight: 800; position: absolute; top: 0; right: 0; border-radius: 0 0 0 12px;">ELITE SELECTION</div>
          <h3 style="color: var(--primary);">OPTIMAL PRO</h3>
          <p class="plan-price">$49.99<span style="font-size: 1rem; color: var(--text-muted); font-weight: 400;">/mes</span></p>
          <ul class="plan-features">
            <li>Todo en el plan Essential</li>
            <li>Consultoría Mensual (1-on-1)</li>
            <li>Recetario Bio-Optimizado</li>
            <li>Seguimiento de Biomarcadores</li>
          </ul>
          <button class="btn btn-primary" onclick="alert('Iniciando checkout...')">Adquirir Ahora ↗</button>
        </article>

        <!-- Plan Elite -->
        <article class="plan-card glass">
          <h3 style="color: var(--gold);">VIP TRANSFORMATION</h3>
          <p class="plan-price">$89.99<span style="font-size: 1rem; color: var(--text-muted); font-weight: 400;">/mes</span></p>
          <ul class="plan-features">
            <li>Todo en el plan Optimal Pro</li>
            <li>Sesiones de Mastermind</li>
            <li>Plan de Entrenamiento Avanzado</li>
            <li>Análisis Genético y Metabólico</li>
          </ul>
          <button class="btn btn-gold" onclick="alert('Iniciando checkout...')">Obtener Acceso VIP ↗</button>
        </article>
      </div>
    </section>
  </main>

  <footer style="margin-top: 8rem; padding: 4rem 0; text-align: center; border-top: 1px solid var(--glass-border);">
    <div class="logo" style="justify-content: center; margin-bottom: 1.5rem;">
      <img src="/logo.jpg" alt="Nutrivanne Logo" style="height: 24px; width: auto; opacity: 0.7;">
      <span style="opacity: 0.7;">Nutrivanne</span>
    </div>
    <p style="color: var(--text-muted); font-size: 0.875rem;">&copy; 2026 Nutrivanne. Precision Nutrition & Peak Performance.</p>
  </footer>
`;
