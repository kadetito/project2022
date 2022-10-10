import { useDispatch, useSelector } from "react-redux";
import contentApi from "../api/contentApi";
import {
  clearErrorMessage,
  onChecking,
  onLogin,
  onLogout,
} from "../redux/store";

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector(
    (state: any) => state.auth
  );
  const dispatch = useDispatch();

  const startLogin = async ({ email, password }: any) => {
    dispatch(onChecking());
    try {
      const { data } = await contentApi.post("/auth", { email, password });
      const timeDate: any = new Date().getTime();
      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-time", timeDate.toString());
      dispatch(onLogin({ name: data.name, uid: data.uid }));
    } catch (error) {
      console.log({ error });
      dispatch(onLogout("credenciales incorrectas"));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };

  //renewtoken
  const checkAuthToken = async () => {
    const token = localStorage.getItem("token");
    if (!token) return dispatch(onLogout(""));
    try {
      const { data } = await contentApi.get("auth/renew");
      const timeDate: any = new Date().getTime();
      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-time", timeDate.toString());
      dispatch(onLogin({ name: data.name, uid: data.uid }));
    } catch (error) {
      localStorage.clear();
      dispatch(onLogout(""));
    }
  };

  //logout
  const startLogout = () => {
    localStorage.clear();
    dispatch(onLogout(""));
  };

  return {
    //properties
    status,
    user,
    errorMessage,
    //methods
    startLogin,
    checkAuthToken,
    startLogout,
  };
};
