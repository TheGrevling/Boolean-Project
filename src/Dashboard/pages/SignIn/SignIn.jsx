import React, { useState } from 'react'
import './SignIn.css'
import { Link } from 'react-router-dom';
import { PostData, environment } from '../../../Services/FetchService';
import { DataContext } from '../../../App';


function SignIn() {
  const dataContext = useContext(DataContext)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // Event handler to update form data when input fields change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Event handler to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here, such as sending data to an API

    PostData(environment+"/login", formData, dataContext.updateUserAndSetToken)
    console.log('Form submitted:', formData);
  };

  return (
    <div className='page'>
      <div className='signin-view'>
        <div className='signin-container'>
          <div>Sign In</div>
          <form onSubmit={handleSubmit}>
            <div className='form-field'>
              <label htmlFor="email">Email:</label>
              <input
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
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Submit</button>
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