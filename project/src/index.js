import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import * as serviceWorker from './serviceWorker';
 
import App from './components/App';
import Firebase, { FirebaseContext } from './components/Firebase';
 
ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root'),
);
 
const SomeComponent = () => (
    <FirebaseContext.Consumer>
      {firebase => {
        return <div>I've access to Firebase and render something.</div>;
      }}
    </FirebaseContext.Consumer>
);
export default SomeComponent;
serviceWorker.unregister();