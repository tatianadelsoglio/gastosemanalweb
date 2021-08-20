import React, { useState, useEffect } from 'react';
import Pregunta from './componentes/pregunta';
import Formulario from './componentes/Formulario';
import Listado from './componentes/Listado';
import ControlPresupuesto from './componentes/ControlPresupuesto';


function App() {

  //definir el state, ambos state hay que pasarselo a la pregunta para que de esta forma sean usados. En el elemento <Pregunta />, le pasados
  // como props las propiedades "gruardarPresupuesto" con su mismo nombre como parametro de valor entre llaves, y "guardarRestante" al igual
  //al igual manerea que el anterior. Y luego extraemos esas misma propiedades como props para Pregunta.js 

  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarpregunta, actualizarPregunta] = useState(true);
  const [ gastos, guardarGastos ] = useState([]);


  //useEffect que actualiza el Restante
  

  //cuadno agreguemos un nuevo gasto
  const agregarNuevoGasto = gasto => {
    guardarGastos([
      ...gastos,
      gasto
    ]);
  }

  return (
    <>
      <div className="container">
        <header>
          <h1>Gasto Semanal</h1>
          
          <div className="contenido-principal contenido">
            { mostrarpregunta ? 
            
              <Pregunta 
            
                guardarPresupuesto={guardarPresupuesto}
                guardarRestante={guardarRestante}
                actualizarPregunta={actualizarPregunta}
            
              />
              : 
            
              
              <div className="row">
                <div className="one-half column">
                  <Formulario 
                    agregarNuevoGasto={agregarNuevoGasto}
                  />
                </div>

                <div className="one-half column">
                  <Listado 
                    gastos={gastos}                  
                  />

                  <ControlPresupuesto
                    presupuesto={presupuesto}
                    restante={restante}
                  />
                </div>

              </div>

            }

            
          </div>

        </header>

      </div>


    </>
  );
}

export default App;
