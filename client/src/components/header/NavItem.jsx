import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';

export default function NavItem({ to, children }) {
  return (
    <NavLink to={to} className={({ isActive }) => `${styles.navLink} ${isActive ? styles.isActive : ''}`}>
      {children}
    </NavLink>
  );
}
