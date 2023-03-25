import React from "react";
import { useForm } from "./useForm";
export function Form() {
  const [fields, handleInputChange] = useForm({
    username: "",
    password: "",
  });
  return (
    <div>
      <input
        type="text"
        name="username"
        value={fields.username}
        onChange={handleInputChange}
        placeholder="username"
      />
      <input
        type="password"
        name="password"
        value={fields.password}
        onChange={handleInputChange}
        placeholder="password"
      />
    </div>
  );
}
