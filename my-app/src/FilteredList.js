import { useMemo } from "react";

function FilteredList({ list }) {
  const listaFiltered = useMemo(() => {
    return list.filter((item) => item.age > 18);
  }, [list]);

  return (
    <ul>
      {listaFiltered.map((item) => (
        <li key={item.id}>
          {item.name}, age {item.age}
        </li>
      ))}
    </ul>
  );
}
