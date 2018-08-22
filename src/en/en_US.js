import { AddressParser, Template, number, word } from "../";
import { street, direction } from "./en";
import state from "./states";

export const culture = {
  culture: "en_US",
  tags: {
    number: number,
    word: word,
    street: street,
    direction: direction,
    state: state,
    comma: ",",
    line: "\n",
    postalCode: /\d{5}(-\d{4})?/iu
  },
  patterns: [
    new Template(
      "number direction?:street word*:street number?:street street direction?:street number*:street comma? word+:city comma? state comma? postalCode"
    )
  ]
};
export const parser = new AddressParser(culture);
