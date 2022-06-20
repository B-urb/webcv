




const MetaTag = (props: {tag: string}) => {
    return (
        <div className="md:text-xl text-sm rounded-xl bg-slate-500 text-white w-fit p-2 divide-x divide-white">
        <span className="divide-white divide-x-2"><i className="devicon-cplusplus-plain"></i>

            <span className="ml-2 mr-1 hidden md:visible">
                {" "+ props.tag}
        </span>
        </span>

        </div>
    )

}
export default MetaTag;