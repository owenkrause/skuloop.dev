import Sidebar from '../components/Sidebar'
import React, { useEffect, useState } from 'react'
import { ethers } from 'ethers';
import abi from '/src/utils/WavePortal.json'

const Web3 = () => {
  const [currentAccount, setCurrentAccount] = useState('');
  const [chainId, setChainId] = useState('');
  const [isConnecting, setIsConnecting] = useState(false);
  const [disable, setDisable] = useState(false);
  const [error, setError] = useState('');
  const [txnsuccess, setTxnSuccess] = useState(false);
  const [totalWaves, setTotalWaves] = useState('');

  const contractAddress = '0xffEd6232229ac931855332d2e8D9d46FBa6EfABD';
  const contractABI = abi.abi;
  
  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log('metamask not installed');
        return;
      } else {
        console.log('ethereum object', ethereum);
        setChainId(ethereum.chainId);
      }
      
      const accounts = await ethereum.request({ method: 'eth_accounts' });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log('account:', account);
        setCurrentAccount(account)
      } else {
        console.log('no authorized account found')
      }

      if (ethereum.chainId !== '0x4') {
        console.log('Connect to rinkeby testnet');
        setError('rinkeby')
      }

    } catch (error) {
      console.log(error);
    }
  }

  const connectWallet = async () => {
    setError('');
    setDisable(true);
    setIsConnecting(true);
    try {
      const { ethereum } = window;
      
      if (!ethereum) {
        setError('metamask');
        setIsConnecting(false);
        setDisable(false);
        return;
      } 

      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });

      console.log('Connected', accounts[0]);
      setCurrentAccount(accounts[0]); 
      setIsConnecting(false);
      setDisable(false);

      if (ethereum.chainId !== '0x4') {
        console.log('Connect to rinkeby testnet');
        setError('rinkeby')
      }

    } catch (error) {
      console.log(error)
      if(error.code == 4001) { setError('userdecline') };
      setIsConnecting(false);
      setDisable(false);
    }
  }

  const wave = async () => {
    setDisable(true);
    setIsConnecting(true);
    setError('');
    try {
      const { ethereum } = window;

      if (chainId !== '0x4' && chainId !== '') {
        console.log('Connect to rinkeby testnet');
        return;
      } else if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const wavePortalContract = new ethers.Contract(contractAddress, contractABI, signer);

        console.log('Retrieved total wave count...', getWaves());

        const waveTxn = await wavePortalContract.wave();
        console.log('Mining...', waveTxn.hash);

        await waveTxn.wait();
        console.log('Mined -- ', waveTxn.hash);
        setDisable(false);
        setIsConnecting(false);
        setTxnSuccess(true);

        console.log('Retrieved total wave count...', getWaves());
      } else {
        console.log('Ethereum object does not exist!');
      }
    } catch (error) {
      console.log(error)
      if(error.code == 4001) { setError('userdecline') };
      setIsConnecting(false);
      setDisable(false);
    }
  }

  const getWaves = async () => {
    return totalWaves;
  }

  useEffect(() => {
    checkIfWalletIsConnected();
    try {
      const { ethereum } = window;
      ethereum.on('chainChanged', (_chainId) => window.location.reload());
    } catch {}
  }, [])

  return (
    <>
      <div className='flex-container' id='parent'>

        <Sidebar />
   
        <div className='wrapper'>
          <div className='main' style={{justifyContent: 'center'}}>
            <div className='inner' style={{marginLeft: '-200px'}}>
              <div className='block'>
              <span className='header'>web3 testing...</span>
              </div>

              {!currentAccount && (
                <button className='waveButton' disabled={disable} onClick={connectWallet}>
                  {isConnecting && ( 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="circle" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="circle-quarter" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  )}
                  <span className="center-text">Connect Wallet</span>
                </button>
                
              )}

              {currentAccount && chainId === '0x4' && (
                <button className='waveButton' disabled={disable} onClick={wave}>
                  {isConnecting && ( 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="circle" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="circle-quarter" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  )}
                  <span className="center-text">Wave</span>
                </button>
              )}

              {txnsuccess && ( 
                <div id='success'>
                  <div className='description'>
                    wave succeeded!
                  </div>
                </div>
              )}
              {(error === 'metamask') && (
                <div id='error'>
                  <div className='description'>
                    install metamask
                  </div>
                </div>
              )}
              {(error === 'rinkeby') && (
                <div id='error'>
                  <div className='description'>
                    connect to rinkeby testnet
                  </div>
                </div>
              )}
              {(error === 'userdecline') && (
                <div id='error'>
                  <div className='description'>
                    user rejected the request
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Web3;