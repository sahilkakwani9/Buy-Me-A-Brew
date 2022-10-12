// scripts/deploy.js

const hre = require("hardhat");

async function main() {
  // We get the contract to deploy.
  const BuyMeABrew = await hre.ethers.getContractFactory("BuyMeABrew");
  const buyMeABrew = await BuyMeABrew.deploy();

  await buyMeABrew.deployed();

  console.log("BuyMeACoffee deployed to:", buyMeABrew.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });