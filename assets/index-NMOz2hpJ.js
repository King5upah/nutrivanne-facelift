(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),document.querySelector(`#app`).innerHTML=`
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
        <div class="billboard-tag">Programa Personalizado</div>
        <h1 class="billboard-title">TRANSFORMA-T</h1>
        <h2 class="billboard-subtitle">Tu estrategia personalizada de nutrición y entrenamiento</h2>
        <p class="billboard-desc">Diseñado según tu cuerpo, tu estado actual y tus objetivos reales.</p>
        
        <ul class="billboard-features">
          <li>Evaluación personalizada</li>
          <li>Plan nutricional estructurado</li>
          <li>Entrenamiento estratégico</li>
          <li>Seguimiento profesional</li>
        </ul>
        
        <a href="#plans" class="btn btn-gold">INICIAR MI TRANSFORMACIÓN ↗</a>
        <p style="margin-top: 1rem; font-size: 0.875rem; color: var(--text-muted);">Programa activo todo el año.</p>
      </div>
    </section>

    <section class="assessment-section">
      <h2 style="text-align: center;">Tu Valoración Personalizada</h2>
      <p style="text-align: center; color: var(--text-muted);">Cuéntanos sobre ti para crear el plan perfecto.</p>
      
      <div class="assessment-card glass">
        <div class="progress-bar">
          <div class="progress-inner"></div>
        </div>
        
        <form id="assessment-form">
          <div class="form-group">
            <label for="goal">¿Cuál es tu objetivo principal?</label>
            <select id="goal" class="form-control">
              <option value="weight-loss">Perder peso</option>
              <option value="muscle-gain">Ganar masa muscular</option>
              <option value="wellness">Bienestar general</option>
              <option value="energy">Aumentar energía</option>
            </select>
          </div>
          
          <div class="form-group">
            <label for="activity">Nivel de actividad física</label>
            <select id="activity" class="form-control">
              <option value="sedentary">Sedentario (Poco o nada)</option>
              <option value="moderate">Moderado (2-3 días/sem)</option>
              <option value="active">Activo (4-5 días/sem)</option>
              <option value="elite">Atleta (6+ días/sem)</option>
            </select>
          </div>

          <button type="button" class="btn btn-primary" style="width: 100%; margin-top: 1rem;" onclick="alert('Generando tu perfil nutricional...')">Continuar ↗</button>
        </form>
      </div>
    </section>

    <section id="plans">
      <h2 style="text-align: center; margin-bottom: 3rem;">Elige tu Plan de Transformación</h2>
      <div class="plans-grid">
        <!-- Plan Básico -->
        <article class="plan-card glass">
          <h3>Plan Esencial</h3>
          <p class="plan-price">$29.99<span style="font-size: 1rem; color: var(--text-muted);">/mes</span></p>
          <ul class="plan-features">
            <li>Plan de alimentación base</li>
            <li>Guía de suplementación</li>
            <li>Acceso a comunidad</li>
            <li>Soporte por correo</li>
          </ul>
          <button class="btn btn-primary" onclick="alert('Iniciando checkout seguro...')">Suscribirse ahora ↗</button>
        </article>

        <!-- Plan Premium -->
        <article class="plan-card glass" style="border: 2px solid var(--primary);">
          <div style="background: var(--primary); color: white; padding: 4px 12px; border-radius: 999px; font-size: 0.75rem; width: fit-content; margin: 0 auto 1rem;">EL MÁS POPULAR</div>
          <h3>Plan Optimal Wellness</h3>
          <p class="plan-price">$49.99<span style="font-size: 1rem; color: var(--text-muted);">/mes</span></p>
          <ul class="plan-features">
            <li>Todo en el plan Esencial</li>
            <li>Coaching 1-on-1</li>
            <li>Recetas personalizadas</li>
            <li>Seguimiento de progreso 24/7</li>
          </ul>
          <button class="btn btn-primary" onclick="alert('Iniciando checkout seguro...')">Suscribirse ahora ↗</button>
        </article>

        <!-- Plan Elite -->
        <article class="plan-card glass">
          <h3>Plan Transformación Total</h3>
          <p class="plan-price">$89.99<span style="font-size: 1rem; color: var(--text-muted);">/mes</span></p>
          <ul class="plan-features">
            <li>Todo en el plan Optimal</li>
            <li>Consultas por videollamada</li>
            <li>Plan de entrenamiento</li>
            <li>Análisis de laboratorio VIP</li>
          </ul>
          <button class="btn btn-primary" onclick="alert('Iniciando checkout seguro...')">Suscribirse ahora ↗</button>
        </article>
      </div>
    </section>
  </main>

  <footer style="margin-top: 4rem; padding: 2rem 0; text-align: center; color: var(--text-muted);">
    <p>&copy; 2026 Nutrivanne. Todos los derechos reservados.</p>
  </footer>
`;