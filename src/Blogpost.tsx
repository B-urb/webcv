import {Link, useParams} from "react-router-dom";
import {useQuery, UseQueryResult} from "react-query";
import ReactMarkdown from "react-markdown";
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

    case "success": {return data != undefined ? <div className="relative flex flex-col  items-center">
      <Link to="/blogposts"><button className="absolute top-2 left-2">
        <FontAwesomeIcon icon={faArrowAltCircleLeft}/></button>
      </Link>

        <h2 className="font-roboto text-xl md:text-2xl">{data.title!}</h2>
        <div className="inline-block md:min-w-[65vw] max-w-[90vw] prose prose-sm dark:prose-p:text-amber-300"><ReactMarkdown children={data.content!}/> </div>
      </div> : <div>No Blogdata</div>}
  }
}
export default Blogpost;