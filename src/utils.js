export const getNumber = (min, max = 0) => Math.floor((Math.random() * max) + min);

export const buildYesOrNoFunc = (predicateFunc, min, max) => {
  const question = `${getNumber(min, max)}`;
  const answer = predicateFunc(question) ? 'yes' : 'no';
  return { question, answer };
}
