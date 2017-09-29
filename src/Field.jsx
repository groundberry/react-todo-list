
import React from 'react';
import PropTypes from 'prop-types';
import './Field.css';

const Field = (props) => {
  const { label, value, onChange } = props;

  return (
    <label
      className="Field__label"
    >
      {label}
      <input
        className="Field__input"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

Field.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Field;
