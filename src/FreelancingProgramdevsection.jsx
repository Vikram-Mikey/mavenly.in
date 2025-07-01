import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './styles/freelancingprogramdevsection.css';


function FreelancingProgramDevSection({ className, imgSrc, imgAlt }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  const navigate = useNavigate();
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 900);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <section className={`freelancing-section ${className || ''}`}>
      <div className="freelancing-dev">
        <img
          src={imgSrc}
          alt={imgAlt}
          className="freelancing-img"
        />
        <form className="freelancing-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Phone Number" required />
          <input type="text" placeholder="Company Name" required />
          <input type="text" placeholder="Office Motive" required />
          <input type="text" placeholder="Preference" required />
          <button type="submit">Enquiry</button>
        </form>
      </div>
    </section>
  );
}


export default FreelancingProgramDevSection;