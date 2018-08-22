const en_US = require("./en_US");

let errorCode = 0;
for (const suite of [en_US]) {
  for (const test of suite.cases) {
    const result = suite.parser.parse(test.text);
    const errors = [];
    if (result.text !== test.text) {
      errors.push(
        `text: ${JSON.stringify(test.text)} !== ${JSON.stringify(result.text)}`
      );
    }
    if (
      result.parts.length !== test.parts.length ||
      result.parts.some((expected, index) => expected !== test.parts[index])
    ) {
      errors.push(
        `parts: ${JSON.stringify(test.parts)} !== ${JSON.stringify(
          result.parts
        )}`
      );
    }
    if (
      result.tags.length !== test.tags.length ||
      result.tags.some(
        (expected, index) =>
          expected.length !== test.tags[index].length ||
          expected.some(tag => !test.tags[index].includes(tag))
      )
    ) {
      errors.push(
        `tags: ${JSON.stringify(test.tags)} !== ${JSON.stringify(result.tags)}`
      );
    }
    console.log(`${errors.length ? "\u274C" : "\u2713"} ${test.text}`);
    for (const error of errors) {
      errorCode++;
      console.log(`   ${error}`);
    }
  }
}
process.exit(errorCode);
