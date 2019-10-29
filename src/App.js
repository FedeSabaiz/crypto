import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Info from './components/Info';
import Coin from './components/Coin';

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

    const dataInfo = showInfo === true ? <Info fullData={fullData} /> : null;

    return ( 
        <div>
            <Header />
            <h1>PROYECTO CRYPTO-CONVERT</h1>
            <Form getData={getData} />
            {dataInfo}
            <Coin />
        </div>
     );
}
 
export default App;
