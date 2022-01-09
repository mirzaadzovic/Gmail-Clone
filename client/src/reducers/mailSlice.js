import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    sendMessageIsOpen: false,
    emailList: [
      {
        id: 1,
        title: "SIPA",
        subject: "Droga",
        description: "Đe je drooga?",
        time: "13:12AM",
      },
      {
        id: 2,
        title: "Youtube",
        subject: "Obrisan ti kanal",
        description: "Obrisali smo ti kanal jer i ofiran i krindž?",
        time: "2:12PM",
      },
    ],
  },
  reducers: {
    openSendMessage: (state) => ({ ...state, sendMessageIsOpen: true }),
    closeSendMessage: (state) => ({ ...state, sendMessageIsOpen: false }),
    addEmail: (state, action) => ({
      ...state,
      emailList: [action.payload, ...state.emailList],
    }),
  },
});

export const { openSendMessage, closeSendMessage, addEmail } =
  mailSlice.actions;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;
export const selectEmailList = (state) => state.mail.emailList;

export default mailSlice.reducer;
