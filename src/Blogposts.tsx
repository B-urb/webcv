import {useQuery, UseQueryResult} from "react-query";
import {allBlogposts, IBlogPost} from "./api/directus";
import {Link} from "react-router-dom";
import {ManyItems} from "@directus/sdk";

const Blogposts = () => {

  const {status, data, error} : UseQueryResult<ManyItems<IBlogPost>, Error> = useQuery("blogposts",allBlogposts);

  switch (status) {
    case "idle":
      return <div>idle</div>;
    case 'loading': return <span>Loading...</span>
    case 'error':
      return <span>Error: {error.message}</span>

    case "success": return <div className="text-center mt-2 flex items-center justify-center">
        <ul className="shadow-md rounded-2xl shadow-black dark:shadow-gray-300 group first:hover:rounded-t-2xl last:rounded-b-2xl list-none border-solid border-l-2 border-r-2 border-b-2 border-t-2 w-96 md:w-3/4 justify-center border-black dark:border-amber-50 dark:divide-amber-50 divide-y divide-double">
          {data.data != undefined && data.data.length > 0 ?
              data.data.map((post, key) => <li key={key} className="border-black group-hover:rounded-t-2xl dark:border-gray-50 border-solid  hover:bg-gray-400">
                <Link to={post.id!.toString()}>{post.title!}</Link>
              </li>) : <li>No Blogposts yet :( </li>}
        </ul>
      </div>
    }
}
export default Blogposts;