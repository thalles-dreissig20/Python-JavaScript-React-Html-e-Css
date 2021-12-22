import './App.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';


function App() {
  const handleClickLogin = (values) => console.log(values);
  const handleClickRegister = (values) => console.log(values);
  
  const validationLogin = yup.object().shape({
    email: yup.string().email("Não é um email valido!").required("Este campo é obrigatorio!"),
    password: yup.string().min(8, "A senha deve conter 8 caracteres!").required("Esse campo é obrigatorio!"),
  });
  
  const validationRegister = yup.object().shape({
    email: yup.string().email("Não é um email valido!").required("Este campo é obrigatorio!"),
    password: yup.string().min(8, "A senha deve conter 8 caracteres!").required("Esse campo é obrigatorio!"),
    confirmPassword: yup.string().required("Esse campo é obrigatorio!").oneOf([yup.ref("password"), null], "As senhas não são iguais!"),
  });
  
  return (
    <div className="Container">
        
        <h1>Login</h1>
      <Formik initialValues={ {} } onSubmit={handleClickLogin} validationSchema={validationLogin}>
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

            <button className="button" type="submit">Login</button>
          </Form>
      </Formik>

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
        </Form>
      </Formik>
    </div>
  );
};
export default App;
