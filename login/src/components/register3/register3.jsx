import './register3.css';
import React, { useState } from 'react';

function App() {
  const validate = (name, value) => {
    let error = "";
  
    switch (name) {
      case "addres":
        if (value.length < 1) {
          error = "Enter address";
        }
        break;
      default:
    }
    return error;
  };

  const [profileDatas, setProfileDatas] = useState({
    addres: '',
  });

  const [errors, setErrors] = useState({
    addres: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const error = validate(name, value);

    setProfileDatas({
      ...profileDatas,
      [name]: value
    });

    setErrors({
      ...errors,
      [name]: error
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;
    const newErrors = { ...errors };

    Object.keys(profileDatas).forEach((key) => {
      const error = validate(key, profileDatas[key]);
      newErrors[key] = error;
      if (error) {
        isValid = false;
      }
    });

    setErrors(newErrors);

    if (isValid) {
      console.log(profileDatas);
    } else {
      console.log("Form is invalid");
    }
  };

  return (
    <form className="container-2" onSubmit={handleSubmit}>
      <div className="sign-2">
        <span>Add address</span>
        <span style={{color:'green'}}>2 of 3</span>
      </div>
      <br />
      <div>
        <input className="input" name="addres" placeholder="Search for address" onChange={handleChange} />
        {errors.addres && <p style={{color: 'red'}} >{errors.addres}</p>}
        <p> Your address is not visible to other users</p>
      </div>
      <button className="use" type="submit">Use current location</button>
      <button className="add" type="submit">Add manually</button>
      <br />
      <h4 className='sharing'>Sharing your address shows:</h4>
      <p>People near you</p>
      <p>Estimated delivery time</p>
      <p>Estimated shipping costs</p>
    </form>
  );
}

export default App;
