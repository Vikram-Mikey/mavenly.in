import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  return (
    <section className="page-signup">
      <div className="login-container">
        <h2 className="highlight" style={{marginBottom: '0.5rem'}}>SIGNUP</h2>
        <h1 className="highlight">Please Enter the Details.</h1>
        <form className="auth-form">
          <input type="text" placeholder="Fullname" required />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Contact Number" required />
          <input type="password" placeholder="Set Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button type="submit">Signup</button>
        </form>
        <div className="signup-link">
          <span>Already have an account? </span>
          <span className="signup-text" style={{color: '#ff5757', cursor: 'pointer'}} onClick={() => window.location.href='/login'}>Login</span>
        </div>
      </div>
    </section>
  );
}

export default Signup;