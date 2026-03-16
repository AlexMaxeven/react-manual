import { Outlet, NavLink } from "react-router-dom";
import styles from "./AppLayout.module.css";
import { Container } from "@/shared/ui";
import ScrollToTopButton from "@/shared/ui/ScrollToTop/ScrollToTop";
import useScrollThreshold from "@/shared/lib/useScrollThreshold";
import { ThemeToggle } from "@/shared/ui";
import Home from "@/pages/Home/Home";
import {useLocation} from "react-router-dom";

const AppLayout = () => {
  const isScrolled = useScrollThreshold(100);
  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname === "";

  return (
    <Container className={styles.root}>
      <nav className={`${styles.nav} ${isScrolled ? styles.navHidden : ""}`}>
        
        <div className={styles.nav_content}>
          <NavLink 
            to="/practice"
            className={({ isActive }) =>
              isActive ? styles.linkActive : styles.link
            }
          >
            PRACTICE
          </NavLink>
        </div>

        <div className={styles.nav_wrapper} >
          <NavLink
            to="/react"
            className={({ isActive }) =>
              isActive ? styles.linkActive : styles.link
            }
          >
            REACT
          </NavLink>

          <NavLink
            to="/js"
            className={({ isActive }) =>
              isActive ? styles.linkActive : styles.link
            }
          >
            JS
          </NavLink>

          <NavLink
            to="/typeScript"
            className={({ isActive }) =>
              isActive ? styles.linkActive : styles.link
            }
          >
            TYPESCRIPT
          </NavLink>

          <ThemeToggle />
        </div>
      </nav>

      {isHome && <Home />}

      <main className={styles.main}>
       
          <Outlet />

        
      </main>

      <ScrollToTopButton />
    </Container>
  );
};

export default AppLayout;