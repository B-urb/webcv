import IntroText from "../components/IntroText";
import {NextPage} from "next";
import {getIntrotext, Introtext} from "../lib/directus";
import SEO from "../components/Seo";


const AboutMe = (props: {data:Introtext}) => {

  return <div className="flex flex-col items-center text-xs md:text-xl">
    <SEO title={"Björn Urban"} description={"A little info about me :) "}/>
    <IntroText introtext={props.data.introtext}/>
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