# MintSwap Cash

This project allow users to swap MintMe with created tokens on the MintMe smartchain with the implementation of liquidity pools. Smart contracts were cloned from [PancakeSwap](https://pancakeswap.finance/) (DEX on Binance Smat Chain) which originally use [Uniswap](https://uniswap.org/). This project is running on **MintMe Smartchain** for proving about liquidity pool concepts and how it works.

## Project's structures
This project contains 3 parts
- [swap-core](https://github.com/nutchanonc/swap-core)
- [swap-periphery](https://github.com/nutchanonc/swap-periphery)
- swap-frontend (this repo)

#### swap-core
`swap-core` contains PancakeFactory, PancakePair, our own ERC20 tokens and their interfaces.

#### swap-periphery
`swap-periphery` contains PancakeRouter, PancakeLibrary, WBNB contract and their interfaces.

#### swap-frontend
`swap-frontend` is created by using `create-react-app`. Reactjs is used for building user interfaces and integrated with Web3js.

## User's guidelines

### Prerequisite
- MetaMask with the added MintMe Chain Network. 
- Some MintMe or Wrapped MintMe to trade with our tokens

### Trading
- visit [swap](https://mintswap.cash/app)
- Please connect your metamask with the website by click connect button on the website.
- Check your current active network. Make sure your are on MintMe Smart Chain (chainId: 24734).
- Choose your input currency, output currency and enter the input amount you want to trade.
- It should show the estimate amount that you will get if their is a sufficient amount of tokens in the liquidity pool.
- press swap!

### App's screenshots
![Trading](https://github.com/MintSwapCash/swap-frontend/blob/main/screenshots/Screen%20Shot%202564-10-24%20at%2013.38.18.png)
![Pools](https://github.com/MintSwapCash/swap-frontend/blob/main/screenshots/Screen%20Shot%202564-10-24%20at%2013.38.33.png)
![Tokens](https://github.com/MintSwapCash/swap-frontend/blob/main/screenshots/Screen%20Shot%202564-10-24%20at%2013.38.46.png)
