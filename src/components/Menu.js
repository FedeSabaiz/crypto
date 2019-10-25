import React from 'react';

const Menu = () => {

    let stylesLinks = {
        listStyle: 'none',
        padding:'0'
    }

    return ( 
        <nav>
            <ul style={stylesLinks}>
                <li>Home</li>
                <li>Diferentes Cryptos</li>
                <li>Contácto</li>
            </ul>
        </nav>
     );
}
 
export default Menu;
