// const express = require('express');
// const router = express.Router();
// const Rule = require('../models/Rule');
// const { createRule, combineRules, evaluateRule } = require('../ast');

// // Create rule API
// router.post('/create_rule', (req, res) => {
//   const { rule_string } = req.body;
//   const AST = createRule(rule_string);
//   const newRule = new Rule({ rule_string, AST });

//   newRule.save()
//     .then((rule) => res.json(rule))
//     .catch((err) => res.status(400).json('Error: ' + err));
// });

// // Combine rules API
// router.post('/combine_rules', (req, res) => {
//   const { rules } = req.body;
//   const combinedAST = combineRules(rules);
//   res.json({ combinedAST });
// });

// // Evaluate rule API
// router.post('/evaluate_rule', (req, res) => {
//   const { AST, data } = req.body;
//   const result = evaluateRule(AST, data);
//   res.json({ result });
// });

// module.exports = router;



const express = require('express');
const router = express.Router();
const Rule = require('../models/Rule');
const { createRule, combineRules, evaluateRule } = require('../ast');

// Create rule API
router.post('/create_rule', (req, res) => {
  const { rule_string } = req.body;
  
  // Create the AST from the rule string
  const AST = createRule(rule_string);

  // Log the rule string and the generated AST to the terminal
  console.log('Received rule string:', rule_string);
  console.log('Generated AST:', AST);

  const newRule = new Rule({ rule_string, AST });

  newRule.save()
    .then((rule) => {
      console.log('Rule saved:', rule);  // Log the saved rule
      res.json(rule);
    })
    .catch((err) => {
      console.error('Error saving rule:', err); // Log any errors
      res.status(400).json('Error: ' + err);
    });
});

// Combine rules API
router.post('/combine_rules', (req, res) => {
  const { rules } = req.body;
  const combinedAST = combineRules(rules);
  
  // Log the combined AST
  console.log('Combined AST:', combinedAST);
  
  res.json({ combinedAST });
});

// Evaluate rule API
router.post('/evaluate_rule', (req, res) => {
  const { AST, data } = req.body;
  const result = evaluateRule(AST, data);
  
  // Log the evaluation result
  console.log('Evaluation result:', result);
  
  res.json({ result });
});

module.exports = router;
