import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

const Service = () => {
  return (
    <div className="container-fluid my-3">
      <div className="row">
        <div className="col-10 mx-auto">
          <h1 className="text-center">Our Services</h1>
          <div className="row">
            {Sdata.map((value, index) => {
              return (
                <Card imgsrc={value.imgsrc} title={value.title} key={index} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
