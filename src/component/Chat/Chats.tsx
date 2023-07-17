import { FC } from "react";
import { Box } from "@chakra-ui/react";
import Chat from "./Chat";
import { ChatType } from "../../lib/types";

interface ChatsProps {
  chats: ChatType[];
}

const Chats: FC<ChatsProps> = ({ chats }) => {
  return (
    <Box>
      {chats.map((chat) => (
        <Chat chat={chat} />
      ))}
    </Box>
  );
};

export default Chats;
