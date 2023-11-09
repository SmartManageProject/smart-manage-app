
import ProjectItem from "./ProjectItem/ProjectItem"
import styles from "./ProjectSideBar.module.scss"

const ProjectSideBar = () => {
  return (
    <div className={styles.container}>
      <ProjectItem/>
      <ProjectItem/>
      <ProjectItem/>
      <ProjectItem/>
      <ProjectItem/>
    </div>
  )
}

export default ProjectSideBar