import { createSlice } from "@reduxjs/toolkit";

const tempEvent = {
  _id: new Date().getTime(),
  title: "cumpleaños",
  notes: "comrpar pan",
};

export const contentSlice = createSlice({
  name: "content",
  initialState: {
    events: [tempEvent],
    activeEvent: null,
  },
  reducers: {
    onSetActiveEvent: (state, { payload }) => {
      state.activeEvent = payload;
    },
  },
});

export const { onSetActiveEvent } = contentSlice.actions;
