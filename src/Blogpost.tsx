import {Link, useParams} from "react-router-dom";
import {useQuery, UseQueryResult} from "react-query";
import {getPostById, IBlogPost} from "./api/directus";
import {PartialItem} from "@directus/sdk";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowAltCircleLeft} from "@fortawesome/free-solid-svg-icons";
import {BlogpostMarkdown} from "./BlogpostMarkdown";
import {CommentGroup} from "./CommentGroup";

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

    case "success": {return data != undefined ? <div className="flex items-center flex-col">
      <div className="flex flex-row w-[90vw] justify-between mx-4">
      <Link to="/blogposts"><button className="md:text-2xl transition-all hover:scale-150">
        <FontAwesomeIcon icon={faArrowAltCircleLeft}/></button>
      </Link>
        <h2 className="hidden md:inline font-roboto opacity-50 w-48 text-xl md:text-sm">{data.title!}</h2>
      </div>
      <article className="flex justify-items-center flex-col mt-6 min-w-[65vw]
      max-w-[90vw]
       prose prose-pre:bg-inherit dark:prose-p:text-yellow-300
       dark:prose-headings:text-yellow-300
       dark:prose-invert"><h2>{data.title!}</h2><BlogpostMarkdown markdown={data.content!}/> </article>
      <CommentGroup/>
      </div> : <div>No Blogdata</div>}
  }
}
export default Blogpost;