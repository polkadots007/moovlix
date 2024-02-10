import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import App from './App.tsx';
import { GlobalStyles } from './global-styles.tsx';
import { firebase } from './lib/firebase.prod.tsx';
import { FirebaseContext } from './context/firebase.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <>
      <FirebaseContext.Provider value={firebase}>
        <GlobalStyles />
        <App />
      </FirebaseContext.Provider>
    </>
  </React.StrictMode>,
);
