import React, {useState, useEffect, useRef} from 'react';
import {apiKey} from '../config/keys';
import Error from './Error';
import Cryptocoin from './Cryptocoin';

const Form = ({getData}) => {

    // Inicializando el state con hooks
    const [cryptocoins, setCrypto] = useState([]);
    const [error, setError] = useState(false);

    // Usando refs de react para obtener los datos del formulario
    const coinRef = useRef();
    const cryptoRef = useRef();

    useEffect(() => {
        async function getDataCoins() {
            let response = await fetch(`https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD&api_key=${apiKey}`)
            let data = await response.json();
            let d = [];
            data.Data.forEach((x) => {
                if (x.CoinInfo.Name === 'BTC' || x.CoinInfo.Name === 'ETH' || x.CoinInfo.Name === 'BCH' || x.CoinInfo.Name === 'EOS' || x.CoinInfo.Name === 'LTC') {

                    console.log(x)  
                    d.push(x);
                }
                
            } )
            console.log(d);
            

            
            return setCrypto(d);
        }

        getDataCoins();
    }, []);

    // Handlers
    const handleForm = e => {
        e.preventDefault();
        if( coinRef.current.value === '-Moneda-' || cryptoRef.current.value === '-Criptomoneda-') {
            setError(true);
        } else {
            getData({
                coin: coinRef.current.value,
                crypto: cryptoRef.current.value
            });
            setError(false);
        }
        console.log(coinRef.current);
        
    }

    const errHtml = error === true ? <Error /> : null;
    
    
    const data = cryptocoins.map((x) => {
        return <option key={x.CoinInfo.Id} value={x.CoinInfo.Name} >{x.CoinInfo.FullName}</option>
    });
    
    const containeForm = {
        width: '100%',
        height: '200px',
        display: 'flex',
        justifyContent: 'center'
    }
    
    const formStyle = {
        width: '35%',
        height: '200px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    }

    return ( 

        <div style={containeForm} >
            <form onSubmit={handleForm} style={formStyle} >
                {errHtml}
                <label htmlFor='coin' >Elige tu moneda</label>
                <select ref={coinRef}>
                    <option>-Moneda-</option>
                    <option value="MXN" >
                        Peso Mexicano
                    </option>
                    <option value='USD' >
                        Dolar Estadounidense
                    </option>
                    <option value='EUR' >
                        Euro
                    </option>
                </select>

                
                    <label htmlFor='crypto' >Elige una criptomoneda</label>
                    <select ref={cryptoRef}>
                        <option>-Criptomoneda-</option>
                            {data}
                    </select>
                

                <input type='submit' value='Consultar' / >
            </form>
        </div>
    
    );
}
 
export default Form;