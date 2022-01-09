import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { PinItem } from "../PinItem/PinItem";

export const InputBox = ({ length, perBox, onChange }) => {
  const [values, setValues] = useState(new Array(length).fill(""));
  const elements = useRef(new Array(length).fill(0));
  console.log(elements, values[0]);
  console.log("arr:", elements.current);

  const handleChange = (value, index) => {
    const val = [...values];
    val[index] = value;
    setValues(val);

    if (value.length > 0 && value.length === perBox && index < length - 1) {
      elements.current[index + 1].focus();
    }
    console.log("val:", val);
  };

  const handleBackSpace = (value, index) => {
    if (index > 0) {
      elements.current[index - 1].focus();
    }
    const val = [...values];
  };

  return (
    <div>
      {values.map((item, index) => (
        <PinItem
          keys={index}
          ref={(n) => (elements.current[index] = n)}
          onChange={(v) => handleChange(v, index)}
          onBackspace={(v) => handleBackSpace(v, index)}
          max={perBox}
        />
      ))}
    </div>
  );
};
