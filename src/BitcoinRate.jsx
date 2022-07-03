import axios from 'axios';
import { useState } from 'react';

function BitcoinRate(){

    const [bitcoinValue, setbitcoinValue] = useState("")
    async function getBitCoin() {
        const response = await axios ({
            url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd",
            method: "GET"
        })

        setbitcoinValue(response.data.bitcoin.usd)     
    }
    getBitCoin()
    console.log(bitcoinValue)

    return <h1 style = { {position: 'absolute', top: '50%', left: '35%', textAlign:'center'} }> "{bitcoinValue} Bitcoin/USD " </h1>
}

export default BitcoinRate ;
