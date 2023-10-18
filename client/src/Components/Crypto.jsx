import React from 'react';
import './App.css';
import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Web3 from 'web3';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';
import axios from 'axios';
import Pop from './Pop';
import Payment from './Payment';

function Crypto() {
  const [connect, setConnect] = useState('Connect wallet');
  const [fullconnect, setfullConnect] = useState('Connect wallet');
  const [inputValue, setInputValue] = useState(0);
  const [inputValue1, setInputValue1] = useState(0);
  const [theme] = useState(false);
  const [show, setShow] = useState(false);
  const [binance_Email, setbinance_Email] = useState(false);
  const [binance_Email1, setbinance_Email1] = useState(false);
  const [showPop, setShowPop] = useState(false);
  const [other0, setOther0] = useState({
    action: false,
    title: '',
  });
  const [other1, setOther1] = useState({
    action: false,
    title: '',
  });
  const [paymentNotification, getPaymentNotification] = useState({
    amount: '',
    number: '',
    name: '',
    method: '',
    date: new Date().toLocaleString(),
  });

  const [pop, setPop] = useState(false);
  let [payValue, setPayValue] = useState();
  let bank_rate = 135.32;

  // SELL
  const p2pfun = () => {
    connectWallet();
    setbinance_Email(false);
    setOther0({
      action: false,
      title: '',
    });
  };

  const binance = () => {
    setbinance_Email(true);
    setOther0({
      action: false,
      title: '',
    });
  };

  const others = () => {
    setbinance_Email(false);
    setOther0({
      action: true,
      title: 'Please input the origin address',
    });
  };

  //BUY
  const p2pfun1 = () => {
    connectWallet();
    setOther1({ action: false, title: '' });
    setbinance_Email1(false);
  };
  const binance1 = () => {
    setOther1({ action: false, title: '' });
    setbinance_Email1(true);
  };
  const others1 = () => {
    setOther1({ action: true, title: 'please input the designated address' });
    setbinance_Email1(false);
  };

  const optionHandel = e => {
    // setMtc(e.target.value);
  };

  // const paymentStorage = localStorage.getItem('payment') ? JSON.parse(localStorage.getItem('payment')) : [];

  console.log(paymentNotification);
  function change() {
    setShow(!show);
    setTimeout(() => {
      setShow(show);
    }, 5000);
  }

  function handleInputChange(event) {
    console.log('refffffff', window.location.href);
    setInputValue(event.target.value);
  }

  function handleInputChange1(event) {
    setPayValue(event.target.value);
    if (event.target.value > 500) setInputValue1(event.target.value * 1.04);
    else setInputValue1(event.target.value * 1.05);
  }
  useEffect(() => {
    setInterval(() => {
      setPop(false);
    }, 7000);
  });

  async function valuSubmit(event) {
    event.preventDefault();
    await setPop(true);
  }

  useEffect(() => {
    connectWallet();
  });

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

  const web3Modal = new Web3Modal({
    network: 'mainnet', // optional
    cacheProvider: true, // optional
    providerOptions, // required
  });

  const changeNetwork = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: Web3.utils.toHex(56) }],
        });
      } catch (error) {
        console.error(error);
      }
    }
  };

  const connectWallet = async () => {
    // if (window.ethereum) {
    const provider = await web3Modal.connect();
    const web3 = new Web3(provider);
    await window.ethereum.send('eth_requestAccounts');
    const accounts = await web3.eth.getAccounts();
    changeNetwork();
    const account = accounts[0];
    setConnect(accounts[0].slice(0, 4) + '...' + accounts[0].slice(-2));
    setfullConnect(accounts[0]);
    // setmyReferral("https://alexastaking.netlify.app?ref=" + account);

    console.log(account);
  };
  // function Payment() {
  //   return (
  //     <>
  //       <div className={`paymentNotification-area ${show ? 'show' : ' '} `}>
  //         <div
  //           className="paymentNotification"
  //           style={{
  //             background: theme && '#ffff',
  //             boxShadow: theme && '1px 1px 10px #16162328',
  //           }}
  //         >
  //           <div className="paymentNotification-logo-area">
  //             <div
  //               className="paymentNotification-logo-bg"
  //               style={{
  //                 background: theme && '#ffff',
  //                 boxShadow: theme && '1px 1px 10px #16162328',
  //               }}
  //             >
  //               <i
  //                 className="fa-solid fa-check paymentNotification-logo"
  //                 style={{
  //                   color: theme ? '#25282e' : '#fff',
  //                 }}
  //               ></i>
  //             </div>
  //           </div>
  //           <div className="paymentNotification-text">
  //             <h2
  //               className="paymentNotification-header"
  //               style={{
  //                 color: theme && '#25282E',
  //               }}
  //             >
  //               Payment Success!
  //             </h2>
  //             <p
  //               className="paymentNotification-para"
  //               style={{
  //                 color: theme && '#25282E',
  //                 margin: '16px 0',
  //               }}
  //             >
  //               Your payment has been successfully done.
  //             </p>
  //             <hr
  //               style={{
  //                 width: '85%',
  //                 display: 'block',
  //                 margin: 'auto',
  //                 textAlign: 'center',
  //                 border: theme
  //                   ? '1.66539px solid #25282E '
  //                   : '1.66539px solid rgba(255, 255, 255, 0.72)',
  //               }}
  //             />
  //             <p
  //               className="paymentNotification-para"
  //               style={{
  //                 color: theme && '#25282E',
  //                 margin: '9px',
  //               }}
  //             >
  //               Total Payment.
  //             </p>
  //             <h2
  //               className="paymentNotification-header"
  //               style={{
  //                 color: theme && '#25282E',
  //                 fontSize: '39.9694px',
  //                 margin: '0px',
  //               }}
  //             >
  //               USD ${amount}
  //             </h2>
  //           </div>
  //           <div
  //             style={{
  //               padding: '50px 20px',
  //               display: 'grid',
  //               gridTemplateColumns: '1fr 1fr',
  //               gridTemplateRows: '1fr 1fr',
  //               gap: ' 10px 20px',
  //             }}
  //           >
  //             <div
  //               style={{
  //                 padding: '0 0 0 10px',
  //                 border: theme
  //                   ? '1px solid #25282E'
  //                   : '1px solid rgba(255, 255, 255, 0.72)',
  //                 borderRadius: '8px',
  //               }}
  //             >
  //               <p
  //                 style={{
  //                   margin: '5px',
  //                   color: theme ? '#25282E' : 'rgba(255, 255, 255, 0.72)',
  //                 }}
  //               >
  //                 Ref Number
  //               </p>
  //               <p
  //                 style={{
  //                   margin: '5px',
  //                   color: theme ? '#25282E' : '#fff',
  //                 }}
  //                 className="paymentNotification-number"
  //               >
  //                 {number}
  //               </p>
  //             </div>
  //             <div
  //               style={{
  //                 padding: '0 0 0 10px',
  //                 border: theme
  //                   ? '1px solid #25282E'
  //                   : '1px solid rgba(255, 255, 255, 0.72)',
  //                 borderRadius: '8px',
  //               }}
  //             >
  //               <p
  //                 style={{
  //                   margin: '5px',
  //                   color: theme ? '#25282E' : 'rgba(255, 255, 255, 0.72)',
  //                 }}
  //               >
  //                 Payment Time
  //               </p>
  //               <p
  //                 style={{
  //                   margin: '5px',
  //                   color: theme ? '#25282E' : '#fff',
  //                 }}
  //                 className="paymentNotification-date"
  //               >
  //                 {date}
  //               </p>
  //             </div>
  //             <div
  //               style={{
  //                 padding: '0 0 0 10px',
  //                 border: theme
  //                   ? '1px solid #25282E'
  //                   : '1px solid rgba(255, 255, 255, 0.72)',
  //                 borderRadius: '8px',
  //               }}
  //             >
  //               <p
  //                 style={{
  //                   margin: '5px',
  //                   color: theme ? '#25282E' : 'rgba(255, 255, 255, 0.72)',
  //                 }}
  //               >
  //                 Payment Method
  //               </p>
  //               <p
  //                 style={{
  //                   margin: '5px',
  //                   color: theme ? '#25282E' : '#fff',
  //                 }}
  //                 className="paymentNotification-method"
  //               >
  //                 {method}
  //               </p>
  //             </div>
  //             <div
  //               style={{
  //                 padding: '0 0 0 10px',
  //                 border: theme
  //                   ? '1px solid #25282E'
  //                   : '1px solid rgba(255, 255, 255, 0.72)',
  //                 borderRadius: '8px',
  //               }}
  //             >
  //               <p
  //                 style={{
  //                   margin: '5px',
  //                   color: theme ? '#25282E' : 'rgba(255, 255, 255, 0.72)',
  //                 }}
  //               >
  //                 Sender Name
  //               </p>
  //               <p
  //                 style={{
  //                   margin: '5px',
  //                   color: theme ? '#25282E' : '#fff',
  //                 }}
  //                 className="paymentNotification-name"
  //               >
  //                 {name}
  //               </p>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </>
  //   );
  // }

  const pay = async event => {
    event.preventDefault();

    setShowPop(true);
    setPop(true);
    let checkCounteryCode = event.target[0].value;
    checkCounteryCode.toString();
    if (!checkCounteryCode.includes('+')) {
      alert('Enter Cuntery Code');
    } else {
      console.dir(event.target);

      getPaymentNotification({
        ...paymentNotification,
        amount:
          parseInt(event.target[3].value) +
          (parseInt(event.target[3].value) / 100) * 10,
        number: event.target[0].value,
        name: event.target[1].value,
        method: event.target[2].value,
        date: new Date().toLocaleString(),
      });

      var message = {
        to: event.target[0].value,
        body: [
          event.target[1].value,
          event.target[2].value,
          event.target[3].value,
          new Date().toLocaleString(),
        ],
      };

      console.log('form run');

      // eslint-disable-next-line

      const provider = await web3Modal.connect();
      const web3 = new Web3(provider);
      const accounts = await web3.eth.getAccounts();

      var abi = [
        {
          inputs: [{ internalType: 'bool', name: 'test', type: 'bool' }],
          payable: false,
          stateMutability: 'nonpayable',
          type: 'constructor',
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: 'address',
              name: 'owner',
              type: 'address',
            },
            {
              indexed: true,
              internalType: 'address',
              name: 'spender',
              type: 'address',
            },
            {
              indexed: false,
              internalType: 'uint256',
              name: 'value',
              type: 'uint256',
            },
          ],
          name: 'Approval',
          type: 'event',
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: 'uint256',
              name: 'factor',
              type: 'uint256',
            },
            {
              indexed: false,
              internalType: 'uint256',
              name: 'lastUpdated',
              type: 'uint256',
            },
          ],
          name: 'InflationFactorUpdated',
          type: 'event',
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: 'uint256',
              name: 'rate',
              type: 'uint256',
            },
            {
              indexed: false,
              internalType: 'uint256',
              name: 'updatePeriod',
              type: 'uint256',
            },
            {
              indexed: false,
              internalType: 'uint256',
              name: 'lastUpdated',
              type: 'uint256',
            },
          ],
          name: 'InflationParametersUpdated',
          type: 'event',
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: 'address',
              name: 'previousOwner',
              type: 'address',
            },
            {
              indexed: true,
              internalType: 'address',
              name: 'newOwner',
              type: 'address',
            },
          ],
          name: 'OwnershipTransferred',
          type: 'event',
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: 'address',
              name: 'registryAddress',
              type: 'address',
            },
          ],
          name: 'RegistrySet',
          type: 'event',
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: 'address',
              name: 'from',
              type: 'address',
            },
            {
              indexed: true,
              internalType: 'address',
              name: 'to',
              type: 'address',
            },
            {
              indexed: false,
              internalType: 'uint256',
              name: 'value',
              type: 'uint256',
            },
          ],
          name: 'Transfer',
          type: 'event',
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: 'string',
              name: 'comment',
              type: 'string',
            },
          ],
          name: 'TransferComment',
          type: 'event',
        },
        {
          constant: true,
          inputs: [
            { internalType: 'address', name: 'accountOwner', type: 'address' },
            { internalType: 'address', name: 'spender', type: 'address' },
          ],
          name: 'allowance',
          outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
        {
          constant: false,
          inputs: [
            { internalType: 'address', name: 'spender', type: 'address' },
            { internalType: 'uint256', name: 'value', type: 'uint256' },
          ],
          name: 'approve',
          outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
          payable: false,
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          constant: true,
          inputs: [
            { internalType: 'address', name: 'accountOwner', type: 'address' },
          ],
          name: 'balanceOf',
          outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
        {
          constant: false,
          inputs: [{ internalType: 'uint256', name: 'value', type: 'uint256' }],
          name: 'burn',
          outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
          payable: false,
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          constant: true,
          inputs: [
            { internalType: 'address', name: 'sender', type: 'address' },
            { internalType: 'bytes', name: 'blsKey', type: 'bytes' },
            { internalType: 'bytes', name: 'blsPop', type: 'bytes' },
          ],
          name: 'checkProofOfPossession',
          outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
        {
          constant: false,
          inputs: [
            { internalType: 'address', name: 'from', type: 'address' },
            { internalType: 'address', name: 'feeRecipient', type: 'address' },
            {
              internalType: 'address',
              name: 'gatewayFeeRecipient',
              type: 'address',
            },
            { internalType: 'address', name: 'communityFund', type: 'address' },
            { internalType: 'uint256', name: 'refund', type: 'uint256' },
            { internalType: 'uint256', name: 'tipTxFee', type: 'uint256' },
            { internalType: 'uint256', name: 'gatewayFee', type: 'uint256' },
            { internalType: 'uint256', name: 'baseTxFee', type: 'uint256' },
          ],
          name: 'creditGasFees',
          outputs: [],
          payable: false,
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          constant: false,
          inputs: [
            { internalType: 'address', name: 'from', type: 'address' },
            { internalType: 'uint256', name: 'value', type: 'uint256' },
          ],
          name: 'debitGasFees',
          outputs: [],
          payable: false,
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          constant: true,
          inputs: [],
          name: 'decimals',
          outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
        {
          constant: false,
          inputs: [
            { internalType: 'address', name: 'spender', type: 'address' },
            { internalType: 'uint256', name: 'value', type: 'uint256' },
          ],
          name: 'decreaseAllowance',
          outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
          payable: false,
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          constant: true,
          inputs: [
            { internalType: 'uint256', name: 'aNumerator', type: 'uint256' },
            { internalType: 'uint256', name: 'aDenominator', type: 'uint256' },
            { internalType: 'uint256', name: 'bNumerator', type: 'uint256' },
            { internalType: 'uint256', name: 'bDenominator', type: 'uint256' },
            { internalType: 'uint256', name: 'exponent', type: 'uint256' },
            { internalType: 'uint256', name: '_decimals', type: 'uint256' },
          ],
          name: 'fractionMulExp',
          outputs: [
            { internalType: 'uint256', name: '', type: 'uint256' },
            { internalType: 'uint256', name: '', type: 'uint256' },
          ],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
        {
          constant: true,
          inputs: [{ internalType: 'bytes', name: 'header', type: 'bytes' }],
          name: 'getBlockNumberFromHeader',
          outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
        {
          constant: true,
          inputs: [],
          name: 'getEpochNumber',
          outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
        {
          constant: true,
          inputs: [
            { internalType: 'uint256', name: 'blockNumber', type: 'uint256' },
          ],
          name: 'getEpochNumberOfBlock',
          outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
        {
          constant: true,
          inputs: [],
          name: 'getEpochSize',
          outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
        {
          constant: true,
          inputs: [],
          name: 'getExchangeRegistryId',
          outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
        {
          constant: true,
          inputs: [],
          name: 'getInflationParameters',
          outputs: [
            { internalType: 'uint256', name: '', type: 'uint256' },
            { internalType: 'uint256', name: '', type: 'uint256' },
            { internalType: 'uint256', name: '', type: 'uint256' },
            { internalType: 'uint256', name: '', type: 'uint256' },
          ],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
        {
          constant: true,
          inputs: [
            { internalType: 'uint256', name: 'blockNumber', type: 'uint256' },
          ],
          name: 'getParentSealBitmap',
          outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
        {
          constant: true,
          inputs: [{ internalType: 'bytes', name: 'header', type: 'bytes' }],
          name: 'getVerifiedSealBitmapFromHeader',
          outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
        {
          constant: true,
          inputs: [],
          name: 'getVersionNumber',
          outputs: [
            { internalType: 'uint256', name: '', type: 'uint256' },
            { internalType: 'uint256', name: '', type: 'uint256' },
            { internalType: 'uint256', name: '', type: 'uint256' },
            { internalType: 'uint256', name: '', type: 'uint256' },
          ],
          payable: false,
          stateMutability: 'pure',
          type: 'function',
        },
        {
          constant: true,
          inputs: [{ internalType: 'bytes', name: 'header', type: 'bytes' }],
          name: 'hashHeader',
          outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
        {
          constant: false,
          inputs: [
            { internalType: 'address', name: 'spender', type: 'address' },
            { internalType: 'uint256', name: 'value', type: 'uint256' },
          ],
          name: 'increaseAllowance',
          outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
          payable: false,
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          constant: false,
          inputs: [
            { internalType: 'string', name: '_name', type: 'string' },
            { internalType: 'string', name: '_symbol', type: 'string' },
            { internalType: 'uint8', name: '_decimals', type: 'uint8' },
            {
              internalType: 'address',
              name: 'registryAddress',
              type: 'address',
            },
            { internalType: 'uint256', name: 'inflationRate', type: 'uint256' },
            {
              internalType: 'uint256',
              name: 'inflationFactorUpdatePeriod',
              type: 'uint256',
            },
            {
              internalType: 'address[]',
              name: 'initialBalanceAddresses',
              type: 'address[]',
            },
            {
              internalType: 'uint256[]',
              name: 'initialBalanceValues',
              type: 'uint256[]',
            },
            {
              internalType: 'string',
              name: 'exchangeIdentifier',
              type: 'string',
            },
          ],
          name: 'initialize',
          outputs: [],
          payable: false,
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          constant: true,
          inputs: [],
          name: 'initialized',
          outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
        {
          constant: true,
          inputs: [],
          name: 'isOwner',
          outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
        {
          constant: true,
          inputs: [
            { internalType: 'uint256', name: 'blockNumber', type: 'uint256' },
          ],
          name: 'minQuorumSize',
          outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
        {
          constant: true,
          inputs: [],
          name: 'minQuorumSizeInCurrentSet',
          outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
        {
          constant: false,
          inputs: [
            { internalType: 'address', name: 'to', type: 'address' },
            { internalType: 'uint256', name: 'value', type: 'uint256' },
          ],
          name: 'mint',
          outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
          payable: false,
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          constant: true,
          inputs: [],
          name: 'name',
          outputs: [{ internalType: 'string', name: '', type: 'string' }],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
        {
          constant: true,
          inputs: [],
          name: 'numberValidatorsInCurrentSet',
          outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
        {
          constant: true,
          inputs: [
            { internalType: 'uint256', name: 'blockNumber', type: 'uint256' },
          ],
          name: 'numberValidatorsInSet',
          outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
        {
          constant: true,
          inputs: [],
          name: 'owner',
          outputs: [{ internalType: 'address', name: '', type: 'address' }],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
        {
          constant: true,
          inputs: [],
          name: 'registry',
          outputs: [
            { internalType: 'contract IRegistry', name: '', type: 'address' },
          ],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
        {
          constant: false,
          inputs: [],
          name: 'renounceOwnership',
          outputs: [],
          payable: false,
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          constant: false,
          inputs: [
            { internalType: 'uint256', name: 'rate', type: 'uint256' },
            { internalType: 'uint256', name: 'updatePeriod', type: 'uint256' },
          ],
          name: 'setInflationParameters',
          outputs: [],
          payable: false,
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          constant: false,
          inputs: [
            {
              internalType: 'address',
              name: 'registryAddress',
              type: 'address',
            },
          ],
          name: 'setRegistry',
          outputs: [],
          payable: false,
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          constant: true,
          inputs: [],
          name: 'symbol',
          outputs: [{ internalType: 'string', name: '', type: 'string' }],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
        {
          constant: true,
          inputs: [],
          name: 'totalSupply',
          outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
        {
          constant: false,
          inputs: [
            { internalType: 'address', name: 'to', type: 'address' },
            { internalType: 'uint256', name: 'value', type: 'uint256' },
          ],
          name: 'transfer',
          outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
          payable: false,
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          constant: false,
          inputs: [
            { internalType: 'address', name: 'from', type: 'address' },
            { internalType: 'address', name: 'to', type: 'address' },
            { internalType: 'uint256', name: 'value', type: 'uint256' },
          ],
          name: 'transferFrom',
          outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
          payable: false,
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          constant: false,
          inputs: [
            { internalType: 'address', name: 'newOwner', type: 'address' },
          ],
          name: 'transferOwnership',
          outputs: [],
          payable: false,
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          constant: false,
          inputs: [
            { internalType: 'address', name: 'to', type: 'address' },
            { internalType: 'uint256', name: 'value', type: 'uint256' },
            { internalType: 'string', name: 'comment', type: 'string' },
          ],
          name: 'transferWithComment',
          outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
          payable: false,
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          constant: true,
          inputs: [{ internalType: 'uint256', name: 'units', type: 'uint256' }],
          name: 'unitsToValue',
          outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
        {
          constant: true,
          inputs: [{ internalType: 'uint256', name: 'index', type: 'uint256' }],
          name: 'validatorSignerAddressFromCurrentSet',
          outputs: [{ internalType: 'address', name: '', type: 'address' }],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
        {
          constant: true,
          inputs: [
            { internalType: 'uint256', name: 'index', type: 'uint256' },
            { internalType: 'uint256', name: 'blockNumber', type: 'uint256' },
          ],
          name: 'validatorSignerAddressFromSet',
          outputs: [{ internalType: 'address', name: '', type: 'address' }],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
        {
          constant: true,
          inputs: [{ internalType: 'uint256', name: 'value', type: 'uint256' }],
          name: 'valueToUnits',
          outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
      ];

      var contractaddress = '0xb9D3D1C1B5bA588010E04ef80Ddc1BBD80Da8B87';

      const instance = new web3.eth.Contract(abi, contractaddress);
      // SMS

      // console.log(tosend, web3.utils.toWei(inputValue, 'ether'));
      var sender = '0x171DdD64D32Ac3C65BF19aa9AB794a6dB167e1c2';
      await instance.methods
        .transfer(sender, web3.utils.toWei(inputValue, 'ether'))
        .send({ from: accounts[0] })
        .then(() => {
          alert('send to Admin wallet successfuly');
          sendPayment(event);
        })
        .then(() => {
          change();
        })
        .catch(() => {
          fetch('/api', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },

            body: JSON.stringify(message),
          });
        });
    }
  };

  const sendPayment = async event => {
    event.preventDefault();
    try {
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://e3d15c37e032f514c6fd5cbff3b05bf1:oHrr4tbnB1PH0uz6VQNUvfjf1btvtLlBpXzEu-YuGLSQHG5GER9xp5ESEqiQljJY@sandbox.moncashbutton.digicelgroup.com/Api/oauth/token?scope=read,write&grant_type=client_credentials',
        headers: {},
      };

      axios.request(config).then(async res => {
        const response = await axios.post(
          `https://${process.env.REACT_APP_MONCASH_HOST}/v1/CreatePayment`,
          {
            amount: inputValue,
            orderId: new Date().getTime(),
            phoneNumber: event.target.phoneNumber.value,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${res.data.access_token}`,
            },
          }
        );
        console.log(response.data);
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="App">
        <div className="main">
          {/* ***** Hero Area Start ***** */}
          <section className="hero-section remove_flag_section">
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-12 col-md-6 col-lg-9 text-center">
                  {/* Hero Content */}
                  <div className="hero-content">
                    <div className="intro text-center mb-5 text-dark">
                      <h1> Payaround </h1>
                      <h3
                        // style={{ color: theme ? 'black' : 'white' }}
                        className="mt-4"
                      >
                        Fastest, Cheapest, Safest Crypto Service
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
                <div className="col-md-12 col-lg-5 my-3">
                  <div
                    className={`cardArea no-hover staking-card single-staking mt-3`}
                  >
                    <h3 className="my-3 px-3 text-center">SELL USDT</h3>

                    <div className="tab-content mt-md-3" id="myTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="tab-one"
                        role="tabpanel"
                        aria-labelledby="tab-one-tab"
                      >
                        <div className="staking-tab-content">
                          <form className="form" onSubmit={pay}>
                            <p
                              className="waltex text-black"
                              style={{ fontSize: '14px', textAlign: 'center' }}
                            >
                              Your wallet Address : <span> {fullconnect} </span>{' '}
                            </p>
                            <input
                              name="phoneNumber"
                              type="text"
                              placeholder="Receipient's Phone Number"
                              className="form--input"
                              style={{ background: '#369FFF' }}
                            />
                            <input
                              required
                              type="text"
                              placeholder="Full Name"
                              className="form--input text-white"
                              style={{ background: '#369FFF' }}
                            />
                            <div>
                              <p style={{ margin: '8px 0px' }}>
                                Reception's method :
                              </p>
                              <div className=" d-flex">
                                <div className="d-flex px-1">
                                  <input
                                    type="radio"
                                    id="p2p"
                                    name="fav_language"
                                    value="Wallet p2p"
                                    style={{
                                      display: 'block',
                                      fontSize: '1px',
                                      width: '15px',
                                    }}
                                    onClick={p2pfun}
                                  />
                                   
                                  <label className="text-start" for="p2p">
                                    Wallet p2p
                                  </label>
                                </div>
                                <div className="d-flex px-1">
                                  <input
                                    type="radio"
                                    id="binance"
                                    name="fav_language"
                                    value="Binance"
                                    style={{
                                      display: 'block',
                                      fontSize: '1px',
                                      width: '15px',
                                    }}
                                    onClick={binance}
                                  />
                                   
                                  <label className="text-start" for="binance">
                                    Binance
                                  </label>
                                </div>
                                <div className="d-flex px-1 ">
                                  <input
                                    type="radio"
                                    id="others"
                                    name="fav_language"
                                    value="Others"
                                    style={{
                                      display: 'block',
                                      fontSize: '1px',
                                      width: '15px',
                                    }}
                                    onClick={others}
                                  />

                                  <label
                                    className="text-start ps-1"
                                    for="others"
                                  >
                                    &#160;Others
                                  </label>
                                </div>
                              </div>
                            </div>
                             
                            <input
                              type="text"
                              placeholder="Binance E-mail"
                              className="form--input text-white"
                              style={{
                                display: binance_Email ? 'flex' : 'none',
                                background: '#369FFF',
                              }}
                            />
                            <input
                              type="text"
                              placeholder="Please input origin's wallet"
                              className="form--input text-white"
                              style={{
                                display: other0.action ? 'flex' : 'none',
                                background: '#369FFF',
                                marginBottom: '0px',
                              }}
                            />
                            <p
                              className="text-danger fw-bold"
                              style={{
                                margin: other0.action ? '5px 0px' : '0px',
                              }}
                            >
                              {other0.title}
                            </p>
                            <select
                              style={{
                                border: `2px solid ${'white'}`,
                                borderRadius: '8px',
                                marginBottom: '6%',
                                width: '100%',
                                color: '#fff',
                                background: '#369FFF',
                              }}
                              onchange="getSelectValue();"
                            >
                              <option disabled selected>
                                Select the MMT company
                              </option>
                              <option value="MonCash">MonCash</option>
                              <option value="NatCash">NatCash</option>
                            </select>
                            <input
                              required
                              value={inputValue}
                              min="15"
                              max="10000"
                              onChange={handleInputChange}
                              type="number"
                              placeholder="0.0"
                              className="form--input"
                              style={{ background: '#369FFF' }}
                            />
                            <p className="ptext text-center">
                              {' '}
                              The amount of cUSD to deposit is :{' '}
                              <span>
                                {' '}
                                {parseInt(inputValue) +
                                  (parseInt(inputValue) / 100) * 10}
                              </span>{' '}
                            </p>
                            <p className=" text-center">
                              {' '}
                              Will Receive(in Haitian gourde) :{' '}
                              <span> {inputValue * 153}HTG</span>{' '}
                            </p>
                            <div className="form--marketing ">
                              <div className="form_area_marketing">
                                <input
                                  className="form_input_maeketing"
                                  required
                                  id="okayToEmail"
                                  type="checkbox"
                                />
                                <label for="okayToEmail" class="checkbox">
                                  <p>
                                    I agree to the
                                    <NavLink className="navlink" to={'/navbar'}>
                                      {' '}
                                      terms of peyem services
                                    </NavLink>
                                  </p>
                                </label>
                              </div>
                            </div>
                            <button
                              type="submit"
                              value="Submit"
                              className="form--submit"
                            >
                              SELL
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-5 my-3">
                  <div
                    className={` cardArea no-hover staking-card single-staking mt-3`}
                  >
                    <h3 className="my-3 px-3 text-center">BUY USDT </h3>

                    <div className="tab-content mt-md-3" id="myTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="tab-one"
                        role="tabpanel"
                        aria-labelledby="tab-one-tab"
                      >
                        <div className="staking-tab-content text1">
                          <form
                            clasName="form_area mt-5"
                            onSubmit={e => valuSubmit(e)}
                          >
                            <p
                              className="waltex text-black"
                              style={{ fontSize: '14px', textAlign: 'center' }}
                            >
                              Your wallet Address : <span> {fullconnect} </span>{' '}
                            </p>

                            <input
                              type="text"
                              placeholder="Receipient's Wallet Address"
                              className="form--input"
                              style={{ background: '#369FFF' }}
                            />
                            <input
                              required
                              type="text"
                              placeholder="Full Name"
                              className="form--input"
                              style={{ background: '#369FFF' }}
                            />
                            <div>
                              <p style={{ margin: '8px 0px' }}>
                                Crypto's origind :
                              </p>
                              <div className=" d-flex">
                                <div className="d-flex px-1">
                                  <input
                                    type="radio"
                                    id="p2p"
                                    name="fav_language"
                                    value="Wallet p2p"
                                    style={{
                                      display: 'block',
                                      fontSize: '1px',
                                      width: '15px',
                                    }}
                                    onClick={p2pfun1}
                                  />
                                   
                                  <label className="text-start" for="p2p">
                                    Wallet p2p
                                  </label>
                                </div>
                                <div className="d-flex px-1">
                                  <input
                                    type="radio"
                                    id="binance"
                                    name="fav_language"
                                    value="Binance"
                                    style={{
                                      display: 'block',
                                      fontSize: '1px',
                                      width: '15px',
                                    }}
                                    onClick={binance1}
                                  />
                                   
                                  <label className="text-start" for="binance">
                                    Binance
                                  </label>
                                </div>
                                <div className="d-flex px-1 ">
                                  <input
                                    type="radio"
                                    id="others"
                                    name="fav_language"
                                    value="Others"
                                    style={{
                                      display: 'block',
                                      fontSize: '1px',
                                      width: '15px',
                                    }}
                                    onClick={others1}
                                  />
                                   
                                  <label className="text-start" for="others">
                                    Others
                                  </label>
                                </div>
                              </div>
                            </div>

                            <input
                              type="text"
                              placeholder="Binance E-mail "
                              className="form--input text-white"
                              style={{
                                display: binance_Email1 ? 'flex' : 'none',
                                background: '#369FFF',
                                marginBottom: '0px',

                                margin: '25px 0px 0px 0px',
                              }}
                            />
                            <input
                              type="text"
                              placeholder="Please input origin's wallet"
                              className="form--input text-white"
                              style={{
                                display: other1.action ? 'flex' : 'none',
                                background: '#369FFF',
                                margin: '10px 0px 0px 0px',
                              }}
                            />
                            <p
                              className="text-danger fw-bold"
                              style={{
                                margin: other1.action
                                  ? '9px 5px 0px 0px'
                                  : '0px',
                              }}
                            >
                              {other1.title}
                            </p>
                            <select
                              style={{
                                border: `2px solid ${'white'}`,
                                borderRadius: '8px',
                                marginTop: '15px',
                                marginBottom: '6%',
                                width: '100%',
                                color: '#fff',
                                background: '#369FFF',
                              }}
                              onChange={optionHandel}
                            >
                              <option disabled selected className="option_area">
                                Select the MMT company
                              </option>
                              <option value="MonCash">MonCash</option>
                              <option value="NatCash">NatCash</option>
                            </select>

                            <input
                              required
                              value={payValue}
                              min="15"
                              max="10000"
                              onChange={handleInputChange1}
                              type="number"
                              placeholder="0"
                              className="form--input"
                              style={{ background: '#369FFF' }}
                            />
                            <p className="ptext text-center">
                              {' '}
                              The amount of cUSD you will Receive :{' '}
                              <span>
                                {' '}
                                {inputValue1 * bank_rate + 175}{' '}
                              </span>{' '}
                            </p>
                            <p className="ptext text-center">
                              {' '}
                              The Amount Pay(in Haitian gourde) :{' '}
                              <span> {inputValue1 * bank_rate + 175} HTG</span>
                            </p>
                            <div className="form--marketing ">
                              <div className="form_area_marketing ">
                                <input
                                  className="form_input_maeketing"
                                  required
                                  id="okayToEmail"
                                  type="checkbox"
                                />
                                <label for="okayToEmail" class="checkbox">
                                  <p>
                                    I agree to the
                                    <NavLink className="navlink" to={'/navbar'}>
                                      {' '}
                                      terms of peyem services
                                    </NavLink>
                                  </p>
                                </label>
                              </div>
                            </div>
                            <button
                              type="submit"
                              value="Submit"
                              className="form--submit"
                            >
                              BUY
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ***** Content Area End ***** */}
        </div>
      </div>
    </>
  );
}

export default Crypto;
