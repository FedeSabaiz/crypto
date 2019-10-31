import React from 'react';

const Info = ({fullData, changeClassName}) => {
    console.log(fullData);
    
    return ( 
        <div className={changeClassName} >
            <div>
                <p>
                    Precio: <span className='price'>{fullData.price}</span>
                </p>
            </div>
            <div>
                <p>
                    Cambios en las últimas 24 horas: <span>{fullData.change24hr}</span>
                </p>
            </div>
            <div>
                <p>
                    Precio más alto del día: <span>{fullData.highDay}</span>
                </p>
            </div>
            <div>
                <p>
                    Precio más bajo del día: <span>{fullData.lowDay}</span>
                </p>
            </div>
        </div>
    );
}
 
export default Info;
