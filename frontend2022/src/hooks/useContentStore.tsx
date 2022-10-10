import { useSelector, useDispatch } from "react-redux";
import { onSetActiveEvent } from "../redux/store";

export const useContentStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state: any) => state.content);

  const setActiveEvent = (contentEvent: any) => {
    dispatch(onSetActiveEvent(contentEvent));
  };
  return {
    //properties
    events,
    activeEvent,
    //methods
    setActiveEvent,
  };
};
