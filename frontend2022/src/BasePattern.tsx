import React from "react";
import { AppRouter } from "./routes/AppRouter";
import { BrowserRouter } from "react-router-dom";
import { BasicLayout } from "./layout/BasicLayout";
import { Provider } from "react-redux";
import { store } from "./redux/store/";

function BasePattern() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <BasicLayout className="mun__global">
          <AppRouter />
        </BasicLayout>
      </BrowserRouter>
    </Provider>
  );
}

export default BasePattern;
