const en_US = require("./en/US");

for (const test of en_US.cases) {
  const result = en_US.parser.parse(test.text);
  const errors = [];
  if (result.text !== test.text) {
    errors.push(`text: ${test.text} !== ${result.text}`);
  }
  console.log(`${errors.length ? "\u274C" : "\u2713"} ${test.text}`);
  for (const error of errors) {
    console.log(`   ${error}`);
  }
}
