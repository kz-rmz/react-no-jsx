import Header from './components/Header/Header.js';
import AppContainer from './components/AppContainer/AppContainer.js';

function App() {
    return React.createElement(
        'div', 
        {
            className: 'app'
        },
        [
            React.createElement(Header, {}, null),
            React.createElement(AppContainer, {}, null),
        ]
        )
}
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render( React.createElement(App));