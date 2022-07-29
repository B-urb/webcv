const tagIconMapping: Object = {
  "cpp": "cplusplus",
}


const MetaTag = (props: { tag: string }) => {
  const findIconOrNull = () => {
    if (!(props.tag.toLowerCase() in tagIconMapping))
      return `devicon-${props.tag.toLowerCase()}-plain`
    return `devicon-${tagIconMapping[props.tag.toLowerCase() as keyof Object]}-plain`
  }

  return (
      <div className="rounded-xl bg-slate-500 text-white w-fit flex pl-1 md:pt-0.5 pr-1.5 text-center">
        <div className="text-center text-base md:text-lg"><i className={findIconOrNull()}></i>
        </div>
        <span className="ml-0.5 text-sm md:text-base">
                {"" + props.tag}
        </span>

      </div>
  )

}
export default MetaTag;