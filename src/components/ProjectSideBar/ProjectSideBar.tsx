import { useEffect, useState } from "react";
import { Project } from "../../Context/UserProvider/types";
import { useUserLogged } from "../../Context/UserProvider/useGetUser";
import ProjectItem from "./ProjectItem/ProjectItem";
import styles from "./ProjectSideBar.module.scss";
import CreateProjectButton from "./CreateProjectButton/CreateProjectButton";

const ProjectSideBar = () => {
  const response = useUserLogged();
  const [projectsList, setProjectsList] = useState<Project[] | undefined>(
    undefined
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function suaFuncaoAsync() {
    const projectsList = await response.getProjectsData();
    setProjectsList(projectsList);
  }
  useEffect(() => {
    suaFuncaoAsync();
  }, [suaFuncaoAsync]);

  return (
    <div className={styles.container}>
      <section>
        {projectsList?.map((project) => (
          <ProjectItem
            key={project.id}
            name={project.name}
            description={project.description}
          />
        ))}
      </section>

      <CreateProjectButton />
    </div>
  );
};

export default ProjectSideBar;
