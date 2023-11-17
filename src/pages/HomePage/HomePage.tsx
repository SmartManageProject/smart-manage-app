
import { useState } from "react";
import ChatProject from "../../components/ChatProject/ChatProject";
import Header from "../../components/Header/Header";
import ProjectSideBar from "../../components/ProjectSideBar/ProjectSideBar";
import styles from "./Home.module.scss"

const HomePage = () => {

  const [projectId, setProjectId] = useState("")
  
  const selectProjectChat = (id: string) => {
    setProjectId(id)
  }
  console.log(projectId)

  return (
    <div className={styles.container}>
      <Header/>
      <ProjectSideBar selectProjectChat={selectProjectChat}/>
      <ChatProject/>
    </div>
  );
};

export default HomePage;
