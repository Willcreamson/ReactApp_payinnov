# Current BitcoinRate 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
[![npm version](https://img.shields.io/npm/v/axios.svg?style=flat-square)](https://www.npmjs.org/package/axios)


## Table of Contents

- [Installing](#installing)
- [Axios API](#axios-api)
- [CoinGecko API](#CoinGecko-api)

## Installing
### First of all, download and install nodejs on your computer
![Nodejs](https://cdn-icons-png.flaticon.com/128/919/919825.png)
- here is a link --> https://nodejs.org/en/download/

### Then create a React new App
![React App](https://cdn-icons-png.flaticon.com/128/919/919851.png)
- here is a link --> https://create-react-app.dev/docs/getting-started/
- Find the bash commands below

```bash
npx create-react-app my-app
cd my-app
npm start
```

## Axios API
### Add axios to your librairies
-here is the link --> https://www.npmjs.com/package/axios

or 

- Find the bash command below (windows OS only)

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

