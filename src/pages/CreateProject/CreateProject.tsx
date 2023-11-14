import styles from "./CreateProject.module.scss";
import Header from "../../components/Header/Header";
import FormsProject from "../../components/FormsProject/FormsProject";
import ListUsers from "../../components/ListUsers/ListUsers";
import { useEffect, useState } from "react";
import { useUserLogged } from "../../Context/UserProvider/useGetUser";
import { useNavigate } from "react-router-dom";

const CreateProject = () => {
  const [listOfUsers, setListOfUsers] = useState<string[]>([]);
  const response = useUserLogged();
  const navigate = useNavigate();
  const [nameProject, setNameProjet] = useState("");
  const [descriptionProject, setDescriptionProjet] = useState("");


  const addOrRemoveUser = (id: string) => {
    if(listOfUsers.includes(id)){
      setListOfUsers(["funcionou o remover"])
      // setListOfUsers(listOfUsers.filter((item) => item != id))
      console.log("remove")
      return
    } 
    setListOfUsers(["funcionou o adiconar"])
    // setListOfUsers((prev) => [...prev, id])
    console.log("add")
  }

  useEffect(() => (
    console.log(listOfUsers)
  ), [listOfUsers])

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
    navigate("/");
  }

  const activeCreateProject = async() => {
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
      <ListUsers addOrRemoveUser={addOrRemoveUser}/>
    </div>
  );
};

export default CreateProject;
