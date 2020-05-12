import parse from '../parse';

describe('Decimal numbers', () => test.each([
  ['500', '500', 500],
  ['500A', '500A', 500],
  ['A500', 'A500', NaN],
  ['empty', ' ', NaN],
  ['text', 'abc', NaN],
])(
  ('input %s'),
  (level, amount, expected) => {
    expect(parse(amount)).toBe(expected);
  },
));

describe('Non decimal numbers', () => test.each([
  ['0xff', '0xff', 0],
  ['0b11111111', '0b11111111', 0],
  ['0o377', '0o377', 0],
])(
  ('input %s'),
  (level, amount, expected) => {
    expect(parse(amount)).toBe(expected);
  },
));
