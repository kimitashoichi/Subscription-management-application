import { CardState } from "./CardModels";
import { UserState } from "./UserModels";

export interface AppState {
  card: CardState;
  user: UserState;
}