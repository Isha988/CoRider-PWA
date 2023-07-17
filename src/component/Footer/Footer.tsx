import { FC } from "react";
import { FormControl, IconButton, Input, Flex } from "@chakra-ui/react";
import {VscSend} from "react-icons/vsc"
import {PiPaperclip} from "react-icons/pi"


const Footer: FC = () => {
  return (
    <footer>
      <FormControl>
        <Flex align="center" justify="space-between">
            <Input type="text" flex={1} placeholder="Message" variant="unstyled"/>
            <IconButton type="button" aria-label="form-attachment" icon={<PiPaperclip/>} bg="transparent"/>
            <IconButton type="submit" aria-label="form-submit" icon={<VscSend/>} bg="transparent"/>
        </Flex>
      </FormControl>
    </footer>
  );
};

export default Footer;
