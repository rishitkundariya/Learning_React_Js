import React, { useContext, useState } from "react";
import UserContext from "../../context/UserContext";

export default function Dashboard() {
  const [username, setUserName] = useState("");
  const [password, setpassword] = useState("");
  const { setData } = useContext(UserContext);
  function SubmitClick() {
    setData({ username: username, password: password });
  }
  return (
    <>
      <div>
        <input
          type="text"
          onChange={(e) => setUserName(e.target.value)}
          placeholder="User Name"
        />
        <input
          type="password"
          onChange={(e) => setpassword(e.target.value)}
          placeholder="Password"
        />
        <button onClick={SubmitClick}>Submit</button>
      </div>
    </>
  );
}
