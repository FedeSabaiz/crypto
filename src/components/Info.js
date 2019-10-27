import React from 'react';

const Info = ({fullData}) => {
    console.log(fullData);
    
    return ( 
        <div>
            <div>
                <p>
                    Precio: <span>{fullData.price}</span>
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
