import React from 'react';
import Menu from './Menu';
import Logo from './Logo';

const Header = () => {

    let styleHeader = {
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }

    return ( 
        <div className="container-header" style={styleHeader} >
            <Menu />
            <Logo />
        </div>
    );
}
 
export default Header;
