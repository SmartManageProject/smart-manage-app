import styles from "./ChatProject.module.scss";
import { FormEvent, useState } from "react";
import { socket } from "../../service/api";
import Message from "./Message/Message";
import { useUserLogged } from "../../Context/UserProvider/useGetUser";
import { IMessage } from "../../types/AppTypes";

type chatProjectProps = {
  messages: IMessage[];
  projectId: string;
  projectDescription: string;
};

const ChatProject = ({
  messages,
  projectId,
  projectDescription,
}: chatProjectProps) => {
  const user = useUserLogged();
  const [message, setMessage] = useState("");
  const userId = user.id;

  const sendMessage = (event: FormEvent) => {
    event.preventDefault();

    if (message.trim() !== "") {
      socket.emit("message", { userId, projectId, text: message });
      setMessage("");
    }
  };

  return (
    <div className={styles.projectChatContainer}>
      <div className={styles.fixed}>
        <p>{projectDescription}</p>
      </div>
      <div className={styles.messages}>
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

      <form onSubmit={sendMessage}>
        <input
          type="text"
          placeholder="Write message"
          className="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit"></button>
      </form>
    </div>
  );
};

export default ChatProject;
