import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';
import { Web3Modal, useWeb3Modal } from '@web3modal/react';
import { configureChains, createConfig, WagmiConfig, useAccount, useConnect, useDisconnect, useNetwork, useSwitchNetwork } from 'wagmi';
import { optimism } from 'wagmi/chains';
import { Wallet, ExternalLink, Check, AlertCircle } from 'lucide-react';

const projectId = 'fd5220888cc12eb79beb00ce1b866589';

// Configure chains and providers
const { chains, publicClient } = configureChains(
  [optimism],
  [w3mProvider({ projectId })]
);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ 
    projectId, 
    chains,
    version: 2
  }),
  publicClient
});

const ethereumClient = new EthereumClient(wagmiConfig, chains);

const WalletConnectButton = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const prefersReducedMotion = useReducedMotion();
  const { open } = useWeb3Modal();

  // Wagmi hooks
  const { address, isConnected } = useAccount();
  const { isLoading } = useConnect({
    onSuccess: () => {
      console.log('Connection successful');
      setErrorMessage('');
    },
    onError: (error) => {
      console.error('Connection error:', error);
      setErrorMessage(`Connection failed: ${error.message}`);
    }
  });
  const { disconnect } = useDisconnect();
  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();

  // Network switching effect
  useEffect(() => {
    if (isConnected && chain?.id !== optimism.id) {
      console.log('Wrong network detected, attempting to switch...');
      switchNetwork?.(optimism.id).catch((error) => {
        console.error('Network switch error:', error);
        setErrorMessage('Please switch to Optimism network manually');
      });
    }
  }, [isConnected, chain, switchNetwork]);

  const handleConnect = async () => {
    try {
      setErrorMessage('');
      console.log('Opening Web3Modal...');
      await open();
    } catch (error) {
      console.error('Connection error:', error);
      setErrorMessage(`Failed to open wallet selector: ${error.message}`);
    }
  };

  const handleDisconnect = async () => {
    try {
      await disconnect();
      setErrorMessage('');
    } catch (error) {
      console.error('Disconnect error:', error);
      setErrorMessage(`Failed to disconnect: ${error.message}`);
    }
  };

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
          onClick={handleConnect}
          disabled={isLoading}
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
          {isLoading ? 'Connecting...' : 'Connect Wallet'}
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
            {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : ''}
          </div>
          <motion.button
            style={{...styles.walletButton, backgroundColor: 'transparent', border: '2px solid #93b3d8', color: '#93b3d8'}}
            onClick={handleDisconnect}
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

const WalletConnect = () => {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <WalletConnectButton />
      </WagmiConfig>

      <Web3Modal
        projectId={projectId}
        ethereumClient={ethereumClient}
        defaultChain={optimism}
        themeMode="dark"
        themeVariables={{
          '--w3m-background-color': '#100c1c',
          '--w3m-accent-color': '#713c4e',
          '--w3m-text-color': '#ffe3b3',
          '--w3m-border-color': '#28265a',
          '--w3m-button-hover-bg-color': '#28265a',
          '--w3m-menu-bg-color': '#100c1c',
          '--w3m-overlay-background-color': 'rgba(16, 12, 28, 0.8)',
        }}
      />
    </>
  );
};

export default WalletConnect;