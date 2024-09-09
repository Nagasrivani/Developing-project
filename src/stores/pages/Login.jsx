import React, { useState } from 'react';
import './Login.css';

const Login = ({ setUser }) => {
  const [action, setAction] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle sign-up action
  const handleSignUp = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some(user => user.email === email);

    if (userExists) {
      alert("User already exists. Please log in.");
      setAction("Login");
    } else {
      const newUser = { name, email, password };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      alert("Sign-up successful!");
      setUser(newUser);
      resetForm();
    }
  };

  // Handle login action
  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
      alert(`Welcome back, ${user.name}!`);
      setUser(user);
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
