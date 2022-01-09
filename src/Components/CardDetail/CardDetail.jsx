import React from "react";
import "../CardDetail/craddetail.css";

export const CardDetail = ({ value, handleremove }) => {
  console.log(value);

  const handleDelete = (id) => {
    handleremove(id);
  };
  return (
    <div className="card-container">
      <div className="num">{`Card: ${value.num}`}</div>
      <button onClick={() => handleDelete(value.id)}>Remove Card</button>
    </div>
  );
};
