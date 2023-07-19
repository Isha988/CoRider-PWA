import { FC } from "react";
import { Box, Text, Flex, Avatar } from "@chakra-ui/react";
import { MdVerified } from "react-icons/md";
import { ChatType } from "../../lib/types";

interface ChatProps {
  chat: ChatType;
}

const Chat: FC<ChatProps> = ({ chat }) => {
  return (
    <Flex maxW={500} marginLeft={chat.sender.self ? "auto" : 0}>
      {!chat.sender.self && (
        <Box>
          <Avatar src={chat.sender.image} />
          {chat.sender.is_kyc_verified && <MdVerified />}
        </Box>
      )}
      <Box>
        {chat.message.split("<br>").map(
          (mess, index) =>
            mess && (
              <Text border="1px" marginBottom="1px" key={index}>
                {mess}
              </Text>
            ),
        )}
      </Box>
    </Flex>
  );
};

export default Chat;
