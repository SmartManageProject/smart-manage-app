
import { useEffect, useState } from "react"
import { Project } from "../../Context/UserProvider/types"
import { useUserLogged } from "../../Context/UserProvider/useGetUser"
import ProjectItem from "./ProjectItem/ProjectItem"
import styles from "./ProjectSideBar.module.scss"

const ProjectSideBar = () => {
  const response = useUserLogged()
  const [projectsList, setProjectsList] = useState<Project[] | undefined>(undefined);

  async function suaFuncaoAsync() {
    const projectsList = await response.getProjectsData()
    setProjectsList(projectsList)
  }
  useEffect(() => {
    suaFuncaoAsync();
  }, []); 

  return (
    <div className={styles.container}>
      {projectsList?.map((project) => (
        <ProjectItem key={project.id} name={project.name} description={project.description}/>
      ))}
    </div>
  )
}

export default ProjectSideBar