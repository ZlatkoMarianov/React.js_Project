import { NavLink } from 'react-router';

export default function NavItem({ to, children }) {
  return (
    <NavLink to={to} className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`}>
      {children}
    </NavLink>
  );
}
