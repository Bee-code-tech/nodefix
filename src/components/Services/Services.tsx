import React from "react";
import "./Services.css";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import groupImg from "../../assets/group.webp";
import { Fragment } from "react";

const Services = () => {
  return (
    <Fragment>
      <div className="blue p-4">
        <div className="container mt-5">
          <h3 className="text-white fw-bold fs-1">Services</h3>
          <div className="row d-flex">
            <div className="icon-div col-12 col-sm-12 col-md-4 col-lg-4 text-center p-5 mb-3">
              <FontAwesomeIcon className="bg-primary p-3 icons" icon={faBolt} />
              <p className="fw-bold text-white">Quick Action</p>
              <p className="text-white">
                `Explore the World of Cryptocurrency Trading with Us - Take
                Action Now!`
              </p>
              <img src={groupImg} alt="" className="w-25" />
            </div>
            <div className="icon-div col-12 col-sm-12 col-md-4 col-lg-4 text-center p-5 mb-3">
              <FontAwesomeIcon
                className="bg-success p-3 icons"
                icon={faShieldAlt}
              />
              <p className="fw-bold text-white">Safe Transaction</p>
              <p className="text-white">
                `Secure Your Transactions Today for Peace of Mind and
                Confidence!`
              </p>
              <img src={groupImg} alt="" className="w-25" />
            </div>
            <div className="icon-div col-12 col-sm-12 col-md-4 col-lg-4 text-center p-5 mb-3">
              <FontAwesomeIcon className="bg-danger p-3 icons" icon={faLock} />
              <p className="fw-bold text-white">Encrypted Credentials</p>
              <p className="text-white">
                `Safeguard Your Data with Cutting-edge Encryption Technology -
                Protect Your Credentials Today!`
              </p>
              <img src={groupImg} alt="" className="w-25" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Services;
