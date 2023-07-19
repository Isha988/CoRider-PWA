import { FC, useEffect, useState, useRef, Fragment } from "react";
import { Box } from "@chakra-ui/react";
import Chat from "./Chat";
import { ChatType, ResponseType } from "../../lib/types";

interface ChatsProps {
  chats: ChatType[];
  response: ResponseType;
  getMoreChats: (page: number) => void;
}

const Chats: FC<ChatsProps> = ({ chats, response, getMoreChats }) => {
  // page state
  const [page, setPage] = useState<number>(0);
  // chat list reference
  const chatsRef = useRef(document.createElement("div"));
  // scroll element reference

  // onscroll function for loading old chats
  const scrollRef = useRef(document.createElement("div"));
  const onScroll = () => {
    const { scrollTop } = chatsRef.current;
    if (scrollTop === 0) {
      getMoreChats(page + 1);
      setPage((prevPage) => prevPage + 1);
    }
  };

  //adding scroll event listener to chat list
  useEffect(() => {
    chatsRef.current.addEventListener("scroll", onScroll);
  }, []);

  // scrolling new chats into view
  useEffect(() => {
    scrollRef.current?.scrollIntoView();
  }, [chats]);

  return (
    <Box flex="1" overflowY="auto" ref={chatsRef}>
      {chats?.map((chat) => (
        <Fragment key={chat.id}>
          <Chat chat={chat} />
          <div ref={scrollRef}></div>
        </Fragment>
      ))}
    </Box>
  );
};

export default Chats;
