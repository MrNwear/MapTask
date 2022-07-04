import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name: "message",
  initialState: {
    isNightMode:false,
  },
  reducers: {
    changeMode:(state) =>{
      state.isNightMode =!state.isNightMode; 
    }
  }
})

export const { changeMode } = messageSlice.actions
export default messageSlice.reducer