import "./Header.css";
import React from 'react'

import { Fragment } from "react";
// import bootstrap from "bootstrap";
import  Modal  from "../Modal/Modal";
import { walletConnect } from "../../data";

const Header: React.FC = () => {

  
  
  return (
    <Fragment>
      {/* testing  */}
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
                {/* List of Wallets  */}
                <div className="offcanvas-body">
                  {
                     walletConnect.map((wallet, i)=> {
                         const {imgUrl, name} = wallet

                         
                       return (
                       <> 
                   <Modal imgUri={imgUrl} name={name} key={i}/>             
                         
                       </>

                       )
                     })
                  }
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
