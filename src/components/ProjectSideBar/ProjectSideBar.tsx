import { useEffect, useState } from "react";
import { Project } from "../../Context/UserProvider/types";
import { useUserLogged } from "../../Context/UserProvider/useGetUser";
import ProjectItem from "./ProjectItem/ProjectItem";
import styles from "./ProjectSideBar.module.scss";
import CreateProjectButton from "./CreateProjectButton/CreateProjectButton";
import { useNavigate } from "react-router-dom";

type projectSideBarProps = {
  selectProjectChat: (id: string) => void;
};

const ProjectSideBar = ({ selectProjectChat }: projectSideBarProps) => {
  const { getProjectsData } = useUserLogged();
  const navigate = useNavigate();
  const [projectsList, setProjectsList] = useState<Project[] | undefined>(
    undefined,
  );

  useEffect(() => {
    async function getProjects() {
      const projectsList = await getProjectsData();
      setProjectsList(projectsList);
    }
    getProjects();
  }, [getProjectsData]);

  function redirectToCreateProject() {
    navigate("/CreateProject");
  }

  return (
    <div className={styles.container}>
      <section className={styles.projectsList}>
        {projectsList?.map((project) => (
          <ProjectItem
            key={project.id}
            name={project.name}
            id={project.id}
            description={project.description}
            selectProjectChat={selectProjectChat}
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
