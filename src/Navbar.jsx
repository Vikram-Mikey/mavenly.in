import { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import './styles/navbar.css';

function Navbar() {
  const [showPrograms, setShowPrograms] = useState(false);
  const [hoveredSubmenu, setHoveredSubmenu] = useState(null); // 'tech', 'business', etc.
  const [activeList, setActiveList] = useState({});
  const [programsActive, setProgramsActive] = useState(false);
  const [cartHasItems, setCartHasItems] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const typePrograms = {
  Technology: [
    { label: 'Artificial Intelligence', onClick: () => navigate('/ai') },
    { label: 'Cloud Computing', onClick: () => navigate('/cloud-computing') },
    { label: 'Cybersecurity', onClick: () => navigate('/cybersecurity') },
    { label: 'Data Analytics', onClick: () => navigate('/data-analytics') },
    { label: 'App Development', onClick: () => navigate('/app-development') },
    { label: 'Embedded System', onClick: () => navigate('/embedded-system') },
    { label: 'Full Stack Development', onClick: () => navigate('/full-stack-development') },
  ],
  'Programming Language': [
    { label: 'Python', onClick: () => navigate('/python') },
    { label: 'Java', onClick: () => navigate('/java') },
    { label: 'C', onClick: () => navigate('/c') },
    { label: 'C++', onClick: () => navigate('/cpp') },
    { label: 'Power BI', onClick: () => navigate('/powerbi') },
    { label: 'Excel', onClick: () => navigate('/excel') },
  ],
  Business: [
    { label: 'Finance Program', onClick: () => navigate('/finance-program') },
    { label: 'Human Resource', onClick: () => navigate('/human-resource-management') },
    { label: 'Digital Marketing', onClick: () => navigate('/digital-marketing') },
  ],
  Medical: [
    { label: 'Medical Coding', onClick: () => navigate('/medical-coding') },
    { label: 'Psychology', onClick: () => navigate('/psychology') },
  ],
  Design: [
    { label: 'UI/UX Design', onClick: () => navigate('/ui-designing') },
  ],
  Mechanics: [
    { label: 'Auto CAD', onClick: () => navigate('/auto-cad') },
  ],
  Freelancing: [
    { label: 'Digital Marketing', onClick: () => navigate('/freelancing/Digital-Marketing') },
    { label: 'Finance Program', onClick: () => navigate('/freelancing/Finance-Program') },
    { label: 'UI/UX Design', onClick: () => navigate('/freelancing/UI-Designing') },
    { label: 'Full Stack Development', onClick: () => navigate('/freelancing/Full-Stack-Development') },
  ]
};

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartHasItems(Array.isArray(cart) && cart.length > 0);
    // Listen for cart changes in other tabs/windows
    const handleStorage = () => {
      const updatedCart = JSON.parse(localStorage.getItem('cart') || '[]');
      setCartHasItems(Array.isArray(updatedCart) && updatedCart.length > 0);
    };
    window.addEventListener('storage', handleStorage);
    // Listen for resize to detect mobile/desktop
    const handleResize = () => setIsMobile(window.innerWidth <= 900);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Show dropdown when mouse enters, hide when leaves
  const handleProgramsMouseEnter = () => setShowPrograms(true);
  const handleProgramsMouseLeave = () => setShowPrograms(false);

  // Sidebar menu links for mobile
  const sidebarLinks = (
    <div className="navbar-sidebar-links">
      <span
        className="navbar-sidebar-link"
        onClick={() => { setSidebarOpen(false); navigate('/'); }}
      >Home</span>
      <span
        className="navbar-sidebar-link"
        onClick={() => setProgramsActive(!programsActive)}
      >
        Programs
        <span className="navbar-sidebar-category-arrow">
          {programsActive ? '▲' : '▼'}
        </span>
      </span>
      {programsActive && (
        <div className="navbar-sidebar-programs">
          { [
  'Technology',
  'Programming Language',
  'Business',
  'Medical',
  'Design',
  'Mechanics',
  'Freelancing'
].map(category => (
            <div key={category}>
              <span
                className="navbar-sidebar-category"
                onClick={() =>
                  setActiveList(prev => ({
                    ...prev,
                    [category]: !prev[category]
                  }))
                }
              >
                {category}
                <span className="navbar-sidebar-category-arrow">
                  {activeList[category] ? '▲' : '▼'}
                </span>
              </span>
              {activeList[category] && (
                <div className="navbar-sidebar-program-list">
                  {(typePrograms[category] || []).map(program => (
                    <span
                      key={program.label}
                      className="navbar-sidebar-program-item"
                      onClick={() => {
                        program.onClick();
                        setSidebarOpen(false);
                        setProgramsActive(false);
                        setActiveList({});
                      }}
                    >
                      {program.label}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      <span className="navbar-sidebar-link" onClick={() => { setSidebarOpen(false); navigate('/about'); }}>About</span>
      <span className="navbar-sidebar-link" onClick={() => { setSidebarOpen(false); navigate('/contact'); }}>Contact</span>
      <span className="navbar-sidebar-link" onClick={() => { setSidebarOpen(false); navigate('/login'); }}>Login/Signup</span>
    </div>
  );
  // Sidebar overlay for mobile
  const sidebar = (
    <div className={`navbar-sidebar${sidebarOpen ? ' open' : ' closed'}`}> 
      <span className="navbar-sidebar-close" onClick={() => setSidebarOpen(false)}>&times;</span>
      {sidebarLinks}
    </div>
  );
  const sidebarBackdrop = (
    <div className="navbar-sidebar-backdrop" onClick={() => setSidebarOpen(false)} />
  );

  if (isMobile) {
    return (
      <nav className="navbar">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <img src="/mavenly logo.png" alt="Mavenly Logo" className="nav-logo-img" />
          <span className="navbar-mobile-menu-btn" onClick={() => setSidebarOpen(true)}>&#9776;</span>
        </div>
        {sidebarOpen && sidebarBackdrop}
        {sidebar}
        {cartHasItems && (
          <img
            src="/Addcart.jpg"
            alt="Add to Cart"
            className="navbar-cart-img"
            onClick={() => navigate('/addcart')}
          />
        )}
      </nav>
    );
  }

  return (
    <nav className="navbar">
      <img src="/mavenly logo.png" alt="Mavenly Logo" className="nav-logo-img" />
      <div className="nav-links">
        <Link
          to="/"
          className="navbar-link"
          onClick={e => location.pathname === '/' && e.preventDefault()}
        >
          Home
        </Link>
        <div
          className="navbar-programs-dropdown"
          onMouseEnter={handleProgramsMouseEnter}
          onMouseLeave={handleProgramsMouseLeave}
        >
          <span
            className={`navbar-programs-btn${programsActive ? ' active' : ''}`}
            onClick={() => setProgramsActive(true)}
          >
            Programs
          </span>
          {showPrograms && (
            <ul className="navbar-programs-menu">
              <li
                onMouseEnter={() => setHoveredSubmenu('tech')}
                onMouseLeave={() => setHoveredSubmenu(null)}
              >
                Technology
                {hoveredSubmenu === 'tech' && (
                  <ul className="navbar-programs-submenu">
                    <li onClick={() => navigate('/ai')}>Artificial Intelligence</li>
                    <li onClick={() => navigate('/cloud-computing')}>Cloud Computing</li>
                    <li onClick={() => navigate('/cybersecurity')}>Cybersecurity</li>
                    <li onClick={() => navigate('/data-analytics')}>Data Analytics</li>
                    <li onClick={() => navigate('/app-development')}>App Development</li>
                    <li onClick={() => navigate('/embedded-system')}>Embedded System</li>
                    <li onClick={() => navigate('/full-stack-development')}>Full Stack Development</li>
                  </ul>
                )}
              </li>
              <li
                onMouseEnter={() => setHoveredSubmenu('programming')}
                onMouseLeave={() => setHoveredSubmenu(null)}
              >
                Programming Language
                {hoveredSubmenu === 'programming' && (
                  <ul className="navbar-programs-submenu">
                    <li onClick={() => navigate('/python')}>Python</li>
                    <li onClick={() => navigate('/java')}>Java</li>
                    <li onClick={() => navigate('/c')}>C</li>
                    <li onClick={() => navigate('/cpp')}>C++</li>
                    <li onClick={() => navigate('/powerbi')}>Power BI</li>
                    <li onClick={() => navigate('/excel')}>Excel</li>
                  </ul>
                )}
              </li>
              <li
                onMouseEnter={() => setHoveredSubmenu('business')}
                onMouseLeave={() => setHoveredSubmenu(null)}
              >
                Business
                {hoveredSubmenu === 'business' && (
                  <ul className="navbar-programs-submenu">
                    <li onClick={() => navigate('/finance-program')}>Finance Program</li>
                    <li onClick={() => navigate('/human-resource-management')}>Human Resource</li>
                    <li onClick={() => navigate('/digital-marketing')}>Digital Marketing</li>
                  </ul>
                )}
              </li>
              <li
                onMouseEnter={() => setHoveredSubmenu('medical')}
                onMouseLeave={() => setHoveredSubmenu(null)}
              >
                Medical
                {hoveredSubmenu === 'medical' && (
                  <ul className="navbar-programs-submenu">
                    <li onClick={() => navigate('/medical-coding')}>Medical Coding</li>
                    <li onClick={() => navigate('/psychology')}>Psychology</li>
                  </ul>
                )}
              </li>
              <li
                onMouseEnter={() => setHoveredSubmenu('design')}
                onMouseLeave={() => setHoveredSubmenu(null)}
              >
                Design
                {hoveredSubmenu === 'design' && (
                  <ul className="navbar-programs-submenu">
                    <li onClick={() => navigate('/ui-designing')}>UI/UX Design</li>
                  </ul>
                )}
              </li>
              <li
                onMouseEnter={() => setHoveredSubmenu('mechanics')}
                onMouseLeave={() => setHoveredSubmenu(null)}
              >
                Mechanics
                {hoveredSubmenu === 'mechanics' && (
                  <ul className="navbar-programs-submenu">
                    <li onClick={() => navigate('/auto-cad')}>Auto CAD</li>
                  </ul>
                )}
              </li>
              <li
                onMouseEnter={() => setHoveredSubmenu('freelancing')}
                onMouseLeave={() => setHoveredSubmenu(null)}
              >
                Freelancing
                {hoveredSubmenu === 'freelancing' && (
                  <ul className="navbar-programs-submenu">
                    <li onClick={() => navigate('/freelancing/Digital-Marketing')}>Digital Marketing</li>
                    <li onClick={() => navigate('/freelancing/Finance-Program')}>Finance Program</li>
                    <li onClick={() => navigate('/freelancing/UI-Designing')}>UI/UX Design</li>
                    <li onClick={() => navigate('/freelancing/Full-Stack-Development')}>Full Stack Development</li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </div>
        <Link to="/about" className="navbar-link" onClick={e => location.pathname === '/about' && e.preventDefault() }>About</Link>
        <Link className="navbar-link" to="/contact" onClick={e => location.pathname === '/contact' && e.preventDefault()} >Contact</Link>
        <Link to="/login" className="navbar-link" onClick={e => location.pathname === '/login' && e.preventDefault()} >Login/Signup</Link>
        {cartHasItems && (
          <img
            src="/Addcart.jpg"
            alt="Add to Cart"
            style={{ width: 30, height: 30, marginLeft: '1.5rem', cursor: 'pointer', verticalAlign: 'middle' }}
            onClick={() => navigate('/addcart')}
          />
        )}
      </div>
    </nav>
  );
}

export default Navbar;