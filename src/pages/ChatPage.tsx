import { FC } from "react";
import Header from "../component/Header/Header";

const ChatPage: FC = () => {
  const header = { name: "Trip 1", from: "IGI Airport, T3", to: "Sector 28" };
  return <Header header={header} />;
};

export default ChatPage;
