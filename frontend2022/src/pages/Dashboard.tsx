import React, { forwardRef } from "react";
import { Button } from "react-bootstrap";
import { ContentLayout } from "../layout/ContentLayout";
import { useUiStore, useContentStore } from "../hooks";
import { ModalWindow } from "../components/ui/ModalWindow";

export const Dashboard = () => {
  const { openDateModal } = useUiStore();
  const { events, setActiveEvent } = useContentStore();

  const onDoubleClick = (ev: any) => {
    openDateModal();
    setActiveEvent(ev);
  };

  return (
    <>
      <ModalWindow />
      <ContentLayout className="mun__dashboard">
        {events.map((ev: any, index: any) => (
          <div key={index}>
            <p>{ev.title}</p>
            <Button onClick={() => onDoubleClick(ev)}></Button>
          </div>
        ))}
      </ContentLayout>
    </>
  );
};
