import styles from "./CreateProject.module.scss"
import Header from '../../components/Header/Header'
import FormsProject from "../../components/FormsProject/FormsProject"

// type Props = {}

const CreateProject = () => {
  return (
    <div className={styles.container_project}>
      <Header/>
      <FormsProject/>
    </div>
  )
}

export default CreateProject