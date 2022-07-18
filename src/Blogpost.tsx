import parse from "html-react-parser";
import MetaTag from "./MetaTag";
import {useParams} from "react-router-dom";


const Blogpost =  (props: {content: string}) => {
const {id} = useParams()
  return <div className="shadow-md shadow-black dark:shadow-white dark:shadow-md h-full self-stretch rounded-md m-4">
    <div className="shadow-sm p-3 rounded-md bg-yellow-600 dark:bg-gray-900 min-w-0 self-stretch h-full max-h-full divide-y divide-white divide-dotted grid text-xs md:text-md">
      <div className="row-span-1">
        <h2 className="font-roboto text-xl md:text-2xl">Header</h2></div>
      <div className="row-auto ">{props.content + "ID:" + id}</div>
      <div className="row-end-auto row-span-1 p-3 flex align-bottom h-fit"><MetaTag tag={"C++"}/></div>
    </div>
  </div>

}
export default Blogpost;