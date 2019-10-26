import React from 'react';

const Cryptocoin = ({cryptocoins}) => {
    
    const data = cryptocoins.map((x) => {
        return <option key={x.CoinInfo.Id} value={x.CoinInfo.Name} >{x.CoinInfo.FullName}</option>
    });
   
    return ( 
        data
    );
}
 
export default Cryptocoin;
