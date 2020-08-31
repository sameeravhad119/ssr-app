import { combineReducers } from "redux";
import { enableES5 } from "immer";
import { connectRouter } from "connected-react-router";

import count from "./count";
import history from "../../lib/history";

enableES5();

let historyRouter = process.env.IS_SERVER ? {} : { router: connectRouter(history) }

const rootReducer = combineReducers({
    counter: count,
    ...historyRouter
})

export default rootReducer;