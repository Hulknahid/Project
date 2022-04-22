import React from "react";
import Common from "./Common";
import web from "../Images/banner.png";

const Home = () => {
  return (
    <div className="content">
      <Common
        title="Grow your business with"
        imgsrc={web}
        btnName="Get Started"
      />
    </div>
  );
};

export default Home;
