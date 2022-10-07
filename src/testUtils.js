import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./redux/store";

const Providers = (props) => {
  return <Provider store={store} {...props} />;
};

export const customRender = (ui, options) =>
  render(ui, { wrapper: Providers, ...options });
