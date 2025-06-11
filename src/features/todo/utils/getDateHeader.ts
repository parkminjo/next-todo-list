/**
 * getDateHeader
 * Date 객체에서 연도, 월, 일만 출력하는 함수
 * @param {Date} date Date 객체
 * @returns 요일 월 일 연도 ex) Mon Jun 09 2025
 */
export const getDateHeader = (date: Date) => {
  const dateHeader = new Date(date).toString().slice(0, 15);

  return dateHeader;
};
