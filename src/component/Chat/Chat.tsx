import { FC } from "react";
import { Box, Text, Flex, Avatar } from "@chakra-ui/react";
import { MdVerified } from "react-icons/md";
import { ChatType } from "../../lib/types";

interface ChatProps {
  chat: ChatType;
}

const Chat: FC<ChatProps> = ({ chat }) => {
  return (
    <Flex>
      {!chat.sender.self && (
        <Box>
          <Avatar src={chat.sender.image} />
          {chat.sender.is_kyc_verified && <MdVerified />}
        </Box>
      )}
      <Box>
        <Text>{chat.message}</Text>
      </Box>
    </Flex>
  );
};

export default Chat;
