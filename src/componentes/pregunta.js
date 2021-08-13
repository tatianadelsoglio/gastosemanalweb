import React, { useState } from 'react';

const pregunta = () => {

    //definir el state
    const [cantidad, guardarCantidad] = useState(0);

    //Función que lee el presupuesto. Como necesitamos acceder los valores, le pasamos e para tener acceso a e.target.value
    // y e.target.name también.
    const definirpresupuesto = e => {
        //console.log(e.target.value); de esta manera puede comprobar si el valor numerico es tomado como string o como numero
        

    }
/*Cuando en consola los números se muestran en color negro quiere decir que ese número en realidad es de tipo string,
y cuando el número esta en color azul quiere decir que es de tipo entero*/

    return (
        <>
            <h2>Colaca tu presupuesto</h2>

            <form>
            <input
                type= "number"
                className= "u-full-width"
                placeholder= "coloca tu presupuesto"
                onChange={definirpresupuesto}
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