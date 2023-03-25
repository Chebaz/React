import React, { useRef, useState } from "react";

export function CarDetails(initialData) {
  const formReference = useRef(null);
  const [formData] = useState(initialData);
  console.log(initialData);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      model: formData.get("model"),
      year: formData.get("year"),
      color: formData.get("color"),
    };
    console.log(data);
  }

  return (
    <form ref={formReference} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="model">Modello:</label>
        <input
          id="model"
          name="model"
          type="text"
          defaultValue={formData.model}
        />
      </div>
      <div>
        <label htmlFor="year">Anno:</label>
        <input id="year" name="year" type="text" defaultValue={formData.year} />
      </div>
      <div>
        <label htmlFor="color">Colore:</label>
        <input
          id="color"
          name="color"
          type="text"
          defaultValue={formData.color}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
