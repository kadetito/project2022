import React from "react";
import { Button } from "react-bootstrap";
import { useAuthStore } from "../hooks/useAuthStore";

const Footer = () => {
  const { startLogout, user } = useAuthStore();
  return (
    <div className="row mun__footerglobal">
      <div className="col-12">
        {user.name}
        <Button onClick={startLogout}>Logout</Button>
      </div>
    </div>
  );
};

export default Footer;
