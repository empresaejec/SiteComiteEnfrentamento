import React from 'react'
import './styles'
function Form(){
    return(
        <form>
            <input type="text" name="cpf" className="form-text" placeholder="CPF"/>

            <input type="text" name="name" className="form-text" placeholder="Nome"/>

            <input type="datetime" name="nascimento" className="form-date"/>

            <input type="text" name="city" className="form-text" placeholder="Cidade"/>

            <input type="text" name="uf" className="form-text" placeholder="UF"/>

            <span>Você fez a vacina de Influenza (Gripe A) recentemente?
                <input type="radio" name="q1" className='form-radio' value="yes"/>Sim
                <input type="radio" name="q1" className='form-radio' value="no" checked/>Não
            </span>

            

            

            

            

            <button type="submit">Submit</button>
        </form>
    )
}

export default Form