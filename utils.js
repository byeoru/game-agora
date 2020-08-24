export const getNowSec = () => {
  let now = new Date();
  now /= 1000;
  now = Math.floor(now);
  return now;
};

export const getDayAgoNowSec = (minusDay) => {
  const oneDaySec = 86400;
  const previousSec = oneDaySec * minusDay;

  let today = new Date();

  today.setHours(0, 0, 0, 0);
  today /= 1000;

  const calculatedSec = today - previousSec;
  return calculatedSec;
};

export const unixTimeToDate = (unixTime) => {
  const Milliseconds = unixTime * 1000;
  const date = new Date(Milliseconds);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}년 ${month}월 ${day}일`;
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

export const getMonthAgoNow = (minusMonth) => {
  const nowDate = new Date();
  const nowYear = nowDate.getFullYear();
  const nowMonth = nowDate.getMonth() + 1;
  const nowDay = nowDate.getDate();

  const formatNowMonth = nowMonth < 10 ? `0${nowMonth}` : nowMonth;
  const formatNowDay = nowDay < 10 ? `0${nowDay}` : nowDay;

  if (nowMonth <= minusMonth) {
    const lastDay = new Date(
      nowYear - 1,
      12 + nowMonth - minusMonth,
      0
    ).getDate();
    const settingDay = nowDay > lastDay ? lastDay : nowDay;
    const formatSettingDay = settingDay < 10 ? `0${settingDay}` : settingDay;

    return `${nowYear - 1}-${
      month + 2 < minusMonth
        ? `0${12 + nowMonth - minusMonth}`
        : 12 + nowMonth - minusMonth
    }-${formatSettingDay},${nowYear}-${formatNowMonth}-${formatNowDay}`;
  }

  const lastDay = new Date(nowYear, nowMonth - minusMonth, 0).getDate();
  const settingDay = nowDay > lastDay ? lastDay : nowDay;
  const formatSettingDay = settingDay < 10 ? `0${settingDay}` : settingDay;

  return `${nowYear}-${
    nowMonth - minusMonth < 10
      ? `0${nowMonth - minusMonth}`
      : nowMonth - minusMonth
  }-${formatSettingDay},${nowYear}-${formatNowMonth}-${formatNowDay}`;
};

export const getMonthAgoAgo = (minusMonth, toMinusMonth) => {
  const nowDate = new Date();
  const nowYear = nowDate.getFullYear();
  const nowMonth = nowDate.getMonth() + 1;
  const nowDay = nowDate.getDate();

  let nMonthAgo, toNMonthAgo, lastDay, settingDay, formatSettingDay;

  if (nowMonth <= minusMonth) {
    lastDay = new Date(nowYear - 1, 12 + nowMonth - minusMonth, 0).getDate();
    settingDay = nowDay > lastDay ? lastDay : nowDay;
    formatSettingDay = settingDay < 10 ? `0${settingDay}` : settingDay;

    nMonthAgo = `${nowYear - 1}-${
      nowMonth + 2 < minusMonth
        ? `0${12 + nowMonth - minusMonth}`
        : 12 + nowMonth - minusMonth
    }-${formatSettingDay}`;
  } else {
    lastDay = new Date(nowYear, nowMonth - minusMonth, 0).getDate();
    settingDay = nowDay > lastDay ? lastDay : nowDay;
    formatSettingDay = settingDay < 10 ? `0${settingDay}` : settingDay;

    nMonthAgo = `${nowYear}-${
      nowMonth - minusMonth < 10
        ? `0${nowMonth - minusMonth}`
        : nowMonth - minusMonth
    }-${formatSettingDay}`;
  }
  if (nowMonth <= toMinusMonth) {
    lastDay = new Date(nowYear - 1, 12 + nowMonth - toMinusMonth, 0).getDate();
    settingDay = nowDay > lastDay ? lastDay : nowDay;
    formatSettingDay = settingDay < 10 ? `0${settingDay}` : settingDay;

    toNMonthAgo = `${nowYear - 1}-${
      nowMonth + 2 < toMinusMonth
        ? `0${12 + nowMonth - toMinusMonth}`
        : 12 + nowMonth - toMinusMonth
    }-${formatSettingDay}`;
  } else {
    lastDay = new Date(nowYear, nowMonth - toMinusMonth, 0).getDate();
    settingDay = nowDay > lastDay ? lastDay : nowDay;
    formatSettingDay = settingDay < 10 ? `0${settingDay}` : settingDay;

    toNMonthAgo = `${nowYear}-${
      nowMonth - toMinusMonth < 10
        ? `0${nowMonth - toMinusMonth}`
        : nowMonth - toMinusMonth
    }-${formatSettingDay}`;
  }

  return `${nMonthAgo},${toNMonthAgo}`;
};
