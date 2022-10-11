import React, { useMemo, useRef, useEffect, useState } from "react";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import {
  TransformComponent,
  TransformWrapper,
} from "@pronestor/react-zoom-pan-pinch";

const Canvas = ({ ...props }) => {
  const { events } = props;
  const [classStil, setClassStil] = useState(true);
  const [show, setShow] = useState(false);
  console.log("events", events);
  //MODAL
  //--------------------------------------------------
  const handleShow = () => {
    setShow(true);
    if (classStil === true) {
      setClassStil(false);
    } else {
      setClassStil(true);
    }
  };

  //FUNCTIONS
  //--------------------------------------------------
  const returnColor = () => {
    setClassStil(true);
  };

  //hook send data----------------------------------

  //------------------------------------------------

  return (
    <div className="row m-0 p-0">
      <div className="col-12 m-0 p-0">
        <TransformWrapper
          initialPositionX={0}
          initialPositionY={0}
          initialScale={1}
        >
          {({ zoomIn, zoomOut, ...rest }) => (
            <>
              <div className="tools">
                <button onClick={() => zoomIn()}>+</button>
                <button onClick={() => zoomOut()}>-</button>
              </div>
              <TransformComponent>
                <svg
                  id="svgCapa83346623"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mun__bigcanvas"
                >
                  <g
                    id="viewport-20221004185610786"
                    transform="matrix(1.327601326829318,0,0,1.327601326829318,170.61633538896973,-06.736216721296987)"
                  >
                    {events &&
                      events.map((ev: any, index: any) => (
                        <>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 841.9 595.3"
                          >
                            <g>
                              <OverlayTrigger
                                placement="right"
                                delay={{ show: 100, hide: 10 }}
                                overlay={
                                  <Tooltip id="button-tooltip">
                                    <h6>{ev.nomcompletens}</h6>
                                    <p>(CP: {ev.codipostal})</p>
                                    {/* <img
                  className="mun__responsive-escuts"
                  src={`img/${props.escut}`}
                  alt={props.nomcompletens}
                /> */}
                                  </Tooltip>
                                }
                              >
                                <path
                                  stroke="#d5e8f5"
                                  strokeWidth="0.2"
                                  key={index}
                                  id={ev.id}
                                  style={
                                    classStil
                                      ? { fill: "#47A3DA" }
                                      : { fill: "#87C4E8" }
                                  }
                                  d={ev.posicio_mapa}
                                  onClick={handleShow}
                                  onMouseLeave={returnColor}
                                  opacity="1"
                                ></path>
                              </OverlayTrigger>
                            </g>
                          </svg>
                        </>
                      ))}
                  </g>
                </svg>
              </TransformComponent>
            </>
          )}
        </TransformWrapper>
      </div>
    </div>
  );
};

export default Canvas;
