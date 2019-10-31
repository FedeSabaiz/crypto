import React, {useState, useEffect, useRef} from 'react';
import {apiKey} from '../config/keys';
import Error from './Error';
import '../css/styleForm.scss';
import Cryptocoin from './Cryptocoin';

const Form = ({getData}) => {

    // Inicializando el state con hooks
    const [cryptocoins, setCrypto] = useState([]);
    const [error, setError] = useState(false);

    // Este hook cambia el background de body
    const [changeBody, setChangeBody] = useState({
        body: ''
    });

    // Iniciando la clase del form
    const [classForm, setclassForm] = useState({
        movForm: ''
    })

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
                    d.push(x);
                }
                
            } )
            return setCrypto(d);
        }

        getDataCoins();
    }, []);

    // Handler del  formulario
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

            // Cambia de clase el form
            setclassForm({
                movForm: 'formClick'
            })

        }
    }

    // Handlre del onchange de criptomoneda
    const handleChangeCryp = (e) => {
        setChangeBody({
            body: e.currentTarget.value
        })
        console.log(e.currentTarget.value);
        document.body.setAttribute('class', e.currentTarget.value.toLowerCase() );
    };

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
            <form onSubmit={handleForm} style={formStyle} className={classForm.movForm} >
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
                    <select ref={cryptoRef} onChange={handleChangeCryp} >
                        <option>-Criptomoneda-</option>
                            {data}
                    </select>
                

                <input type='submit' value='Consultar' / >
            </form>
        </div>
    
    );
}
 
export default Form;