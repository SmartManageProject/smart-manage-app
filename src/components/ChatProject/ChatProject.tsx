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

const socket = io("http://localhost:3000");

const ChatProject = ({ projectId }: chatPrjectProps) => {
  const user = useUserLogged();
  const [messages, setMessages] = useState<Message[]>();
  const [message, setMessage] = useState("");
  const userId = user.id;
  useEffect(() => {
    if (projectId != "") {
      socket.emit("selectRoom", { projectId }, async (messages: Message[]) => {
        console.log(messages);
        setMessages(messages);
      });
      socket.on("message", (message) => {
        setMessages((prev) => [message, ...prev]);
      });
    }
  }, [projectId]);

  const sendMenssage = (event: FormEvent, message: string) => {
    event.preventDefault();
    if (message != "") {
      socket.emit("message", { userId, projectId, text: message });
      setMessage("");
    }
  };

  return (
    <div className={styles.projectChatContainer}>
      <div className={styles.messages}>
        {messages?.map((message) => (
          <Message
            key={message.id}
            active={
              user.email === message?.user.email
                ? "styles.containerMessageLogged"
                : "styles.containerMessageOther"
            }
            email={message?.user.email}
            name={message?.user?.name}
            role={message?.user?.role}
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
