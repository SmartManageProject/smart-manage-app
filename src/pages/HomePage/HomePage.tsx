import { useEffect, useState } from "react";
import { socket } from "../../service/api";
import ChatProject from "../../components/ChatProject/ChatProject";
import Header from "../../components/Header/Header";
import ProjectSideBar from "../../components/ProjectSideBar/ProjectSideBar";
import styles from "./Home.module.scss";
import { IMessage } from "../../types/AppTypes";

const HomePage = () => {
  const [projectId, setProjectId] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    socket.connect();

    socket.on("message", (message: IMessage) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      socket.disconnect();
      socket.off("message");
    };
  }, []);

  useEffect(() => {
    if (projectId !== "") {
      socket.emit("selectRoom", { projectId }, async (messages: IMessage[]) => {
        setMessages(messages);
      });
    }
  }, [projectId]);


  return (
    <div className={styles.container}>
      <Header />
      <ProjectSideBar selectProjectChat={setProjectId} selectProjectDescription={setProjectDescription}/>
      {projectId !== "" && (
        <ChatProject messages={messages} projectId={projectId} projectDescription={projectDescription}/>
      )}
    </div>
  );
};

export default HomePage;
