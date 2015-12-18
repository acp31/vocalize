import { createStore, applyMiddleware } from 'redux';

import vocalizeReducer form './reducer';
import thunkMiddleware from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);


export default function configureStore(initialState){

  const store = createStoreWithMiddleware(vocalizeReducer, initialState);

  return store;
}