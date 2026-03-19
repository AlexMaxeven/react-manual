import { useState } from "react";
import PracticeTemplate from "@/pages/Practice/components/PracticeTemplate/PracticeTemplate";
import { getRandomTaskSet } from "@/shared/lib/getRandomTaskSet";

import {
  practiceTypeScriptIntro,
  practiceTypeScriptLevels,
  practiceTypeScriptLevel1TaskGroups,
  practiceTypeScriptLevel2TaskGroups,
  practiceTypeScriptLevel3TaskGroups,
} from "@/pages/Practice/data/practiceTypescript.data";

const PracticeTypescript = () => {
  const [level1Tasks] = useState(() =>
    getRandomTaskSet(practiceTypeScriptLevel1TaskGroups)
  );

  const [level2Tasks] = useState(() =>
    getRandomTaskSet(practiceTypeScriptLevel2TaskGroups)
  );

  const [level3Tasks] = useState(() =>
    getRandomTaskSet(practiceTypeScriptLevel3TaskGroups)
  );

  return (
    <PracticeTemplate
      intro={practiceTypeScriptIntro}
      storageKey="practice-typescript-progress"
      levels={practiceTypeScriptLevels}
      level1Tasks={level1Tasks}
      level2Tasks={level2Tasks}
      level3Tasks={level3Tasks}
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

export default PracticeTypescript;