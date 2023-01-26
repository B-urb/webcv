import Link from "next/link"
import {allBlogposts, IBlogPost} from "../../lib/directus";
import BlogpostCard from "../../components/BlogpostCard";
import { NextSeo } from 'next-seo';
const Blogposts = (props: {blogposts: Array<IBlogPost> }) => {



 return <div className="text-center mt-2 flex flex-col items-center justify-center">
   <NextSeo title={"Björn Urban | Blogposts"} description={"Checkout my Blogposts. I write about everything related to tech, mostly tutorials and experiences from my hobby projects."}/>
   <h2>Blogposts about mostly tech related topics. Tutorials, experiences and more.</h2>
        <nav className="flex flex-row gap-x-4 overflow-hidden list-none w-96 min-w-[90vw] max-w-[100vw] md:max-w-[80vw]
        justify-center">
          {props.blogposts != undefined && props.blogposts.length > 0 ?
              props.blogposts.map((post, key) => <Link key={key} href={"blogposts/"+post.id!.toString()}><a className="w-96 h-96">
                <BlogpostCard name={post.title} thumbnail={post.thumbnail} abstract={post.abstract} date={post.date_created} tags={post.tags}/></a></Link>) : <span>No Blogposts yet :( </span>}
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