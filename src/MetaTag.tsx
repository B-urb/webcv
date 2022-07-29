
const tagIconMapping:Object = {
    "cpp":"cplusplus",
    "kotlin": "kotlin"
}



const MetaTag = (props: {tag: string}) => {
    const findIconOrNull = () => {
        if(!(props.tag in tagIconMapping))
            return ""
        return `devicon-${tagIconMapping[props.tag as keyof Object]}-plain`}

    return (
        <div className=" md:text-md text-md rounded-xl bg-slate-500 text-white flex w-fit p-0.5 text-center justify-around">
        <div className="text-center text-xl pt-1"><i className={findIconOrNull()}></i>
      </div>
            <span className="ml-0.5 text-xl md:text-2xl">
                {""+ props.tag}
        </span>

        </div>
    )

}
export default MetaTag;