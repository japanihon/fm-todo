import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheckSquare, faEdit, faSquare, faTimes} from '@fortawesome/free-solid-svg-icons';

// Es importante entender que Tarea es un objetos con propiedades, entonces podemos
// acceder a ese objeto accediendo a sus propiedades, por ejemplo -> (tarea.texto);
// es el texto que se escribe en la tarea, todo se basa en el objeto principal

const Tarea = ({tarea, toggleCompletada, editarTarea, borrarTarea}) => {
	const [editandoTarea, cambiarEditandoTarea] = useState(false);
	const [nuevaTarea, cambiarNuevaTarea] = useState(tarea.texto);

// Funcion que envia la tarea una vez modificada

	const handleSubmit = (e) => {
		e.preventDefault();
		editarTarea(tarea.id, nuevaTarea);
		cambiarEditandoTarea(false);
	}

	return (
		<li className="lista-tareas__tarea">
			<FontAwesomeIcon 
				icon={tarea.completada ? faCheckSquare : faSquare}
				className="lista-tareas__icono lista-tareas__icono-check"
				onClick={() => toggleCompletada(tarea.id)}
			/>
			<div className="lista-tareas__texto">
				{editandoTarea ? 
				<form action="" className="formulario-editar-tarea" onSubmit={handleSubmit}>
					<input 
						type="text"
						className="formulario-editar-tarea__input"
						value={nuevaTarea}
						onChange={(e) => cambiarNuevaTarea(e.target.value)}
					/>
					<button 
						type="submit" 
						className="formulario-editar-tarea__btn"
					>
						Update Task
					</button>
				</form>
				: tarea.texto
				}
			</div>
			<div className="lista-tareas__contenedor-botones">
				<FontAwesomeIcon 
					icon={faEdit} 
					className="lista-tareas__icono lista-tareas__icono-accion"
					onClick={() => cambiarEditandoTarea(!editandoTarea)}
				/>
				<FontAwesomeIcon 
					icon={faTimes} 
					className="lista-tareas__icono lista-tareas__icono-accion" 
					onClick={() => borrarTarea(tarea.id)}
				/>
			</div>
		</li>
	);
}
 
export default Tarea