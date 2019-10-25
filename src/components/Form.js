import React, {useEffect} from 'react';
import {apiKey} from '../config/keys';

const Form = () => {

    useEffect(() => {
        async function getDataCoins() {
            let response = await fetch(`https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD&api_key=${apiKey}`)
            let data = await response.json();
            console.log(data);
            
            return data
        }

        getDataCoins();
    }, []);

    return ( 
        <form>
            <label htmlFor='coin' >Elige tu moneda</label>
            <select>
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
                <select>
                    
                </select>
            </div>

        </form>
    );
}
 
export default Form;
