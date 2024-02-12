import './register2.css';
import React, { useState } from 'react';

function App() {
  const validate = (name, value) => {
    let error = "";
  
    switch (name) {
      case "fullname":
        if (value.length < 3) {
          error = "Full name must be at least 3 characters";
        }
        break;
      default:
    }
    return error;
  };

  const [profileDatas, setProfileDatas] = useState({
    fullname: '',
    gender: '',
    number: '',
    date: ''
  });

  const [errors, setErrors] = useState({
    fullname: '',
    gender: '',
    number: '',
    date: ''
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
        <span>Personal Information</span>
        <span style={{color:'green'}}>2 of 3</span>
      </div>
      <br />
      <div>
        <input className="input" placeholder="Full name" name="fullname" value={profileDatas.fullname} onChange={handleChange} />
        {errors.fullname && <p style={{color: 'red'}}>{errors.fullname}</p>}
      </div>
      <br />
      <div className="gender">
        <span>Gender:</span>
        <input type="radio" name="gender" value="Male" onChange={handleChange} />
        <label htmlFor="gender">Male</label>
        <input type="radio" name="gender" value="Female" onChange={handleChange} />
        <label htmlFor="gender">Female</label>
        {errors.gender && <p style={{color: 'red'}}>{errors.gender}</p>}
      </div>
      <h4 className='thephone'>The phone number and birthday are only visible to you</h4>
      <div className="numbers">
        <select className="option" name="number" onChange={handleChange}>
          <option value="050">050</option>
          <option value="051">051</option>
          <option value="055">055</option>
        </select>
        <input type="number" className='inputnumber' placeholder="Phone number" name="number" onChange={handleChange}/>
        {errors.number && <p style={{color: 'red'}}>{errors.number}</p>}
      </div>
      <input className="input" type="date" name="date" placeholder="Birthday" onChange={handleChange}/>
      {errors.date && <p style={{color: 'red'}}>{errors.date}</p>}
      <h4 className='lets'>The phone number and birthday are only visible to you</h4>
      <button className="submit" type="submit">Save Information</button>
    </form>
  );
}

export default App;
