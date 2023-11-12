import React, { useState } from "react";
import "./myStyle.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NightlightIcon from "@mui/icons-material/Nightlight";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import ConversionItem from "./ConversionItem";

function Sidebar() {
  const [conversations, setConversations] = useState([
    {
      name: "test1",
      lastMessage: "last message",
      timeStamp: "today",
    },
  ]);
  return (
    <div className="side-container">
      <div className="sb-header">
        <div>
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </div>
        <div>
          <IconButton>
            <PersonAddIcon />
          </IconButton>
          <IconButton>
            <GroupAddIcon />
          </IconButton>
          <IconButton>
            <AddCircleIcon />
          </IconButton>
          <IconButton>
            <NightlightIcon />
          </IconButton>
        </div>
      </div>
      <div className="sb-search">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input placeholder="search" className="search-box"></input>
      </div>
      <div className="sb-conversions">
        {conversations.map((conversation) => {
          return (
            <ConversionItem props={conversation} key={conversation.name} />
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
