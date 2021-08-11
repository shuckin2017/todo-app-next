import { ProjectItem } from "./ProjectItem";

export const ProjectList = ({ projects }) => {
  return (
    <div className="mt-5 pr-5">
      {projects.map((item) => (
        <ProjectItem
          title={item.title}
          description={item.description}
          bgcolor={item.bgcolor}
          uid={item.uid}
          icon={item.icon.url}
        />
      ))}
    </div>
  );
};
