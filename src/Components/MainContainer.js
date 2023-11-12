import React from "react";
import "./myStyle.css";
import Sidebar from "./Sidebar";
import ChatArea from "./ChatArea";


function MainContainer() {
  return (
    <div className="main-container">
      <Sidebar />
     <ChatArea/>
    </div>
  );
}

export default MainContainer;
