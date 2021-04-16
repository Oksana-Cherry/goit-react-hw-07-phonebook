import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  //persistStore,
  //persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
//import storage from 'redux-persist/lib/storage';
import contactReducer from './contacts/contact-reducer';

/*const contactsPersistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};*/

/*const myMiddleware = store => next => action => {
  console.log('моя прослойка', action);

  next(action);
};*/

/*const middleware = getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(logger);*/
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];
export const store = configureStore({
  reducer: {
    contacts: contactReducer, //persistReducer(contactsPersistConfig, contactReducer),
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

//export const persistor = persistStore(store);
export default store;
