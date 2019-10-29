import React from 'react';
// import Bcash from './coinsComponents/Bcash';
import { ReactComponent as Bitcoin } from '../img/bitcoin.svg';
import { ReactComponent as Eos } from '../img/eos.svg';
import { ReactComponent as Ethereum } from '../img/ethereum.svg';
import { ReactComponent as Litecoin } from '../img/litecoin.svg';
import { ReactComponent as Bcash } from '../img/bcash.svg';

let styleCoin = {
    width: '100px',
    height: '100px'
}

const Coin = () => {
    return ( 
        
        <div>
            <div>
                <Bitcoin style={styleCoin} /> 

            </div>
            <Ethereum style={styleCoin} />
            <Eos style={styleCoin} />
            <Litecoin style={styleCoin} />
            <Bcash style={styleCoin} />

        </div>
        

     );
}
 
export default Coin;