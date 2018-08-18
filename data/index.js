const fs = require("fs");
function parseStates(inFile, outFile) {
  fs.readFile(inFile, "utf-8", (err, buf) => {
    if (err) {
      console.log(err);
      return;
    }
    var states = buf.toString().split("\n");
    var result = [];
    for (const state of states) {
      const match = /^(\w+( \w+)*)\t(\w{2})$/.exec(state.trim());
      if (/\s/.test(match[1])) {
        result.push(
          `[${match[1]
            .split(/\s+/)
            .map(word => `/${word}/ui`)
            .join(", ")}]`
        );
      } else {
        result.push(`/${match[1]}/ui`);
      }
      result.push(`/${match[3]}/ui`);
    }

    fs.writeFile(
      outFile,
      `//THIS CODE WAS CREATED BY A TOOL, REGENERATE IT USING "npm run data"
export default [${result.join(", ")}];
`,
      "utf-8",
      err => {
        if (err) {
          console.log(err);
        }
      }
    );
  });
}
parseStates("data/en/US/states.txt", "src/en/states.js");
parseStates("data/en/CA/provinces.txt", "src/en/provinces.js");
