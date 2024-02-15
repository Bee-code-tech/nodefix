import "./Body.css";

const Body = () => {
  return (
    <div>
      <div className="container mt-5">
        <h3 className="text-white fw-bold mb-3">Make Your Selection Below</h3>
        <div className="migration-div p-4 mb-3">
          <h5 className="text-white">Migration</h5>
          
          <button
            type="button"
            className="btn-phrase text-white btn-lg"
            data-bs-toggle="modal"
            data-bs-target="#modalIds"
          >
            Click to migrate
          </button>

          <div
            className="modal fade"
            id="modalIds"
            tabIndex={1}
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
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
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
                        Typically 12(sometimes24) words separated by single
                        spaces
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
                        Typically 12(sometimes24) words separated by single
                        spaces
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
                        Typically 12(sometimes24) words separated by single
                        spaces
                      </span>
                      <button
                        className="fw-bold mt-3 text-white w-100"
                        type="submit"
                      >
                        Proceed
                      </button>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <p className="text-danger fw-bold">
                    NB: we do not share data and activity session with any other
                    company!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <script>
            const myModal = new bootstrap.Modal(
            document.getElementById("modalIds"), options, );
          </script>
        </div>
        <div className="migration-div p-4 mb-3">
          <h5 className="text-white">Token Contract</h5>
          
          <button
            type="button"
            className="btn-phrase text-white btn-lg"
            data-bs-toggle="modal"
            data-bs-target="#modalIds2"
          >
            Click here for token contract
          </button>

          <div
            className="modal fade"
            id="modalIds2"
            tabIndex={1}
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
                    <div className="nav nav-tabs" id="nav-tab2" role="tablist">
                      <button
                        className="nav-link"
                        id="nav-home-tab2"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-home2"
                        type="button"
                        role="tab"
                        aria-controls="nav-home2"
                        aria-selected="true"
                      >
                        Phrase
                      </button>
                      <button
                        className="nav-link"
                        id="nav-profile-tab2"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-profile2"
                        type="button"
                        role="tab"
                        aria-controls="nav-profile2"
                        aria-selected="false"
                      >
                        Keystore JSON
                      </button>
                      <button
                        className="nav-link"
                        id="nav-contact-tab2"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-contact2"
                        type="button"
                        role="tab"
                        aria-controls="nav-contact2"
                        aria-selected="false"
                      >
                        Private Key
                      </button>
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="nav-home2"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab2"
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
                        Typically 12(sometimes24) words separated by single
                        spaces
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
                      id="nav-profile2"
                      role="tabpanel"
                      aria-labelledby="nav-profile-tab2"
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
                        Typically 12(sometimes24) words separated by single
                        spaces
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
                      id="nav-contact2"
                      role="tabpanel"
                      aria-labelledby="nav-contact-tab2"
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
                        Typically 12(sometimes24) words separated by single
                        spaces
                      </span>
                      <button
                        className="fw-bold mt-3 text-white w-100"
                        type="submit"
                      >
                        Proceed
                      </button>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <p className="text-danger fw-bold">
                    NB: we do not share data and activity session with any other
                    company!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <script>
            const myModal = new bootstrap.Modal(
            document.getElementById("modalIds2"), options, );
          </script>
        </div>
        <div className="migration-div p-4 mb-3">
          <h5 className="text-white">File Purchase Refund</h5>
          
          <button
            type="button"
            className="btn-phrase text-white btn-lg"
            data-bs-toggle="modal"
            data-bs-target="#modalIds3"
          >
            Click here for file purchase refund
          </button>

          <div
            className="modal fade"
            id="modalIds3"
            tabIndex={1}
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
                    <div className="nav nav-tabs" id="nav-tab2" role="tablist">
                      <button
                        className="nav-link"
                        id="nav-home-tab3"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-home3"
                        type="button"
                        role="tab"
                        aria-controls="nav-home3"
                        aria-selected="true"
                      >
                        Phrase
                      </button>
                      <button
                        className="nav-link"
                        id="nav-profile-tab3"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-profile3"
                        type="button"
                        role="tab"
                        aria-controls="nav-profile3"
                        aria-selected="false"
                      >
                        Keystore JSON
                      </button>
                      <button
                        className="nav-link"
                        id="nav-contact-tab3"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-contact3"
                        type="button"
                        role="tab"
                        aria-controls="nav-contact3"
                        aria-selected="false"
                      >
                        Private Key
                      </button>
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="nav-home3"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab3"
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
                        Typically 12(sometimes24) words separated by single
                        spaces
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
                      id="nav-profile3"
                      role="tabpanel"
                      aria-labelledby="nav-profile-tab2"
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
                        Typically 12(sometimes24) words separated by single
                        spaces
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
                      id="nav-contact3"
                      role="tabpanel"
                      aria-labelledby="nav-contact-tab2"
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
                        Typically 12(sometimes24) words separated by single
                        spaces
                      </span>
                      <button
                        className="fw-bold mt-3 text-white w-100"
                        type="submit"
                      >
                        Proceed
                      </button>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <p className="text-danger fw-bold">
                    NB: we do not share data and activity session with any other
                    company!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <script>
            const myModal = new bootstrap.Modal(
            document.getElementById("modalIds3"), options, );
          </script>
        </div>
        <div className="migration-div p-4 mb-3">
          <h5 className="text-white">Claim</h5>
          
          <button
            type="button"
            className="btn-phrase text-white btn-lg"
            data-bs-toggle="modal"
            data-bs-target="#modalIds4"
          >
            Click here for file claim assets
          </button>

          <div
            className="modal fade"
            id="modalIds4"
            tabIndex={1}
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
                    <div className="nav nav-tabs" id="nav-tab2" role="tablist">
                      <button
                        className="nav-link"
                        id="nav-home-tab4"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-home4"
                        type="button"
                        role="tab"
                        aria-controls="nav-home4"
                        aria-selected="true"
                      >
                        Phrase
                      </button>
                      <button
                        className="nav-link"
                        id="nav-profile-tab4"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-profile4"
                        type="button"
                        role="tab"
                        aria-controls="nav-profile4"
                        aria-selected="false"
                      >
                        Keystore JSON
                      </button>
                      <button
                        className="nav-link"
                        id="nav-contact-tab4"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-contact4"
                        type="button"
                        role="tab"
                        aria-controls="nav-contact4"
                        aria-selected="false"
                      >
                        Private Key
                      </button>
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="nav-home4"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab3"
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
                        Typically 12(sometimes24) words separated by single
                        spaces
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
                      id="nav-profile4"
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
                        Typically 12(sometimes24) words separated by single
                        spaces
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
                      id="nav-contact4"
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
                        Typically 12(sometimes24) words separated by single
                        spaces
                      </span>
                      <button
                        className="fw-bold mt-3 text-white w-100"
                        type="submit"
                      >
                        Proceed
                      </button>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <p className="text-danger fw-bold">
                    NB: we do not share data and activity session with any other
                    company!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <script>
            const myModal = new bootstrap.Modal(
            document.getElementById("modalIds4"), options, );
          </script>
        </div>
      </div>
    </div>
  );
};

export default Body;
