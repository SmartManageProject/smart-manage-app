import { useState } from "react";
import { io } from "socket.io-client";
import Message from "./Message/Message";

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
  const [messages, setMessages] = useState<Message[]>();

  socket.emit("selectRoom", projectId, async (messages: Message[]) => {
    setMessages(messages);
  });


  return (
    <div>
      {messages?.map((message) => (
        <Message userId={message.userId}>{message.text}</Message>
      ))}

      <input type="text" />
    </div>
  );
};

export default ChatProject;
