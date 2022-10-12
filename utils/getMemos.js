import useContract from "./useContract";

export default async function getMemos(){
    try {
        const BuyMeABrew = useContract();
        const memo = await BuyMeABrew.getMemos();
        return memo
    } catch (error) {
        console.log(error)
    }
}