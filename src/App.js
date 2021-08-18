import React, { useState } from 'react';
import Pregunta from './componentes/pregunta';
import Formulario from './componentes/Formulario';



function App() {

  //definir el state, ambos state hay que pasarselo a la pregunta para que de esta forma sean usados. En el elemento <Pregunta />, le pasados
  // como props las propiedades "gruardarPresupuesto" con su mismo nombre como parametro de valor entre llaves, y "guardarRestante" al igual
  //al igual manerea que el anterior. Y luego extraemos esas misma propiedades como props para Pregunta.js 

  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarPregunta, actualizarPregunta] = useState(true);

  return (
    <>
      <div className="container">
        <header>
          <h1>Gasto Semanal</h1>
          
          <div className="contenido-principal contenido">
            <Pregunta 
            
            guardarPresupuesto={guardarPresupuesto}
            guardarRestante={guardarRestante}
            actualizarPregunta={actualizarPregunta}
            
            />

            <div className="row">
              <div className="one-half column">
                <Formulario />
              </div>

              <div className="one-half column">
              
              </div>

            </div>


            
          </div>

        </header>

      </div>


    </>
  );
}

export default App;
