import styles from "../styles/Home.module.css";
import { useState } from "react";
import { getSession } from "../sessions/get-session";
export default function Home({ dataInSession }) {
  const [text, setText] = useState("");
  const saveSession = async () => {
    const res = await fetch("./api/hello", {
      method: "POST",
      body: JSON.stringify({ aProperty: text }),
    });
    const json = await res.json();
  };
  return (
    <div className={styles.container}>
      <input
        onChange={(e) => setText(e.target.value)}
        value={text}
        type="text"
      />
      <button onClick={() => saveSession()}>save in session</button>
      <br />
      Press f5 or realod the webpage
      <br />
      data stored is:{dataInSession ?? "-EMPTY"}
    </div>
  );
}

export async function getServerSideProps({ req, res }) {
  const session = await getSession(req, res);
  console.log(session?.myData);
  return {
    props: {
      dataInSession: session?.myData ?? null,
    },
  };
}
