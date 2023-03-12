import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './Components/Header';
import FormularioTareas from './Components/FormularioTareas';
import ListaTareas from './Components/ListaTareas'
import Quote from './Components/Quote';

const App = () => {
  // Obtenemos las tareas guardadas de localstorage.
  const tareasGuardadas = 
  localStorage.getItem('tareas') ? 
  JSON.parse(localStorage.getItem('tareas')) : [];

  // Establecemos el estado de las tareas.
  const [tareas, cambiarTareas] = useState(tareasGuardadas);

  // Guardando el estado dentro de localstorage
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  // Accedemos a localstorage y comprobamos si mostrarCompletadas es null
  let configMostrarCompletadas = '';
  if(localStorage.getItem('mostrarCompletadas') === null){
    configMostrarCompletadas = true;
  } else {
    configMostrarCompletadas = localStorage.getItem('mostrarCompletadas') === 'true';
  }

  // El estado de mostrarCompletadas
  const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(configMostrarCompletadas);

  useEffect(() => {
    localStorage.setItem('mostrarCompletadas', mostrarCompletadas.toString());
  }, [mostrarCompletadas]);

  return (
    <div className="contenedor">
      <Header 
        mostrarCompletadas={mostrarCompletadas} 
        cambiarMostrarCompletadas={cambiarMostrarCompletadas}
      />
      <FormularioTareas 
      tareas={tareas} 
      cambiarTareas={cambiarTareas} 

      />
      <ListaTareas 
        tareas={tareas}
        cambiarTareas={cambiarTareas}
        mostrarCompletadas={mostrarCompletadas}
      />
      <Quote />
    </div>
  );
}

export default App;