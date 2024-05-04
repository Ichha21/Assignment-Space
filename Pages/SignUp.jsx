import React from 'react';
import './Signup.css';

function SignUp() {
  return (
    <div className="signup-container">
      <main className="signup-content">
        <form>
          <h4>Sign Up</h4>
          <div className="form_wrapper">
            <input id="firstname" type="text" required />
            <label htmlFor="firstname">First Name</label>
          </div>
          <div className="form_wrapper">
            <input id="lastname" type="text" required />
            <label htmlFor="lastname">Last Name</label>
          </div>
          <div className="form_wrapper">
            <input id="email" type="email" required />
            <label htmlFor="email">Email</label>
          </div>
          <div className="form_wrapper">
            <input id="password" type="password" required />
            <label htmlFor="password">Password</label>
          </div>
          <div className="form_wrapper">
            <input id="confirmPassword" type="password" required />
            <label htmlFor="confirmPassword">Confirm Password</label>
          </div>
          <div className="input-box">
            <select id="dropdown" className="dropdown-arrow">
              <option value="option1">Select</option>
              <option value="option2">Student</option>
              <option value="option3">Teacher</option>
              <option value="option4">Admin</option>
            </select>
          </div>
          <button type="submit">Register</button>
          <div className="existing_account">
            Already have an account? <a href="/login">Sign In</a>
          </div>
        </form>
      </main>
    </div>
  );
}

export default SignUp;