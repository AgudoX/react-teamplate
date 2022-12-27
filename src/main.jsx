import ReactDOM from 'react-dom';
import './index.css';
/* No es necesario importar react aunque usemos jsx a partir de la versión 17 de React */

const app = (
	<>
		<h1>LearnThis</h1>
		<img src='/Albert-Einstein-Pictures.webp' alt='' />
	</>
);

const container = document.getElementById('root');

ReactDOM.render(app, container);
