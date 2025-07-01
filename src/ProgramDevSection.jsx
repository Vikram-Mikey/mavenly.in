import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/programdevsection.css';

const PROGRAMS = [
  { name: 'Full Stack Development', img: '/Full Stack Development.jpg' },
  { name: 'Data Analytics', img: '/Data Analytics.jpg' },
  { name: 'Cybersecurity', img: '/Cybersecurity.jpg' },
  { name: 'Digital Marketing', img: '/Digital Marketing.jpg' },
  { name: 'Finance Program', img: '/Finance Program.jpg' },
  { name: 'UI/UX Designing', img: '/UI Designing.jpg' },
  { name: 'AI', img: '/ai.jpg' },
  { name: 'Cloud Computing', img: '/cloud computing.jpeg' },
  { name: 'App Development', img: '/app development.webp' },
  { name: 'Embedded System', img: '/embedded system.jpeg' },
  { name: 'Auto Cad', img: '/AutoCAD.webp' },
  { name: 'Human Resource Management', img: '/mhr.webp' },
  { name: 'Medical Coding', img: '/medical coding.jpeg' },
  { name: 'Psychology', img: '/psychology.jpeg' },
  { name: 'Python', img: '/python.png' },
  { name: 'Java', img: '/java.png' },
  { name: 'C', img: '/c.png' },
  { name: 'Cpp', img: '/cpp.png' },
  { name: 'PowerBI', img: '/powerbi.png' },
  { name: 'Excel', img: '/excel.png' }
];

function ProgramDevSection({ className, imgSrc, imgAlt }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  const [cartMessages, setCartMessages] = useState({ basic: '', pro: '', premium: '' });
  const navigate = useNavigate();
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 900);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleAddCart = (planKey, planName) => {
    const programName = imgAlt;
    const programObj = PROGRAMS.find(p => p.name === programName);
    if (!programObj) {
      setCartMessages(msgs => ({ ...msgs, [planKey]: 'Program not found! Check the PROGRAMS array and imgAlt value.' }));
      return;
    }
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    if (cart.some(item => item.program === programObj.name && item.plan === planName)) {
      setCartMessages(msgs => ({ ...msgs, [planKey]: 'The cart is already added' }));
      return;
    }
    cart.push({ program: programObj.name, plan: planName, img: programObj.img });
    localStorage.setItem('cart', JSON.stringify(cart));
    setCartMessages(msgs => ({ ...msgs, [planKey]: 'Added to cart!' }));
    window.location.href = '/addcart';
  };

  return (
    <section className={`programdev-section ${className || ''}`}>
      <div className="programdev-dev">
        <img
          src={imgSrc}
          alt={imgAlt}
          className="programdev-img"
        />
        <form className="programdev-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Phone Number" required />
          <input type="text" placeholder="College/Company Name" required />
          <button type="submit">Enquiry</button>
        </form>
      </div>
      {/* Syllabus Section */}
      <section className="programdev-syllabus-section">
        <h2>Syllabus</h2>
      </section>
      {/* Certify Your Success Section */}
      <section className="programdev-certify-section">
        <h2>Certify your Success</h2>
      </section>
      {/* Pick Your Plan Section */}
      <section className="programdev-plan-section">
        <h2>Pick Your Plan and Join 50k+ Happy Learners Today!</h2>
        <div className="programdev-plan-cards">
          <div className="programdev-plan-card basic"
            onMouseEnter={e => e.currentTarget.style.border = '2px solid #ff5757'}
            onMouseLeave={e => e.currentTarget.style.border = '2px solid #4998da'}
          >
            <h3>Basic Plan</h3>
            <ul>
              <li>Access to all modules</li>
              <li>Community support</li>
              <li>Certificate on completion</li>
              <li>$4,999.00</li>
            </ul>
            {cartMessages.basic && (
              <div className={`programdev-cart-message ${cartMessages.basic === 'Added to cart!' ? 'added' : 'error'}`}>{cartMessages.basic}</div>
            )}
            <button
              onMouseDown={e => e.currentTarget.style.background = '#ff5757'}
              onMouseUp={e => e.currentTarget.style.background = '#4998da'}
              onMouseLeave={e => e.currentTarget.style.background = '#4998da'}
              onClick={e => {
                e.preventDefault();
                handleAddCart('basic', 'Basic Plan');
              }}
              disabled={cartMessages.basic === 'The cart is already added'}
            >
              {cartMessages.basic === 'The cart is already added' ? 'Already in Cart' : 'Add Cart'}
            </button>
          </div>
          <div className="programdev-plan-card pro"
            onMouseEnter={e => e.currentTarget.style.border = '2px solid #ff5757'}
            onMouseLeave={e => e.currentTarget.style.border = '2px solid #4998da'}
          >
            <h3>Pro Plan</h3>
            <ul>
              <li>Everything in Basic</li>
              <li>1:1 Mentorship</li>
              <li>Project feedback</li>
              <li>$9,999.00</li>
            </ul>
            {cartMessages.pro && (
              <div className={`programdev-cart-message ${cartMessages.pro === 'Added to cart!' ? 'added' : 'error'}`}>{cartMessages.pro}</div>
            )}
            <button
              onMouseDown={e => e.currentTarget.style.background = '#ff5757'}
              onMouseUp={e => e.currentTarget.style.background = '#4998da'}
              onMouseLeave={e => e.currentTarget.style.background = '#4998da'}
              onClick={e => {
                e.preventDefault();
                handleAddCart('pro', 'Pro Plan');
              }}
              disabled={cartMessages.pro === 'The cart is already added'}
            >
              {cartMessages.pro === 'The cart is already added' ? 'Already in Cart' : 'Add Cart'}
            </button>
          </div>
          <div className="programdev-plan-card premium"
            onMouseEnter={e => e.currentTarget.style.border = '2px solid #ff5757'}
            onMouseLeave={e => e.currentTarget.style.border = '2px solid #4998da'}
          >
            <h3>Premium Plan</h3>
            <ul>
              <li>Everything in Pro</li>
              <li>Career guidance</li>
              <li>Exclusive webinars</li>
              <li>$14,999.00</li>
            </ul>
            {cartMessages.premium && (
              <div className={`programdev-cart-message ${cartMessages.premium === 'Added to cart!' ? 'added' : 'error'}`}>{cartMessages.premium}</div>
            )}
            <button
              onMouseDown={e => e.currentTarget.style.background = '#ff5757'}
              onMouseUp={e => e.currentTarget.style.background = '#4998da'}
              onMouseLeave={e => e.currentTarget.style.background = '#4998da'}
              onClick={e => {
                e.preventDefault();
                handleAddCart('premium', 'Premium Plan');
              }}
              disabled={cartMessages.premium === 'The cart is already added'}
            >
              {cartMessages.premium === 'The cart is already added' ? 'Already in Cart' : 'Add Cart'}
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}

export default ProgramDevSection;