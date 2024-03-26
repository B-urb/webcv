import type { Metadata } from "next";

import IntroText from "../components/IntroText";
import type { Introtext } from "../lib/directus";
import { getIntrotext } from "../lib/directus";

export const metadata: Metadata = {
  title: "Björn Urban",
  description:
    "Read about my prior working experience and education, and a little info about me as a person.",
};
const AboutMe = async () => {
  const data = (await getIntrotext()) as Introtext;

  return (
    <div className="flex flex-col text-xs md:text-xl">
      <div className="flex w-full justify-center justify-items-center ">
        <div className="flex w-4/5 justify-center justify-items-center ">
          <IntroText introtext={data.introtext} />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
