import React from 'react';
import PropTypes from 'prop-types';

// Bootstrap
import Form from 'react-bootstrap/Form';

// Styles
// import "./styles.css"
const Checkbox = ({question, options, ...props }) => {
  return ( 
    <div>
      <label htmlFor="question">{question}</label>
      {options.map((option,idx)=>(
        <div key={props.name + idx}>
          <label>{option.label}</label>
          <input 
          {...props}
          type="checkbox" 
          id={props.name +" "+ idx} 
          name={props.name} 
          onChange={(event) => {
            const value = event.target.checked ? 'true' : 'false'
            console.log('lalal')
            }}
          />
        </div>
        )
      )}
      <input type="checkbox" name={props.name}/>
    </div>
  )
}

// Defines the types of the component's properties.
Checkbox.propTypes = {
  question: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired
  })),
}
// Defines the default properties of component
Checkbox.defaultProps = {
  question: "",
  options: [
    {
      label: ""
    },
  ]
}
export default Checkbox;