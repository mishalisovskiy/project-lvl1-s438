export const getNumber = (min, max = 0) => Math.floor((Math.random() * max) + min);
export const yesOrNo = (predicateFunction, value) => (predicateFunction(value) ? 'yes' : 'no');
