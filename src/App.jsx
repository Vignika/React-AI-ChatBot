import { useState } from "react"
import styles from "./App.module.css"
import { Chat } from "./components/chat/chat"
import { Controls } from "./components/Controls/Controls";
function App() {
  const [messages,setMessages] = useState([]);

  function handleContentSend(content){
    setMessages((prevMessage) => [...prevMessage, {content, role: 'user'}])
  }
  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img className={styles.Logo} src="chat-bot.png"/>
        <h2 className={styles.Title}>AI ChatBot</h2>
      </header>
      <div className={styles.ChatContainer}>
        <Chat messages={messages}/>
      </div>
      <Controls onSend={handleContentSend}/>
    </div>   
  );
}
export default App
