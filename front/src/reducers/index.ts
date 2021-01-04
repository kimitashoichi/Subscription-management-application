import { History } from "history";
import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";

// それぞれのリデューサーをインポートする

const rootReducer = (history: History<any>) =>
  combineReducers({
    router: connectRouter(history),
  })

export default rootReducer;