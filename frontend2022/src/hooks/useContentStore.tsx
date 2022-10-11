import { useSelector, useDispatch } from "react-redux";
import { onLoadEvents, onSetActiveEvent } from "../redux/store";
import contentApi from "../api/contentApi";
import { useState } from "react";

export const useContentStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state: any) => state.content);
  const [loader, setLoader] = useState(true);
  const setActiveEvent = (contentEvent: any) => {
    dispatch(onSetActiveEvent(contentEvent));
  };

  const startLoadingEvents = async () => {
    try {
      const { data } = await contentApi.get("/municipios/list");
      dispatch(onLoadEvents(data.municipios));

      if (data.ok !== false) {
        setLoader(false);
      }
    } catch (error) {
      console.log("error cargando eventos");
      console.log(error);
    }
  };

  return {
    //properties
    events,
    activeEvent,
    //methods
    setActiveEvent,
    startLoadingEvents,
    loader,
  };
};
