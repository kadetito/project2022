import { createSlice } from "@reduxjs/toolkit";
import { WritableDraft } from "immer/dist/internal";

import { Cities } from "../../../interfaces";

const emptyEvent: Cities = {};
export const contentSlice = createSlice({
  name: "content",

  initialState: {
    isLoadingEvents: true,
    events: [emptyEvent],
    activeEvent: null,
  },
  reducers: {
    onSetActiveEvent: (state, { payload }) => {
      state.activeEvent = payload;
    },
    onLoadEvents: (state, { payload = [] }) => {
      state.isLoadingEvents = false;
      payload.forEach((event: WritableDraft<Cities>) => {
        const exists = state.events.some(
          (dbEvent: any) => dbEvent.id === event.id
        );
        if (!exists) {
          state.events.push(event);
        }
      });
    },
  },
});

export const { onSetActiveEvent, onLoadEvents } = contentSlice.actions;
