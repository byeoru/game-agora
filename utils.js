export const getYMDAgoNow = (minusDay) => {
  const oneDaySec = 86400000;
  const SecToBeSubtracted = oneDaySec * minusDay;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const nowYear = today.getFullYear();
  const nowMonth = today.getMonth() + 1;
  const nowDay = today.getDate();

  const calculatedDate = new Date(today - SecToBeSubtracted);

  const calculatedYear = calculatedDate.getFullYear();
  const calculatedMonth = calculatedDate.getMonth() + 1;
  const calculatedDay = calculatedDate.getDate();

  return `${calculatedYear}-${
    calculatedMonth < 10 ? `0${calculatedMonth}` : calculatedMonth
  }-${calculatedDay < 10 ? `0${calculatedDay}` : calculatedDay},${nowYear}-${
    nowMonth < 10 ? `0${nowMonth}` : nowMonth
  }-${nowDay < 10 ? `0${nowDay}` : nowDay}`;
};

export const getThisMonth = () => {
  const nowDate = new Date();
  const nowYear = nowDate.getFullYear();
  const nowMonth = nowDate.getMonth() + 1;
  const nowDay = nowDate.getDate();
  const formatMonth = nowMonth < 10 ? `0${nowMonth}` : nowMonth;
  const formatDay = nowDay < 10 ? `0${nowDay}` : nowDay;

  return `${nowYear}-${formatMonth}-01,${nowYear}-${formatMonth}-${formatDay}`;
};

export const getAfterTheFourthTheRest = (array) => {
  const [, , , , ...theRest] = array;
  return theRest;
};

export const trimText = (text, limit) =>
  text.length > limit ? `${text.slice(0, limit)}...` : text;
