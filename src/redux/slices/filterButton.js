import { createSlice } from "@reduxjs/toolkit";

const filterBtnSlice = createSlice({
  name: "buttons",
  initialState: {
    buttons: [
      {
        name: "Дизайн",
        choice: true,
      },
      {
        name: "Портативность",
        choice: true,
      },
      {
        name: "Камера",
        choice: false,
      },
      {
        name: "Ответ",
        choice: false,
      },
      {
        name: "Дисплей",
        choice: false,
      },
      {
        name: "Батарея",
        choice: false,
      },
    ],
  },
});

export const filterBtnReducer = filterBtnSlice.reducer