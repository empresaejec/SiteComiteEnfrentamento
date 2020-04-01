import React from 'react'
import './styles.css'
import {Formik} from 'formik'
import Radio from "../../components/Radio/index"

function Form(){
    
    return(
        <Formik 
            initialValues={{ 
                cpf:"",     
                name:"",
                birthday:"",
                city:"",
                uf:"",
                q1:"false",
                q2:"false",
                q3:"false",
                q4:"false",
                q5:"false",
                q6:"false",
                q7:"false",
                q8:"false",
                q9:"false",
                q10:"false",
                q11:"false",
                q12:"false",
                q13:"false",
                }}
            onSubmit={values => alert(JSON.stringify(values, null, 2))}
        >
        {({values,errors,touched,handleChange,handleBlur}) => (
            <form>
                {JSON.stringify(values)}
                <div>
                    <input 
                    type="text" 
                    name="cpf" 
                    className="form-text" 
                    placeholder="CPF"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.cpf}/>
                </div>

                <div>
                    <input 
                    type="text" 
                    name="name" 
                    className="form-text"  
                    placeholder="Nome"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}/>
                </div>

                <div>
                    <input 
                    type="text" 
                    name="birthday" 
                    className="form-date"
                    placeholder="31/03/2020"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.birthday}/>
                </div>

                <div>
                    <input 
                    type="text" 
                    name="city" 
                    className="form-text"  
                    placeholder="Cidade"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.city}/>
                </div>

                <div>
                    <input 
                    type="text" 
                    name="uf" 
                    className="form-text" 
                    placeholder="UF"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.uf}/>
                </div>
                <Radio
                    className="radio"
                    nameValue = 'q1'
                    question = "Você fez a vacina de Influenza (Gripe A) recentemente?"
                />
                <Radio
                    nameValue = 'q2'
                    question = "Você é hipertenso?"
                />
                <Radio
                    nameValue = 'q3'
                    question = "Você é diabético? "
                />
                <Radio
                    nameValue = 'q4'
                    question = "Você tem DPOC, asma ou alguma complicação respiratória?"
                />
                <Radio
                    nameValue = 'q5'
                    question = "Você possui problemas do coração?"
                />
                <Radio
                    nameValue = 'q6'
                    question = "Você fez algum transplante?"
                />
                <Radio
                    nameValue = 'q7'
                    question = "Você possui Câncer e fez quimioterapia nos últimos 30 dias?"
                />
                <Radio
                    nameValue = 'q8'
                    question = "Você é portador do vírus HIV/Aids?"
                />
                <Radio
                    nameValue = 'q9'
                    question = "Você está grávida?"
                />
                <Radio
                    nameValue = 'q10'
                    question = "Você possui problemas nos rins?"
                />
                <Radio
                    nameValue = 'q11'
                    question = "Você possui algum outro problema de saúde?"
                />
                <Radio
                    nameValue = 'q12'
                    question = "Você teve contato com alguém que testou positivo para o Coronavírus ou que tenha suspeita de estar infectado com o Coronavírus?"
                />
                <Radio
                    nameValue = 'q13'
                    question = "Você realizou uma viagem recentemente?"
                />
            </form>
        )}

            {/* <span>Quais desses sintomas você apresenta?
                <input type="checkbox" name="q14a" />Dificuldade para respirar
                <input type="checkbox" name="q14b" /> Febre maior ou igual a 38ºC
                <input type="checkbox" name="q14c" /> Dores no corpo
                <input type="checkbox" name="q14d" /> Tosse
                <input type="checkbox" name="q14e" /> Coriza
                <input type="checkbox" name="q14f" /> Perda de olfato (não sente cheiros)
                <input type="checkbox" name="q14g" /> Náusea/ dor abdominal/ diarreia
            </span>

            <button type="submit">Submit</button> */}
        </Formik>
    )
}

export default Form