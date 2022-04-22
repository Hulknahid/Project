import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullName: "",
    number: "",
    email: "",
    password: "",
    message: "",
  });

  const formSubmit = (event) => {
    event.preventDefault();
        alert(`You have entered ${data.fullName}, You are writing ${data.phone} You have entered ${data.email}, you have entered ${data.message}`)
    };

  const inputEvent = (event) => {
      const {name, value} = event.target;

      // setData((preValue)=>{
      //     return{
      //         ...preValue,
      //         [name]: value,
      //     }
      // })

      setData({...data, [name]: value})
  };

  return (
    <>
      <div className="container mt-3 mt-lg-0">
        <div className="row">
          <div className="col-10 mx-auto">
            <h1 className="text-center my-2">Contact Us</h1>
            <div className="row">
              <div className="col-md-6 col-12 mx-auto">
                <form onSubmit={formSubmit}>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Full Name
                    </label>
                    <input
                      type="type"
                      className="form-control"
                      id="fullName"
                      placeholder="Enter Your Name"
                      name="fullName"
                      value={data.fullName}
                      onChange={inputEvent}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Phone Number
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="number"
                      placeholder="Enter Your Number"
                      name="number"
                      value={data.number}
                      onChange={inputEvent}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                      name="email"
                      value={data.email}
                      onChange={inputEvent}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter Your password"
                      name="password"
                      value={data.password}
                      onChange={inputEvent}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="3"
                      name="message"
                      value={data.message}
                      onChange={inputEvent}
                    ></textarea>
                  </div>
                  <div className="my-3">
                    <button type="submit" className="btn btn-success">
                      Contact Us
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
