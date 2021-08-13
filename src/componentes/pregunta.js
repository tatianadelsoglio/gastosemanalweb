import React from 'react';

const pregunta = () => {

    return (
        <>
            <h2>Colaca tu presupuesto</h2>

            <form>
            <input
                type= "number"
                className= "u-full-width"
                placeholder= "coloca tu presupuesto"
            />
{/*El "u-full-width" lo que hace es que el elemento tome todo el espacio que hay disponible, esto viene de la estructura esqueleton (buscar)  */}
            <input
                type= "submit"
                className= "button-primary u-full-width"
                value= "Definir Presupuesto"
            />
            </form>



        </>


    )


}

export default pregunta;