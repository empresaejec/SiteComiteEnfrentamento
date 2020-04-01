import React from 'react'
import {Field} from 'formik'

export default function Radio(props){
  return (
  <Field
    name={props.name}
    render={({field})=>(
        <div>
            <label htmlFor="question">{props.question}</label>
          <input
            {...field} 
            value= "true"
            checked={field.value === "true"} 
            name={props.name}
            type="radio" 
          /> <label htmlFor="yes">{props.option1 ? props.option1 : "Sim"}</label>
          <input
            {...field} 
            value="false"
            checked={field.value === 'false'} 
            name={props.name}
            type="radio" 
          /><label htmlFor="yes">{props.option1 ? props.option2 : "Nao"}</label>
        </div>
      )}
    />
)}