import React from 'react';

const Info = ({fullData, changeClassName}) => {
    console.log(fullData);
    
    return ( 
        <div className={`${changeClassName}-info`} >
            <div>
                <p>
                    Tipo de cambio: <span className={`${changeClassName}price`}>{fullData.price}</span>
                </p>
            </div>
            <div>
                <p>
                    Cambios en las últimas 24 horas: <span className={`${changeClassName}chg24`}>{fullData.change24hr}</span>
                </p>
            </div>
            <div>
                <p>
                    Precio más alto del día: <span className={`${changeClassName}highday`}>{fullData.highDay}</span>
                </p>
            </div>
            <div>
                <p>
                    Precio más bajo del día: <span className={`${changeClassName}lowday`}>{fullData.lowDay}</span>
                </p>
            </div>
        </div>
    );
}
 
export default Info;
