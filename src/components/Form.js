import React, {useState, useEffect, useRef} from 'react';
import {apiKey} from '../config/keys';
import Cryptocoin from './Cryptocoin';

const Form = () => {

    // Inicializando el state con hooks
    const [cryptocoins, setCrypto] = useState([]);
    const [coinList, setCoinList] = useState('');
    const [cryptoList, setCryptoList] = useState('');
    const [consult, setConsult] = useState({
        coin: '',
        crypto: ''
    })
    const [error, setError] = useState(false);

    // Usando refs de react para obtener los datos del formulario
    const coinRef = useRef();
    const cryptoRef = useRef();

    useEffect(() => {
        async function getDataCoins() {
            let response = await fetch(`https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD&api_key=${apiKey}`)
            let data = await response.json();
            setCrypto(data.Data);
            return data.Data
        }

        getDataCoins();
    }, []);

    // Handlers
    const handleForm = e => {
        e.preventDefault();
        if( coinRef.current.value === '-Moneda-' || cryptoRef.current.value === '-Criptomoneda-') {
            setError(true);
        } else {
            setConsult({
                coin: coinRef.current.value,
                crypto: cryptoRef.current.value
            });
            setError(false);
        }
        console.log(coinRef.current);
        
    }

    const errHtml = error === true ? <div style={{background: 'red', width: '100px', height: '100px'}} >Porfavor llena ambos campos para continuar.</div> : null;
    
    return ( 

        <form onSubmit={handleForm} >
            {errHtml}
            <label htmlFor='coin' >Elige tu moneda</label>
            <select ref={coinRef}  onChange={(e) => setCoinList(e.target.value)} >
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

            <div>
                <label htmlFor='crypto' >Elige una criptomoneda</label>
                <select ref={cryptoRef} onChange={(e) => setCryptoList(e.target.value)} >
                    <option>-Criptomoneda-</option>
                    <Cryptocoin 
                        cryptocoins={cryptocoins}
                    />
                </select>
            </div>

            <input type='submit' value='Consultar' / >
        </form>
    );


}
 
export default Form;
