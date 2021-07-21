import {createStore} from 'redux';
import itemReducer from './weather/reducers';

// Usually use combine reducer for multiple reducers.

const store = createStore(itemReducer);

export {store};
