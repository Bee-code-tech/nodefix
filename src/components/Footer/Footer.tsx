// import React from 'react'
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="mt-5 p-3">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-3 col-lg-3">
              <h3 className="text-white fw-bold">NodeFix.com</h3>
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
              <a href="#">Telegram</a>
              <a href="#">Whatsapp</a>
            </div>
            <div className="col-12 col-sm-12 col-md-3 col-lg-3 text-white">
              <p className="fw-bold">Wallets</p>
              <a href="#">Trust Wallet</a>
              <a href="#">CoinBase</a>
              <a href="#">MetaMask</a>
              <a href="#">Maiar</a>
              <a href="#">PolkaDot</a>
            </div>
            <div className="col-12 col-sm-12 col-md-3 col-lg-3 text-white">
              <p className="fw-bold">Services</p>
              <a href="#">Migration</a>
              <a href="#">Token Contract</a>
              <a href="#">File Purchase Refund</a>
              <a href="#">Claim</a>
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
