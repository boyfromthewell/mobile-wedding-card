import { useEffect, useState } from "react";
import { getDate } from "../utils/getDate";

const useCountdown = (targetDate: Date) => {
  const countDate = new Date(targetDate).getTime();

  const [calDate, setCalDate] = useState(countDate - new Date().getTime());

  useEffect(() => {
    setInterval(() => {
      setCalDate(countDate - new Date().getTime());
    }, 1000);
  }, [countDate]);

  return getDate(calDate);
};

export default useCountdown;
