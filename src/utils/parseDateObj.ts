const parseDay = (day: number) => {
  switch (day) {
    case 0:
      return "(일)";
    case 1:
      return "(월)";
    case 2:
      return "(화)";
    case 3:
      return "(수)";
    case 4:
      return "(목)";
    case 5:
      return "(금)";
    case 6:
      return "(토)";
  }
};

export const parseDateObj = (now: Date) => {
  const year = now.getFullYear();
  const month = now.getMonth();
  const date = now.getDate();
  const day = parseDay(now.getDay());

  const hour = now.getHours();
  const minutes = now.getMinutes();

  return `${year}년 ${month + 1}월 ${date}일${day} ${hour}시 ${minutes}분`;
};
