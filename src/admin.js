import './style.css'

const INITIAL_PLANS = [
  { id: 'essential', title: 'ESSENTIAL', price: '29.99', description: 'Perfect for those starting their scientific nutrition journey.', features: ['Core Nutritional Algorithm', 'Macro Tracking', 'NutriVane Academy', 'Standard Support'], paylink: '' },
  { id: 'optimal', title: 'OPTIMAL PRO', price: '49.99', description: 'Advanced monitoring and personalized coaching for elite performance.', features: ['Everything in Essential', '1-on-1 Monthly Consultation', 'Bio-Optimized Cookbook', 'Biomarker Tracking'], elite: true, paylink: '' },
  { id: 'vip', title: 'VIP', price: '89.99', description: 'Unlimited access to the most advanced longevity protocols and metabolic analysis.', features: ['Everything in Optimal Pro', 'Mastermind Sessions', 'Advanced Training Protocol', 'DNA & Metabolic Analysis'], paylink: '' }
];

const SAVED_PLANS = JSON.parse(localStorage.getItem('nutrivane_plans')) || [];
let plans = INITIAL_PLANS.map(initPlan => {
  const saved = SAVED_PLANS.find(p => p.id === initPlan.id);
  return saved ? { ...initPlan, ...saved } : initPlan;
});

let authenticated = false;
const ADMIN_KEY = 'admin123';

function savePlans() {
  localStorage.setItem('nutrivane_plans', JSON.stringify(plans));
  renderAdmin();
}

function handleLogin(e) {
  e.preventDefault();
  if (e.target.password.value === ADMIN_KEY) {
    authenticated = true;
    renderAdmin();
  } else {
    alert('Invalid Security Key');
  }
}

function updatePlan(id, field, value) {
  const plan = plans.find(p => p.id === id);
  if (plan) {
    plan[field] = value;
    savePlans();
  }
}

function renderAdmin() {
  const app = document.querySelector('#admin-app');
  
  if (!authenticated) {
    app.innerHTML = `
      <div style="min-height: 100vh; display: flex; align-items: center; justify-content: center; background: #000;">
        <div class="assessment-card glass" style="width: 100%; max-width: 400px; padding: 4rem;">
          <h2 style="text-align: center; margin-bottom: 3rem; letter-spacing: 0.2em; color: #fff;">ADMIN ACCESS</h2>
          <form onsubmit="nutriAdmin.handleLogin(event)">
            <div class="form-group">
              <label style="font-size: 0.7rem; opacity: 0.5; text-transform: uppercase; color: #fff;">Security Key</label>
              <input type="password" name="password" class="admin-input" placeholder="••••••••" style="margin-top: 1rem;" required autofocus>
            </div>
            <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 3rem; border-radius: 0;">AUTHENTICATE</button>
            <a href="/" class="btn" style="display: block; text-align: center; width: 100%; margin-top: 1rem; opacity: 0.5; text-decoration: none; color: #fff;">BACK TO SITE</a>
          </form>
        </div>
      </div>
    `;
    return;
  }

  app.innerHTML = `
    <div class="admin-view" style="background: #000; min-height: 100vh;">
      <div class="admin-header">
        <h1 style="letter-spacing: 0.2em; color: #fff;">ADMIN CALIBRATION</h1>
        <a href="/" class="btn btn-primary">VIEW SITE</a>
      </div>
      
      <div class="plans-management">
        <h2 style="margin-bottom: 2rem; opacity: 0.7; color: #fff;">MEMBERSHIP PARAMETERS</h2>
        ${plans.map(plan => `
          <div class="admin-card" style="grid-template-columns: 1fr; gap: 1.5rem; background: #050505;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <div>
                <label style="font-size: 0.6rem; opacity: 0.5; color: #fff;">PLAN TITLE</label>
                <input type="text" class="admin-input" value="${plan.title}" onchange="nutriAdmin.updatePlan('${plan.id}', 'title', this.value)">
              </div>
              <div>
                <label style="font-size: 0.6rem; opacity: 0.5; color: #fff;">PRICE (USD)</label>
                <input type="text" class="admin-input" value="${plan.price}" onchange="nutriAdmin.updatePlan('${plan.id}', 'price', this.value)">
              </div>
            </div>
            <div>
              <label style="font-size: 0.6rem; opacity: 0.5; color: #fff;">DESCRIPTION</label>
              <textarea class="admin-input" style="height: 80px;" onchange="nutriAdmin.updatePlan('${plan.id}', 'description', this.value)">${plan.description}</textarea>
            </div>
            <div>
              <label style="font-size: 0.6rem; opacity: 0.5; color: #fff;">PAYMENT LINK (OPTIONAL)</label>
              <input type="text" class="admin-input" value="${plan.paylink}" placeholder="https://stripe.com/..." onchange="nutriAdmin.updatePlan('${plan.id}', 'paylink', this.value)">
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

window.nutriAdmin = {
  handleLogin,
  updatePlan
};

renderAdmin();
