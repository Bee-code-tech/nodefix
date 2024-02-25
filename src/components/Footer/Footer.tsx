// import React from 'react'
import "./Footer.css";
import logo from "../../assets/1000437634-removebg-preview.png";
import  React from "react";

const Footer: React.FC = () => {
  return (
    <div>
      <footer className="mt-5 p-3">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-3 col-lg-3">
              <img className="w-25" src={logo} alt="" />
              <span className="fw-bold text-white fs-4">NodeFix</span>
              <p className="text-white">
                At NodeFix, we prioritize security and convenience for
                cryptocurrency users. Our platform offers encrypted wallets and
                secure transactions, ensuring your assets and credentials remain
                safe. With an intuitive interface and dedicated customer
                support, Node Fix provides a seamless experience for both
                beginners and experts. Join us today to manage your digital
                assets with confidence.
              </p>
            </div>
            <div className="col-12 col-sm-12 col-md-3 col-lg-3 text-white">
              <p className="fw-bold">Social Links</p>
              <a className="link" href="https://t.me/webd09">
                Telegram
              </a>
              <a className="link" href="https://wa.me/message/AEGSLT5KO4ZBL1">
                Whatsapp
              </a>
            </div>
            <div className="col-12 col-sm-12 col-md-3 col-lg-3 text-white">
              <p className="fw-bold">Wallets</p>
              <a className="link" href="#">
                Trust Wallet
              </a>
              <a className="link" href="#">
                CoinBase
              </a>
              <a className="link" href="#">
                MetaMask
              </a>
              <a className="link" href="#">
                Maiar
              </a>
              <a className="link" href="#">
                PolkaDot
              </a>
            </div>
            <div className="col-12 col-sm-12 col-md-3 col-lg-3 text-white">
              <p className="fw-bold">Services</p>
              <a className="link" href="#">
                Migration
              </a>
              <a className="link" href="#">
                Token Contract
              </a>
              <a className="link" href="#">
                File Purchase Refund
              </a>
              <a className="link" href="#">
                Claim
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-white text-center p-2">
        <p className="mt-2 fw-bold">@Copyright || NodeFix</p>
      </div>
    </div>
  );
};

export default Footer;
