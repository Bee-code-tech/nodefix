// import React from "react";
import "./Services.css"
import img1 from "../../assets/cryptocurrency-3d-illustration-free-png.webp";
// import img2 from "../../assets/get-started-how-do-crypto-exchanges-work.png";

const Services = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <img className="w-100 bg-white" src={img1} alt="" />
            <p className="text-center text-white">Fast-migration</p>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <img className="w-100 bg-white" src={img1} alt="" />
            <p className="text-center text-white">Fast-migration</p>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <img className="w-100 bg-white" src={img1} alt="" />
            <p className="text-center text-white">Fast-migration</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
