import React, { useContext, useState } from 'react'
import '../SignIn/SignIn.css'
import { Link, useNavigate } from 'react-router-dom';
import { PostData, environment } from '../../../Services/FetchService';
import { DataContext } from '../../../App';


function SignUp() {
  const navigate = useNavigate()
  const dataContext = useContext(DataContext)
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    role: 'User'
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform form submission logic here, such as sending data to an API
    console.log('Form submitted:', formData);
    await PostData(environment + '/register', formData, dataContext.updateUserAndSetToken)
    navigate("/")
  };

  return (
    <div className='page'>
      <div className='signin-view'>
        <div className='signin-container'>
          <div>Sign Up</div>
          <form onSubmit={handleSubmit}>
            <div className='form-field'>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-field'>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
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

          <Link to="/sign-in">
            Login to existing account
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp