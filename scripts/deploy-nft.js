// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

//Change with your contract address from Whitelist.sol
const contractAddress = "0x148aDea7cf4878D5470f79591183A6f066bc7DB0";

async function sleep(ms){
  return new Promise((resolve) => setTimeout(resolve,ms))
}

async function main() {
  const nftContract = await hre.ethers.deployContract("aneFahmi",[contractAddress]);

  await nftContract.waitForDeployment();

  console.log("Contract Address from your NFT Minted: ", nftContract.target);

  await sleep(30 * 1000);
  
  await hre.run("verify:verify", {
    address: nftContract.target,
    constructorArguments: [contractAddress],
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
.then(()=>process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});
