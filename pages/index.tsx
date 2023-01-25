import IntroText from "../components/IntroText";
import {getIntrotext, Introtext} from "../lib/directus";
import { NextSeo } from 'next-seo';

const AboutMe = (props: {data:Introtext}) => {

  return <div className="flex flex-col items-center text-xs md:text-xl">
    <NextSeo title={"Björn Urban"} description={"Read about my prior working experience and education, and a little info about me as a person."}/>
    <div className="w-4/5">
    <IntroText introtext={props.data.introtext}/>
    </div>
  </div>
}
export async function getStaticProps() {
  const data = await getIntrotext() as Introtext

  return {
    props: {
      data,
    },
  }
}
export default AboutMe;