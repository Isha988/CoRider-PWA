import { FC } from "react";
import { Heading, Box, Text, Flex, Avatar, IconButton } from "@chakra-ui/react";
import { FiEdit, FiMoreVertical } from "react-icons/fi";
import { HeaderType } from "../../lib/types";

interface HeaderProps {
  header: HeaderType;
}

const Header: FC<HeaderProps> = ({ header }) => {
  return (
    <header>
      {/* name and  edit options*/}
      <Flex align="center" justify="space-between">
        <Heading as="h1" size="md">
          {header.name}
        </Heading>
        <IconButton
          aria-label="Header Edit"
          icon={<FiEdit />}
          bg="transparent"
        />
      </Flex>
      {/* destination  and  more options*/}
      <Flex align="center" justify="space-between">
        {/* avatar */}
        <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
        {/* destination */}
        <Box flex={1}>
          <Text>{header.from}</Text>
          <Text>{header.to}</Text>
        </Box>
        {/* more options */}
        <IconButton
          aria-label="Header Options"
          icon={<FiMoreVertical />}
          bg="transparent"
        />
      </Flex>
    </header>
  );
};

export default Header;
