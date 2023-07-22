import Link from "next/link"
import {allBlogposts, IBlogPost} from "../../lib/directus";
import BlogpostCard from "../../components/BlogpostCard";
import {Metadata} from "next";

export const metadata:Metadata = {
  title: "Björn Urban | Blogposts",
  description: "Checkout my Blogposts. I write about everything related to tech, mostly tutorials and experiences from my hobby projects."
}
const Blogposts = async () => {

  const res = await allBlogposts()
  const blogposts = res.data

 return (
   <div className="text-center mt-2 flex flex-col items-center justify-center">
     <h2>Blogposts about mostly tech related topics. Tutorials, experiences and more.</h2>
          <nav className="flex flex-row gap-x-4 overflow-hidden list-none w-96 min-w-[90vw] max-w-[100vw] md:max-w-[80vw]
          justify-center">
            {blogposts != undefined && blogposts.length > 0 ?
                blogposts.map((post, key) => <Link key={key} href={"blogposts/"+post.id!.toString()} className="w-96 h-96">
                  <BlogpostCard name={post.title} thumbnail={post.thumbnail} abstract={post.abstract} date={post.date_created} tags={post.tags}/></Link>) : <span>No Blogposts yet :( </span>}
          </nav>
        </div>
 );

}


export default Blogposts;