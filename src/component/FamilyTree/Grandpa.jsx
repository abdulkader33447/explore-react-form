import React from "react";
import Dad from "./Dad";
import Uncle from "./Uncle";
import Aunt from "./Aunt";

const Grandpa = ({asset}) => {
  return (
    <div>
      <h2>Grandpa</h2>
      <div className="flex">
        <Dad asset={asset}></Dad>
        <Uncle></Uncle>
        <Aunt asset={asset}></Aunt>
      </div>
    </div>
  );
};

export default Grandpa;
