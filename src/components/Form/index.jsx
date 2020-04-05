import React from 'react';
// Bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// Components
import Radio from "../Radio/index";
import Checkbox from '../Checkbox/index'

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
            q1:"",
            q2:"",
            q3:"",
            q4:"",
            q5:"",
            q6:"",
            q7:"",
            q8:"",
            q9:"",
            q10:"",
            q11:"",
            q12:"",
            q13:"",
            q14:[],
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values))
            
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

            <Form.Group>
                <label className="question">
                Quais desses sintomas você apresenta?
                </label>
                <Checkbox checked={formik.values.q14.includes("1")} onChange={formik.handleChange} name="q14" value="1" label="Dificuldade para respirar" />
                <Checkbox checked={formik.values.q14.includes("2")} onChange={formik.handleChange} name="q14" value="2" label="Febre maior ou igual a 38ºC" />
                <Checkbox checked={formik.values.q14.includes("3")} onChange={formik.handleChange} name="q14" value="3" label="Dores no corpo" />
                <Checkbox checked={formik.values.q14.includes("4")} onChange={formik.handleChange} name="q14" value="4" label="Tosse" />
                <Checkbox checked={formik.values.q14.includes("5")} onChange={formik.handleChange} name="q14" value="5" label="Coriza" />
                <Checkbox checked={formik.values.q14.includes("6")} onChange={formik.handleChange} name="q14" value="6" label="Perda de olfato (não sente cheiros)" />
                <Checkbox checked={formik.values.q14.includes("7")} onChange={formik.handleChange} name="q14" value="7" label="Náusea/ dor abdominal/ diarreia" />
            </Form.Group>


            <Button type="submit">Verificar</Button>
        </Form>
    )
}

export default WholeForm;