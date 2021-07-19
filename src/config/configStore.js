import { createStore } from 'redux';
import rootReducer from '../rootReducer';

const persistedState = {};

export default function configureStore() {
 return createStore (
   rootReducer,
   persistedState);
};