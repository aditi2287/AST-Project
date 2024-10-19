// const mongoose = require('mongoose');

// const ruleSchema = new mongoose.Schema({
//   rule_string: { type: String, required: true },
//   AST: { type: Object, required: true }
// });

// module.exports = mongoose.model('Rule', ruleSchema);


const mongoose = require('mongoose');

const RuleSchema = new mongoose.Schema({
    rule_string: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Rule', RuleSchema);
