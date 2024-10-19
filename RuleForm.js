import React, { useState } from 'react';
import axios from 'axios';

const RuleForm = () => {
  const [rule, setRule] = useState(''); // State for the rule input
  const [message, setMessage] = useState(''); // State for feedback message

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    try {
      // Send a POST request to the backend
      const response = await axios.post('http://localhost:5000/api/rules/create_rule', { rule_string: rule });
      console.log('Rule created:', response.data); // Log the response
      setMessage('Rule created successfully!'); // Update the message
      setRule(''); // Clear the input field
    } catch (error) {
      console.error('Error creating rule:', error); // Log any errors
      setMessage('Error creating rule. Please try again.'); // Update the message on error
    }
  };

  return (
    <div>
      <h2>Create a Rule</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={rule}
          onChange={(e) => setRule(e.target.value)} // Update the state with input
          placeholder="Enter rule"
          required // Make the input required
        />
        <button type="submit">Create Rule</button>
      </form>
      {message && <p>{message}</p>} {/* Display feedback message */}
    </div>
  );
};

export default RuleForm;
