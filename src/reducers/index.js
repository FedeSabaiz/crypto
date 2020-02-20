// Utilizamos combineReducers para trabajar con múltiples reducers
import { combineReducers } from 'redux';

// Importamos los reducers
import cryptocoinReducer from './cryptocoinReducer';

export default combineReducers({
    cryptomonedas: cryptocoinReducer
});

