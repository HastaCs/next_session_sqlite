# Saving session in nextjs
Save in a sqlite file the user session using next-session, similar to PHP.
In this basic example you can see how to save primive(number,strings,) data and complex data (Person{name:string,age:string}) in a cookie session.

[next-session](https://github.com/hoangvvo/next-session "next-session")

#### Important code
```js
//sessions\get-session.js
import nextSession from "next-session";
import { expressSession, promisifyStore } from "next-session/lib/compat";
var SQLiteStore = require("connect-sqlite3")(expressSession);

export const getSession = nextSession({
  name: "MYCUSTOMCOOKIE",
  store: promisifyStore(
    new SQLiteStore({ dir: "./tmp/", table: "myCustomSessions" })
  ),
  
});
```
#### Using the demo

------------
1. Clone the repository
1. npm install
1. npm run dev
1. visit http://localhost:3000/
