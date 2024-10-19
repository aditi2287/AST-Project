// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import Link for navigation
import RuleForm from './components/RuleForm'; 
import EvaluateForm from './components/EvaluateForm';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Welcome to the Rule Engine</h1>
        <h2>To create a rule, click on the link below:</h2>
        <Link to="http://localhost:3000/create-rule">Go to Create Rule</Link> {/* Link to the create-rule page */}
        <hr />
        <Routes>
          <Route path="/create-rule" element={<RuleForm />} />
          <Route path="/evaluate-rule" element={<EvaluateForm />} />
          {/* <Route path="/" element={<h1>Welcome to the Rule Engine</h1>} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;


