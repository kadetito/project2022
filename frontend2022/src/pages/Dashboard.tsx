import React, { forwardRef, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { ContentLayout } from "../layout/ContentLayout";
import { useUiStore, useContentStore } from "../hooks";
import { ModalWindow } from "../components/ui/ModalWindow";
import Loader from "../components/ui/Loader";
import Canvas from "../components/datacomponent/Canvas";

export const Dashboard = () => {
  const { openDateModal } = useUiStore();
  const { events, setActiveEvent, startLoadingEvents, loader } =
    useContentStore();

  const onDoubleClick = (ev: any) => {
    openDateModal();
    setActiveEvent(ev);
  };

  useEffect(() => {
    startLoadingEvents();
  }, []);

  return (
    <>
      {loader ? <Loader /> : null}
      <ModalWindow />
      <ContentLayout className="mun__dashboard">
        <Canvas events={events} />
      </ContentLayout>
    </>
  );
};
