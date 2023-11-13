import styles from "./CreateProject.module.scss"
import Header from '../../components/Header/Header'
import FormsProject from "../../components/FormsProject/FormsProject"
import ListUsers from "../../components/ListUsers/ListUsers"

// type Props = {}

const CreateProject = () => {
  return (
    <div className={styles.container_project}>
      <Header/>
      <FormsProject/>
      <ListUsers/>
    </div>
  )
}

export default CreateProject