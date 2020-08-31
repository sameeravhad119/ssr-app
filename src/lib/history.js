import { createBrowserHistory } from "history";

let history = process.env.IS_SERVER ? undefined : createBrowserHistory();

export default history;