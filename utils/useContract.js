import { ethers } from "ethers";
import {contractAddress, Abi} from './constants';

export default function useContract(){
    try {
        const { ethereum } = window;
        const provider = new ethers.providers.Web3Provider(ethereum, "any");
        const signer = provider.getSigner();
        const BuyMeABrew = new ethers.Contract(
            contractAddress,
            Abi,
            signer
          );
          return BuyMeABrew;
    } catch (error) {
        console.log(error);
    }
}