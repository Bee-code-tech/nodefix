import "./Header.css";
import metamask from "../../assets/metamask.png";
import trustwallet from "../../assets/trust-wallet-logo.webp";
import coinbase from "../../assets/coinbase-coin-logo.png";
import polkadot from "../../assets/polkadot-coin-logo-icon.jpg";
import maiar from "../../assets/maiar-logo.jpg";
import crypto from "../../assets/crypto.jpeg";
import blockchain3D from "../../assets/blockchain3D.png";

const Header = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 mt-3">
            <h3 className="text-white mt-5 fw-bold">
              Decentralized to | with Chain Protocol
            </h3>
            <p className="text-white mt-5">
              Chain provides industry-leading web3 and Blockchain a safe
              protocol and process encrypted by a superb encryption server. Your
              infromation never leaves our server or be visible to anyone. Its
              an end-to-end emcryption with no human interaction
            </p>
            <button
              type="button"
              className="btn btn-primary btn-lg btn-modals"
              data-bs-toggle="modal"
              data-bs-target="#modalId"
            >
              Connect Wallet
            </button>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 mt-3">
            <img className="w-100" src={blockchain3D} alt="blockchain" />
          </div>
        </div>

        <div
          className="modal fade"
          id="modalId"
          tabIndex={-1}
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          role="dialog"
          aria-labelledby="modalTitleId"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title fw-bold" id="modalTitleId">
                  Connect Your Wallet
                </h5>
              </div>
              <div className="modal-body">
                <div className="row align-items-center">
                  <div className="col-6">
                    <img className="w-25" src={metamask} alt="metamask logo" />
                  </div>
                  <div className="col-6">
                    <a href="#">
                      <span className="meta-link">Metamask</span>
                    </a>
                  </div>
                  <hr className="mt-3" />
                </div>
                <div className="row">
                  <div className="col-6">
                    <img
                      className="w-25"
                      src={trustwallet}
                      alt="metamask logo"
                    />
                  </div>
                  <div className="col-6">
                    <a href="#">
                      <span className="meta-link">Trust Wallet</span>
                    </a>
                  </div>
                  <hr className="mt-3" />
                </div>
                <div className="row">
                  <div className="col-6">
                    <img className="w-25" src={coinbase} alt="metamask logo" />
                  </div>
                  <div className="col-6">
                    <a href="#">
                      <span className="meta-link">CoinBase</span>
                    </a>
                  </div>
                  <hr className="mt-3" />
                </div>
                <div className="row">
                  <div className="col-6">
                    <img className="w-25" src={crypto} alt="metamask logo" />
                  </div>
                  <div className="col-6">
                    <a href="#">
                      <span className="meta-link">Crypto.com</span>
                    </a>
                  </div>
                  <hr className="mt-3" />
                </div>
                <div className="row">
                  <div className="col-6">
                    <img className="w-25" src={maiar} alt="metamask logo" />
                  </div>
                  <div className="col-6">
                    <a href="#">
                      <span className="meta-link">Maiar</span>
                    </a>
                  </div>
                  <hr className="mt-3" />
                </div>
                <div className="row">
                  <div className="col-6">
                    <img className="w-25" src={polkadot} alt="metamask logo" />
                  </div>
                  <div className="col-6">
                    <a href="#">
                      <span className="meta-link">Polkadot</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        <script>
          const myModal = new bootstrap.Modal(
          document.getElementById("modalId"), options, );
        </script>
      </div>
    </div>
  );
};

export default Header;
