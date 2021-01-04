import { compose } from "redux";

//  redux-devtool-extension type
export interface ExtendedWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
}