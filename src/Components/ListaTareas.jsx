import React from 'react';
import Tarea from './Tarea'



const ListaTareas = ({tareas, cambiarTareas, mostrarCompletadas}) => {


	// Funcion tarea completa, con map accedemos a cada tarea

	const toggleCompletada = (id) => {
		cambiarTareas(tareas.map((tarea) => {
			if(tarea.id === id){
				return {...tarea, completada: !tarea.completada}
			}
			return tarea;
		}));
	}

	// Funcion editar: selecciona la tarea en base al id y le agrega un nuevo 
	// texto 

	const editarTarea = (id, nuevoTexto) => {
		cambiarTareas(tareas.map((tarea) => {
			if(tarea.id === id){
				return {...tarea, texto: nuevoTexto}
			}
			return tarea;
		}));
	}

	// Funcion borrar tarea
	const borrarTarea = (id) => {
		cambiarTareas(tareas.filter((tarea) => {
			if(tarea.id !== id){
				return tarea;
			}
			return;
		}));
	}


// Retorna una lista de tareas en forma de lista dentro de un elemento ul
// si el length de tareas es mayor a 0, entonces retorna el componente <Tarea>
//

	return (
		<ul className="lista-tareas">
			{tareas.length > 0 ? tareas.map((tarea) => {
				if(mostrarCompletadas){
					return <Tarea 
								key={tarea.id}
								tarea={tarea}
								toggleCompletada={toggleCompletada}
								editarTarea={editarTarea}
								borrarTarea={borrarTarea}
							/>
				// Si la tarea no esta completada, la devolvemos.
				} else if(!tarea.completada){
					return <Tarea 
								key={tarea.id}
								tarea={tarea}
								toggleCompletada={toggleCompletada}
								editarTarea={editarTarea}
								borrarTarea={borrarTarea}
							/>
				}
				// Si ya esta completada no la devolvemos
				return;
			})
			:<div className="lista-tareas__mensaje"> Waiting for a task!</div>
			}
		</ul>
	);
}
 
export default ListaTareas;