import React, { useState } from 'react';
import axios from 'axios';

const EvaluateForm = () => {
  const [data, setData] = useState({ age: 30, salary: 60000 });

  const handleEvaluate = async (e) => {
    e.preventDefault();
    // Fetch the AST and evaluate the data
  };

  return (
    <form onSubmit={handleEvaluate}>
      <input
        type="number"
        value={data.age}
        onChange={(e) => setData({ ...data, age: e.target.value })}
        placeholder="Age"
      />
      <input
        type="number"
        value={data.salary}
        onChange={(e) => setData({ ...data, salary: e.target.value })}
        placeholder="Salary"
      />
      <button type="submit">Evaluate Rule</button>
    </form>
  );
};

export default EvaluateForm;
