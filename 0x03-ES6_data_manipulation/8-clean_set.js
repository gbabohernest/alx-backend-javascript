export default (set, startString) => {
  if (startString === undefined || startString.trim().length === 0) {
    return '';
  }

  const answerString = [];
  const arrayOfSetValues = [...set];

  if (startString) {
    arrayOfSetValues.forEach((element) => {
      if (element.startsWith(startString)) {
        const strLen = startString.length;
        const str = element.substring(strLen);
        answerString.push(str);
        // console.log(ans);
      }
    });
  }
  return answerString.join('-');
};
