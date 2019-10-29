import React from 'react';
// import Bcash from './coinsComponents/Bcash';
import { ReactComponent as Bitcoin } from '../img/bitcoin.svg';
import { ReactComponent as Eos } from '../img/eos.svg';
import { ReactComponent as Ethereum } from '../img/ethereum.svg';
import { ReactComponent as Litecoin } from '../img/litecoin.svg';
import { ReactComponent as Bcash } from '../img/bcash.svg';

let containerCoin = {
    width: '100%',
    height: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
}

let styleCoin = {
    width: '100px',
    height: '100px'
}

const Coin = () => {
    return ( 
        
        <div style={containerCoin} >
            <Bitcoin style={styleCoin} /> 
            <Ethereum style={styleCoin} />
            <Eos style={styleCoin} />
            <Litecoin style={styleCoin} />
            <Bcash style={styleCoin} />

        </div>
        

     );
}
 
export default Coin;