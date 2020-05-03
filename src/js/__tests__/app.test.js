import parse from '../app';

describe('parseIntFunc', () => test.each([
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
