import { applyMiddleware, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
let store = createStore(
  persistedReducer,
  composeWithDevTools(
    applyMiddleware(
      thunk.withExtraArgument({
        endpoint: process.env.REACT_APP_API_ENDPOINT,
      })
    )
  )
);
let persistor = persistStore(store);

export { store, persistor };
