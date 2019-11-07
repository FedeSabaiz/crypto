import React, {useState, useEffect} from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Arrow from './components/Arrow';
import Header from './components/Header';
import Home from './components/Home';
import Form from './components/Form';
import Info from './components/Info';
import Coin from './components/Coin';

import './css/mediaQueries.scss'

const App = () => {

    // Hooks para obtener los datos de Form
    const [dataCoins, getData] = useState({
        coin: '',
        crypto: ''
    });

    const [fullData, getFull] = useState({
        change24hr: '',
        price: '',
        highDay: '',
        lowDay: ''
    })

    // Hook para cambiar la posición del form

    const [showInfo, getInfo] = useState(false)

    // Hacemos la petición a la API
    useEffect(() => {
        async function getFullData() {
            // Si no hay datos no realiza la petición con este if
            if(dataCoins.coin === '') return;

            // Una vez que se envía el formulario se realiza la consulta a la API
            let response = await fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${dataCoins.crypto}&tsyms=${dataCoins.coin}`);
            let data = await response.json();
            
            getFull({
                change24hr: data.DISPLAY[dataCoins.crypto][dataCoins.coin].CHANGE24HOUR,
                price: data.DISPLAY[dataCoins.crypto][dataCoins.coin].PRICE,
                highDay: data.DISPLAY[dataCoins.crypto][dataCoins.coin].HIGHDAY,
                lowDay: data.DISPLAY[dataCoins.crypto][dataCoins.coin].LOWDAY
            })
            
            getInfo(true);
        }
        
        getFullData();
        
    }, [dataCoins.crypto, dataCoins.coin]);

    // Handler de la flecha 
    const handleArrowBack = () => {
        getData({
            coin: '',
            crypto: ''
        })

        document.body.setAttribute('class', dataCoins.crypto)
        document.getElementById('myForm').reset();
        document.getElementById('btn').setAttribute('class', 'arrow')
    }
    
    // Flecha que resetea y regresa a la pantalla principal
    const flecha = <button id='btn' onClick={handleArrowBack} >Regresar</button>

    return ( 
            <Router>
                <Header />
                    <h1>Compra una criptomoneda</h1>
                    <Switch>
                        <Route exact path='/'>
                            <Home />
                            <div className='row' >
                                <Form getData={getData} formClassName={dataCoins} />
                                
                                <Info fullData={fullData} changeClassName={dataCoins.crypto.toLowerCase()} />
                                {flecha}
                                
                            </div>            
                        </Route>
                        <Route exact path='/crypto' >
                        </Route>
                    </Switch>
            </Router> 
       
     );
}
 
export default App;
