// 금액 ,
export const formatNumber = (number: number) => {
  const formattedNumber = number.toFixed(0);
  return formattedNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

// 날짜 반환하는 함수 "2024-01-10" => "24.01.01"
export const formatDate = (dateString: string) => {
  const dateObject = new Date(dateString);
  const year = dateObject.getFullYear();
  const month = `0${dateObject.getMonth() + 1}`.slice(-2);
  const day = `0${dateObject.getDate()}`.slice(-2);
  return `${year}.${month}.${day}`;
};
