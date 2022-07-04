import axios from 'axios';
import { useState} from 'react';

function BitcoinRate(){

    const [bitcoinValue, setbitcoinValue] = useState("")
    
    // Asynchronous function that gets Bitcoun current rate value
    async function getBitCoin() {
        const response = await axios ({
            url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd",
            method: "GET"
        })
        setInterval(() => {setbitcoinValue(response.data.bitcoin.usd)}, 60000);     // Update bitcoin rate value every 60 seconds
    }
    getBitCoin()
    console.log(bitcoinValue)

    // returns the current value of bitcoin in USD in the middle of the screen
    return <h1 style = { {textAlign: 'center', justifyContent: 'center', position : 'relative', top:'250px'} }> "{bitcoinValue} Bitcoin/USD " </h1> 
}

export default BitcoinRate ;

