import React,{ useState } from "react";
const Form = ({setSubmittedData}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [error, setError] = useState(false);

  const handleChangeName = (event) =>{
    setFormData({...formData, name: event.target.value});
  }

  const handleChangeEmail = (event) =>{
    setFormData({...formData, email: event.target.value});
  }

  const validateName = (name)=>{
    const trimmedName = name.trim().replace(/\s+/g, ' ');
    const words = trimmedName.split(' ');
    return trimmedName.length > 5 && words.length > 1 && !/\d/.test(trimmedName);
  }

  const validateEmail = (email)=>{
    return  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  const validateFormData = (formData)=>{
    return validateName(formData.name) && validateEmail(formData.email);
  }
  const handleSubmit = (event)=>{
    event.preventDefault();
    const isValid = validateFormData(formData);
    setError(!isValid);
    
    if(isValid){
        setSubmittedData(formData);
        console.log("Nombre:", formData.name);
        console.log("Email:", formData.email);
    }
    else{
        setSubmittedData(null);
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit} >
      <h2 className="form-title">Contáctanos</h2>
        <div className="form-group">
        <input type="text" 
              value={formData.name}
              placeholder="Nombre completo" 
              onChange={handleChangeName} />
        <input className="form-group" type="email" 
              value={formData.email} 
              placeholder="Email" 
              onChange={handleChangeEmail}/>
        </div>
        <button className="form-button">Enviar</button>   
      </form>
      <br />
      {
        error && <span>Por favor verifique su información nuevamente</span>
      }
    </div>
  );
};

export default Form;
