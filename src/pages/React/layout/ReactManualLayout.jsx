import { Outlet, useLocation } from 'react-router-dom';
import { ManualNav } from '@/shared/ui';
import { reactNav } from '@/pages/React/nav/react.nav.js';
import styles from './ReactManualLayout.module.css';

const ReactManualLayout = () => {
    
    const location = useLocation();

    return (
        <div >
            
            <ManualNav 
                title="REACT" 
                basePath="/react" 
                items={reactNav} 
            />
            <div key={location.pathname} className={styles.pageFade}>
                <Outlet />
            </div>

        </div>
    )
}

export default ReactManualLayout