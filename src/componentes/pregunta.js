import React, { useState } from 'react';
import Error from "./Error"

const pregunta = ({ guardarPresupuesto, guardarRestante }) => {

    //definir el state
    const [cantidad, guardarCantidad] = useState(0);

    //definir state para la validación
    const [error, guardarError] = useState(false); // es falsa para indicar que no hay error al inicio

    //Función que lee el presupuesto. Como necesitamos acceder los valores, le pasamos e para tener acceso a e.target.value
    // y e.target.name también.
    const definirpresupuesto = e => {
        //console.log(e.target.value); de esta manera puede comprobar si el valor numerico es tomado como string o como numero
        guardarCantidad(parseInt(e.target.value, 10)) // con el parseInt() pasa a valores enteros lo que se le pase como argumento entre parentesis

    }
/*Cuando en consola los números se muestran en color negro quiere decir que ese número en realidad es de tipo string,
y cuando el número esta en color azul quiere decir que es de tipo entero*/

    //Submit para definir el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault(); //Agregamos el preventDefault para que no lo envie el query string en la parte superior y tampoco recargue la página

        //Validar
        if (cantidad < 1 || isNaN( cantidad )) {
            guardarError(true);
            return;
        }

        //validación aprobada
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);

    }

    //Hola probando si anda el repositorio

    return (
        <>
            <h2>Colaca tu presupuesto</h2>
            {error ? <Error mensaje="El Presupuesto es Incorrecto" />   : null}
            <form
                onSubmit = {agregarPresupuesto}
            >
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