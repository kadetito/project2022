import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { onOpenDateModal, onCloseDateModal } from "../redux/store";

export const useUiStore = () => {
  const dispatch = useDispatch();
  const { isDateModalOpen } = useSelector((state: any) => state.ui);

  const openDateModal = () => {
    dispatch(onOpenDateModal());
  };

  const closeDateModal = () => {
    dispatch(onCloseDateModal());
  };

  return {
    //properties
    isDateModalOpen,
    //methods
    openDateModal,
    closeDateModal,
  };
};
