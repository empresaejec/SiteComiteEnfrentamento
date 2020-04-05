import React from 'react';
import PropTypes from 'prop-types';

// Bootstrap
import Form from 'react-bootstrap/Form';

// Styles
import "./styles.css"

const Radio = ({ question, options, ...props }) => {
  return (
    <Form.Group className="radio-group"> 
      <label htmlFor="question">{question} <span className="required-icon">*</span></label>
      <ul>
        {options.map((option, idx) => (
          <li key={`question-${props.name}-option-${idx}`}>
            <input
              {...props}
              value={option.value}
              checked={props.value === option.value}
              type="radio"
            />
            <label htmlFor={props.name}>{option.label}</label>
          </li>
        ))}
      </ul>
    </Form.Group>
  )
}

// Defines the types of the component's properties.
Radio.propTypes = {
  question: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.any.isRequired,
    label: PropTypes.string.isRequired
  })),
}

// Defines the default properties of component
Radio.defaultProps = {
  question: "",
  options: [
    {
      value: "true",
      label: "Sim"
    },
    {
      value: "false",
      label: "Não"
    }
  ]
}

export default Radio;