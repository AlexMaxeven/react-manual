import { NavLink, useNavigate } from "react-router-dom";
import useScrollThreshold from "@/shared/lib/useScrollThreshold";

import styles from './ManualNav.module.css';

const ManualNav = ({ title, basePath, items }) => {
    const isScrolled = useScrollThreshold(100);

    const handleTitleClick = () => {
        if (items && items.length > 0) {
        const first = items[0];
    
        navigate(`${basePath}/${first.to}`);
    
        setTimeout(() => {
            window.scrollTo({
            top: 0,
            behavior: "smooth",
            });
        }, 0);
        }
    };

    const navigate = useNavigate();

    return (
        <div className={styles.root}>
        <div className={styles.topRow}>
        <div className={`${styles.title} ${isScrolled ? styles.titleHidden : ""}`} onClick={handleTitleClick}>
            {title}
        </div>

            <nav className={styles.desktopNav}>
            {items.map((it) => (
                <NavLink
                    key={it.to}
                    to={it.to.startsWith("/") ? it.to : `${basePath}/${it.to}`}
                    end={it.end}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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