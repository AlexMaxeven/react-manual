import { useState } from "react";
import PracticeTemplate from "@/pages/Practice/components/PracticeTemplate/PracticeTemplate";
import { getRandomTaskSet } from "@/shared/lib/getRandomTaskSet";

import {
  practiceReactIntro,
  practiceReactLevels,
  practiceReactLevel1TaskGroups,
  practiceReactLevel2TaskGroups,
  practiceReactLevel3TaskGroups,
} from "@/pages/Practice/data/practiceReact.data";

const PracticeReact = () => {
  const [level1Tasks] = useState(() =>
    getRandomTaskSet(practiceReactLevel1TaskGroups)
  );

  const [level2Tasks] = useState(() =>
    getRandomTaskSet(practiceReactLevel2TaskGroups)
  );

  const [level3Tasks] = useState(() =>
    getRandomTaskSet(practiceReactLevel3TaskGroups)
  );

  return (
    <PracticeTemplate
      intro={practiceReactIntro}
      storageKey="practice-react-progress"
      levels={practiceReactLevels}
      level1Tasks={level1Tasks}
      level2Tasks={level2Tasks}
      level3Tasks={level3Tasks}
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