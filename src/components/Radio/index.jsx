import React from 'react'
import {Field} from 'formik'
import "./styles.css"

export default function Radio(props){
  return (
  <Field
    name={props.nameValue}
    render={({field})=>(
        <div className="question"> 
            <label htmlFor="question">{props.question}</label>
          <input
            {...field} 
            className="option"
            value= "true"
            checked={field.value === "true"} 
            name={props.nameValue}
            type="radio" 
          /> <label htmlFor="yes">{props.option1 ? props.option1 : "Sim"}</label>
          <input
            {...field} 
            className="option"
            value="false"
            checked={field.value === 'false'} 
            name={props.nameValue}
            type="radio" 
          /><label htmlFor="yes">{props.option1 ? props.option2 : "Nao"}</label>
        </div>
      )}
    />
)}