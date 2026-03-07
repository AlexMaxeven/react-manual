import { NavLink } from "react-router-dom";

import styles from './ManualNav.module.css';

const ManualNav = ({ title, basePath, items }) => {
  return (
    <div className={styles.root}>
      <div className={styles.topRow}>
        <div className={styles.title}>{title}</div>

        <nav className={styles.desktopNav}>
          {items.map((it) => (
            <NavLink
              key={it.to}
              to={`${basePath}/${it.to}`}
              end={it.end}
              className={({ isActive }) => (
                isActive ? styles.linkActive : styles.link
            )}
            >
              {it.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default ManualNav;