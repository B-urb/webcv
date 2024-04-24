import getRepoLanguageStats from "../lib/oktokit";

async function showRepoLanguageStats(
  repoUrl: string
): Promise<null | { [p: string]: number }> {
  const [owner, repo] = repoUrl.replace("https://github.com/", "").split("/");
  const stats = await getRepoLanguageStats(owner, repo);
  return stats;
}

const numberFormat = new Intl.NumberFormat("en-US", {
  compactDisplay: "short",
  notation: "compact",
});

const ProjectStatsUnavailable = () => (
  <div className="flex h-32 w-96 flex-col items-center justify-center bg-secondary">
    No repo data available
  </div>
);

const ProjectStats = async (props: { url?: string }) => {
  if (!props.url) {
    return <ProjectStatsUnavailable />;
  }
  const stats = await showRepoLanguageStats(props.url ?? "");

  if (!stats) {
    return <ProjectStatsUnavailable />;
  }
  const totalLoc = Object.values(stats ?? {}).reduce(
    (acc, curr) => acc + curr,
    0
  );

  return (
    <div className="flex w-4/6 flex-col rounded-sm bg-secondary p-3">
      {Object.entries(stats ?? {}).map(([language, loc]) => {
        return (
          <div key={language} className="flex items-center gap-2">
            <span className="whitespace-nowrap">{language}</span>
            <div className="h-2.5 w-full rounded-full bg-secondary">
              <div
                className="h-2.5 rounded-full bg-primary"
                style={{
                  width: `${(loc / totalLoc) * 100}%`,
                }}
              />
            </div>
            <div className="text-sm">{numberFormat.format(loc)}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectStats;
