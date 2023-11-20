
import { useState } from "react";
import ChatProject from "../../components/ChatProject/ChatProject";
import Header from "../../components/Header/Header";
import ProjectSideBar from "../../components/ProjectSideBar/ProjectSideBar";
import styles from "./Home.module.scss"
const HomePage = () => {

  const [projectId, setProjectId] = useState<string | undefined>("")
  const selectProjectChat = (id?: string) => {
    setProjectId(id)
  }

  return (
    <div className={styles.container}>
      <Header/>
      <ProjectSideBar selectProjectChat={selectProjectChat}/>
      <ChatProject projectId = {projectId}/>
    </div>
  );
};

export default HomePage;
