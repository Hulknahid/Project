import React from "react";

const Common = (props) => {
  return (
    <>
      <section id="header" className="">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row d-flex align-items-center">
                <div className="col-md-6 mt-2 mt-lg-0 order-2 order-lg-1">
                  <h1>{props.title}<strong className="brand-name">Hulk Nahid</strong> team</h1>
                  <h2>We have a talented team for creating websites</h2>
                <div className="my-3">
                <a href="" className="btn-get-start mt-3">{props.btnName}</a>
                </div>
                </div>
                <div className="col-md-6 mt-2 mt-lg-0 order-1 order-lg-2">
                    <img src={props.imgsrc} alt="banner_img" className="img-fluid animated"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
