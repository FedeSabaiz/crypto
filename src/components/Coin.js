import React from 'react';
// import Bcash from './coinsComponents/Bcash';
import { ReactComponent as Bitcoin } from '../img/bitcoin.svg';
import { ReactComponent as Eos } from '../img/eos.svg';
import { ReactComponent as Ethereum } from '../img/ethereum.svg';
import { ReactComponent as Litecoin } from '../img/litecoin.svg';
import { ReactComponent as Bcash } from '../img/bcash.svg';

let containerCoin = {
    width: '100%',
    height: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
}

const Coin = () => {
 
    // Handler que se dispara con el click en las monedas
    const handkeClickCrypto = (e) => {
        for(let y = 0; y <= 5; y++) {
            let getCrypto = e.currentTarget.className.animVal;
            if(getCrypto === 'bitcoin') {
                
                if(document.getElementById('selectCryoto').options.item(y).text.toLowerCase() === 'bitcoin'){
                    document.getElementById('selectCryoto').options.item(y).selected = 'selected';
                }
                document.body.setAttribute('class', 'btc');        
            }
            if(getCrypto === 'ethereum') {
                if(document.getElementById('selectCryoto').options.item(y).text.toLowerCase() === 'ethereum'){
                    document.getElementById('selectCryoto').options.item(y).selected = 'selected';
                }
                document.body.setAttribute('class', 'eth');
            }
            if(getCrypto === 'eosSvg') {
                
                if(document.getElementById('selectCryoto').options.item(y).text.toLowerCase() === 'eos'){
                    document.getElementById('selectCryoto').options.item(y).selected = 'selected';
                }
                document.body.setAttribute('class', 'eos');
            }
            if(getCrypto === 'litecoin') {
                if(document.getElementById('selectCryoto').options.item(y).text.toLowerCase() === 'litecoin'){
                    document.getElementById('selectCryoto').options.item(y).selected = 'selected';
                }
                document.body.setAttribute('class', 'ltc');
            }
            if(getCrypto === 'bitcoincash') {
                
                if(document.getElementById('selectCryoto').options.item(y).text.toLowerCase().replace(" ", "") === 'bitcoincash'){
                    document.getElementById('selectCryoto').options.item(y).selected = 'selected';
                }
                document.body.setAttribute('class', 'bch');
            }


        } 
    }
 
    return ( 
        
        <div style={containerCoin} >
            <Bitcoin className='bitcoin'  onClick={handkeClickCrypto}/> 
            <Ethereum className='ethereum' onClick={handkeClickCrypto}/>
            <Eos className='eosSvg' onClick={handkeClickCrypto}/>
            <Litecoin className='litecoin' onClick={handkeClickCrypto} />
            <Bcash className='bitcoincash' onClick={handkeClickCrypto}/>

        </div>
        

     );
}
 
export default Coin;