import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid'; // Id generator
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons';


// Es decir que tareas / cambiarTareas que son los argumentos de Formulario tareas, se
// asocian con el estado principal mediante las custom props

const FormularioTareas = ({tareas, cambiarTareas}) => {
	const [inputTarea, cambiarInputTarea] = useState('');

    // InputTarea es donde se agrega la nueva tarea - es un string vacio -

// cambiarInputTarea es el nuevo estado que se genera, que es lo que se escribe en la entrada
// de Inpute -> value={inputTarea}

	const handleInput = (e) => {
		cambiarInputTarea(e.target.value);
	}

// handleInput captura lo que se escribe en la entrada del input (el evento)

	const handleSubmit = (e) => {
		e.preventDefault(); // Para evitar que se reinicie la pagina cuando presionamos
       // en el boton +

        //Agregamos el e evento que va a pasar cuando se envie el formulario

        // Esta funcion agrega todo el contenido original de tareas + la nueva tarea que se agregue

		cambiarTareas(
			[
				...tareas, 
				{
					id: uuidv4(), //Id generado dinamicamente
					texto: inputTarea, // Obtenemos el valor del input(Lo que se escribe)
					completada: false
				}
			]
		);
		cambiarInputTarea('');
	}

	return (
		<form action="" className="formulario-tareas" 
        onSubmit={handleSubmit}
        //Se activa cuando enviamos el formulario
        >
			<input
				type="text"
				className="formulario-tareas__input"
				placeholder="Write something here"
				value={inputTarea}
				onChange={(e) => handleInput(e)}
			/>

			<button 
				type="submit"
				className="formulario-tareas__btn"
			>
				<FontAwesomeIcon 
					icon={faPlusSquare}
					className="formulario-tareas__icono-btn" 
				/>
			</button>
		</form>
	);
}
 
export default FormularioTareas;

/* <-  value es el valor del input (lo que se escribe en el input)

onChange esta relacionado con handleInput --->*/