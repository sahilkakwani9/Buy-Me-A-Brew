import { useState } from "react";
import { ethers } from "ethers";
import Main from "./Main";



export default function Home() {
  // const setCurrentAccount = state.setCurrentAccount;
  const [walletConnected, setWalletConnected] = useState(false)

  const connectWallet = async () => {
    try {
        const { ethereum } = window;
        if (!ethereum) {
            alert("Please Install Metamask");
        }
        else {
            const getAccount = await ethereum.request({
                method: 'eth_requestAccounts'
            });
            let provider = new ethers.providers.Web3Provider(ethereum, "any");
            let signer = provider.getSigner();
            let chaindId = await signer.getChainId();
            if (chaindId !== 5) {
                setWalletConnected(false)
                signer.getChainId().then(async (res) => {
                    if (res !== 5) {
                        const polygon = await ethereum.request({
                            method: 'wallet_switchEthereumChain',
                            params: [{ chainId: "0x5" }]
                        })
                        const accounts = await ethereum.request({
                            method: 'eth_requestAccounts',
                        });
                        signer = provider.getSigner();
                        // setCurrentAccount(accounts[0]);
                        setWalletConnected(true);
                        // state.setCurrentAccount(accounts[0])
                        // console.log(currentAccount);
                    }
                })
            }
            if (chaindId === 5) {
                setWalletConnected(true);
                // setCurrentAccount(getAccount[0]);
                // state.setCurrentAccount(getAccount[0]);
            }
            console.log(walletConnected)
        }
    } catch (err) {
      console.log(err)
    }

  }

  return (
    (!walletConnected)?<div className='h-fit min-h-screen max-w-screen bg-[#242424]'>
      <div className='text-center pt-36 justify-center items-center'>
        <h1 className='font-Inter text-white font-extrabold text-7xl mb-12'>Buy Me A Brew🍺</h1>
        <div className='h-52 w-52 text-center justify-center m-auto'>
          <img src="./beer.png" alt="" />
        </div>
        <button className='mt-12 py-4 text-2xl bg-blue-500 hover:bg-blue-400 text-white font-bold px-6 border-b-8 border-blue-700 hover:border-blue-500 rounded' onClick={connectWallet}>Connect Wallet</button>
      </div>
  </div>:(<Main />)
  )
}
