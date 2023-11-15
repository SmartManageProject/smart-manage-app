import { useEffect, useState } from "react";
import { Project } from "../../Context/UserProvider/types";
import { useUserLogged } from "../../Context/UserProvider/useGetUser";
import ProjectItem from "./ProjectItem/ProjectItem";
import styles from "./ProjectSideBar.module.scss";
import CreateProjectButton from "./CreateProjectButton/CreateProjectButton";
import { useNavigate } from "react-router-dom";

const ProjectSideBar = () => {
  const response = useUserLogged();
  const navigate = useNavigate();
  const [projectsList, setProjectsList] = useState<Project[] | undefined>(
    undefined
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function getProjects() {
    const projectsList = await response.getProjectsData();
    setProjectsList(projectsList);
  }
  useEffect(() => {
    getProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function redirectToCreateProject() {
    navigate("/CreateProject");
  }

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

      <CreateProjectButton change={redirectToCreateProject}>
        Criar Projeto
      </CreateProjectButton>
    </div>
  );
};

export default ProjectSideBar;
