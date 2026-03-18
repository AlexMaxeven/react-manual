import PracticeTemplate from "@/pages/Practice/components/PracticeTemplate/PracticeTemplate";

import {
    practiceTypeScriptIntro,
    practiceTypeScriptLevels,
    practiceTypeScriptLevel1Tasks,
    practiceTypeScriptLevel2Tasks,
    practiceTypeScriptLevel3Tasks,
    } from "@/pages/Practice/data/practiceTypeScript.data";

    const PracticeTypeScript = () => {
    return (
        <PracticeTemplate
        intro={practiceTypeScriptIntro}
        levels={practiceTypeScriptLevels}
        level1Tasks={practiceTypeScriptLevel1Tasks}
        level2Tasks={practiceTypeScriptLevel2Tasks}
        level3Tasks={practiceTypeScriptLevel3Tasks}
        level1Title="Level 1 — Basics Quiz"
        level2Title="Level 2 — Complete the Code"
        level3Title="Level 3 — Write the Code"
        level1FinishTitle="Level 1 completed"
        level2FinishTitle="Level 2 completed"
        level3FinishTitle="TypeScript Practice completed"
        level1FinishText="Ти завершив базовий рівень TypeScript practice."
        level2FinishText="Ти завершив рівень Complete the Code у TypeScript practice."
        level3FinishText="Ти завершив усі 3 рівні TypeScript practice."
        />
    );
};

export default PracticeTypeScript;