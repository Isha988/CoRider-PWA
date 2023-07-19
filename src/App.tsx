import { ChakraProvider } from "@chakra-ui/react";
import ChatPage from "./pages/ChatPage";
import ChatProvider from "./lib/context/ChatContext";

function App() {
  return (
    <ChakraProvider>
      <ChatProvider>
        <ChatPage />
      </ChatProvider>
    </ChakraProvider>
  );
}

export default App;
