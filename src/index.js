export class AddressParser {
  constructor(culture) {
    this.culture = culture;
  }
  split(text) {
      return text.split(/\b/);
  }
  parse(text) {
      var parts = this.split(text);
      return {
          text: text,
      };
  }
}
export const number = /\p{Nd}/ui;
export const word = /\p{L}/ui;