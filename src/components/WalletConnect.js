import React, { useState } from 'react';
import Web3 from 'web3';
import '../styles/WalletConnect.css';

const WalletConnect = () => {
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
      } catch (error) {
        console.error('User denied account access');
      }
    } else {
      console.error('No Ethereum provider found');
    }
  };

  return (
    <button className="wallet-connect-button" onClick={connectWallet}>
      {account ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}` : 'Connect Wallet'}
    </button>
  );
};

export default WalletConnect;
