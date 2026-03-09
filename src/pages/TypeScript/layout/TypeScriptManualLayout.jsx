import { Outlet, useLocation } from 'react-router-dom';
import { ManualNav } from '@/shared/ui';
import { typeScriptNav } from '@/pages/TypeScript/nav/typeScript.nav.js';
import styles from './TypeScriptManualLayout.module.css';

const TypeScriptManualLayout = () => {

    const location = useLocation();

    return (
        <div >
            
            <ManualNav 
                title="TYPESCRIPT" 
                basePath="/typeScript" 
                items={typeScriptNav} 
            />
            <div key={location.pathname} className={styles.pageFade}>
                <Outlet />
            </div>

        </div>
    )
    
}

export default TypeScriptManualLayout;