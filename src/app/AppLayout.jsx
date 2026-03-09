import { Outlet, NavLink } from "react-router-dom";
import styles from './AppLayout.module.css';
import { Container } from '@/shared/ui';
import ScrollToTopButton from '@/shared/ui/ScrollToTop/ScrollToTop';

const AppLayout = () => {


    return (
        <Container className={styles.root}>
            
            <nav className={styles.nav}>
                <div className={styles.nav_wrapper}>
                    <NavLink to="/react" 
                        className={({ isActive}) => (isActive ? styles.linkActive : styles.link)}
                    >
                        REACT
                    </NavLink>

                    <NavLink to="/js" 
                        className={({ isActive}) => (isActive ? styles.linkActive : styles.link)}
                    >
                        JS
                    </NavLink>

                    <NavLink to="/typeScript" 
                        className={({ isActive}) => (isActive ? styles.linkActive : styles.link)}
                    >
                        TYPESCRIPT
                    </NavLink>
                </div>

            </nav>


            <main className={styles.main}>
                
                <Outlet />

            
            </main>

            <ScrollToTopButton />

        </Container>
    )
}

export default AppLayout;