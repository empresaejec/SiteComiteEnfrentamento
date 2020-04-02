import React from 'react';
// Bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// Components
import Radio from "../Radio/index";
import Google from '../GoogleApi/index'

// Formik
import { useFormik } from 'formik';

// Styles
import './styles.css';

const WholeForm = () => {
    const formik = useFormik({
        initialValues: { 
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
        },
        onSubmit: (values) => {
            //alert(JSON.stringify(values))

            if(formik.values.q1 === 'true'){
                alert(JSON.stringify(values.q1))
            }
        },
    })

    return(
        <Form onSubmit={formik.handleSubmit}>
            <h2>
                Inquérito de direcionamento
            </h2>
            <p>
                Descrição do formulário e de sua utilidade
            </p>
            <Form.Group>
                <Form.Control 
                    type="text" 
                    name="cpf" 
                    className="form-text" 
                    placeholder="CPF"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.cpf}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control 
                    type="text" 
                    name="name" 
                    className="form-text"  
                    placeholder="Nome"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control 
                    type="text" 
                    name="birthday" 
                    className="form-date"
                    placeholder="Data de nascimento"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.birthday}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control 
                    type="text" 
                    name="city" 
                    className="form-text"  
                    placeholder="Cidade"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.city}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control 
                    type="text" 
                    name="uf" 
                    className="form-text" 
                    placeholder="UF"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.uf}
                />
            </Form.Group>
            <Radio
                question="Você fez a vacina de Influenza (Gripe A) recentemente?"
                {...formik.getFieldProps('q1')}
            />
            <Radio
                question = "Você é hipertenso?"
                {...formik.getFieldProps('q2')}
            />
            <Radio
                question = "Você é diabético? "
                {...formik.getFieldProps('q3')}
            />
            <Radio
                question = "Você tem DPOC, asma ou alguma complicação respiratória?"
                {...formik.getFieldProps('q4')}
            />
            <Radio
                question = "Você possui problemas do coração?"
                {...formik.getFieldProps('q5')}
            />
            <Radio
                question = "Você fez algum transplante?"
                {...formik.getFieldProps('q6')}
            />
            <Radio
                question = "Você possui Câncer e fez quimioterapia nos últimos 30 dias?"
                {...formik.getFieldProps('q7')}
            />
            <Radio
                question = "Você é portador do vírus HIV/Aids?"
                {...formik.getFieldProps('q8')}
            />
            <Radio
                question = "Você está grávida?"
                {...formik.getFieldProps('q9')}
            />
            <Radio
                question = "Você possui problemas nos rins?"
                {...formik.getFieldProps('q10')}
            />
            <Radio
                question = "Você possui algum outro problema de saúde?"
                {...formik.getFieldProps('q11')}
            />
            <Radio
                question = "Você teve contato com alguém que testou positivo para o Coronavírus ou que tenha suspeita de estar infectado com o Coronavírus?"
                {...formik.getFieldProps('q12')}
            />
            <Radio
                question = "Você realizou uma viagem recentemente?"
                {...formik.getFieldProps('q13')}
            />

            <Button type="submit">Verificar</Button>

            <Google></Google>
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
        </Form>
    )
}

export default WholeForm;