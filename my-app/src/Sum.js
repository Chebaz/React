import React from "react";

export function Sum(props) {
  let num = 0;
  const arraySum = (array) => {
    array.forEach((element) => {
      num += element;
    });
    return num;
  };
  return <h1>{arraySum(props.array)}</h1>;
}

Sum.defaultProps = {
  array: [1],
};
/**Se non ci sono props assegnate e neanche defaultProps dichiarate le props avranno come valore null */
