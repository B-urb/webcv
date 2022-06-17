




const MetaTag = (props: {tag: string}) => {
    return (
        <div className="text-xl rounded-xl bg-slate-500 text-white w-fit p-2 divide-x divide-white">
        <span className="divide-white divide-x-2"><i className="devicon-cplusplus-plain"></i>

            <span className="md:text-md ml-2 mr-1">
                {" "+ props.tag}
        </span>
        </span>

        </div>
    )

}
export default MetaTag;