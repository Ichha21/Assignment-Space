import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="login-container">
      <main className="login-content">
        <form>
          <h1>Login</h1>
          <div className="input-box">
            <input id="input" type="text" required />
            <label htmlFor="input">Username</label>
          </div>
          <div className="input-box">
            <input id="password" type="password" required />
            <label htmlFor="password">Password</label>
          </div>
          <div className="input-box">
            <select id="dropdown" className="dropdown-arrow">
              <option value="option1">Select</option>
              <option value="option2">Student</option>
              <option value="option3">Teacher</option>
              <option value="option4">Admin</option>
            </select>
          </div>
          <button type="submit" className="btn">Login</button>
          <div className="register-link">
            Don't have an account? <a href="/signup">Sign Up</a>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Login;