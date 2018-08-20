const en_US = require("../../../bin/en/en_US");

exports.parser = en_US.parser;
exports.cases = [
  {
    text: "3750 El Camino Real, Apt E4, Atascadero, CA 93422"
  },
  {
    text: "594 Lane 8 1/2 Powell WY 82435"
  },
  {
    text: "849 Road 6"
  },
  {
    text: "1055 Lane 11H Powell WY"
  }
];
