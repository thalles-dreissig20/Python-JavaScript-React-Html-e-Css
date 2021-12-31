import React from 'react';
import './cadastro.css';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Axios from "axios";

const Cadastro = () => {

    const handleClickRegister = (values) => {
        Axios.post("http://localhost:3001/Register", {
          email: values.email,
          password: values.password,
        }).then((response) => {
            console.log(response);
        });
    };

    const validationRegister = yup.object().shape({
        email: yup.string().email("Não é um email valido!").required("Este campo é obrigatorio!"),
        password: yup.string().min(8, "A senha deve conter 8 caracteres!").required("Esse campo é obrigatorio!"),
        confirmPassword: yup.string().required("Esse campo é obrigatorio!").oneOf([yup.ref("password"), null], "As senhas não são iguais!"),
    });

    return ( 
        <div className='Container'>
            <h1>Cadastro</h1>
            <Formik initialValues={ {} } onSubmit={handleClickRegister} validationSchema={validationRegister}>
                <Form className="Form">
                    
                <div className="form-login-group">
                <Field name="email" className="form-field" placeholder="Email" />
                <ErrorMessage 
                    component="span"
                    name="email"
                    className="Form-error"/>
                </div>

                <div className="form-login-group">
                <Field name="password" className="form-field" placeholder="Senha" />
                <ErrorMessage 
                    component="span"
                    name="password"
                    className="Form-error"/>
                </div>

                <div className="form-login-group">
                <Field name="confirmPassword" className="form-field" placeholder="Confirme sua senha" />
                <ErrorMessage 
                    component="span"
                    name="confirmPassword"
                    className="Form-error"/>
                </div>
                <button className="button" type="submit">Cadastrar</button>
                
                
                <button>
                     <Link className="Link" to="/Login">Voltar</Link>
                </button>
                </Form>
            </Formik>
        </div>
    );
};
export default Cadastro;