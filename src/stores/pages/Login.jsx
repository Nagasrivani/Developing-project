import React, { useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import './Login.css';

const Login = ({ setUser }) => {
  const [action, setAction] = useState("Login"); // a state variable to determine whether the user is performing a Login or Sign Up action. Initialized to Login
  const [name, setName] = useState("");//to store name entered by user. Initialized to an empty string ""
  const [email, setEmail] = useState("");//state for user's email
  const [password, setPassword] = useState("");//state for user's password

  const navigate = useNavigate();//hook to navigate between routes
  const location = useLocation();//hook to access the current location

  //extract the 'from' path from location state
  //determine the previous path to redirect to after login
  const from = location.state?.from || "/";//default to home if no 'from' path
  const product = location.state?.product; //get product from state if it exit
  // Handle sign-up action
  const handleSignUp = () => {
    //localStorage = allows u to store data locally in the browser
    //JSON.parse = converts the JSON string stored in localStorage back into a JS object/array
    //if there are no users, it initializes users as an empty array ( || [])
    const users = JSON.parse(localStorage.getItem("users")) || [];

    //checks if a user with the entered email already exists using the some array method
    const userExists = users.some(user => user.email === email);

    if (userExists) {
      alert("User already exists. Please log in.");
      setAction("Login");//switch to login action
    } else {
        //creates a new user object
      const newUser = { name, email, password };
      users.push(newUser); // adds the newUser to the users array
      localStorage.setItem("users", JSON.stringify(users)); //saves the updated user list to localStorage 
      alert("Sign-up successful!");
      setUser(newUser);//update the user state in the parent component
      localStorage.setItem('loggedInUser', JSON.stringify(newUser));//save user in localStorage
      //resetForm(); //resets the form fields by calling resetForm()
      navigate(from, {replace : true}); //redirect back to the previous page
    }
  };

  // Handle login action
  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    //searches for a user with the matching email and password using the find method
    const user = users.find(user => user.email === email && user.password === password);

    //if a matching user is found
    if (user) {
      alert(`Welcome back, ${user.name}!`);
      setUser(user);//update the user state
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      const redirectPath = localStorage.getItem('redirectPath');
      localStorage.removeItem('redirectPath');
      navigate(redirectPath || from, { replace: true });
      //navigate(from, {replace : true}); //redirect back to the previous page
      resetForm();
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  // Submit handler based on action
  const handleSubmit = () => {
    if (action === 'Login') {
      handleLogin();
    } else {
      handleSignUp();
    }
  };

  // Reset form fields
  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        {action === 'Sign Up' && (
          <div className='input'>
            <img src='/assets/person.png' alt='Name Icon' />
            <input
              type='text'
              placeholder='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        )}

        <div className='input'>
          <img src='/assets/email.png' alt='Email Icon' />
          <input
            type='email'
            placeholder='Email Id'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='input'>
          <img src='/assets/password.png' alt='Password Icon' />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      {action === 'Login' && (
        <div className="forgot-password">Lost Password?<span> Click Here</span></div>
      )}

      <div className="submit-container">
        <div
          className={`submit ${action === 'Login' ? 'gray' : ''}`}
          onClick={() => setAction('Sign Up')}
        >
          Sign-Up
        </div>
        <div
          className={`submit ${action === 'Sign Up' ? 'gray' : ''}`}
          onClick={() => setAction('Login')}
        >
          Login
        </div>
        <button onClick={handleSubmit}>{action}</button>
      </div>
    </div>
  );
};

export default Login;
