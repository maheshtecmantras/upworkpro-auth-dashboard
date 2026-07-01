import { useState } from 'react';
import './App.css';

const insights = [
  'Velocity is up 18% vs last sprint — more proposals are shifting to signed contracts.',
  'Client satisfaction rating holds at 4.9/5 after delivering 6 polished brand sprints.',
  'Avg response time on UpworkPro messages dropped to 9m (industry avg: 24m).'
];

const statCards = [
  { value: '$12,450', label: 'Revenue (last 30d)' },
  { value: '48', label: 'Active proposals' },
  { value: '12', label: 'Approved projects' }
];

const pipelineRows = [
  { stage: 'Onboarding', badge: 'Two clients', variant: 'success' },
  { stage: 'Design sprint', badge: '3 weeks remaining', variant: 'warning' },
  { stage: 'Quality review', badge: 'Round 2', variant: 'neutral' }
];

const Panel = ({ eyebrow, title, children }) => (
  <article className='panel card'>
    <div className='panel-header'>
      <p className='eyebrow'>{eyebrow}</p>
      <h2>{title}</h2>
    </div>
    {children}
  </article>
);

function RegisterView({ onBack }) {
  return (
    <div className='register-view'>
      <header className='hero register-hero'>
        <div>
          <p className='eyebrow'>UpworkPro ready</p>
          <h1>Create your UpworkPro workspace</h1>
          <p className='lead'>
            Give the UpworkPro client a confident onboarding moment with a spacious register
            screen that highlights trust signals and keeps every field purposeful.
          </p>
          <div className='header-buttons'>
            <button className='btn ghost' type='button' onClick={onBack}>
              Back to landing
            </button>
          </div>
        </div>
        <div className='hero-pill'>
          <p>Includes onboarding call</p>
          <strong>Team-ready and secure</strong>
        </div>
      </header>
      <section className='register-wrapper'>
        <article className='panel card register-card'>
          <div className='panel-header'>
            <p className='eyebrow'>Build your team</p>
            <h2>Start your journey</h2>
          </div>
          <form className='form' onSubmit={(event) => event.preventDefault()}>
            <label>
              Full name
              <input type='text' placeholder='Jordan Rivera' required />
            </label>
            <label>
              Studio name
              <input type='text' placeholder='Rivera Studio' />
            </label>
            <label>
              Email address
              <input type='email' placeholder='studio@designs.com' required />
            </label>
            <label>
              Password
              <input type='password' placeholder='Create a secure password' required />
            </label>
            <label>
              Number of seats
              <input type='number' min='1' placeholder='5' />
            </label>
            <button className='btn neutral' type='submit'>
              Start free trial
            </button>
            <p className='micro'>
              Includes onboarding call, proposal template, and up to 10 seats.
            </p>
          </form>
          <div className='badge-row'>
            <span>Identity verified</span>
            <span>Team-ready</span>
            <span>GDPR compliant</span>
          </div>
        </article>
      </section>
      <footer className='footer register-footer'>
        <p>Need the login panel? Return to the landing experience.</p>
        <button className='btn ghost' type='button' onClick={onBack}>
          Back to landing
        </button>
      </footer>
    </div>
  );
}

function App() {
  const [view, setView] = useState('main');
  const [insightIndex, setInsightIndex] = useState(0);

  const handleInsightNext = () => {
    setInsightIndex((prev) => (prev + 1) % insights.length);
  };

  return (
    <div className={`app-shell ${view === 'register' ? 'app-shell-register' : ''}`}>
      {view === 'main' ? (
        <>
          <header className='hero'>
            <div>
              <p className='eyebrow'>UpworkPro submission</p>
              <h1>High-trust auth experience for prolific studios</h1>
              <p className='lead'>
                A resilient landing page, focused login suite, and dashboard that showcase trust,
                structure, and momentum — now delivered as a React prototype wrapped in a lively
                green palette.
              </p>
              <div className='header-buttons'>
                <button className='btn primary' type='button' onClick={() => setView('register')}>
                  Register now
                </button>
                <button className='btn ghost' type='button'>
                  Share with client
                </button>
              </div>
            </div>
            <div className='hero-pill'>
              <p>Trusted by 120+ freelance teams</p>
              <strong>4.9/5 client satisfaction</strong>
            </div>
          </header>
          <section className='panel-grid'>
            <Panel eyebrow='Secure access' title='Login'>
              <form className='form' onSubmit={(event) => event.preventDefault()}>
                <label>
                  Email address
                  <input type='email' placeholder='you@studio.com' required />
                </label>
                <label>
                  Password
                  <input type='password' placeholder='••••••••' required />
                </label>
                <div className='form-foot'>
                  <label className='remember'>
                    <input type='checkbox' />
                    Keep me signed in
                  </label>
                  <a href='#'>Forgot password?</a>
                </div>
                <button className='btn primary' type='submit'>
                  Sign in
                </button>
                <p className='micro'>Multi-factor authentication ready.</p>
              </form>
            </Panel>
            <Panel eyebrow='Build your team' title='Create an account'>
              <form className='form' onSubmit={(event) => event.preventDefault()}>
                <label>
                  Full name
                  <input type='text' placeholder='Jordan Rivera' required />
                </label>
                <label>
                  Workspace name
                  <input type='text' placeholder='Rivera Studio' />
                </label>
                <label>
                  Email address
                  <input type='email' placeholder='studio@designs.com' required />
                </label>
                <label>
                  Password
                  <input type='password' placeholder='Create a secure password' required />
                </label>
                <button className='btn neutral' type='submit'>
                  Start free trial
                </button>
                <p className='micro'>Includes onboarding call, project template, and 10 seats.</p>
              </form>
              <div className='badge-row'>
                <span>Identity verified</span>
                <span>Team-ready</span>
                <span>GDPR compliant</span>
              </div>
            </Panel>
            <Panel eyebrow='Live dashboard' title='Quarterly pulse'>
              <div className='stats-grid'>
                {statCards.map((card) => (
                  <div key={card.label}>
                    <strong>{card.value}</strong>
                    <p>{card.label}</p>
                  </div>
                ))}
              </div>
              <div className='pipeline'>
                <h3>Project pipeline</h3>
                {pipelineRows.map((row) => (
                  <div className='pipeline-row' key={row.stage}>
                    <span>{row.stage}</span>
                    <span className={`tag ${row.variant}`}>{row.badge}</span>
                  </div>
                ))}
              </div>
              <div className='insight'>
                <p>{insights[insightIndex]}</p>
                <button className='btn ghost' type='button' onClick={handleInsightNext}>
                  Show next insight
                </button>
              </div>
            </Panel>
          </section>
          <footer className='footer'>
            <p>
              Designed for UpworkPro pitches · Responsive by default · Register page lives inside React.
            </p>
            <button className='btn ghost' type='button' onClick={() => setView('register')}>
              Open register page
            </button>
          </footer>
        </>
      ) : (
        <RegisterView onBack={() => setView('main')} />
      )}
    </div>
  );
}

export default App;
