import './style.css'

document.querySelector('#app').innerHTML = `
  <header class="glass container" style="border-radius: 0; border-top: none; border-left: none; border-right: none;">
    <div class="nav-content">
      <div class="logo" style="color: #ffffff; letter-spacing: 0.1em; text-transform: uppercase;">
        <img src="./logo.jpg" alt="Nutrivanne Logo" style="height: 32px; width: auto; border-radius: 0; filter: grayscale(1) invert(1);">
        Nutrivanne
      </div>
      <a href="#plans" class="btn btn-primary">COMIENZO</a>
    </div>
  </header>

  <main class="container">
    <section class="billboard-hero">
      <div class="billboard-image"></div>
      <div class="billboard-content">
        <div class="billboard-tag" style="color: #ffffff; opacity: 0.6; font-weight: 300;">PRECISION NUTRITION</div>
        <h1 class="billboard-title">TRANSFORMA-T</h1>
        <h2 class="billboard-subtitle" style="color: #ffffff;">The Master Strategy for Nutrition and Performance</h2>
        <p class="billboard-desc" style="color: #e2e8f0; font-weight: 300;">A scientific approach engineered for your unique metabolism.</p>
        
        <ul class="billboard-features" style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 2rem;">
          <li style="color: #ffffff;">Metabolic Profiling</li>
          <li style="color: #ffffff;">Dynamic Macronutrients</li>
          <li style="color: #ffffff;">Force Training</li>
          <li style="color: #ffffff;">24/7 Bio-Feedback</li>
        </ul>
        
        <a href="#plans" class="btn btn-primary" style="padding: 1.5rem 4rem; border-radius: 0; font-weight: 700; letter-spacing: 0.1em;">INICIAR PROTOCOLO ↗</a>
      </div>
    </section>

    <section class="assessment-section" style="position: relative; margin-top: 6rem;">
      <div class="pointing-container" style="position: absolute; left: -150px; top: 0; width: 300px; height: 500px; overflow: visible; pointer-events: none; z-index: 5;">
        <img src="./hero-pointing.png" alt="Vanne pointing" style="width: 100%; height: 100%; object-fit: contain; filter: grayscale(1) contrast(1.2) brightness(0.8);">
      </div>
      <h2 style="text-align: center; color: #ffffff; margin-bottom: 0.5rem; letter-spacing: 0.25em; text-transform: uppercase;">Define your Path</h2>
      <p style="text-align: center; color: #94a3b8; margin-bottom: 4rem; font-weight: 300;">Our AI-engine will calibrate your initial calibration based on your metrics.</p>
      
      <div class="assessment-card glass" style="position: relative; z-index: 2; border-radius: 0; background: #050505;">
        <div class="progress-bar" style="background: rgba(255,255,255,0.05);">
          <div class="progress-inner" style="background: #ffffff;"></div>
        </div>
        
        <form id="assessment-form">
          <div class="form-group">
            <label for="goal" style="text-transform: uppercase; font-size: 0.75rem; letter-spacing: 0.1em; color: rgba(255,255,255,0.6);">Primary Objective</label>
            <select id="goal" class="form-control" style="background: #000; color: white; border-color: rgba(255,255,255,0.1); border-radius: 0;">
              <option value="weight-loss">Deficit / Definition</option>
              <option value="muscle-gain">Hypertrophy / Power</option>
              <option value="wellness">Longevity / Health</option>
              <option value="energy">Peak Performance</option>
            </select>
          </div>
          
          <div class="form-group" style="margin-top: 2rem;">
            <label for="activity" style="text-transform: uppercase; font-size: 0.75rem; letter-spacing: 0.1em; color: rgba(255,255,255,0.6);">Weekly Volume</label>
            <select id="activity" class="form-control" style="background: #000; color: white; border-color: rgba(255,255,255,0.1); border-radius: 0;">
              <option value="sedentary">Restorative</option>
              <option value="moderate">Moderate (3-4 Sessions)</option>
              <option value="active">High (5-6 Sessions)</option>
              <option value="elite">Elite (Double Sessions)</option>
            </select>
          </div>

          <button type="button" class="btn btn-primary" style="width: 100%; margin-top: 3rem; font-size: 1rem; border-radius: 0;" onclick="alert('Analyzing biometric data...')">CALIBRATE STRATEGY ↗</button>
        </form>
      </div>
    </section>

    <section id="plans" style="margin-top: 10rem;">
      <h2 style="text-align: center; margin-bottom: 5rem; font-size: 3rem; letter-spacing: 0.15em; text-transform: uppercase; font-weight: 300;">Membership Tiers</h2>
      <div class="plans-grid">
        <!-- Plan Básico -->
        <article class="plan-card glass" style="border-radius: 0; background: #000;">
          <h3 style="color: #ffffff; letter-spacing: 0.2em;">ESSENTIAL</h3>
          <p class="plan-price" style="font-weight: 300;">$29.99<span style="font-size: 1rem; color: rgba(255,255,255,0.4);">/mo</span></p>
          <ul class="plan-features">
            <li>Core Nutritional Algorithm</li>
            <li>Macro Tracking</li>
            <li>NutriVane Academy</li>
            <li>Standard Support</li>
          </ul>
          <button class="btn btn-primary" style="background: transparent; border: 1px solid #ffffff; color: #ffffff; border-radius: 0;" onclick="alert('Proceeding to checkout...')">SELECT</button>
        </article>

        <!-- Plan Premium -->
        <article class="plan-card glass" style="border-radius: 0; border: 1px solid #ffffff; background: #080808; position: relative;">
          <div style="background: #ffffff; color: #000; padding: 4px 16px; font-size: 0.65rem; font-weight: 800; position: absolute; top: 0; right: 0; letter-spacing: 0.1em;">ELITE</div>
          <h3 style="color: #ffffff; letter-spacing: 0.2em;">OPTIMAL PRO</h3>
          <p class="plan-price" style="font-weight: 300;">$49.99<span style="font-size: 1rem; color: rgba(255,255,255,0.4);">/mo</span></p>
          <ul class="plan-features">
            <li>Everything in Essential</li>
            <li>1-on-1 Monthly Consultation</li>
            <li>Bio-Optimized Cookbook</li>
            <li>Biomarker Tracking</li>
          </ul>
          <button class="btn btn-primary" style="border-radius: 0;" onclick="alert('Proceeding to checkout...')">ACQUIRE PRO ↗</button>
        </article>

        <!-- Plan Elite -->
        <article class="plan-card glass" style="border-radius: 0; background: #000;">
          <h3 style="color: #ffffff; opacity: 0.8; letter-spacing: 0.2em;">VIP</h3>
          <p class="plan-price" style="font-weight: 300;">$89.99<span style="font-size: 1rem; color: rgba(255,255,255,0.4);">/mo</span></p>
          <ul class="plan-features">
            <li>Everything in Optimal Pro</li>
            <li>Mastermind Sessions</li>
            <li>Advanced Training Protocol</li>
            <li>DNA & Metabolic Analysis</li>
          </ul>
          <button class="btn btn-primary" style="background: transparent; border: 1px solid #ffffff; color: #ffffff; border-radius: 0;" onclick="alert('Proceeding to checkout...')">ACCESS VIP ↗</button>
        </article>
      </div>
    </section>
  </main>

  <footer style="margin-top: 10rem; padding: 6rem 0; text-align: center; border-top: 1px solid rgba(255,255,255,0.1);">
    <div class="logo" style="justify-content: center; margin-bottom: 2rem; opacity: 0.5;">
      <img src="./logo.jpg" alt="Nutrivanne Logo" style="height: 24px; width: auto; filter: grayscale(1) invert(1);">
      <span style="letter-spacing: 0.2em;">Nutrivanne</span>
    </div>
    <p style="color: #64748b; font-size: 0.75rem; letter-spacing: 0.1em; text-transform: uppercase;">&copy; 2026 Nutrivanne. Precision & Peak Performance.</p>
  </footer>
`;
