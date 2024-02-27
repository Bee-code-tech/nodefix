import "./Header.css";

import React, { Fragment, useEffect, useState } from "react";
// import bootstrap from "bootstrap";
import Modal from "../Modal/Modal";
import { walletConnect } from "../../data";
import  axios  from "axios";
import { Carousel } from "react-bootstrap";

const Header: React.FC = () => {
  const [coinData, setCoinData] = useState<any[]>([]);

  
  useEffect(() => {
    const fetchCoinData = async () => {
      try {
          const response =  await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1');
        const data = response.data;
        // Format the data
        const formattedData = data.map((coin: any) => formatCoinData(coin));
        // Set the formatted data to state
        setCoinData(formattedData);
      } catch (error) {
        console.error('E fetching coin data:', error);
      }
    };

    fetchCoinData();
  }, []);

  const formatCoinData = (coin: any) => {
    const {
      image,
      name,
      symbol,
      current_price,
      price_change_percentage_24h,
    } = coin;

    // Determine if the percentage change is positive or negative
    const isPositiveChange = price_change_percentage_24h > 0;
    const changeColor = isPositiveChange ? "text-success" : "text-danger";

    // Format the percentage change with appropriate color
    const formattedChange = `${isPositiveChange ? "+" : ""}${price_change_percentage_24h.toFixed(2)}%`;

    // Construct the formatted string
    const formattedString = `
      <img src="${image}" alt="${name}" class="mr-1" /> 
      ${name} [${symbol}] $${current_price.toFixed(2)} 
      <span class="${changeColor}">${formattedChange}</span>
    `;

    return formattedString;
  };


  console.log(coinData);
  
  
 
  return (
    <Fragment>
      {/* testing  */}
      <div>
        <div className="container">
           <Carousel style={{backgroundColor: 'white', padding: '20px'}}>
      {coinData.map((coin) => (
        <Carousel.Item key={coin.id}>
          <img src={coin.image} className="d-block w-25 mx-auto" alt={coin.name} />
          <Carousel.Caption>
            <h3>{coin.name} [{coin.symbol}]</h3>
            <p>Price: ${coin.current_price}</p>
            <p>Change: {coin.price_change_percentage_24h}%</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
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
                  {walletConnect.map((wallet, i) => {
                    const { imgUrl, name } = wallet;

                    return (
                      <>
                        <Modal imgUri={imgUrl} name={name} key={i} />
                      </>
                    );
                  })}
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
