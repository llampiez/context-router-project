import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary' data-bs-theme="dark">
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          useContext
        </Link>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} aria-current='page' to='/'>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                aria-current='page'
                to='/about'>
                About
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                aria-current='page'
                to='/login'>
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
