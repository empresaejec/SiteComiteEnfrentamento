import React, { useState } from 'react';

// Bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// Components
import Radio from "../Radio/index";
import Checkbox from '../Checkbox/index';

// Formik
import { useFormik } from 'formik';

// React Loading component
import ReactLoading from 'react-loading';

// Styles
import './styles.css';

const WholeForm = () => {
    const [formState, setFormState] = useState('form');

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
            setFormState('loading');

            const old = (new Date()).getFullYear() - (new Date(values.birthday)).getFullYear();
            console.log(values);
            console.log(old)
        },
    })

    if(formState === 'loading')
        return (
            <div className="loading-container">
                <h2>Gerando resultado...</h2>
                <ReactLoading type="spin" color="#1659bf" height={32} width={32} />
            </div>
        )
    return(
        <Form onSubmit={formik.handleSubmit}>
            <h2>
                Inquérito de direcionamento
            </h2>
            <p>
                Preencha o formulário para poder receber sugestões do que fazer em seguida.
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
                    required
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
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control 
                    type="date" 
                    name="birthday" 
                    className="form-date"
                    placeholder="Data de nascimento"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.birthday}
                    required
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
                    required
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
                    required
                />
            </Form.Group>
            <Radio
                question="Você fez a vacina de Influenza (Gripe A) recentemente?"
                required
                {...formik.getFieldProps('q1')}
            />
            <Radio
                question = "Você é hipertenso?"
                required
                {...formik.getFieldProps('q2')}
            />
            <Radio
                question = "Você é diabético? "
                required
                {...formik.getFieldProps('q3')}
            />
            <Radio
                question = "Você tem DPOC, asma ou alguma complicação respiratória?"
                required
                {...formik.getFieldProps('q4')}
            />
            <Radio
                question = "Você possui problemas do coração?"
                required
                {...formik.getFieldProps('q5')}
            />
            <Radio
                question = "Você fez algum transplante?"
                required
                {...formik.getFieldProps('q6')}
            />
            <Radio
                question = "Você possui Câncer e fez quimioterapia nos últimos 30 dias?"
                required
                {...formik.getFieldProps('q7')}
            />
            <Radio
                question = "Você é portador do vírus HIV/Aids?"
                required
                {...formik.getFieldProps('q8')}
            />
            <Radio
                question = "Você está grávida?"
                required
                {...formik.getFieldProps('q9')}
            />
            <Radio
                question = "Você possui problemas nos rins?"
                required
                {...formik.getFieldProps('q10')}
            />
            <Radio
                question = "Você possui algum outro problema de saúde?"
                required
                {...formik.getFieldProps('q11')}
            />
            <Radio
                question = "Você teve contato com alguém que testou positivo para o Coronavírus ou que tenha suspeita de estar infectado com o Coronavírus?"
                required
                {...formik.getFieldProps('q12')}
            />
            <Radio
                question = "Você realizou uma viagem recentemente?"
                required
                {...formik.getFieldProps('q13')}
            />

            <Form.Group>
                <label className="question">
                Quais desses sintomas você apresenta? <span className="required-icon">*</span>
                </label>
                <Checkbox required checked={formik.values.q14.includes("1")} onChange={formik.handleChange} name="q14" value="1" label="Dificuldade para respirar" />
                <Checkbox required checked={formik.values.q14.includes("2")} onChange={formik.handleChange} name="q14" value="2" label="Febre maior ou igual a 38ºC" />
                <Checkbox required checked={formik.values.q14.includes("3")} onChange={formik.handleChange} name="q14" value="3" label="Dores no corpo" />
                <Checkbox required checked={formik.values.q14.includes("4")} onChange={formik.handleChange} name="q14" value="4" label="Tosse" />
                <Checkbox required checked={formik.values.q14.includes("5")} onChange={formik.handleChange} name="q14" value="5" label="Coriza" />
                <Checkbox required checked={formik.values.q14.includes("6")} onChange={formik.handleChange} name="q14" value="6" label="Perda de olfato (não sente cheiros)" />
                <Checkbox required checked={formik.values.q14.includes("7")} onChange={formik.handleChange} name="q14" value="7" label="Náusea/ dor abdominal/ diarreia" />
            </Form.Group>


            <Button type="submit">Verificar</Button>
        </Form>
    )
}

export default WholeForm;