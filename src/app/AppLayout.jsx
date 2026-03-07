import { Outlet, NavLink } from "react-router-dom";
import styles from './AppLayout.module.css';
import { Container } from '@/shared/ui';

const AppLayout = () => {


    return (
        <Container className={styles.root}>
            
            <nav className={styles.nav}>
                <div className={styles.nav_wrapper}>
                    <NavLink to="/home" 
                        className={({ isActive}) => (isActive ? styles.linkActive : styles.link)}
                    >
                        HOME
                    </NavLink>
                    
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
                </div>

            </nav>


            <main className={styles.main}>
                
                <Outlet />


            </main>

        </Container>
    )
}

export default AppLayout;