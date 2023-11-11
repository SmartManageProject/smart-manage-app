import styles from './ProjectItem.module.scss'
import logo from '../../../assets/projectImage.png'

type projectItemProps = {
  name: string;
  description: string;
}

const ProjectItem = ({name}: projectItemProps) => {
  return (
    <div className={styles.projectContainer}>
      <img src={logo} alt="imagem do projeto" />
      <p>{name}</p>
    </div>

  )
}

export default ProjectItem