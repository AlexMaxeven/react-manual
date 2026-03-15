import { Outlet, useLocation } from "react-router-dom";
import { ManualNav } from "@/shared/ui";
import { practiceNav } from "../nav/practice.nav";
import styles from "./PracticeLayout.module.css";

const PracticeLayout = () => {
  const location = useLocation();

  return (
    <div className={styles.root}>
      <ManualNav
        title="PRACTICE"
        basePath="/practice"
        items={practiceNav}
      />

      <div key={location.pathname} className={styles.pageFade}>
        <Outlet />
      </div>
    </div>
  );
};

export default PracticeLayout;