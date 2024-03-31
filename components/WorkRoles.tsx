import type { WorkRoles } from "../lib/directus";

const WorkRolesView = (props: { roles: WorkRoles[] }) => {
  return (
    <div>
      {props.roles.map((elem) => (
        <div key={elem.id}>{elem.title}</div>
      ))}
    </div>
  );
};

export default WorkRolesView;
