import React from 'react';
import Gasto from './Gasto';
import PropTypes from 'prop-types';

const Listado = ({gastos}) => {

    return(
        <div className='gastos-realizados'>
            <h2>Listado</h2>
            {/*usamos .map porque vamos a iterar en cada uno de los gastos */}
            {gastos.map(gasto => (
                <Gasto 
                    key={gasto.id}
                    gasto={gasto}
                />
            ))}
        </div>

    );

}

Listado.propTypes = {
    gastos: PropTypes.array.isRequired
}

export default Listado;