import React, {useState} from 'react'
import './styles.css'
function Form(){

    const [cfp,setCpf] = useState('')
    const [name,setName] = useState('')
    const [birthday,setBirthday] = useState('')
    const [city,setCity] = useState('')
    const [uf,setUf] = useState('')
    
    return(
        <form>
            <input type="text" name="cpf" className="form-text" onChange={setCpf} placeholder="CPF"/>

            <input type="text" name="name" className="form-text" onChange={setName} placeholder="Nome"/>

            <input type="datetime" name="birthday" className="form-date" onChange={setBirthday} placeholder="31/03/2020"/>

            <input type="text" name="city" className="form-text" onChange={setCity} placeholder="Cidade"/>

            <input type="text" name="uf" className="form-text" onChange={setUf} placeholder="UF"/>

            <div>Você fez a vacina de Influenza (Gripe A) recentemente?
                <input type="radio" name="q1" className='form-radio' value="yes"/>Sim
                <input type="radio" name="q1" className='form-radio' value="no" checked/>Não
            </div>
            <span>Você é hipertenso?
                <input type="radio" name="q2" className='form-radio' value="yes"/>Sim
                <input type="radio" name="q2" className='form-radio' value="no" checked/>Não
            </span>

            <span>Você é diabético? 
                <input type="radio" name="q3" className='form-radio' value="yes"/>Sim
                <input type="radio" name="q3" className='form-radio' value="no" checked/>Não
            </span>

            <span>Você tem DPOC, asma ou alguma complicação respiratória?
                <input type="radio" name="q4" className='form-radio' value="yes"/>Sim
                <input type="radio" name="q4" className='form-radio' value="no" checked/>Não
            </span>

            <span>Você possui problemas do coração?
                <input type="radio" name="q5" className='form-radio' value="yes"/>Sim
                <input type="radio" name="q5" className='form-radio' value="no" checked/>Não
            </span>

            <span>Você fez algum transplante?
                <input type="radio" name="q6" className='form-radio' value="yes"/>Sim
                <input type="radio" name="q6" className='form-radio' value="no" checked/>Não
            </span>

            <span>Você possui Câncer e fez quimioterapia nos últimos 30 dias?
                <input type="radio" name="q7" className='form-radio' value="yes"/>Sim
                <input type="radio" name="q7" className='form-radio' value="no" checked/>Não
            </span>

            <span>Você é portador do vírus HIV/Aids?
                <input type="radio" name="q8" className='form-radio' value="yes"/>Sim
                <input type="radio" name="q8" className='form-radio' value="no" checked/>Não
            </span>

            <span>Você está grávida?
                <input type="radio" name="q9" className='form-radio' value="yes"/>Sim
                <input type="radio" name="q9" className='form-radio' value="no" checked/>Não
            </span>

            <span>Você possui problemas nos rins?
                <input type="radio" name="q10" className='form-radio' value="yes"/>Sim
                <input type="radio" name="q10" className='form-radio' value="no" checked/>Não
            </span>

            <span>Você possui algum outro problema de saúde?
                <input type="radio" name="q11" className='form-radio' value="yes"/>Sim
                <input type="radio" name="q11" className='form-radio' value="no" checked/>Não
                <input type='text' name="q11-description" className='form-text'/>
            </span>


            <span>Você teve contato com alguém que testou positivo para o Coronavírus ou que tenha suspeita de estar infectado com o Coronavírus?
                <input type="radio" name="q12" className='form-radio' value="yes"/>Sim
                <input type="radio" name="q12" className='form-radio' value="no" checked/>Não
            </span>

            <span>Você realizou uma viagem recentemente?
                <input type="radio" name="q13" className='form-radio' value="yes"/>Sim
                <input type="radio" name="q13" className='form-radio' value="no" checked/>Não
            </span>
            <span>Quais desses sintomas você apresenta?
                <input type="checkbox" name="q14a" />Dificuldade para respirar
                <input type="checkbox" name="q14b" /> Febre maior ou igual a 38ºC
                <input type="checkbox" name="q14c" /> Dores no corpo
                <input type="checkbox" name="q14d" /> Tosse
                <input type="checkbox" name="q14e" /> Coriza
                <input type="checkbox" name="q14f" /> Perda de olfato (não sente cheiros)
                <input type="checkbox" name="q14g" /> Náusea/ dor abdominal/ diarreia
            </span>

            <button type="submit">Submit</button>
        </form>
    )
}

export default Form