import {useQuery} from "react-query";
import {start} from "./api/directus";
import {Link, Outlet} from "react-router-dom";

const Blogposts = () => {

  const {status, data, error} = useQuery("blogposts",start);

  if (status === 'loading'|| status === 'idle') {
    return <span>Loading...</span>
  }
  if (status === 'error') {
    if(error instanceof Error)
      return <span>Error: {error.message}</span>
  }
  if (status === 'success') {

    return <div>
      <Outlet/>
      <ul className="list-none">
      {data.data != undefined && data.data.length > 0 ?
          data?.data.map((post, key) => <li key={key}>
            Ehm Hello someone there
            <Link to={post.id!.toString()}>Here</Link>
          </li>): <li>No Blogposts yet :( </li>}
      </ul>
    </div>
  }
  else return <span>wat</span>
}
export default Blogposts;