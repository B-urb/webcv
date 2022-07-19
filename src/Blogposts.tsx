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

    case "success": return <div>
        <ul className="list-none">
          {data.data != undefined && data.data.length > 0 ?
              data.data.map((post, key) => <li key={key}>
                <Link to={post.id!.toString()}>{post.title!}</Link>
              </li>) : <li>No Blogposts yet :( </li>}
        </ul>
      </div>
    }
}
export default Blogposts;