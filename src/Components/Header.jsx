import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEyeSlash, faEye} from '@fortawesome/free-solid-svg-icons';

// Los 2 argumentos de Header son los que se usan como props en la APP principal

const Header = ({mostrarCompletadas, cambiarMostrarCompletadas}) => {
	const toggleCompletadas = () => {
		cambiarMostrarCompletadas(!mostrarCompletadas);
	}

	return (
		<header className="header">
			<h1 className="header__titulo"> Task List </h1>
			{mostrarCompletadas ?
				<button 
					className="header__boton"
					onClick={() => toggleCompletadas()}
				>
					Finished Tasks
					<FontAwesomeIcon icon={faEyeSlash} className="header__icono-boton" />
				</button>
			:
				<button 
					className="header__boton"
					onClick={() => toggleCompletadas()}
				>
					Task in Progress
					<FontAwesomeIcon icon={faEye} className="header__icono-boton" />
				</button>
			}
		</header>
	);
}
 
export default Header;
