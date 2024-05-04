import React from "react";
import "./Question.css"; // Import your CSS file for styling
import UserHeader from "../components/UserHeader";

function Question() {

  return (
    <div className="form-container">
      <UserHeader/>
      <h4>Ask a question about your assignment or document</h4>
      <form className="question-form">
        <textarea
          className="question-input"
          placeholder="Write your question here..."
        ></textarea>
        <input type="file" className="file-input" />
        <div className="select-container">
          <select className="subject-select">
            <option value="">Select your subject</option>
            <option value="subject1">Human Computer Interaction</option>
            <option value="subject2">Distributive and Cloud System</option>
            <option value="subject3">Collaborative Development</option>
          </select>
          <div className="select-arrow">&#9660;</div> {/* Unicode for down arrow */}
        </div>
        <button className="submit-button">Ask your question</button>
      </form>
    </div>
  );
}

export default Question;