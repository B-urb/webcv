import {useQuery} from "react-query";
import {allBlogposts} from "./api/directus";
import {Link, Outlet} from "react-router-dom";

const Blogposts = () => {

  const {status, data, error} = useQuery("blogposts",allBlogposts);

  if (status === 'loading'|| status === 'idle') {
    return <span>Loading...</span>
  }
  if (status === 'error') {
    if(error instanceof Error)
      return <span>Error: {error.message}</span>
  }
  if (status === 'success') {

    return <div className="flex justify-center">
      <ul className="list-none">
      {data.data != undefined && data.data.length > 0 ?
          data?.data.map((post, key) => <li key={key}>
            <Link to={post.id!.toString()}>{post.title!}</Link>
          </li>): <li>No Blogposts yet :( </li>}
      </ul>
    </div>
  }
  else return <span>wat</span>
}
export default Blogposts;