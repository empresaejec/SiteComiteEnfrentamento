import React from 'react'
import './styles.css'
function Form(){
    return(
        <form method='POST'>
            <input type="text" name="cpf" className="form-text" placeholder="CPF"/>

            <input type="text" name="name" className="form-text" placeholder="Nome"/>

            <input type="datetime" name="nascimento" className="form-date"/>

            <input type="text" name="city" className="form-text" placeholder="Cidade"/>

            <input type="text" name="uf" className="form-text" placeholder="UF"/>

            <span>Você fez a vacina de Influenza (Gripe A) recentemente?
                <input type="radio" name="q1" className='form-radio' value="yes"/>Sim
                <input type="radio" name="q1" className='form-radio' value="no" checked/>Não
            </span>
            <span>Você é hipertenso?
                <input type="radio" name="q2" className='form-radio' value="yes"/>Sim
                <input type="radio" name="q2" className='form-radio' value="no" checked/>Não
            </span>

            <span>Você é diabético? 
                <input type="radio" name="q" className='form-radio' value="yes"/>Sim
                <input type="radio" name="q" className='form-radio' value="no" checked/>Não
            </span>

            <span>Você tem DPOC, asma ou alguma complicação respiratória?
                <input type="radio" name="q" className='form-radio' value="yes"/>Sim
                <input type="radio" name="q" className='form-radio' value="no" checked/>Não
            </span>

            <span>Você possui problemas do coração?
                <input type="radio" name="q" className='form-radio' value="yes"/>Sim
                <input type="radio" name="q" className='form-radio' value="no" checked/>Não
            </span>

            <span>Você fez algum transplante?
                <input type="radio" name="q" className='form-radio' value="yes"/>Sim
                <input type="radio" name="q" className='form-radio' value="no" checked/>Não
            </span>

            <span>Você possui Câncer e fez quimioterapia nos últimos 30 dias?
                <input type="radio" name="q" className='form-radio' value="yes"/>Sim
                <input type="radio" name="q" className='form-radio' value="no" checked/>Não
            </span>

            <span>Você é portador do vírus HIV/Aids?
                <input type="radio" name="q" className='form-radio' value="yes"/>Sim
                <input type="radio" name="q" className='form-radio' value="no" checked/>Não
            </span>

            <span>Você está grávida?
                <input type="radio" name="q" className='form-radio' value="yes"/>Sim
                <input type="radio" name="q" className='form-radio' value="no" checked/>Não
            </span>

            <span>Você possui problemas nos rins?
                <input type="radio" name="q" className='form-radio' value="yes"/>Sim
                <input type="radio" name="q" className='form-radio' value="no" checked/>Não
            </span>

            <span>Você possui algum outro problema de saúde?
                <input type="radio" name="q" className='form-radio' value="yes"/>Sim
                <input type="radio" name="q" className='form-radio' value="no" checked/>Não
                <input type='text' name="q -description" className='form-text'/>
            </span>


            <span>Você teve contato com alguém que testou positivo para o Coronavírus ou que tenha suspeita de estar infectado com o Coronavírus?
                <input type="radio" name="q" className='form-radio' value="yes"/>Sim
                <input type="radio" name="q" className='form-radio' value="no" checked/>Não
            </span>

            <span>Você realizou uma viagem recentemente?
                <input type="radio" name="q" className='form-radio' value="yes"/>Sim
                <input type="radio" name="q" className='form-radio' value="no" checked/>Não
            </span>
            <span>Quais desses sintomas você apresenta?
                <input type="checkbox" name="q" />Dificuldade para respirar
                <input type="checkbox" name="q" /> Febre maior ou igual a 38ºC
                <input type="checkbox" name="q" /> Dores no corpo
                <input type="checkbox" name="q" /> Tosse
                <input type="checkbox" name="q" /> Coriza
                <input type="checkbox" name="q" /> Perda de olfato (não sente cheiros)
                <input type="checkbox" name="q" /> Náusea/ dor abdominal/ diarreia

            </span>
            

            

            

            

            <button type="submit">Submit</button>
        </form>
    )
}

export default Form