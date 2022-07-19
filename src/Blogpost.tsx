import parse from "html-react-parser";
import {useParams} from "react-router-dom";
import {useQuery, UseQueryResult} from "react-query";
import {getPostById,IBlogPost} from "./api/directus";
import {ManyItems, PartialItem} from "@directus/sdk";
import {defaultOptionsDirect} from "@testing-library/user-event/dist/types/options";


const Blogpost = () => {
  const {id} = useParams()
  const {status, data, error} : UseQueryResult<PartialItem<IBlogPost>, Error> = useQuery("blogpost", () => getPostById(parseInt(id!)));

  switch (status) {
    case "idle":
      return <div>idle</div>;
    case 'loading': return <span>Loading...</span>
    case 'error':
          return <span>Error: {error.message}</span>

    case "success": {return data != undefined ? <div>
        <h2 className="font-roboto text-xl md:text-2xl">{data.title!}</h2>
        <div className="row-auto ">{parse(data.content!)}</div>
      </div> : <div>No Blogdata</div>}
  }
}
export default Blogpost;