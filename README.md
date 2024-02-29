# NFT with Whitelist

Let's build your first NFT in blockchain ecosystem. Add whitelist feature to make your NFT more realistic 😎.

# Requirement
- Account metamask with Sepolia network. [read it](https://www.coincarp.com/chainlist/sepolia/).
- You must have sepolia balanced. If not have, go to [here](https://sepoliafaucet.com) or [here](https://faucets.chain.link/sepolia).

# Pre-initialize 😼
- Create an account in [etherscan.io](https://etherscan.io) and get APIKEY.
- Get PRIVATE_KEY from your Metamask account (**DISCLAIMER!!** don't USE your main account for security reason. Make a new one with development purpose.)
- Create an account from Quicknode and create new project with SEPOLIA testnet as a network. And get RPCURL.
- Paste all of that to **.env**. (**PLEASE** paste with a pattern at that file.)

# How to play 🎮
- npm install nftwithwhitelist
- npm start
- Go to **contracts** directories. Then, rename file "**AneFahmi.sol**" to other filetype, maybe *.html*. It's to avoiding an error when deploy **Whitelist.sol**.
- npx hardhat run scripts/deploy.js --network sepolia
- Make sure you don't look any error when deploy it. **Copy** a whitelist contract address you got and open a link "https://sepolia.etherscan.io/address/{YOURWHITELISTCONTRACTADDRESS}
- Click a **Contract** tab. And let's go to **Write Contract**. Coonect to Web3 and then click **addAddressToWhitelist** functions. (FYI: You can see this a source code in **Code** tab. Also, at *contracts/Whitelist.sol*).
- Next step, back to your workspace and rename again a file **AneFahmi.whatEverFiletype** to **AneFahmi.sol**.
- Open *scripts/deploy-nft.js* . Find **const contractAddress** and change a value to your **Whitelist contract address**. Save it.
- And deploy your nft with, npx hardhat run scripts/deploy-nft.js --network sepolia
- Make sure, don't see an error. Do a same treatment after deploy whitelist success. Open a link "https://sepolia.etherscan.io/address/{{YOURNFTCONTADDRESS}}".
- Do you see "Token Tracker" and below that you looks "**Ane Fahmi (AFI)**"? Click it on new tab.
- You can see an information about max total supply, how many holder, a token contract etc. Also, if you scroll down below just little bit, you can see an information about TokenID. That's [mine](https://sepolia.etherscan.io/token/0xf563ff937c9a5333a616d910914b8edbc55b19f5).
- Click **Contract** tab. Then, go to **Connect to Web3** at **Write Contract**. After that, click **mint** functions with 0 value. Why zero? Because your **Account address** was registered in whitelist address. If you switch to other account and do a same things without go first to **Whitelist Contract Address**. You will find error or transaction never find complete. (A tips: If you use other account doesn't registered in whitelist. You must input value at least 0.01. That's based on _price variable in *contracts/AneFahmi.sol* Or, you can see at **Read Contract** tab and click on _price. But you need an information about wei, gwei and ether. Don't worry, click an numbers and you will redirect to unit converter. **Focus on ethers**).
- The last, you can go to information about your transactions. Just click on **View your transaction**. Wait until the status process is success. Scroll down, you can find a transaction using ERC721 Token for NFT.
- Cheers 🍻

# How to change name of NFT?

1. Thanks for use my name at your first NFT 🤣
2. Change **AneFahmi.sol** to **AnythingYouWant.sol**
3. Open it, change name of contract based on you anything you want.
4. Find "**Ane Fahmi**" and change it with you want, don't forget with symbol you want, change "AFI".
5. Open **scripts/deploy-nft.js** find "**aneFahmi**" to your name of contract.
6. Repeat deploy your "**deploy-nft.js**"
7. Taraaa.. that's you want, right? 🤩

I hope you not get problem. If that's happen, let's create an [issue](https://github.com/fahmisme/NFTwithWhitelist/issues) 😺