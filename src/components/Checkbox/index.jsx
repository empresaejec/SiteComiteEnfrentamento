import React from 'react';
import PropTypes from 'prop-types';

// Styles
import "./styles.css";

const Checkbox = ({ checked, name, value, label, onChange }) => {
  return (
    <div className="form-checkbox">
      <input 
        type="checkbox"
        name={name}
        checked={checked}
        value={value}
        onChange={onChange}
      />
      <label>{label}</label>
    </div>
  )
}

// Defines the types of the component's properties.
Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
// Defines the default properties of component
Checkbox.defaultProps = {
  name: "",
  checked: "",
  value: "",
  label: "",
  onChange: () => {},
}
export default Checkbox;