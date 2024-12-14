import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Web3Modal from 'web3modal';
import Web3 from 'web3';
import WalletConnectProvider from "@walletconnect/web3-provider";
import { Wallet, ExternalLink, Check, AlertCircle } from 'lucide-react';

const WalletConnect = () => {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const prefersReducedMotion = useReducedMotion();

  const styles = {
    container: {
      padding: '2rem 1rem',
      maxWidth: '600px',
      margin: '0 auto',
      textAlign: 'center',
    },
    walletButton: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      backgroundColor: '#713c4e',
      color: '#100c1c',
      padding: '0.875rem 1.5rem',
      borderRadius: '50px',
      border: '2px solid transparent',
      cursor: 'pointer',
      fontWeight: 'bold',
      fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
      boxShadow: '0 4px 15px rgba(252, 255, 244, 0.2)',
      transition: 'all 0.3s ease',
    },
    connectedInfo: {
      backgroundColor: 'rgba(147, 179, 216, 0.1)',
      borderRadius: '15px',
      border: '1px solid rgba(255,255,255,0.1)',
      padding: '1.5rem',
      marginTop: '1rem',
      color: '#ffffff',
    },
    address: {
      color: '#ffe3b3',
      fontSize: '1.1rem',
      marginBottom: '1rem',
      wordBreak: 'break-all',
    },
    networkBadge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      backgroundColor: '#28265a',
      color: '#c79884',
      padding: '0.5rem 1rem',
      borderRadius: '25px',
      fontSize: '0.9rem',
      marginBottom: '1rem',
    },
    error: {
      backgroundColor: 'rgba(255, 87, 87, 0.1)',
      color: '#ff5757',
      padding: '1rem',
      borderRadius: '10px',
      marginBottom: '1rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '0.9rem',
    },
  };

  // Chain IDs for network checking
  const OPTIMISM_CHAIN_ID = '0xa';  // hex
  const OPTIMISM_CHAIN_ID_DECIMAL = 10;  // decimal

  const OPTIMISM_PARAMS = {
    chainId: OPTIMISM_CHAIN_ID,
    chainName: 'Optimism',
    nativeCurrency: {
      name: 'Ethereum',
      symbol: 'ETH',
      decimals: 18
    },
    rpcUrls: ['https://mainnet.optimism.io'],
    blockExplorerUrls: ['https://optimistic.etherscan.io']
  };

  const switchToOptimism = async (provider) => {
    try {
      console.log('Attempting to switch to Optimism...');
      await provider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: OPTIMISM_CHAIN_ID }],
      });
      console.log('Successfully switched to Optimism');
      return true;
    } catch (switchError) {
      console.log('Switch error:', switchError);
      // This error code indicates that the chain has not been added to MetaMask
      if (switchError.code === 4902 || switchError.message.includes("Unrecognized chain ID")) {
        try {
          console.log('Attempting to add Optimism network...');
          await provider.request({
            method: 'wallet_addEthereumChain',
            params: [OPTIMISM_PARAMS],
          });
          console.log('Successfully added Optimism network');
          return true;
        } catch (addError) {
          console.error('Error adding network:', addError);
          setErrorMessage('Failed to add Optimism network. Please add it manually.');
          return false;
        }
      }
      console.error('Network switch error:', switchError);
      setErrorMessage('Failed to switch network. Please try manually switching to Optimism.');
      return false;
    }
  };

  useEffect(() => {
    const initWeb3Modal = async () => {
      const providerOptions = {
        injected: {
          display: {
            name: 'MetaMask',
            description: 'Connect using browser wallet',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg'
          },
          package: null
        },
        walletconnect: {
          package: WalletConnectProvider,
          options: {
            rpc: {
              10: 'https://mainnet.optimism.io'
            },
            network: 'optimism',
            qrcodeModalOptions: {
              mobileLinks: ['rainbow', 'metamask', 'ledger'],
            },
          },
          display: {
            name: 'WalletConnect',
            description: 'Connect using WalletConnect',
            logo: 'https://1000logos.net/wp-content/uploads/2022/05/WalletConnect-Logo.png'
          }
        }
      };

      window.web3Modal = new Web3Modal({
        network: "optimism",
        providerOptions,
        theme: {
          background: '#100c1c',
          main: '#ffe3b3',
          secondary: '#c79884',
          border: '#28265a',
          hover: '#713c4e'
        },
        cacheProvider: true,
        disableInjectedProvider: false
      });

      if (window.web3Modal.cachedProvider) {
        connectWallet();
      }
    };

    initWeb3Modal();
  }, []);

  const connectWallet = async () => {
    try {
      setErrorMessage('');
      const provider = await window.web3Modal.connect();
      const web3Instance = new Web3(provider);
      
      const networkId = await web3Instance.eth.net.getId();
      const networkHex = `0x${networkId.toString(16)}`;
      
      console.log('Current network:', networkId, networkHex);

      if (networkId !== OPTIMISM_CHAIN_ID_DECIMAL && networkHex !== OPTIMISM_CHAIN_ID) {
        console.log('Wrong network detected, attempting to switch...');
        const switched = await switchToOptimism(provider);
        if (!switched) {
          console.log('Failed to switch network');
          return;
        }
        
        // Wait for network switch to complete
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Re-initialize web3 after network switch
        const updatedWeb3 = new Web3(provider);
        const updatedNetworkId = await updatedWeb3.eth.net.getId();
        const updatedNetworkHex = `0x${updatedNetworkId.toString(16)}`;
        
        console.log('Updated network:', updatedNetworkId, updatedNetworkHex);
        
        if (updatedNetworkId !== OPTIMISM_CHAIN_ID_DECIMAL && updatedNetworkHex !== OPTIMISM_CHAIN_ID) {
          setErrorMessage('Please ensure you are connected to Optimism network');
          return;
        }
        setWeb3(updatedWeb3);
      } else {
        setWeb3(web3Instance);
      }

      const accounts = await web3Instance.eth.getAccounts();
      setAccount(accounts[0]);
      setIsConnected(true);

      // Handle wallet events
      provider.on('accountsChanged', (accounts) => {
        if (accounts.length === 0) {
          disconnectWallet();
        } else {
          setAccount(accounts[0]);
        }
      });

      provider.on('chainChanged', async (chainId) => {
        const chainIdDecimal = parseInt(chainId, 16);
        console.log('Chain changed:', chainId, chainIdDecimal);
        if (chainIdDecimal !== OPTIMISM_CHAIN_ID_DECIMAL && chainId !== OPTIMISM_CHAIN_ID) {
          console.log('Wrong chain detected after change');
          const switched = await switchToOptimism(provider);
          if (!switched) {
            disconnectWallet();
          }
        }
      });

      provider.on('disconnect', () => {
        console.log('Provider disconnected');
        disconnectWallet();
      });

    } catch (error) {
      console.error('Connection error:', error);
      if (error.message?.includes('User rejected')) {
        setErrorMessage('Connection rejected by user');
      } else {
        setErrorMessage(`Failed to connect wallet: ${error.message}`);
      }
    }
  };

  const disconnectWallet = async () => {
    if (window.web3Modal) {
      await window.web3Modal.clearCachedProvider();
      setWeb3(null);
      setAccount('');
      setIsConnected(false);
      setErrorMessage('');
      console.log('Wallet disconnected');
    }
  };

  return (
    <motion.div
      style={styles.container}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.4 }}
    >
      {errorMessage && (
        <motion.div
          style={styles.error}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <AlertCircle size={20} />
          {errorMessage}
        </motion.div>
      )}

      {!isConnected ? (
        <motion.button
          style={styles.walletButton}
          onClick={connectWallet}
          whileHover={prefersReducedMotion ? {} : {
            scale: 1.05,
            backgroundColor: '#28265a',
            color: '#713c4e',
            border: '2px solid #713c4e',
            boxShadow: '0 6px 20px rgba(252, 255, 244, 0.3)',
          }}
          whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
        >
          <Wallet size={20} />
          Connect Wallet
        </motion.button>
      ) : (
        <motion.div
          style={styles.connectedInfo}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div style={styles.networkBadge}>
            <Check size={16} />
            Connected to Optimism
          </div>
          <div style={styles.address}>
            {account.slice(0, 6)}...{account.slice(-4)}
          </div>
          <motion.button
            style={{...styles.walletButton, backgroundColor: 'transparent', border: '2px solid #93b3d8', color: '#93b3d8'}}
            onClick={disconnectWallet}
            whileHover={prefersReducedMotion ? {} : {
              scale: 1.05,
              backgroundColor: '#713c4e',
              color: '#100c1c',
              border: '2px solid #713c4e',
            }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
          >
            <ExternalLink size={20} />
            Disconnect
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default WalletConnect;