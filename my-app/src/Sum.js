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
