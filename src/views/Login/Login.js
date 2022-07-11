import {useState} from 'react';
import LoginView from './LoginView';

export default function Login() {
  const [formValues, setFormValues] = useState({
    email: 'javier.artkine@gmail.com',
    password: 'hola1234',
    error: false
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  return (
    <LoginView
      formValues={formValues}
      handleFormSubmit={handleFormSubmit}
      handleInputChange={handleInputChange}
    />
  );
}
