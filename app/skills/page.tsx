import { Suspense } from "react";

import SkillsGroup from "../../components/SkillsGroup";

const SkillsView = () => {
  return (
    <div className="flex w-full flex-col items-center gap-y-4">
      <h2 className="text-xl">Skills</h2>
      <div className="w-fit">
        <Suspense>
          <SkillsGroup />
        </Suspense>
      </div>
    </div>
  );
};

export default SkillsView;
