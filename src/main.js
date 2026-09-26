import './style.css'

// Initial state for plans
const INITIAL_PLANS = [
  { 
    id: 'essential', 
    title: 'ESSENTIAL', 
    price: '29.99', 
    description: 'Perfect for those starting their scientific nutrition journey.',
    features: ['Core Nutritional Algorithm', 'Macro Tracking', 'NutriVane Academy', 'Standard Support'],
    paylink: '' 
  },
  { 
    id: 'optimal', 
    title: 'OPTIMAL PRO', 
    price: '49.99', 
    description: 'Advanced monitoring and personalized coaching for elite performance.',
    features: ['Everything in Essential', '1-on-1 Monthly Consultation', 'Bio-Optimized Cookbook', 'Biomarker Tracking'], 
    elite: true,
    paylink: ''
  },
  { 
    id: 'vip', 
    title: 'VIP', 
    price: '89.99', 
    description: 'Unlimited access to the most advanced longevity protocols and metabolic analysis.',
    features: ['Everything in Optimal Pro', 'Mastermind Sessions', 'Advanced Training Protocol', 'DNA & Metabolic Analysis'],
    paylink: ''
  }
];

// Persona State
let activePersona = 'lifestyle';

const PERSONAS = {
  lifestyle: {
    tag: 'PEAK PERFORMANCE',
    title: 'TRANSFORMA-T',
    subtitle: 'The Master Strategy for Nutrition and Performance',
    image: './hero-portrait.png',
    accent: 'rgba(255, 255, 255, 0.03)'
  },
  science: {
    tag: 'BIOMETRIC PRECISION',
    title: 'PROTOCOL-S',
    subtitle: 'Scientific metabolic calibration for genetic optimization.',
    image: './hero-pointing.png',
    accent: 'rgba(56, 189, 248, 0.06)'
  }
};

// Load plans from localStorage
const SAVED_PLANS = JSON.parse(localStorage.getItem('nutrivane_plans')) || [];
let plans = INITIAL_PLANS.map(initPlan => {
  const saved = SAVED_PLANS.find(p => p.id === initPlan.id);
  return saved ? { ...initPlan, ...saved } : initPlan;
});

