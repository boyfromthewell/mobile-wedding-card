export const getDate = (countDown: number) => {
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  const isOverDay = days < 0;

  return {
    days: Math.abs(days),
    hours: Math.abs(hours),
    minutes: Math.abs(minutes),
    seconds: Math.abs(seconds),
    isOverDay,
  };
};
