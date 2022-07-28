import parse from "html-react-parser";
import {Link, useParams} from "react-router-dom";
import {useQuery, UseQueryResult} from "react-query";
import {getPostById,IBlogPost} from "./api/directus";
import {PartialItem} from "@directus/sdk";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowAltCircleLeft} from "@fortawesome/free-solid-svg-icons";

const Blogpost = () => {
  const {id} = useParams()
  const {status, data, error} : UseQueryResult<PartialItem<IBlogPost>, Error> = useQuery(["blogpost",id], () => getPostById(id!),{
    refetchOnWindowFocus: false,
  });

  switch (status) {
    case "idle":
      return <div>idle</div>;
    case 'loading': return <span>Loading...</span>
    case 'error':
          return <span>Error: {error.message}</span>

    case "success": {return data != undefined ? <div className="relative justify-center text-center items-center3">
      <Link to="/blogposts"><button className="absolute top-2 left-2"><FontAwesomeIcon icon={faArrowAltCircleLeft}/></button></Link>
        <h2 className="font-roboto text-xl md:text-2xl">{data.title!}</h2>
        <div className="row-auto ">{parse(data.content!)}</div>
      </div> : <div>No Blogdata</div>}
  }
}
export default Blogpost;