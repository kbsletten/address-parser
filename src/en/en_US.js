import { AddressParser, number, word } from '../';
import { street, direction } from './en';
import state from './states';

export const culture = {
    culture: "en_US",
    tags: {
        "number": number,
        "word": word,
        "street": street,
        "direction": direction,
        "state": state,
    }
};
export const parser = new AddressParser(culture);