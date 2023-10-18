import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
import Web3 from 'web3';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';
import { Link } from 'react-router-dom';

function Nav() {
  const [connect, setConnect] = useState('Connect wallet');
  useEffect(() => {
    connectWallet();
  }, []);

  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        infuraId: 'BKsAeeC-F7GB6KBzySe_p5aOCRQ1ZH9l', // required
      },
    },
    coinbasewallet: {
      package: CoinbaseWalletSDK, // Required
      options: {
        appName: 'web3modal', // Required
        infuraId: 'BKsAeeC-F7GB6KBzySe_p5aOCRQ1ZH9l', // Required
        rpc: '',
        chainId: 250,
        darkMode: false,
      },
    },
    binancechainwallet: {
      package: true,
    },
  };
  // need
  const web3Modal = new Web3Modal({
    network: 'mainnet', // optional
    cacheProvider: true, // optional
    providerOptions, // required
  });
  //need
  const changeNetwork = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: Web3.utils.toHex(42220) }],
        });
      } catch (error) {
        console.error(error);
      }
    }
  };

  const connectWallet = async () => {
    const provider = await web3Modal.connect();
    const web3 = new Web3(provider);
    await window.ethereum.send('eth_requestAccounts');
    const accounts = await web3.eth.getAccounts();
    changeNetwork();
    setConnect(accounts[0].slice(0, 4) + '...' + accounts[0].slice(-2));
  };

  return (
    <>
      <header id="header">
        <nav className="navbar gameon-navbar navbar-expand navbar2">
          <div className="container header">
            {/* Logo */}
            <a className="navbar-brand" href="/">
              <img
                style={{ width: '200px', height: '90px' }}
                src="./PA-LOGO.png"
                alt="Brand Logo"
              />
            </a>
            <div className="ml-auto" />
            {/* Navbar Nav */}

            <ul className="navbar-nav items mx-auto">
              <li className="nav-item active">
                <a href="/" className="nav-link active text-white">
                  Home
                </a>
              </li>
            </ul>
            <ul className="navbar-nav items mx-auto">
              <li className="nav-item active">
                <Link
                  to="/remittance"
                  className="nav-link active notiClick text-white"
                >
                  Send Funds
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav items mx-auto">
              <li className="nav-item active">
                <Link
                  to="/crypto"
                  className="nav-link active notiClick text-white"
                >
                  Buy/Sell Crypto
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav items mx-auto">
              <li className="nav-item active">
                <Link
                  to="/Contactus"
                  className="nav-link active notiClick text-white"
                >
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* Navbar Icons */}

            <ul className="navbar-nav action m-2">
              <li className="nav-item">
                <div
                  className="my_click"
                  style={{
                    display: 'flex',
                    height: '',
                    cursor: 'pointer',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      // background: 'red',
                      padding: '2px 5px',
                    }}
                  >
                    <img
                      src="./britain.png"
                      alt="france"
                      className="pt-1 img_show"
                    />

                    <span
                      className="fw-bold text_show"
                      style={{
                        paddingLeft: '3px',
                        fontWeight: 'bold',
                        color: '#fff',
                        height: '25px',
                        width: '20px',
                      }}
                    >
                      EN
                    </span>
                  </div>
                  <i
                    class="fa-solid fa-sort-down"
                    style={{ fontWeight: 'bold', color: '#fff' }}
                  ></i>
                </div>

                <div className="click_area">
                  <div
                    className="click_one"
                    style={{
                      display: 'flex',
                      padding: '2px 5px',
                      cursor: 'pointer',
                    }}
                  >
                    <img src="./france.png" alt="france" className="pt-1 " />
                    <span
                      className="fw-bold"
                      style={{
                        paddingLeft: '3px',
                        fontWeight: 'bold',
                        color: '#fff',
                      }}
                    >
                      FR
                    </span>
                  </div>
                  <div
                    className="click_tow"
                    style={{
                      display: 'flex',
                      padding: '2px 5px',
                      cursor: 'pointer',
                    }}
                  >
                    <img src="./spain.png" alt="france" className="pt-1" />
                    <span
                      className="fw-bold"
                      style={{
                        paddingLeft: '3px',
                        fontWeight: 'bold',
                        color: '#fff',
                      }}
                    >
                      SP
                    </span>
                  </div>
                  <div
                    className="click_three"
                    style={{
                      display: 'flex',
                      padding: '2px 5px',
                      cursor: 'pointer',
                    }}
                  >
                    <img src="./britain.png" alt="france" className="pt-1" />
                    <span
                      className="fw-bold"
                      style={{
                        paddingLeft: '3px',
                        fontWeight: 'bold',
                        color: '#fff',
                      }}
                    >
                      EN
                    </span>
                  </div>
                  <div
                    className="click_four"
                    style={{
                      display: 'flex',
                      padding: '2px 5px',
                      cursor: 'pointer',
                    }}
                  >
                    <img src="./haiti.png" alt="france" className="pt-1" />
                    <span
                      className="fw-bold"
                      style={{
                        paddingLeft: '3px',
                        fontWeight: 'bold',
                        color: '#fff',
                      }}
                    >
                      HA
                    </span>
                  </div>
                </div>
              </li>
            </ul>

            {/* Navbar Toggler */}
            <ul className="navbar-nav toggle">
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link"
                  data-toggle="modal"
                  data-target="#menu"
                >
                  <i className="icon-menu m-0" />
                </a>
              </li>
            </ul>
            {/* Navbar Action Button */}

            <ul className="navbar-nav action"></ul>
            <ul className="navbar-nav action">
              <li className="nav-item ml-2">
                <a
                  onClick={connectWallet}
                  href="#"
                  className="btn ml-lg-auto btn-bordered-white"
                >
                  <i className="icon-wallet mr-md-2" />
                  {connect}
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* <div className="App">
        <div className="main">
        </div>
      </div> */}
    </>
    // </ThemeContext.Provider>
  );
}

export default Nav;
