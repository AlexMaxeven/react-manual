import { Outlet, useLocation } from 'react-router-dom';
import { ManualNav } from '@/shared/ui';
import { homeNav } from '@/pages/Home/nav/home.nav.js';
import styles from './HomeManualLayout.module.css';

const HomeManualLayout = () => {

    const location = useLocation();

    return (
        <div >
            
            <ManualNav 
                title="HOME" 
                basePath="/home" 
                items={homeNav} 
            />
            <div key={location.pathname} className={styles.pageFade}>
                <Outlet />
            </div>

        </div>
    )
    
}

export default HomeManualLayout;