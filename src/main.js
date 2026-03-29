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

// Load plans from localStorage and MERGE with initial to prevent undefined fields
const SAVED_PLANS = JSON.parse(localStorage.getItem('nutrivane_plans')) || [];
let plans = INITIAL_PLANS.map(initPlan => {
  const saved = SAVED_PLANS.find(p => p.id === initPlan.id);
  return saved ? { ...initPlan, ...saved } : initPlan;
});
let view = 'home'; // 'home', 'login', 'admin'
const ADMIN_KEY = 'admin123'; // Simulation of a secret key

function savePlans() {
  localStorage.setItem('nutrivane_plans', JSON.stringify(plans));
  renderApp();
}

function navigate(targetView) {
  view = targetView;
  window.scrollTo(0, 0);
  renderApp();
}

function handleLogin(e) {
  e.preventDefault();
  const password = e.target.password.value;
  if (password === ADMIN_KEY) {
    navigate('admin');
  } else {
    alert('Invalid Credentials');
  }
}

function updatePlan(id, field, value) {
  const plan = plans.find(p => p.id === id);
  if (plan) {
    plan[field] = value;
    savePlans();
  }
}

function renderApp() {
  const app = document.querySelector('#app');
  
  if (view === 'admin') {
    app.innerHTML = `
      <div class="admin-view">
        <div class="admin-header">
          <h1 style="letter-spacing: 0.2em;">ADMIN DASHBOARD</h1>
          <button class="btn btn-primary" onclick="nutriAdmin.navigate('home')">EXIT</button>
        </div>
        
        <div class="plans-management">
          <h2 style="margin-bottom: 2rem; opacity: 0.7;">MEMBERSHIP CALIBRATION</h2>
          ${plans.map(plan => `
            <div class="admin-card" style="grid-template-columns: 1fr; gap: 1rem;">
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                <div>
                  <label style="font-size: 0.6rem; opacity: 0.5;">PLAN TITLE</label>
                  <input type="text" class="admin-input" value="${plan.title}" onchange="nutriAdmin.updatePlan('${plan.id}', 'title', this.value)">
                </div>
                <div>
                  <label style="font-size: 0.6rem; opacity: 0.5;">PRICE (USD)</label>
                  <input type="text" class="admin-input" value="${plan.price}" onchange="nutriAdmin.updatePlan('${plan.id}', 'price', this.value)">
                </div>
              </div>
              <div>
                <label style="font-size: 0.6rem; opacity: 0.5;">DESCRIPTION</label>
                <textarea class="admin-input" style="height: 80px;" onchange="nutriAdmin.updatePlan('${plan.id}', 'description', this.value)">${plan.description}</textarea>
              </div>
              <div>
                <label style="font-size: 0.6rem; opacity: 0.5;">PAYMENT LINK (OPTIONAL)</label>
                <input type="text" class="admin-input" value="${plan.paylink}" placeholder="https://stripe.com/..." onchange="nutriAdmin.updatePlan('${plan.id}', 'paylink', this.value)">
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    return;
  }

  if (view === 'login') {
    app.innerHTML = `
      <div style="min-height: 100vh; display: flex; align-items: center; justify-content: center;">
        <div class="assessment-card glass" style="width: 100%; max-width: 400px; padding: 4rem;">
          <h2 style="text-align: center; margin-bottom: 3rem; letter-spacing: 0.2em;">ADMIN ACCESS</h2>
          <form onsubmit="nutriAdmin.handleLogin(event)">
            <div class="form-group">
              <label style="font-size: 0.7rem; opacity: 0.5; text-transform: uppercase;">Security Key</label>
              <input type="password" name="password" class="admin-input" placeholder="••••••••" style="margin-top: 1rem;" required>
            </div>
            <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 3rem; border-radius: 0;">AUTHENTICATE</button>
            <button type="button" class="btn" style="width: 100%; margin-top: 1rem; opacity: 0.5;" onclick="nutriAdmin.navigate('home')">BACK</button>
          </form>
        </div>
      </div>
    `;
    return;
  }

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
      <section class="billboard-hero">
        <div class="billboard-image"></div>
        <div class="billboard-content">
          <div class="billboard-tag" style="color: #ffffff; opacity: 0.6; font-weight: 300; letter-spacing: 0.3em;">PRECISION NUTRITION</div>
          <h1 class="billboard-title" style="font-size: clamp(3rem, 10vw, 6rem); letter-spacing: 0.1em;">TRANSFORMA-T</h1>
          <h2 class="billboard-subtitle" style="color: #ffffff; font-weight: 300; margin-bottom: 2rem;">The Master Strategy for Nutrition and Performance</h2>
          
          <ul class="billboard-features" style="display: flex; justify-content: center; gap: 2rem; flex-wrap: wrap; margin-bottom: 3rem; opacity: 0.7;">
            <li>Metabolic Profiling</li>
            <li>Dynamic Macronutrients</li>
            <li>Force Training</li>
            <li>Bio-Feedback</li>
          </ul>
          
          <a href="#plans" class="btn btn-primary" style="padding: 1.5rem 5rem; border-radius: 0; font-weight: 700; letter-spacing: 0.2em;">INICIAR PROTOCOLO ↗</a>
        </div>
      </section>

      <div class="container">
        <section class="assessment-section" style="display: flex; flex-direction: column; align-items: center; margin-top: 8rem;">
          <div class="pointing-container" style="position: absolute; left: 50%; transform: translateX(-400px); top: 0; width: 300px; height: 500px; overflow: visible; pointer-events: none; z-index: 5;">
            <img src="./hero-pointing.png" alt="Vanne pointing" style="width: 100%; height: 100%; object-fit: contain; filter: contrast(1.1) brightness(1.05); -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent); mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);">
          </div>
          
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

              <button type="button" class="btn btn-primary" style="width: 100%; margin-top: 3rem; border-radius: 0;" onclick="alert('Calibrating...')">CALIBRATE STRATEGY ↗</button>
            </form>
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
        <a href="javascript:void(0)" onclick="nutriAdmin.navigate('login')" style="color: #222; font-size: 0.6rem; text-decoration: none;">ADMINISTRATION</a>
      </div>
    </footer>
  `;
}

// Global exposure for event handlers
window.nutriAdmin = {
  navigate,
  handleLogin,
  updatePlan
};

renderApp();
