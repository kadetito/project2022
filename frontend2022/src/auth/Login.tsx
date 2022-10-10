import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { ModalWindow } from "../components/ui/ModalWindow";
import { useAuthStore, useForm } from "../hooks";
import { AuthLayout } from "../layout/AuthLayout";

const loginFormFields = {
  loginEmail: "",
  loginPassword: "",
};

export const Login = () => {
  const { startLogin, errorMessage } = useAuthStore();
  const { loginEmail, loginPassword, onInputChange } = useForm(loginFormFields);

  const loginSubmit = (event: any) => {
    event.preventDefault();
    startLogin({ email: loginEmail, password: loginPassword });
  };

  useEffect(() => {
    if (errorMessage) {
      Swal.fire("Error en la autenticación", errorMessage, "error");
    }
  }, [errorMessage]);

  return (
    <AuthLayout className="mun__authlayout">
      <div className="card p-5 ">
        <div className="row mb-2">
          <div className="col-12">
            <ModalWindow />
          </div>
        </div>
        <form onSubmit={loginSubmit}>
          <div className="row mb-2">
            <div className="col-12">
              <label htmlFor="usuario">Usuario</label>
              <input
                type="text"
                className="form-control"
                name="loginEmail"
                defaultValue={loginEmail}
                onChange={onInputChange}
              />
            </div>
          </div>
          <div className="row ">
            <div className="col-12">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                name="loginPassword"
                defaultValue={loginPassword}
                onChange={onInputChange}
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12 text-center">
              <Button type="submit">Login</Button>
            </div>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};
