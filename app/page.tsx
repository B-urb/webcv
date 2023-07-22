import IntroText from "../components/IntroText";
import {getIntrotext, Introtext} from "../lib/directus";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Björn Urban",
  description: "Read about my prior working experience and education, and a little info about me as a person."
}
const  AboutMe = async () => {
  const data = await getIntrotext() as Introtext

  return <div className="flex flex-col text-xs md:text-xl">
      <div className="w-full flex justify-items-center justify-center ">
        <div className="w-4/5 flex justify-items-center justify-center ">
    <IntroText introtext={data.introtext}/>
        </div>
    </div>
  </div>
}

export default AboutMe;