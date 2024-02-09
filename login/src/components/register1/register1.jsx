import './register1.css';
import { useState } from 'react';
import apple from '../../assets/apple.webp';
import facebook from '../../assets/facebook.svg';
import google from '../../assets/google.png';

function App() {
  const [profileDatas, setProfileDatas] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const validate = (name, value) => {
    let error = "";
    switch (name) {
      case "email":
        if (!(/^[a-zA-Z0-9._]+@[a-z]+\.[a-z]+$/.test(value))) {
          error = "Invalid Email Address!";
        }
        break;
      case "password":
        let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        if (value.length < 8) {
          error = "Password must be at least 8 characters long!";
        }
        break;
      default:
        break;
    }
    return error;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    const error = validate(name, value);
    setErrors({
      ...errors,
      [name]: error
    });
    setProfileDatas({
      ...profileDatas,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = profileDatas;

    if (email.trim() !== "" && password.trim() !== "" && errors.email === "" && errors.password === "") {
      console.log(profileDatas);
    } else {
      console.log("Form is invalid");
    }
  }

  return (
    <form className="container-1" onSubmit={handleSubmit}>
      <div className="sign">
        <div className='enter'>
          <h4 className='register'>Register</h4>
          <h4 className='login'>Log in</h4>
        </div>
        <h2 className='icon'>X</h2>
      </div>
      <hr />
      <div className="photos">
        <img className="photo" src={apple} alt="" />
        <img className="photo" src={facebook} alt="" />
        <img className="photo" src={google} alt="" />
      </div>
      <p>or register with email</p>
      <br />
      <div>
        <label htmlFor="email">Email</label>
        <br />
        <input className="input" placeholder="Enter your email" name="email" type="email" onChange={handleChange} />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>
      <br />
      <div>
        <label htmlFor="password">Password</label>
        <br />
        <input className="input" placeholder="Enter your password" name="password" type="password" onChange={handleChange} />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
      </div>
      <br />
      <button className="submit" type="submit">Create account</button>
      <br />
      <br />
      <div className="remember">
        <input className="checkbox"
          name="remember"
          type="checkbox"
        />
        <label htmlFor="remember">Send me news and promotions</label>
      </div>
      <div className="downtext" >
        <h4>By continuing I agree with the Terms & Conditions <br /> Privacy Policy</h4>
      </div>
    </form>
  );
}

export default App;
