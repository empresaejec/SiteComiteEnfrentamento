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

const resultData = [
    {
        title: "",
        guidelines: [
            "Considerando as informações que você me apresentou, recomendamos que mantenha as medidas de prevenção e o distanciamento social. Recomendamos que qualquer mudança nos seus sintomas, por favor, dirija-se ao Centro de triagem de seu município. Caso seu município não conte com centro de triagem, entre em contato com a sua Unidade Básica de Saúde."
        ]
    },
    {
        title: "Buscar o Centro de Triagem",
        guidelines: [
            "Se você é de Araranguá, considerando as informações que você me apresentou, você deve ir até o Centro de Triagem localizado no Centro Comunitário do Santuário Nossa Senhora Mãe dos homens.",
            "Se você não é de Araranguá, entre em contato com a sua Unidade Básica de Saúde para saber aonde você deve ir para passar por avaliação médica."
        ]
    },
    {
        title: "Manter o Isolamento Familiar e Buscar o Centro de Triagem em Caso de Piora dos Sintomas",
        guidelines: [
            "Considerando as informações que você me apresentou, recomendamos que faça o isolamento familiar por 14 dias. Em caso de qualquer mudança em seus sintomas, busque o Centro de Triagem de seu município. Caso seu município não conte com centro de triagem, entre em contato com a sua Unidade Básica de Saúde."
        ]
    },
]

const WholeForm = () => {
    const [formState, setFormState] = useState('form');
    const [result, setResult] = useState(0);

    const formik = useFormik({
        initialValues: { 
            cpf:"",     
            name:"",
            birthday:"",
            city:"",
            uf:"",
            q1:"",
            q2:[],
            q3:"",
            q4:"",
            q5:[],
            q6:[],
        },
        onSubmit: (values) => {
            setFormState('loading');

            const old = (new Date()).getFullYear() - (new Date(values.birthday)).getFullYear();

            // Case the person has more than 60 years old, had/has some health problems, has any strong symptom or 4 or more light symptoms
            if(old >= 60 || values.q2.length > 0 || values.q5.length > 0 || values.q6.length >= 4)
                setResult(1); // First result in the result array
            else if(values.q6.length >= 3 || values.q3 === "true" || values.q4 === "true")
                setResult(2);
            else
                setResult(0);
            setFormState('result');
        },
    })

    if(formState === 'loading')
        return (
            <div className="loading-container">
                <h2>Gerando resultado...</h2>
                <ReactLoading type="spin" color="#1659bf" height={32} width={32} />
            </div>
        )
    else if(formState === 'result')
        return (
            <div className="result-container">
                {resultData[result].title ? <h2>{resultData[result].title}</h2> : <></>}
                <div>
                    {resultData[result].guidelines.map(guide => <p>{guide}</p>)}
                </div>
            </div>
        )
    else return(
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
            <Form.Group>
                <label className="question">
                Assinale as alternativas abaixo que sejam verdadeiras. Você: <span className="required-icon">*</span>
                </label>
                <Checkbox required checked={formik.values.q2.includes("1")} onChange={formik.handleChange} name="q2" value="1" label="É hipertenso?" />
                <Checkbox required checked={formik.values.q2.includes("2")} onChange={formik.handleChange} name="q2" value="2" label="É diabético" />
                <Checkbox required checked={formik.values.q2.includes("3")} onChange={formik.handleChange} name="q2" value="3" label="Tem DPOC, asma ou alguma complicação respiratória?" />
                <Checkbox required checked={formik.values.q2.includes("4")} onChange={formik.handleChange} name="q2" value="4" label="Possui problemas do coração/cardíaco?" />
                <Checkbox required checked={formik.values.q2.includes("5")} onChange={formik.handleChange} name="q2" value="5" label="Fez algum transplante?" />
                <Checkbox required checked={formik.values.q2.includes("6")} onChange={formik.handleChange} name="q2" value="6" label="Possui câncer e fez quimioterapia nos últimos 30 dias?" />
                <Checkbox required checked={formik.values.q2.includes("7")} onChange={formik.handleChange} name="q2" value="7" label="É portador do vírus HIV/Aids?" />
                <Checkbox required checked={formik.values.q2.includes("8")} onChange={formik.handleChange} name="q2" value="8" label="Está grávida?" />
                <Checkbox required checked={formik.values.q2.includes("9")} onChange={formik.handleChange} name="q2" value="9" label="Possui problemas nos rins?" />
                <Checkbox required checked={formik.values.q2.includes("10")} onChange={formik.handleChange} name="q2" value="10" label="Possui algum outro problema de saúde?" />
            </Form.Group>
            <Radio
                question = "Você teve contato com alguém que testou positivo para o Coronavírus ou que tenha suspeita de estar infectado com o Coronavírus?"
                required
                {...formik.getFieldProps('q3')}
            />
            <Radio
                question = "Você realizou uma viagem recentemente?"
                required
                {...formik.getFieldProps('q4')}
            />

            <Form.Group>
                <label className="question">
                Você apresenta alguns destes sintomas? <span className="required-icon">*</span>
                </label>
                <Checkbox required checked={formik.values.q5.includes("1")} onChange={formik.handleChange} name="q5" value="1" label="Dificuldade para respirar" />
                <Checkbox required checked={formik.values.q5.includes("2")} onChange={formik.handleChange} name="q5" value="2" label="Febre maior ou igual a 38ºC" />
            </Form.Group>

            <Form.Group>
                <label className="question">
                E sobre estes sintomas, você apresenta algum? <span className="required-icon">*</span>
                </label>
                <Checkbox required checked={formik.values.q6.includes("1")} onChange={formik.handleChange} name="q6" value="1" label="Dores no corpo" />
                <Checkbox required checked={formik.values.q6.includes("2")} onChange={formik.handleChange} name="q6" value="2" label="Tosse" />
                <Checkbox required checked={formik.values.q6.includes("3")} onChange={formik.handleChange} name="q6" value="3" label="Coriza" />
                <Checkbox required checked={formik.values.q6.includes("4")} onChange={formik.handleChange} name="q6" value="4" label="Perda de olfato (não sente cheiros)" />
                <Checkbox required checked={formik.values.q6.includes("5")} onChange={formik.handleChange} name="q6" value="5" label="Náusea/ dor abdominal/ diarreia" />
            </Form.Group>


            <Button type="submit">Verificar</Button>
        </Form>
    )
}

export default WholeForm;