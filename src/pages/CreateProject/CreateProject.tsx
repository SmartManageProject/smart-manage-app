import styles from "./CreateProject.module.scss";
import Header from "../../components/Header/Header";
import FormsProject from "../../components/FormsProject/FormsProject";
import ListUsers from "../../components/ListUsers/ListUsers";
import { useState } from "react";

// type Props = {}

const CreateProject = () => {
  const [nameProject, setNameProjet] = useState("");
  const [descriptionProject, setDescriptionProjet] = useState("");
  const [listOfUsers, setListOfUsers] = useState([]);

  return (
    <div className={styles.container_project}>
      <Header />
      <FormsProject
        valueName={nameProject}
        setName={(value) => setNameProjet(value)}
        valueDescription={descriptionProject}
        setDescription={(value) => setDescriptionProjet(value)}
      />
      <ListUsers />
    </div>
  );
};

export default CreateProject;
