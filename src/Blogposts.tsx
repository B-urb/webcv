import {useQuery, UseQueryResult} from "react-query";
import {allBlogposts, IBlogPost} from "./api/directus";
import {Link} from "react-router-dom";
import {ManyItems} from "@directus/sdk";
import MetaTag from "./MetaTag";

const Blogposts = () => {

  const {status, data, error} : UseQueryResult<ManyItems<IBlogPost>, Error> = useQuery("blogposts",allBlogposts);

  switch (status) {
    case "idle":
      return <div>idle</div>;
    case 'loading': return <span>Loading...</span>
    case 'error':
      return <span>Error: {error.message}</span>

    case "success": return <div className="text-center mt-2 flex items-center justify-center">
        <ul className="group overflow-hidden list-none  w-96 md:w-3/4 justify-center ">
          {data.data != undefined && data.data.length > 0 ?
              data.data.map((post, key) => <Link key={key} to={post.id!.toString()}>
                <li className="border-black dark:bg-gradient-to-r dark:transition-all dark:ease-in-out dark:delay-150 dark:duration-200 hover:dark:to-gray-500 font-extrabold text-xl dark:from-gray-800 dark:to-black flex h-14 justify-center md:justify-between dark:border-gray-50 border-b-2 border-solid">
                  <div><span>{post.title!}</span> <br/>
                  <span className="text-sm">{post.date_created!}</span>
                  </div>
                  <div className="hidden md:flex md:flex-row py-1 gap-x-1">{post.tags?.map((tag,key) => {
                      if(tag !== undefined)
                        return <MetaTag key={key} tag={tag}/>
                    }
                )}
                  </div>
              </li></Link>) : <li>No Blogposts yet :( </li>}
        </ul>
      </div>
    }
}
export default Blogposts;