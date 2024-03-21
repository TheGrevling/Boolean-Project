import React, { useState, useContext } from 'react'
import './SignIn.css'
import { Link, useNavigate } from 'react-router-dom';
import { PostData, environment } from '../../../Services/FetchService';
import { DataContext } from '../../../App';


function SignIn() {
  const navigate = useNavigate()
  const dataContext = useContext(DataContext)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState(null); // State to hold error

  // Event handler to update form data when input fields change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    const errorOccurred = await PostData(environment + '/login', formData, dataContext.updateUserAndSetToken);
    if (!errorOccurred) {
      navigate("/");
    }
  };


  return (
    <div className='page'>
      <div className='signin-view'>
        <div className='signin-container-top'>
          <div>Sign In</div>
        </div>
        <div className='signin-container'>
          <form onSubmit={handleSubmit} className='signin-form'>
            <div className='form-field'>
              <label htmlFor="email">Email:</label>
              <input
                className='custom-input'
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

            </div>
            <div className='form-field'>
              <label htmlFor="password">Password:</label>
              <input
                className='custom-input'
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className='button-submit'>Submit</button>
          </form>

          <Link to="/sign-up">
            Create a new account
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignIn