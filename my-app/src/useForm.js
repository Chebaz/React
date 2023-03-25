import { useState } from "react";

export function useForm(startState) {
  const [fields, setFields] = useState(startState);

  const handleInputChange = (event) => {
    setFields(() => ({ [event.target.name]: event.target.value }));
  };

  return [fields, handleInputChange];
}
