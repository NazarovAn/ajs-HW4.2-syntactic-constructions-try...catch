export default function parse(data) {
  const parsedData = parseInt(data, 10);
  try {
    if (Number.isNaN(parsedData)) {
      throw Error('parsedData is NaN');
    }
  } catch (e) {
    console.log(e.message, e.stack);
  }
  return parsedData;
}

parse('5223aaa');
parse('se123cs');
parse('123');
parse('aaaaa');
parse(' ');
parse('0x12');
parse('0xff');
parse('0b11111111');
parse('0o377');
