import PracticeTemplate from "@/pages/Practice/components/PracticeTemplate/PracticeTemplate";

import {
  practiceJavaScriptIntro,
  practiceJavaScriptLevels,
  practiceJavaScriptLevel1Tasks,
  practiceJavaScriptLevel2Tasks,
  practiceJavaScriptLevel3Tasks,
} from "@/pages/Practice/data/practiceJS.data";

const PracticeJS = () => {
  return (
    <PracticeTemplate
      intro={practiceJavaScriptIntro}
      levels={practiceJavaScriptLevels}
      level1Tasks={practiceJavaScriptLevel1Tasks}
      level2Tasks={practiceJavaScriptLevel2Tasks}
      level3Tasks={practiceJavaScriptLevel3Tasks}
      level1Title="Level 1 — Basics Quiz"
      level2Title="Level 2 — Complete the Code"
      level3Title="Level 3 — Write the Code"
      level1FinishTitle="Level 1 completed"
      level2FinishTitle="Level 2 completed"
      level3FinishTitle="JavaScript Practice completed"
      level1FinishText="Ти завершив базовий рівень JavaScript practice."
      level2FinishText="Ти завершив рівень Complete the Code у JavaScript practice."
      level3FinishText="Ти завершив усі 3 рівні JavaScript practice."
    />
  );
};

export default PracticeJS;