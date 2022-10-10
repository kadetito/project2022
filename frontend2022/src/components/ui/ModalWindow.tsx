import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useUiStore } from "../../hooks";
import { useContentStore } from "../../hooks/useContentStore";

export const ModalWindow = () => {
  const { isDateModalOpen, closeDateModal } = useUiStore();
  const { activeEvent } = useContentStore();
  const [activeEventValue, setActiveEventValue] = useState<any>([]);
  const onCloseModal = () => {
    closeDateModal();
  };

  useEffect(() => {
    if (activeEvent !== null) {
      setActiveEventValue(activeEvent);
    }
    console.log(activeEventValue);
  }, [activeEvent]);

  return (
    <>
      <Modal show={isDateModalOpen}>
        <Modal.Header>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* {activeEventValue !== null &&
            activeEventValue.map((evnt: any, index: any) => (
              <div key={index}>{evnt._id}</div>
            ))} */}
          {activeEventValue.title}
          {activeEventValue._id}
          {activeEventValue.notes}
          <Button onClick={closeDateModal}></Button>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};
