import React from "react";
import { mount } from "marketing/MarketingApp"
import MarketingApp from "./MarketingApp";

console.log("mount", mount);

export default () => {
  return (
    <>
      <h1>Container</h1>
      <hr />
      <MarketingApp />
    </>
  );
};
