import { applyMiddleware, createStore } from "redux";
import { History } from "history";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers/index";
import rootSaga from "./sagas/index";

export default function configureStore (history: History) {
  const sagaMiddleware = createSagaMiddleware();
  const enhanser = applyMiddleware(sagaMiddleware);

  const store = createStore(
    rootReducer(history),
    enhanser
  );

  sagaMiddleware.run(rootSaga);
  return store;
}

