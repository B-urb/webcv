const tagIconMapping: Object = {
  sql: "azuresqldatabase",
  cpp: "cplusplus",
};

const SkillsBadge = (props: { id: string; text: string }) => {
  console.log(props.id);
  const findIconOrNull = () => {
    if (!(props.id.toLowerCase() in tagIconMapping))
      return `devicon-${props.id.toLowerCase()}-plain`;
    return `devicon-${tagIconMapping[props.id.toLowerCase() as keyof Object]}-plain`;
  };

  return (
    <div
      className="flex h-20 w-32 items-center justify-center gap-x-1
     rounded-xl bg-gradient-to-br from-primary to-accent text-center
     shadow-lg shadow-secondary dark:text-text"
    >
      <div className="text-center text-xl font-extrabold">
        <i className={findIconOrNull()} />
      </div>
      <span className="text-xl opacity-100">{`${props.text}`}</span>
    </div>
  );
};
export default SkillsBadge;
