import { ChatEngine } from "react-chat-engine";

import ChatFeed from "./components/ChatFeed";
// import LoginForm from "./components/LoginForm";

import "./App.css";

const App = () => {
  // if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID="a2bf8ea0-d0ba-4616-9e56-908d3776884c"
      userName="Joe"
      userSecret="123456"
      // userName={localStorage.getItem("username")}
      // userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
