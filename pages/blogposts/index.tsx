import Link from "next/link"
import {allBlogposts, IBlogPost} from "../../lib/directus";
import MetaTag from "../../components/MetaTag";
import SEO from "../../components/Seo";

const Blogposts = (props: {blogposts: Array<IBlogPost> }) => {
  const dateOptions :Intl.DateTimeFormatOptions = {year: "numeric", month: 'long', day: '2-digit'};



 return <div className="text-center mt-2 flex items-center justify-center">
   <SEO title={"Björn Urban | Blogposts"} description={"Overview of all blogposts I have written"}/>
        <nav className="group overflow-hidden list-none w-96 min-w-[90vw] max-w-[100vw] md:max-w-[80vw] shadow-sm shadow-black rounded-t-md
        justify-center">
          {props.blogposts != undefined && props.blogposts.length > 0 ?
              props.blogposts.map((post, key) => <Link key={key} href={"blogposts/"+post.id!.toString()}>
                <a className="border-black bg-light-4 dark:bg-dark-2 dark:bg-gradient-to-br text-black transition-all ease-in-out delay-50
                duration-500 hover:cursor-pointer dark:hover:to-gray-500 text-sm md:text-xl dark:from-gray-800 dark:to-black flex md:h-18
                hover:mix-blend-overlay dark:hover:mix-blend-normal dark:text-yellow-300 font-roboto
                md:justify-center md:justify-between dark:border-gray-50 border-b-2 border-solid">
                  <div className="flex flex-col justify-between text-left ml-1.5">
                    <span className="font-extrabold">{post.title!}</span>
                  <span className="text-xs">{new Date(post.date_created!).toLocaleDateString("de-DE", dateOptions)}</span>
                  </div>
                  <div className="hidden md:flex  md:flex-wrap justify-self-end md:flex-row-reverse w-1/3 py-1 h-fit gap-1 mr-2">{post.tags?.map((tag,key) => {
                      if(tag !== undefined)
                        return <MetaTag key={key} tag={tag}/>
                    }
                )}
                  </div>
              </a></Link>) : <li>No Blogposts yet :( </li>}
        </nav>
      </div>

}


export async function getStaticProps() {
  // Call an external API endpoint to get posts
const res = await allBlogposts()
  const blogposts = res.data
  return {
    props: {
      blogposts,
    },
  }
}

export default Blogposts;