import React from "react";
import { Button } from "react-bootstrap";
import { useAuthStore } from "../hooks/useAuthStore";

const Header = () => {
  const { startLogout, user } = useAuthStore();
  return (
    <div className="row mun__headerglobal">
      <div className="col-12 p-2">
        <div className="d-flex align-items-center">
          <div className="p-2 flex-grow-1 ">Brand</div>
          <div className="me-3">{user.name}</div>
          <div className="me-3">
            <Button onClick={startLogout}>Logout</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
