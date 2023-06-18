import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Message from "./components/Message";
import MessageBar from "./components/MessageBar";
import Profile from "./components/Profile";
import Header from "./components/Header";
import convo from "./convo.txt"


function App() {
  return (
    <>
      <div id="sidebar">
        <p>DIRECT MESSAGES</p>
        <Profile name={"Resources"}/>
        <a href="https://www.cdc.gov/lgbthealth/youth-resources.htm">  
          <Profile name={"LGBTQ Youth Resources"}/>
        </a>
        <a href="https://glaad.org/transgender/resources/">
        <Profile name={"Trans Resources"}/>
        </a>
        <a href="https://www.acog.org/womens-health/faqs/lgbtq-teens">  
        <Profile name={"LGBTQ FAQ"}/>
        </a>
        <a href="https://pflag.org/glossary/">
        <Profile name={"LGBTQ Glossary"}/>
        </a>
        <a href="https://pflag.org/resource/support-hotlines/">
        <Profile name={"Support Hotlines"}/>
        </a>
      </div>

      <div id="main">
        <Header name={"Kanna"}/>
        <div id="messages-container">
          <Message messageText={"I'M HOMOPHOBIC!!!!"}/>
        </div>
        <div className="messages-bar" id="messages-container2">
            <input className="messagesbar" type="text" id="messagesbar" name="messagesinput" placeholder="Message Person 1..." ></input>
        </div>  
      </div>
      <script src="script.ts"> </script>
    </>
  );
}

export default App;
