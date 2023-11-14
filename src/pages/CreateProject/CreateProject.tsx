import styles from "./CreateProject.module.scss";
import Header from "../../components/Header/Header";
import FormsProject from "../../components/FormsProject/FormsProject";
import ListUsers from "../../components/ListUsers/ListUsers";
import { useState } from "react";
import { useUserLogged } from "../../Context/UserProvider/useGetUser";
import { useNavigate } from "react-router-dom";

// type Props = {}

const CreateProject = () => {
  const response = useUserLogged();
  const navigate = useNavigate();
  const [nameProject, setNameProjet] = useState("");
  const [descriptionProject, setDescriptionProjet] = useState("");
  const [listOfUsers, setListOfUsers] = useState<string[]>([]);

  type createProjectProps = {
    name: string;
    description: string;
    membersId: string[];
  };

  async function createProject({
    name,
    description,
    membersId,
  }: createProjectProps) {
    await response.createProjectRequest(name, description, membersId);
    navigate("/");
  }

  async function activeCreateProject() {
    createProject({name:nameProject, description:descriptionProject, membersId:listOfUsers})
  }

  return (
    <div className={styles.container_project}>
      <Header />
      <FormsProject
        valueName={nameProject}
        setName={(value) => setNameProjet(value)}
        valueDescription={descriptionProject}
        setDescription={(value) => setDescriptionProjet(value)}
        createProject={() => activeCreateProject()}
      />
      <ListUsers />
    </div>
  );
};

export default CreateProject;
