import nextSession from "next-session";
import { expressSession, promisifyStore } from "next-session/lib/compat";
var SQLiteStore = require("connect-sqlite3")(expressSession);

export const getSession = nextSession({
  name: "MYCUSTOMCOOKIE",
  store: promisifyStore(
    new SQLiteStore({ dir: "./tmp/", table: "myCustomSessions" })
  ),
  // next-session Options : https://github.com/hoangvvo/next-session#options
  /* cookie: {
     maxAge: 120000  //Documentation say seconds, but i think are miliseconds
   }*/
});
