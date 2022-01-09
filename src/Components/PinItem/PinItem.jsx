import React from "react";
import PropTypes from "prop-types";

export const PinItem = React.forwardRef(
  ({ onChange, onBackspace, max }, ref) => {
    const handleKeyUp = (e) => {
      console.log(e.keyCode);
      switch (e.keyCode) {
        case 8: {
          if (!e.target.value) onBackspace(e.target.value);
          break;
        }
        case 9: {
          e.preventDefault();
          break;
        }
        default: {
          onChange(e.target.value);
        }
      }
    };
    return <input onKeyUp={handleKeyUp} ref={ref} maxLength={max} />;
  }
);
PinItem.propTypes = {
  max: PropTypes.number,
  onBackspace: PropTypes.func,
  onChange: PropTypes.func,
};

PinItem.defaultProps = {
  max: 1,
};
