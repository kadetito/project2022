import React, { useEffect, useState } from "react";
import { BsFillXSquareFill } from "react-icons/bs";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";

export const ModalWindow = ({ ...props }) => {
  const { dataModal, show, onClose } = props;
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    if (dataModal !== null) {
      setData(dataModal);
    }
  }, [dataModal]);

  return (
    <>
      <Modal size="lg" show={show} onHide={onClose} centered>
        <Modal.Body>
          <div className="row p-2">
            <div className="col-2 ps-4">
              {data?.escut ? (
                <img
                  className="mun__imgescut"
                  src={`./img/${data?.escut}`}
                  alt={data?.nom}
                />
              ) : (
                ""
              )}
            </div>
            <div className="col-10 ps-4 pe-4 mun__modaltextcontent">
              <h4>{data?.nom}</h4>
              <h5>{data?.nomcompletens}</h5>
              <p className="d-flex justify-content-between">
                <span>
                  {data?.adresa} ({data?.codipostal})
                </span>
                <span>
                  <b>CIF:</b> {data?.cif}
                </span>
              </p>

              <p>
                <b>Tel:</b> {data?.telefon} - <b>Fax:</b> {data?.fax} -{" "}
                <b>E-mail:</b> {data?.email}
              </p>

              {data?.fotoplano ? (
                <img
                  className="mun__imgfotos"
                  src={`./img/${data?.fotoplano}`}
                  alt={data?.nom}
                />
              ) : (
                ""
              )}
              <Button variant="outline-secondary">
                Ver la página del municipio
              </Button>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-end">
                <button className="mun__modalclosebutton" onClick={onClose}>
                  <BsFillXSquareFill />
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
