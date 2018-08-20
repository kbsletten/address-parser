export class AddressParser {
  constructor(culture) {
    this.culture = culture;
  }
  split(text) {
      const parts = [];
      let word = "";
      for (const ch of text) {
        if (/\s|,/iu.test(ch)) {
            if (word.length) {
                parts.push(word);
                word = "";
            }
            if (/\n|,/iu.test(ch)) {
                parts.push(ch);
            }
        } else {
            word += ch;
        }
      }
      if (word.length) {
          parts.push(word);
      }
      return parts;
  }
  match(parts, index, pattern) {
      if (pattern instanceof Array) {
          for (const step of pattern) {
              index = this.match(parts, index, step);
              if (index === -1) {
                  break;
              }
          }
      } else if (pattern instanceof RegExp) {
          index = pattern.test(parts[index]) ? index + 1 : -1;
      } else if (typeof pattern === "string") {
          index = pattern.localeCompare(parts[index], {sensitivity: 'base'}) === 0 ? index + 1 : -1;
      }
      return index;
  }
  tag(parts) {
      const tags = parts.map(() => []);
      for (let index = 0; index < parts.length; index++) {
        for (const tag of Object.keys(this.culture.tags)) {
            let match = -1;
            if (this.culture.tags[tag] instanceof Array) {
                for (const variant of this.culture.tags[tag]) {
                    match = this.match(parts, index, variant);
                    if (match !== -1) {
                        break;
                    }
                }
            } else {
                match = this.match(parts, index, this.culture.tags[tag]);
            }
            for (let mark = index; mark < match; mark++) {
                tags[mark].push(tag);
            }
        }
      }
      return tags;
  }
  parse(text) {
      const parts = this.split(text);
      const tags = this.tag(parts);
      return {
          text: text,
          parts: parts,
          tags: tags,
      };
  }
}
export const number = /\p{Nd}/ui;
export const word = /\p{L}/ui;