import styles from "./CreateProject.module.scss";
import Header from "../../components/Header/Header";
import FormsProject from "../../components/FormsProject/FormsProject";
import ListUsers from "../../components/ListUsers/ListUsers";
import { useEffect, useState } from "react";
import { useUserLogged } from "../../Context/UserProvider/useGetUser";
import { useNavigate } from "react-router-dom";

const CreateProject = () => {
  const response = useUserLogged();
  const navigate = useNavigate();
  const [nameProject, setNameProjet] = useState("");
  const [descriptionProject, setDescriptionProjet] = useState("");
  const [listOfUsers, setListOfUsers] = useState<string[]>([]);
  const addOrRemoveUser = (id: string) => {
    if(listOfUsers.includes(id)){
      setListOfUsers(listOfUsers.filter((item) => item != id))
      return
    } 
    setListOfUsers((prev) => [...prev, id])
  }

  type createProjectProps = {
    name: string;
    description: string;
    membersId: string[];
  };
  const createProject = async ({
    name,
    description,
    membersId,
  }: createProjectProps) => {
    await response.createProjectRequest(name, description, membersId);
  }
  const activeCreateProject = async() => {
    createProject({name:nameProject, description:descriptionProject, membersId:listOfUsers});
    navigate("/");
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
      <ListUsers addOrRemoveUser={addOrRemoveUser} usersInList={listOfUsers}/>
    </div>
  );
};

export default CreateProject;