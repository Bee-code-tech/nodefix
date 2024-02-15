import React from "react";
import "./Body.css";

const Body = () => {
  return (
    <div>
      <div className="container mt-5">
        <h3 className="text-white fw-bold mb-3">Make Your Selection Below</h3>
        <div className="migration-div p-4 mb-3">
          <h5 className="text-white">Migration</h5>
          <a href="#">Click here for migration</a>
        </div>
        <div className="migration-div p-4 mb-4">
          <h5 className="text-white">Token Contract</h5>
          <a href="#">Click here for token contract</a>
        </div>
        <div className="migration-div p-4 mb-3">
          <h5 className="text-white">File Purchase Refund</h5>
          <a href="#">Click here for file purchase refund</a>
        </div>
        <div className="migration-div p-4 mb-3">
          <h5 className="text-white">Claim</h5>
          <a href="#">Click here for file claim assets</a>
        </div>
      </div>
    </div>
  );
};

export default Body;