function renderApp() {
  const app = document.querySelector('#app');
  if (!app) return;
  
  app.innerHTML = `
    <header class="glass container" style="border-radius: 0; border-top: none; border-left: none; border-right: none;">
      <div class="nav-content">
        <div class="logo" style="color: #ffffff; letter-spacing: 0.1em; text-transform: uppercase;">
          <img src="./logo.jpg" alt="Nutrivanne Logo" style="height: 32px; width: auto; border-radius: 0;">
          Nutrivanne
        </div>
        <a href="#plans" class="btn btn-primary">COMIENZO</a>
      </div>
    </header>

    <main>
      <section class="billboard-hero group-${activePersona}">
        <div class="billboard-parallax-text">${activePersona === 'lifestyle' ? 'NUTRI VANE' : 'PRECISION'}</div>
        <div class="hero-accent" style="background: ${PERSONAS[activePersona].accent}"></div>
        <div class="billboard-image" style="background-image: url('${PERSONAS[activePersona].image}');"></div>
        <div class="billboard-content">
          <div class="persona-toggles">
            <button class="persona-btn ${activePersona === 'lifestyle' ? 'active' : ''}" onclick="switchPersona('lifestyle')">
              <img src="./hero-portrait.png" alt="Lifestyle">
              <span>LIFESTYLE</span>
            </button>
            <button class="persona-btn ${activePersona === 'science' ? 'active' : ''}" onclick="switchPersona('science')">
              <img src="./hero-pointing.png" alt="Science">
              <span>SCIENCE</span>
            </button>
          </div>
          <div class="billboard-tag">${PERSONAS[activePersona].tag}</div>
          <h1 class="billboard-title">${PERSONAS[activePersona].title}</h1>
          <h2 class="billboard-subtitle">${PERSONAS[activePersona].subtitle}</h2>
          
          <ul class="billboard-features">
            <li>Metabolic Profiling</li>
            <li>Dynamic Macros</li>
            <li>Force Training</li>
            <li>Bio-Feedback</li>
          </ul>
          
          <div class="billboard-cta">
            <a href="#plans" class="btn btn-primary">INICIAR PROTOCOLO ↗</a>
          </div>
        </div>
      </section>

      <div class="container">
        <section class="assessment-section" style="display: flex; flex-direction: column; align-items: center; margin-top: 8rem;">
          <div style="text-align: center; max-width: 600px; margin-bottom: 4rem;">
            <h2 style="color: #ffffff; margin-bottom: 1rem; letter-spacing: 0.25em; text-transform: uppercase;">Define your Path</h2>
            <p style="color: #94a3b8; font-weight: 300;">Our AI-engine will calibrate your strategy based on your unique biometric markers.</p>
          </div>
          
          <div class="assessment-card glass" style="width: 100%; max-width: 500px; background: #050505; border-radius: 0;">
            <div class="progress-bar" style="background: rgba(255,255,255,0.05);">
              <div class="progress-inner" style="background: #ffffff;"></div>
            </div>
            
            <form id="assessment-form">
              <div class="form-group">
                <label style="text-transform: uppercase; font-size: 0.7rem; letter-spacing: 0.1em; color: rgba(255,255,255,0.5);">Primary Objective</label>
                <select class="form-control" style="background: #000; color: white; border-color: rgba(255,255,255,0.1); border-radius: 0;">
                  <option>Deficit / Definition</option>
                  <option>Hypertrophy / Power</option>
                  <option>Longevity / Health</option>
                  <option>Peak Performance</option>
                </select>
              </div>
              
              <div class="form-group" style="margin-top: 2rem;">
                <label style="text-transform: uppercase; font-size: 0.7rem; letter-spacing: 0.1em; color: rgba(255,255,255,0.5);">Weekly Volume</label>
                <select class="form-control" style="background: #000; color: white; border-color: rgba(255,255,255,0.1); border-radius: 0;">
                  <option>Restorative</option>
                  <option>Moderate (3-4 Sessions)</option>
                  <option>High (5-6 Sessions)</option>
                  <option>Elite (Double Sessions)</option>
                </select>
              </div>

              <div id="calibration-progress" style="display: none; margin-top: 2rem;">
                <div style="display: flex; justify-content: space-between; font-size: 0.6rem; text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 0.5rem; color: #fff;">
                  <span>Biometric Sync</span>
                  <span id="progress-percent">0%</span>
                </div>
                <div style="height: 1px; background: rgba(255,255,255,0.1); width: 100%;">
                  <div id="progress-fill" style="height: 100%; background: #fff; width: 0%; transition: width 0.1s linear;"></div>
                </div>
              </div>

              <button type="button" id="calibrate-btn" class="btn btn-primary" style="width: 100%; margin-top: 3rem; border-radius: 0;" onclick="startCalibration()">CALIBRATE STRATEGY ↗</button>
            </form>
          </div>
        </section>

        <section id="methodology" style="margin-top: 15rem; padding: 0 5vw;">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 4rem;">
            <div>
              <h3 style="font-size: 0.8rem; letter-spacing: 0.4em; color: rgba(255,255,255,0.4); margin-bottom: 2rem; text-transform: uppercase;">01 / METABOLIC</h3>
              <p style="font-weight: 300; line-height: 1.8; opacity: 0.8;">Advanced hormonal calibration based on your unique metabolic fingerprint. We don't guess; we calculate the exact fuel your system requires for peak performance.</p>
            </div>
            <div>
              <h3 style="font-size: 0.8rem; letter-spacing: 0.4em; color: rgba(255,255,255,0.4); margin-bottom: 2rem; text-transform: uppercase;">02 / NEURAL</h3>
              <p style="font-weight: 300; line-height: 1.8; opacity: 0.8;">Force training strategies designed to optimize central nervous system output. Maximizing recruitment patterns for accelerated muscle protein synthesis.</p>
            </div>
            <div>
              <h3 style="font-size: 0.8rem; letter-spacing: 0.4em; color: rgba(255,255,255,0.4); margin-bottom: 2rem; text-transform: uppercase;">03 / BIO-DATA</h3>
              <p style="font-weight: 300; line-height: 1.8; opacity: 0.8;">Real-time strategy adjustment through continuous biometric feedback. Your protocol evolves alongside your transformation, ensuring zero plateaus.</p>
            </div>
          </div>
        </section>

        <section id="plans" style="margin-top: 12rem; text-align: center;">
          <h2 style="margin-bottom: 6rem; font-size: 3rem; letter-spacing: 0.2em; text-transform: uppercase; font-weight: 200;">Membership</h2>
          <div class="plans-grid">
            ${plans.map(plan => `
              <article class="plan-card glass" style="border-radius: 0; background: #000; ${plan.elite ? 'border: 1px solid #ffffff; background: #080808;' : ''}">
                ${plan.elite ? '<div style="background: #ffffff; color: #000; padding: 4px 16px; font-size: 0.6rem; font-weight: 800; position: absolute; top: 0; right: 0; letter-spacing: 0.1em;">ELITE</div>' : ''}
                <h3 style="letter-spacing: 0.2em; color: #fff;">${plan.title}</h3>
                <p class="plan-price" style="font-weight: 200;">$${plan.price}<span style="font-size: 0.9rem; opacity: 0.4;">/mo</span></p>
                <p style="font-size: 0.8rem; margin-bottom: 2rem; opacity: 0.7; min-height: 3rem;">${plan.description}</p>
                <ul class="plan-features">
                  ${plan.features.map(f => `<li>${f}</li>`).join('')}
                </ul>
                <button class="btn btn-primary" style="border-radius: 0; ${!plan.elite ? 'background: transparent; border: 1px solid #ffffff; color: #ffffff;' : ''}" onclick="${plan.paylink ? `window.open('${plan.paylink}', '_blank')` : "alert('Processing payment locally...')"}">SELECT</button>
              </article>
            `).join('')}
          </div>
        </section>
      </div>
    </main>

    <footer style="margin-top: 12rem; padding: 8rem 0; text-align: center; border-top: 1px solid rgba(255,255,255,0.1);">
      <div class="logo" style="justify-content: center; margin-bottom: 2rem; opacity: 0.6;">
        <img src="./logo.jpg" alt="Nutrivanne Logo" style="height: 24px; width: auto;">
        <span style="letter-spacing: 0.3em; text-transform: uppercase;">Nutrivanne</span>
      </div>
      <p style="color: #475569; font-size: 0.7rem; letter-spacing: 0.2em; text-transform: uppercase;">&copy; 2026 Nutrivanne. Precision & Peak Performance.</p>
      <div style="margin-top: 2rem;">
        <a href="./admin.html" style="color: #222; font-size: 0.6rem; text-decoration: none;">ADMINISTRATION</a>
      </div>
    </footer>
  `;
}

// Global Event Listeners
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const parallaxText = document.querySelector('.billboard-parallax-text');
  if (parallaxText) {
    parallaxText.style.transform = `translate(-50%, calc(-50% + ${scrolled * 0.15}px))`;
  }
});

window.startCalibration = () => {
  const btn = document.getElementById('calibrate-btn');
  const progress = document.getElementById('calibration-progress');
  const fill = document.getElementById('progress-fill');
  const percent = document.getElementById('progress-percent');
  
  if (!btn || !progress) return;

  btn.disabled = true;
  btn.innerText = 'SYNCING BIOMETRICS...';
  progress.style.display = 'block';
  
  let p = 0;
  const interval = setInterval(() => {
    p += Math.random() * 5;
    if (p >= 100) {
      p = 100;
      clearInterval(interval);
      btn.innerText = 'CALIBRATION COMPLETE';
      setTimeout(() => {
        location.hash = '#plans';
      }, 500);
    }
    fill.style.width = p + '%';
    percent.innerText = Math.floor(p) + '%';
  }, 100);
};

window.switchPersona = (p) => {
  activePersona = p;
  renderApp();
};

renderApp();
