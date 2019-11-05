import React from 'react';

const Menu = () => {

    let stylesLinks = {
        listStyle: 'none',
        padding:'0'
    }

    return ( 
        <nav>
            <ul style={stylesLinks}>
                <li><a>Github</a></li>
            </ul>
        </nav>
     );
}
 
export default Menu;
