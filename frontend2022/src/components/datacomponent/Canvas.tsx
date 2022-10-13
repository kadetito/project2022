import React, { useRef, useEffect, useState } from "react";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import {
  TransformComponent,
  TransformWrapper,
} from "@pronestor/react-zoom-pan-pinch";
import { ModalWindow } from "../ui/ModalWindow";

const Canvas = ({ ...props }) => {
  const { events } = props;
  const refr: any = useRef();
  const [show, setShow] = useState(false);
  const [dataModal, setDataModal] = useState();
  const [eid, setId] = useState("");
  const [scrollState, setScrollState] = useState("unset");
  //--------------------------------------------------
  const handleShow = (ev: any) => {
    setId(ev.id);
    setShow(true);
    setDataModal({ ...ev });
    setScrollState("hidden"); //prevent scroll on opened modal
  };
  const handleClose = () => {
    setShow(false);
    setScrollState("unset"); //prevent scroll on opened modal
  };

  useEffect(() => {
    document.body.style.overflow = "unset"; //prevent scroll on opened modal
  }, [scrollState]);

  //-------------------------------------------------- click out listener
  useEffect(() => {
    const checkIfClickedOutside = () => {
      setId("");
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [eid]);
  //------------------------------------------------

  //GET COLOR MATCH SEARCH
  const [marked, setMarked] = useState(false);

  return (
    <div className="row m-0 p-0">
      <div className="col-12 m-0 p-0">
        <ModalWindow show={show} onClose={handleClose} dataModal={dataModal} />

        <TransformWrapper
          initialPositionX={0}
          initialPositionY={0}
          initialScale={1}
        >
          {({ zoomIn, zoomOut, ...rest }) => (
            <>
              <div className="tools mun__toolbuttonfloating">
                <button
                  className="btn btn-square-md rounded-0 btn-lg mun__mas"
                  onClick={() => zoomIn()}
                >
                  +
                </button>
                <button
                  className="btn btn-square-md rounded-0 btn-lg mun__menos"
                  onClick={() => zoomOut()}
                >
                  -
                </button>
              </div>
              <TransformComponent>
                <svg
                  id="svgCapa83346623"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mun__bigcanvas"
                >
                  <g
                    ref={refr}
                    id="viewport-20221004185610786"
                    transform="matrix(1.327601326829318,0,0,1.327601326829318,170.61633538896973,-06.736216721296987)"
                  >
                    {events &&
                      events.map((ev: any, index: any) => (
                        <svg
                          key={index}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 841.9 595.3"
                        >
                          <g>
                            <OverlayTrigger
                              placement="right"
                              delay={{ show: 100, hide: 10 }}
                              overlay={
                                <Tooltip id="button-tooltip">
                                  <h6>{ev.nom}</h6>
                                  <p>(CP: {ev.codipostal})</p>
                                </Tooltip>
                              }
                            >
                              <path
                                stroke="#d5e8f5"
                                strokeWidth="0.2"
                                key={index}
                                id={ev.id}
                                style={{
                                  fill:
                                    eid === ev.id
                                      ? "#42befc"
                                      : marked === true
                                      ? "#000000"
                                      : "#5685ad",

                                  cursor: "pointer",
                                }}
                                d={ev.posicio_mapa}
                                onClick={() => handleShow(ev)}
                                opacity="1"
                              ></path>
                            </OverlayTrigger>
                          </g>
                        </svg>
                      ))}
                  </g>
                </svg>
              </TransformComponent>
            </>
          )}
        </TransformWrapper>
      </div>
      <div className="mun__textupfloating">Drag over the map to move it</div>
    </div>
  );
};

export default Canvas;
