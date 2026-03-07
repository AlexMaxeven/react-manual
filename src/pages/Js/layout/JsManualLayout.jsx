import { Outlet, useLocation } from 'react-router-dom';
import { ManualNav } from '@/shared/ui';
import { jsNav } from '@/pages/Js/nav/js.nav.js';
import styles from './JsManualLayout.module.css';

const JsManualLayout = () => {
    
    const location = useLocation();

    return (
        <div>
            <ManualNav 
                title="JS" 
                basePath="/js" 
                items={jsNav} 
            />
            <div key={location.pathname} className={styles.pageFade}>
                <Outlet />
            </div>
        </div>
    )
}

export default JsManualLayout;