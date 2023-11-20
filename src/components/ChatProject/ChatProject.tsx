import styles from "./ChatProject.module.scss";
import { FormEvent, useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import Message from "./Message/Message";
import { useUserLogged } from "../../Context/UserProvider/useGetUser";

type chatPrjectProps = {
  projectId: string;
};

type Message = {
  userId: string;
  projectId: string;
  text: string;
};

const socket = io("https://smartmanage-api-ieme.onrender.com/");

const ChatProject = ({ projectId }: chatPrjectProps) => {
  const user = useUserLogged();
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState("");
  const messagesContainerRef = useRef();
  const userId = user.id;
  useEffect(() => {
    if (projectId != "") {
      socket.emit("selectRoom", { projectId }, async (messages: Message[]) => {
        setMessages(messages);
      });
    }
  }, [projectId, messages]);

  const sendMenssage = (event: FormEvent, message: string) => {
    event.preventDefault();
    if (message.trim() != '') {
      socket.emit("message", { userId, projectId, text: message });
      setMessage("");
    }
  };


  return (
    <div className={styles.projectChatContainer}>
      <div className={styles.messages} ref={messagesContainerRef}>
        {messages?.map((message) => (
          <Message
            key={message.id}
            email={message.user.email}
            name={message.user.name}
            role={message.user.role}
          >
            {message.text}
          </Message>
        ))}
      </div>

      <form>
        <input
          type="text"
          placeholder="Write message"
          className="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button onClick={(event) => sendMenssage(event, message)}></button>
      </form>
    </div>
  );
};

export default ChatProject;
