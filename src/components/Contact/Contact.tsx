// import React from 'react'
import "./Contact.css";
import wallet from "../../assets/wallet.webp";
import finance from "../../assets/finance.webp";
import { Fragment } from "react";

const Contact = () => {
  return (
    <Fragment>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 mt-4">
            <h3 className="explore-h3 text-white">Explore NodeFix Features</h3>
            <p className="explore-p mt-3 text-white">
              At NodeFix, we prioritize security and convenience for
              cryptocurrency users. Our platform offers encrypted wallets and
              secure transactions, ensuring your assets and credentials remain
              safe. With an intuitive interface and dedicated customer support,
              Node Fix provides a seamless experience for both beginners and
              experts. Join us today to manage your digital assets with
              confidence.{" "}
            </p>
            <button className="mission-button mt-3 p-2" type="button">
              Contact
            </button>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-4 purple mt-3">
            <h3 className="explore-h3 text-white fs-4 fw-light">
              Encrypted Credentials
            </h3>
            <p className="explore-p fs-5 fw-light text-white mt-3">
              Our platform employs cutting-edge encryption techniques to protect
              users' sensitive credentials, ensuring that their data remains
              secure at all times.
            </p>
            <img className="wallet w-75" src={wallet} alt="" />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 pink">
            <h3 className="explore-h3 text-white fs-4 fw-light">
              Secure Crypto Wallets
            </h3>
            <p className="explore-p fs-5 fw-light text-white mt-3">
              NodeFix offers state-of-the-art crypto wallets equipped with
              advanced encryption technology to ensure the safety of users'
              digital assets. We prioritize security to provide peace of mind
              for our users.
            </p>
            <img className="wallet w-75 flex-end" src={finance} alt="finance" />
          </div>

          <div className="end-explore col-12 col-sm-12 col-md-6 col-lg-6 mt-4">
            <h3 className="explore-h3 text-white">Explore NodeFix Features</h3>
            <p className="explore-p mt-3 text-white">
              At NodeFix, we prioritize security and convenience for
              cryptocurrency users. Our platform offers encrypted wallets and
              secure transactions, ensuring your assets and credentials remain
              safe. With an intuitive interface and dedicated customer support,
              Node Fix provides a seamless experience for both beginners and
              experts. Join us today to manage your digital assets with
              confidence.
            </p>
            <button className="mission-button mt-3 p-2" type="button">
              Contact
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
