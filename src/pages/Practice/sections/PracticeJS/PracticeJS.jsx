import { useState } from "react";
import PracticeTemplate from "@/pages/Practice/components/PracticeTemplate/PracticeTemplate";
import { getRandomTaskSet } from "@/shared/lib/getRandomTaskSet";

import {
  practiceJavaScriptIntro,
  practiceJavaScriptLevels,
  practiceJavaScriptLevel1TaskGroups,
  practiceJavaScriptLevel2TaskGroups,
  practiceJavaScriptLevel3TaskGroups,
} from "@/pages/Practice/data/practiceJS.data";

const PracticeJS = () => {
  const [level1Tasks] = useState(() =>
    getRandomTaskSet(practiceJavaScriptLevel1TaskGroups)
  );

  const [level2Tasks] = useState(() =>
    getRandomTaskSet(practiceJavaScriptLevel2TaskGroups)
  );

  const [level3Tasks] = useState(() =>
    getRandomTaskSet(practiceJavaScriptLevel3TaskGroups)
  );

  return (
    <PracticeTemplate
      intro={practiceJavaScriptIntro}
      storageKey="practice-js-progress"
      levels={practiceJavaScriptLevels}
      level1Tasks={level1Tasks}
      level2Tasks={level2Tasks}
      level3Tasks={level3Tasks}
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