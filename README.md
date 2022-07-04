# Current BitcoinRate 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
[![npm version](https://img.shields.io/npm/v/axios.svg?style=flat-square)](https://www.npmjs.org/package/axios)


## Table of Contents

- [Installing](#installing)
- [Axios API](#axios-api)
- [CoinGecko API](#CoinGecko-api)

## Installing
### First of all install nodejs on your computer

-[![Nodejs](https://pluspng.com/png-104401.html)

## Axios API
### Add axios to your librairies
-here is the link --> https://www.npmjs.com/package/axios

or 

- Find the bash code below (windows OS only)

```bash
$ npm install axios
```

## CoinGecko API
### Use Axios API to get current bitcoin rate value given by CoinGecko API
- here is the link --> https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd

- Add it on your project
- Find the js code below 
```js
   async function getBitCoin() {
        const response = await axios ({
            url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd",
            method: "GET"
        })
        setInterval(() => {setbitcoinValue(response.data.bitcoin.usd)}, 60000);
    }
```
## Features

- Make [`GET` Request](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) from the browser
- Supports the [Promise](https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd) API
- Intercept request and response
- Transform request and response data

