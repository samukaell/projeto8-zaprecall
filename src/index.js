import App from './App';
import ReactDOM from 'react-dom';

function Principal() {
    return (
        <>
            <App/>
        </>
    );
}


const app = Principal();
ReactDOM.render(app, document.querySelector(".root"));