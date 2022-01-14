//Chat.jsx
//Chatroom Assignment 
//Array Bootcamp Fall 2021
//Katie Greenwald, Steve Bateman, Bowen Condelario 

import React from 'react';
import './chat.css'
import InformationList from './InformationList';
import RoomsList from './RoomsList';
import MessageList from './MessageList';
import SendMessageForm from './SendMessageForm';
import ChatRoomName from './ChatRoomName';
import { useSelector, useDispatch} from 'react-redux'
import { selectChatroom, addChatroom } from '../../state/chatroomSlice'
import { useLocation } from 'react-router-dom';
//import Message from '../Messages'; 


function Chat() {
    const chatrooms = useSelector(selectChatroom);
    const location = useLocation()
    const currentUrl = location.pathname
    const chatroomName = currentUrl.substr(6,20)
    const chatroom = !chatrooms ? null : chatrooms.find((e) => e.name === chatroomName)
    

    return (
        <div className="chat">
            <RoomsList />
            <ChatRoomName chatroom = {chatroom}/>
            <MessageList chatroom = {chatroom}/>
            <InformationList />
            {/* <Message/> */}
            <SendMessageForm chatroom = {chatroom}/>
        </div>
    )
}

export default Chat
