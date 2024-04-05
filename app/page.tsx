import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Metadata } from "next";
import Link from "next/link";
import React, { Suspense } from "react";

import IntroText from "../components/IntroText";
import ProfileImage from "../components/ProfileImage";
import ProjectsList from "../components/ProjectsList";
import WorkExperience from "../components/WorkExperience";

export const metadata: Metadata = {
  title: "Björn Urban",
  description:
    "Read about my prior working experience and education, and a little info about me as a person.",
};
const AboutMe = () => {
  return (
    <div className="flex flex-col gap-y-5 text-xs md:text-xl">
      <div className="flex w-full flex-col items-center justify-center justify-items-center  ">
        <div className="flex w-4/5 flex-col items-center justify-center gap-y-4">
          <div className="flex w-fit flex-col gap-y-4">
            <div className="flex flex-col items-center justify-center gap-x-5 2xl:flex-row">
              <ProfileImage />
              <Suspense>
                <IntroText />
              </Suspense>
            </div>
            <h2 className="w-full border-b-4 border-dotted border-accent">
              Work Experience
            </h2>
            <Suspense>
              <WorkExperience />
            </Suspense>
          </div>
          <h2 className="w-full border-b-4 border-dotted border-accent">
            Work Projects
          </h2>
          <div className="self-start">
            <Suspense>
              <ProjectsList category="work" />
            </Suspense>
          </div>
          <div className="flex w-full justify-center">
            <Link href="/projects">
              <button
                type="button"
                className="w-48 rounded-md bg-accent lg:float-end"
              >
                <span>See all Projects </span>
                <FontAwesomeIcon
                  aria-label="Back to list"
                  icon={faArrowAltCircleRight}
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
