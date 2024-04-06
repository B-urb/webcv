import { allWorkExperience } from "../lib/directus";
import DirectusImage from "./DirectusImage";
import WorkRolesView from "./WorkRoles";

const workTime = (startdate: string, enddate?: string) => {
  // Helper function to format the date as MM/YYYY
  const formatDate = (date: string) => {
    const newDate = new Date(date);
    // Get the month and year, ensuring the month is in MM format
    const month = (newDate.getMonth() + 1).toString().padStart(2, "0");
    const year = newDate.getFullYear();
    return `${month}/${year}`;
  };

  // Format the start date
  const startFormatted = formatDate(startdate);

  // Check if enddate is provided, else use 'now'
  const endFormatted = enddate ? formatDate(enddate) : "now";

  return (
    <div className="flex flex-col items-center gap-y-1">
      <span>{endFormatted}</span>
      <div className="h-72 w-px border-r-2 border-dashed border-accent" />
      <span>{startFormatted}</span>
    </div>
  );
};
const WorkExperience = async () => {
  const experience = await allWorkExperience();
  return (
    <div className="flex flex-col gap-y-3 first:block">
      {experience !== undefined && experience.length > 0 ? (
        experience
          .sort(
            (a, b) =>
              new Date(b.startdate ?? "").getTime() -
              new Date(a.startdate ?? "").getTime()
          )
          .map((content, index) => (
            <div
              key={content.id}
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
              className="flex animate-slide-in-right
              flex-row gap-x-3 rounded-lg bg-gradient-to-br from-secondary to-transparent 
              p-3 opacity-0 shadow-sm shadow-accent"
            >
              {workTime(content.startdate, content.enddate)}
              <div className="flex size-14 items-center justify-center rounded-xl bg-secondary  2xl:size-20">
                <div className="relative size-10 2xl:size-16">
                  <DirectusImage src={content.logo} alt={content.name} />
                </div>
              </div>
              <div>
                <h3 className="font-extrabold underline">
                  <a href={content.url}>{content.name}</a>
                </h3>
                <WorkRolesView roles={content.roles ?? []} />
              </div>
            </div>
          ))
      ) : (
        <span>No Projects yet :( </span>
      )}
    </div>
  );
};

export default WorkExperience;
