import React, { useState } from "react";

export function Login() {
  const [nome, setNome] = useState("");
  const [password, SetPassword] = useState("");
  const [check, setCheck] = useState(false);

  function handleInputChange(event) {
    if (event.target.name === "name") {
      setNome(event.target.value);
    } else if (event.target.name === "password") {
      SetPassword(event.target.value);
    } else if (event.target.name === "checkbox") {
      check === false ? setCheck(true) : setCheck(false);
      console.log(check);
    }
  }
  return (
    <div>
      <input
        type="text"
        value={nome}
        name="name"
        onChange={handleInputChange}
      />
      <input
        type="password"
        value={password}
        name="password"
        onChange={handleInputChange}
      />
      <input
        type="checkbox"
        name="checkbox"
        value={check}
        onChange={handleInputChange}
      />
    </div>
  );
}
