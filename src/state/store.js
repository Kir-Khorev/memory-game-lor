import { createStore, applyMiddleware } from 'redux';
import reducers2 from './reducers2';
import thunk from 'redux-thunk'

const store2 = createStore(reducers2, {}, applyMiddleware(thunk));

export default store2;