import PracticeTemplate from "@/pages/Practice/components/PracticeTemplate/PracticeTemplate";

import {
  practiceReactIntro,
  practiceReactLevels,
  practiceReactLevel1Tasks,
  practiceReactLevel2Tasks,
  practiceReactLevel3Tasks,
} from "@/pages/Practice/data/practiceReact.data";

const PracticeReact = () => {
  return (
    <PracticeTemplate
      intro={practiceReactIntro}
      levels={practiceReactLevels}
      level1Tasks={practiceReactLevel1Tasks}
      level2Tasks={practiceReactLevel2Tasks}
      level3Tasks={practiceReactLevel3Tasks}
      level1Title="Level 1 — Basics Quiz"
      level2Title="Level 2 — Complete the Code"
      level3Title="Level 3 — Write the Code"
      level1FinishTitle="Level 1 completed"
      level2FinishTitle="Level 2 completed"
      level3FinishTitle="React Practice completed"
      level1FinishText="Ти завершив базовий рівень React practice."
      level2FinishText="Ти завершив рівень Complete the Code у React practice."
      level3FinishText="Ти завершив усі 3 рівні React practice."
    />
  );
};

export default PracticeReact;