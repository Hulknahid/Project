import React from "react";
import Common from "./Common";
import web from "../Images/about.png";

const About = () => {
  return (
    <>
      <div className="container-fluid mt-3 mt-lg-0 text-center">
        <div className="row">
          <div className="col-10 mx-auto">
            <h1>About Us</h1>
          </div>
        </div>
      </div>
      <Common title="You have to know about" imgsrc={web} btnName="About Us" />
    </>
  );
};

export default About;
