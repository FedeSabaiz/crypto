import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Form from './components/Form';

const App = () => {

    // Hooks para obtener los datos de Form
    const [dataCoins, getData] = useState({
        coin: '',
        crypto: ''
    });

    const [fullData, getFullData] = useState({
        change24hr: '',
        price: '',
        highDay: '',
        lowDay: ''
    })

    // Hacemos la petición a la API
    useEffect(() => {
        async function getFullData() {
            // Si no hay datos no realiza la petición con este if
            if(dataCoins.coin === '') return;

            // Una vez que se envía el formulario se realiza la consulta a la API
            let response = await fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${dataCoins.crypto}&tsyms=${dataCoins.coin}`);
            let data = await response.json();
            

            console.log(data);
            
            
        }
        
            getFullData();
        
    }, [dataCoins.crypto, dataCoins.coin]);

    // Variable que se renderiza si la consulta es satisfactoria.
    // console.log(fullData);
    

    return ( 
        <div>
            <Header />
            <h1>PROYECTO CRYPTO-CONVERT</h1>
            <Form getData={getData} />

        </div>
     );
}
 
export default App;
