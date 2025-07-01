import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  return (
    <section className="page-login">
      <div className="login-container">
        <h1 className="highlight">Hi, Welcome back!</h1>
        <form className="auth-form">
          <input type="email" placeholder="Email or Username" required />
          <input type="password" placeholder="Password" required />
          <div className="remember-row" style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input type="checkbox" id="rememberMe" style={{ marginRight: '0.5rem' }} />
              <label htmlFor="rememberMe" style={{ color: '#fff', fontSize: '1rem', cursor: 'pointer' }}>Remember</label>
            </div>
            <span className="forgot-password" style={{ color: '#ff5757', fontSize: '1rem', cursor: 'pointer', marginLeft: '1.5rem' }} onClick={() => alert('Forgot password functionality coming soon!')}>Forgot password?</span>
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="signup-link">
          <span>Don't have an account? </span>
          <span className="signup-text" style={{color: '#ff5757', cursor: 'pointer'}} onClick={() => window.location.href='/signup'}>Signup</span>
        </div>
      </div>
    </section>
  );
}

export default Login;