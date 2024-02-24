import { initializeApp } from 'firebase/app';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import seedDatabase from './seed';

//seed the database

//config
const config = {
  apiKey: 'AIzaSyDiQcgTGmn3zg6gqLNvDEYHyQx9LSZ4vD4',
  authDomain: 'moovix-001.firebaseapp.com',
  projectId: 'moovix-001',
  storageBucket: 'moovix-001.appspot.com',
  messagingSenderId: '132855557876',
  appId: '1:132855557876:web:e8e2d852394b069287b8a1',
};

const firebase = initializeApp(config);

//One-Time Call only!!!
// seedDatabase(firebase);
export { firebase };
