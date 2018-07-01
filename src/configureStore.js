import { createStore, applyMiddleware } from 'redux';
import appReducer from './store/properties/reducer';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

const configureStore = () => {

  const middlewares = [thunk];
  if(process.env.NODE_ENV !== 'production'){
    middlewares.push(createLogger)
  }
  return createStore(appReducer, applyMiddleware(...middlewares))
}

export default configureStore();