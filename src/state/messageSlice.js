//messageSlice.js
//Chatroom Assignment 
//Array Bootcamp Fall 2021
//Katie Greenwald, Steve Bateman, Bowen Condelario 

import {createSlice} from '@reduxjs/toolkit';
import messageData from '../components/PM/messageData'; 

let messages =[];
let storedMessages = JSON.parse(localStorage.getItem("storedMessages"));
// if (storedMessages) messages = storedMessages; 
// if(!messages) {
// messages = messageData; 
//   localStorage.setItem("messages", JSON.stringify(messages))
//}

export const messageSlice = createSlice ({
    name: 'messages',
    initialState: {
      messages:   messages
    },
    reducers: {
       addMessages: (state, action) => {
        console.log(action.payload); 
        state.messages.push(action.payload);
       // localStorage.setItem('storedMessages', JSON.stringify(state.messages));
    },
    deleteMessages: (state,action) => {
      state.messages.splice(action.payload, 1)
      localStorage.setItem("storedMessages",JSON.stringify(state.messages))
    }
  }
})

export const {addMessages,deleteMessages} = messageSlice.actions;
export const selectMessages = (state) => state.messages.messages;
export default messageSlice.reducer; 