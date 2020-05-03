export default function parse(data) {
  const parsedData = parseInt(data, 0);
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
