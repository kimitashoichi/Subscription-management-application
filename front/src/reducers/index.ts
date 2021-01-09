import { History } from "history";
import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";

// それぞれのリデューサーをインポートする
import CardReducer from "./cardReducer";
import UserReducer from "./userReducer";

const rootReducer = (history: History<any>) =>
  combineReducers({
    router: connectRouter(history),
    card: CardReducer,
    user: UserReducer
  })

export default rootReducer;