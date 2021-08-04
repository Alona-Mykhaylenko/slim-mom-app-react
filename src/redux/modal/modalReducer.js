import { createReducer } from "@reduxjs/toolkit";
import { openModal } from "./modalActions";

export const openModalReducer = createReducer(false, {
  [openModal]: (state) => !state,
});
