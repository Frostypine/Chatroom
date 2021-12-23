//UserMenu.jsx
//Chatroom Assignment
//Array Bootcamp Fall 2021
//Katie Greenwald, Steve Bateman, Bowen Condelario

import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { useSelector } from 'react-redux';
import { selectContent } from '../../state/contentSlice';

function UserMenu() {
  const location = useLocation().pathname;
  const [profile, setProfile] = useState("");
  const [settings, setSettings] = useState("");
  const [leaderboard, setLeaderboard] = useState("");
 // const [profileName, setName] = useState("");

  const data = useSelector(selectContent);
  useEffect(() => {
    if (location === `/user/${data.name}/profile`) {
      setProfile("user-menu-item-active");
      setSettings("");
      setLeaderboard("");
    } else if (location === `/user/${data.name}/settings`) {
      setProfile("");
      setSettings("user-menu-item-active");
      setLeaderboard("");
    } else if (location === `/user/leaderboard`) {
      setProfile("");
      setSettings("");
      setLeaderboard("user-menu-item-active");
    } else {
      setProfile("");
      setSettings("");
      setLeaderboard("");
    }
  }, [location]);
  return (
    <div className="user-menu">
      <Link className={"user-menu-item " + profile } to={`/user/${data.name}/profile`}>
        <h3>Profile</h3>
      </Link>
      <hr className="user-menu-hr"/>
      <Link className={"user-menu-item " + settings } to={`/user/{${data.name}/settings`}>
        <h3>Settings</h3>
      </Link>
      <hr className="user-menu-hr"/>
      <Link className={"user-menu-item " + leaderboard } to={`/user/{${data.name}/leaderboard`}>
        <h3>Leaderboard</h3>
      </Link>
      <hr className="user-menu-hr"/>
    </div>
  );
}

export default UserMenu;
