import {combineReducers, createStore} from "redux";
import profile_reducer from "./profile_reducer";
import dialogs_reducer from "./dialogs_reducer";
import friends_reducer from "./friends_reducer";

let reducers = combineReducers({
    profile_page: profile_reducer,
    dialogs_page: dialogs_reducer,
    friends: friends_reducer
}); // объединяем Редюсеры

let store = createStore(reducers); // создаем объект редакса и передаём ему редюсеры

export default store;