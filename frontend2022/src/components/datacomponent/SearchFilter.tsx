import React from "react";
import Accordion from "react-bootstrap/Accordion";

const SearchFilter = () => {
  return (
    <div className="mun__searchfloating">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Search Filters</Accordion.Header>
          <Accordion.Body>
            <div className="mun__filtroinside"></div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default SearchFilter;
