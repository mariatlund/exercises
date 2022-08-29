const baseName = "peter";

const thirdLetter = baseName.substring(2, 3);
const thirdLetterCap = thirdLetter.toUpperCase();
const firstSlice = baseName.slice(0, 2);
const secondSlice = baseName.slice(3);

const endResult = `${firstSlice}${thirdLetterCap}${secondSlice}`;

console.log(endResult);
