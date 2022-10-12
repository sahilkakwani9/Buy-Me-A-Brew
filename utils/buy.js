import { ethers } from "ethers";
import  useContract  from './useContract';
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

export default async function buy(name,message){
    try {
        const { ethereum } = window;
        if (ethereum){
            toast(
                "Accept The Transaction",
                {
                    autoClose: 5000,
                    hideProgressBar: false,
                    type: "loading"
                }
              );
            const BuyMeABrew = useContract();
            const brewTxn = await BuyMeABrew.buyBrew(
                name,
                message,
                {value: ethers.utils.parseEther("0.001")}
            );
            await brewTxn.wait();
            toast(
                "Withdraw Funds",
                {
                    autoClose: 5000,
                    hideProgressBar: false,
                    type: "loading"
                }
              );
            const withdrawTxn = await BuyMeABrew.withdrawTips();
            await withdrawTxn.wait();
            toast(
                "Accept The Transaction",
                {
                    autoClose: 5000,
                    hideProgressBar: false,
                    type: "success"
                }
              );
        }
        
          
    } catch (error) {
        console.log(error);
    }
}