const en_US = require("../bin/en/en_US");

exports.parser = en_US.parser;
exports.cases = [
  {
    text: `4810 Nogales Ave.
Atascadero, CA 93422`,
    parts: ["4810", "Nogales", "Ave.", "\n", "Atascadero", ",", "CA", "93422"],
    tags: [
      ["number"],
      ["word"],
      ["word", "street"],
      ["line"],
      ["word"],
      ["comma"],
      ["word", "state"],
      ["number"]
    ]
  },
  {
    text: "3750 El Camino Real, Apt E4, Atascadero, CA 93422",
    parts: [
      "3750",
      "El",
      "Camino",
      "Real",
      ",",
      "Apt",
      "E4",
      ",",
      "Atascadero",
      ",",
      "CA",
      "93422"
    ],
    tags: [
      ["number"],
      ["word"],
      ["word"],
      ["word", "street"],
      ["comma"],
      ["word"],
      ["number", "word"],
      ["comma"],
      ["word"],
      ["comma"],
      ["word", "state"],
      ["number"]
    ]
  },
  {
    text: "594 Lane 8 1/2 Powell WY 82435",
    parts: ["594", "Lane", "8", "1/2", "Powell", "WY", "82435"],
    tags: [
      ["number"],
      ["word", "street"],
      ["number"],
      ["number"],
      ["word"],
      ["word", "street", "state"],
      ["number"]
    ]
  },
  {
    text: "849 Road 6",
    parts: ["849", "Road", "6"],
    tags: [["number"], ["word", "street"], ["number"]]
  },
  {
    text: "1055 Lane 11H Powell WY",
    parts: ["1055", "Lane", "11H", "Powell", "WY"],
    tags: [
      ["number"],
      ["word", "street"],
      ["number", "word"],
      ["word"],
      ["word", "street", "state"]
    ]
  }
];