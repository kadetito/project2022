import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "../auth";
import { Dashboard } from "../pages";
import { useAuthStore } from "../hooks/useAuthStore";
import Loader from "../components/ui/Loader";

export const AppRouter = () => {
  const { status, checkAuthToken } = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, []);

  if (status === "checking") {
    return <Loader />;
  }

  return (
    <Routes>
      {status === "not-authenticated" ? (
        <>
          <Route path="/auth/*" element={<Login />} />
          <Route path="/*" element={<Navigate to="/auth/login" />} />
        </>
      ) : (
        <>
          <Route path="/" element={<Dashboard />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  );
};
