

import {configureStore } from '@reduxjs/toolkit';
import contentReducer from '../contentSlice'; 
import messageReducer from '../messageSlice';
import usersReducer from '../usersSlice'
import chatroomReducer from '../chatroomSlice'
import pmReducer from '../pmSlice'

 const store = configureStore({
    reducer:{
        content: contentReducer,
        messages: messageReducer,
        users: usersReducer,
        chatroom: chatroomReducer,
        pms: pmReducer,
    }
});

export default store; 