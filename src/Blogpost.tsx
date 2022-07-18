import parse from "html-react-parser";
import {useParams} from "react-router-dom";
import {useQuery} from "react-query";
import {getPostById} from "./api/directus";


const Blogpost = () => {
  const {id} = useParams()
  const {status, data, error} = useQuery("blogpost", () => getPostById(parseInt(id!)));

  if (status === 'loading' || status === 'idle') {
    return <span>Loading...</span>
  }
  if (status === 'error') {
    if (error instanceof Error)
      return <span>Error: {error.message}</span>
  }
  if (status === 'success') {

    return <div>
          <h2 className="font-roboto text-xl md:text-2xl">{data?.title!}</h2>
        <div className="row-auto ">{parse(data?.content!)}</div>
    </div>
  }
  else <div>Wat</div>
}
export default Blogpost;