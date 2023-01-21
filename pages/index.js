import styles from "../styles/Home.module.css";
import React from "react";
import { useState } from "react";
import { getSession } from "../sessions/get-session";
export default function Home({ dataInSession }) {

  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("")
  const [dataSaved, setDataSaved] = useState(false)

  const saveSession = async () => {
    console.log('e')
    const result = await fetch("./api/saveSession", {
      method: "POST",
      body: JSON.stringify({ theText: text, person: { name, age } }),
    });
    setDataSaved(true)
  };
  return (
    <div className={styles.main}>
      <h2>Storing session in SQLITE, similar to PHP session</h2>
      <p>Save primitive type (string,number,...)</p>
      <div style={{ display: "flex" }}>
        <input
          onChange={(e) => setText(e.target.value)}
          value={text}
          type="text"
          placeholder="text"
        />

      </div>

      <p>Save complex objects Person {"{name, age}"}</p>
      <div style={{ display: "flex" }}>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="name"
        />
        <input
          onChange={(e) => setAge(e.target.value)}
          value={age}
          type="number"
          placeholder="age"
        />

      </div>
      <button style={{ margin: "20px 0px 10px 0px" }} onClick={() => saveSession()}>Save in session</button>
      {dataSaved && <p style={{ color: "blue" }}>Data saved, reload the page</p>}
      <div>

        <h4>Stored Data </h4>
        <h5>Reload the page for check the session data</h5>
        <p> Primitive: <span style={{ color: "red" }}>{dataInSession.textInSession}</span></p>
        <p> Person: {JSON.stringify(dataInSession.personInSession)}</p>
      </div>
    </div >


  );
}

export async function getServerSideProps({ req, res }) {
  const session = await getSession(req, res);
  console.log(session)
  return {
    props: {
      dataInSession: {
        textInSession: session.text ?? null,
        personInSession: session.person ?? null
      }
    },
  };
}
