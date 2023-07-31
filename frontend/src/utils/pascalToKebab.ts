export const pascalToKebab = (str: string) => {
  let result = "";
  let firstUpperCaseMet = str[0] === str[0].toUpperCase();

  for (let i = 0; i < str.length; i++) {
    let chunk = str[i];

    if (chunk === chunk.toUpperCase()) {
      if (!firstUpperCaseMet) {
        firstUpperCaseMet = true;
      } else if (result.length) {
        chunk = "-" + chunk;
      }
    }

    result += chunk.toLowerCase();
  }

  return result;
};
