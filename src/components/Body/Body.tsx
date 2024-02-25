import "./Body.css";

import { Fragment } from "react";
import  React from "react";

const Body: React.FC = () => {
  return (
    <Fragment>
      <div className="container mt-5">
        <h3 className="text-white fw-bold mb-3">Make Your Selection Below</h3>
        <div className="migration-div p-4 mb-3">
          {/* Migration cards  */}
          <h5 className="text-white">Migration</h5>
          <button
            className="a"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasScrolling"
            aria-controls="offcanvasScrolling"
          >
            Click here to migrate
          </button>
         
        </div>
        {/* Token Contract Card  */}
        <div className="migration-div p-4 mb-3">
          <h5 className="text-white">Token Contract</h5>
          <button
            className="a"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasScrolling"
            aria-controls="offcanvasScrolling"
          >
            Click here to transfer token
          </button>
         
        </div>

        {/* Purchase card */}
        <div className="migration-div p-4 mb-3">
          <h5 className="text-white">File Purchase Refund</h5>
          <button
            className="a"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasScrolling"
            aria-controls="offcanvasScrolling"
          >
            Click here for file purchase refund
          </button>
          
        </div>

        {/* Claim card  */}
        <div className="migration-div p-4 mb-3">
          <h5 className="text-white">Claim</h5>
          <button
            className="a"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasScrolling"
            aria-controls="offcanvasScrolling"
          >
            Click here for file claim assets
          </button>
          
        </div>
      </div>
    </Fragment>
  );
};

export default Body;
