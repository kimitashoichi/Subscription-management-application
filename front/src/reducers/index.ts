import { History } from "history";
import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";

// それぞれのリデューサーをインポートする
import CardReducer from "./cardReducer";

const rootReducer = (history: History<any>) =>
  combineReducers({
    router: connectRouter(history),
    card: CardReducer
  })

export default rootReducer;