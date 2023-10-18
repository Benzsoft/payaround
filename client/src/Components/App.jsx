import React from 'react';
import './App.css';
import './click_btn.css';
import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Web3 from 'web3';

import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';
import axios from 'axios';
import Pop from './Pop';

function App() {
  console.log();

  // const [tosend] = useState('');
  const [connect, setConnect] = useState('Connect wallet');
  const [fullconnect, setfullConnect] = useState('Connect wallet');
  const [inputValue, setInputValue] = useState(0);
  const [inputValue1, setInputValue1] = useState(0);
  const [theme] = useState(false);
  const [show, setShow] = useState(false);
  const [binance_Email, setbinance_Email] = useState(false);
  const [binance_Email1, setbinance_Email1] = useState(false);
  const [showPop, setShowPop] = useState(false);
  const [paymentNotification, getPaymentNotification] = useState({
    amount: '',
    number: '',
    name: '',
    method: '',
    date: new Date().toLocaleString(),
  });

  const [showButton, setShowButton] = useState(true);

  //
  let [mtc, setMtc] = useState('');
  const [pop, setPop] = useState(false);
  let [payValue, setPayValue] = useState();
  let bank_rate = 135.32;

  // P2P
  const p2pfun = () => {
    // connectWallet();
    setbinance_Email(false);
  };
  const p2pfun1 = () => {
    // connectWallet();
    setbinance_Email1(false);
  };

  const optionHandel = e => {
    setMtc(e.target.value);
  };

  // const paymentStorage = localStorage.getItem('payment') ? JSON.parse(localStorage.getItem('payment')) : [];

  console.log(paymentNotification);
  function change() {
    setShow(!show);
    setTimeout(() => {
      setShow(show);
    }, 5000);
  }

  function Payment() {
    return (
      <>
        <div className={`paymentNotification-area ${show ? 'show' : ' '} `}>
          <div
            className="paymentNotification"
            style={{
              background: theme && '#ffff',
              boxShadow: theme && '1px 1px 10px #16162328',
            }}
          >
            <div className="paymentNotification-logo-area">
              <div
                className="paymentNotification-logo-bg"
                style={{
                  background: theme && '#ffff',
                  boxShadow: theme && '1px 1px 10px #16162328',
                }}
              >
                <i
                  className="fa-solid fa-check paymentNotification-logo"
                  style={{
                    color: theme ? '#25282e' : '#fff',
                  }}
                ></i>
              </div>
            </div>
            <div className="paymentNotification-text">
              <h2
                className="paymentNotification-header"
                style={{
                  color: theme && '#25282E',
                }}
              >
                Payment Success!
              </h2>
              <p
                className="paymentNotification-para"
                style={{
                  color: theme && '#25282E',
                  margin: '16px 0',
                }}
              >
                Your payment has been successfully done.
              </p>
              <hr
                style={{
                  width: '85%',
                  display: 'block',
                  margin: 'auto',
                  textAlign: 'center',
                  border: theme
                    ? '1.66539px solid #25282E '
                    : '1.66539px solid rgba(255, 255, 255, 0.72)',
                }}
              />
              <p
                className="paymentNotification-para"
                style={{
                  color: theme && '#25282E',
                  margin: '9px',
                }}
              >
                Total Payment.
              </p>
              <h2
                className="paymentNotification-header"
                style={{
                  color: theme && '#25282E',
                  fontSize: '39.9694px',
                  margin: '0px',
                }}
              >
                USD ${paymentNotification.amount}
              </h2>
            </div>
            <div
              style={{
                padding: '50px 20px',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gridTemplateRows: '1fr 1fr',
                gap: ' 10px 20px',
              }}
            >
              <div
                style={{
                  padding: '0 0 0 10px',
                  border: theme
                    ? '1px solid #25282E'
                    : '1px solid rgba(255, 255, 255, 0.72)',
                  borderRadius: '8px',
                }}
              >
                <p
                  style={{
                    margin: '5px',
                    color: theme ? '#25282E' : 'rgba(255, 255, 255, 0.72)',
                  }}
                >
                  Ref Number
                </p>
                <p
                  style={{
                    margin: '5px',
                    color: theme ? '#25282E' : '#fff',
                  }}
                  className="paymentNotification-number"
                >
                  {paymentNotification.number}
                </p>
              </div>
              <div
                style={{
                  padding: '0 0 0 10px',
                  border: theme
                    ? '1px solid #25282E'
                    : '1px solid rgba(255, 255, 255, 0.72)',
                  borderRadius: '8px',
                }}
              >
                <p
                  style={{
                    margin: '5px',
                    color: theme ? '#25282E' : 'rgba(255, 255, 255, 0.72)',
                  }}
                >
                  Payment Time
                </p>
                <p
                  style={{
                    margin: '5px',
                    color: theme ? '#25282E' : '#fff',
                  }}
                  className="paymentNotification-date"
                >
                  {paymentNotification.date}
                </p>
              </div>
              <div
                style={{
                  padding: '0 0 0 10px',
                  border: theme
                    ? '1px solid #25282E'
                    : '1px solid rgba(255, 255, 255, 0.72)',
                  borderRadius: '8px',
                }}
              >
                <p
                  style={{
                    margin: '5px',
                    color: theme ? '#25282E' : 'rgba(255, 255, 255, 0.72)',
                  }}
                >
                  Payment Method
                </p>
                <p
                  style={{
                    margin: '5px',
                    color: theme ? '#25282E' : '#fff',
                  }}
                  className="paymentNotification-method"
                >
                  {paymentNotification.method}
                </p>
              </div>
              <div
                style={{
                  padding: '0 0 0 10px',
                  border: theme
                    ? '1px solid #25282E'
                    : '1px solid rgba(255, 255, 255, 0.72)',
                  borderRadius: '8px',
                }}
              >
                <p
                  style={{
                    margin: '5px',
                    color: theme ? '#25282E' : 'rgba(255, 255, 255, 0.72)',
                  }}
                >
                  Sender Name
                </p>
                <p
                  style={{
                    margin: '5px',
                    color: theme ? '#25282E' : '#fff',
                  }}
                  className="paymentNotification-name"
                >
                  {paymentNotification.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className={`notification`}>
        <h1 style={{ zIndex: '9999' }}>Coming Soon ):</h1>
      </div>

      <Payment />
      {pop && (
        <Pop
          message={mtc === 'NatCash' ? '32794515' : '36765850 '}
          amount={inputValue1}
          showPop
        />
      )}

      {/* ***** Hero Area Start ***** */}
      <section className="hero-section remove_flag_section">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-md-6 col-lg-9 text-center">
              {/* Hero Content */}
              <div className="hero-content">
                <div className="intro text-center mb-5 text-dark">
                  <h1 className="text-white">
                    {' '}
                    Pay<span className="gradiently">around </span>
                  </h1>
                  <h3
                    // style={{ color: theme ? 'black' : 'white' }}
                    className="mt-4 text-white"
                  >
                    <span className="gradiently">Fastest</span>, Cheapest,{' '}
                    <span className="gradiently"> Safest</span> Crypto Service
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ***** Hero Area End ***** */}
      {/* ***** Staking Area Start ***** */}
      <section className="staking-area remove_flag_section" id="stake">
        <div className="container">
          <div className="row justify-content-center g-5">
            <div className="col-md-12 col-lg-6 my-3">
              <div className={`w-50 m-auto`}>
                <Link
                  className="form--submit text-center text-decoration-none text-white"
                  style={{
                    fontWeight: 600,
                    fontSize: '20px',
                  }}
                  to="/remittance"
                >
                  SEND FUNDS
                </Link>
              </div>
            </div>

            <div className="col-md-12 col-lg-6 my-3">
              <Link
                to="/crypto"
                className="form--submit text-center text-decoration-none text-white"
                style={{
                  fontWeight: 600,
                  fontSize: '20px',
                }}
              >
                BUY/SELL CRYPTO
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="content-area remove_flag_section" id="how_to">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6">
              <div className="content intro">
                <span className="intro-text">staking</span>
                <h2>How to Stake ?</h2>

                <p className="text-blck">
                  Staking is a popular way to earn passive income with your
                  crypto investments
                </p>
                <ul className="list-unstyled items mt-5">
                  <li className="item">
                    {/* Content List */}
                    <div className="content-list d-flex align-items-center">
                      <div className="content-icon">
                        <span>
                          <i className="fa-brands fa-discord" />
                        </span>
                      </div>
                      <div className="content-body ml-4">
                        <h3 className="m-0">Add CUSD Tokens</h3>
                        <p className="mt-3">
                          You will need CUSD tokens in your wallet to stake.
                          Once you purchase CUSD tokens, make sure that you add
                          the CUSD token to your MetaMask/TrustWallet Wallet so
                          you can view your CUSD balance.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="item">
                    {/* Content List */}
                    <div className="content-list d-flex align-items-center">
                      <div className="content-icon">
                        <span className="featured">
                          <i className="fa-brands fa-hotjar" />
                        </span>
                      </div>
                      <div className="content-body ml-4">
                        <h3 className="m-0">Connect &amp; Verify Wallet</h3>
                        <p className="mt-3">
                          Click the "Connect Wallet" button at the upper right
                          corner of the site and make sure you have the Binance
                          Smart Chain network selected in your MetaMask wallet.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="item">
                    {/* Content List */}
                    <div className="content-list d-flex align-items-center">
                      <div className="content-icon">
                        <span>
                          <i className="fa-solid fa-rocket" />
                        </span>
                      </div>
                      <div className="content-body ml-4">
                        <h3 className="m-0">Stake CUSD</h3>
                        <p className="mt-3">
                          You'll need to click the 'Stake CUSD' and scroll to
                          the top of the page to bring up the staking interface
                          on the site.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6">
              {/* Blockchain Animation */}

              <div className="wrapper-animation  d-md-block">
                <div className="">
                  <img
                    className="px-4"
                    style={{ width: '450px', height: '450px' }}
                    src="/img/Tether-Crypto-Logo-PNG-Photos.png"
                    alt="Brand Logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ***** Content Area End ***** */}
      {/* ***** CTA Area Start ***** */}
      <section className="cta-area p-0 remove_flag_section">
        <div className="container">
          <div className="row">
            <div className="col-12 card">
              <div className="row align-items-center justify-content-center">
                <div className="col-12 col-md-5 text-center">
                  <img src="/img/content/cta_thumb.png" alt="" />
                </div>
                <div className="col-12 col-md-6 mt-4 mt-md-0">
                  <h2 className="m-0 text-white">BUY $CUSD NOW</h2>
                  <br />
                  <p>
                    Still don’t have $CUSD token? Buy it now on Binance and
                    start staking your tokens
                  </p>
                  <a className="btn text-white" style={{ width: '40%' }}>
                    <i className="icon-rocket mr-2" />
                    Buy on Binance
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ***** CTA Area End ***** */}
    </>
  );
}

export default App;
