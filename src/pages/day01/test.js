/* programmers : LV 0. 잘라서 배열로 저장하기 */
const Test01 = () => {
  //  my_str의 목데이터(문자열 배열) 만들기 1~100자
  const generateRandomString = (number) => {
    const string =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const totalLength = string.length;

    let result;

    for (let i = 0; i < number; i += number) {
      result += string.charAt(Math.floor(Math.random() * totalLength));
    }
    return result;
  };

  /*     
      let my_str = window.prompt("자르고 싶은 문자열을 입력해주세요.");
      let n = window.prompt("몇으로 분할하고 싶으신가요?"); 
  */

  // solution 함수는 my_str, n 을 매개변수로 받아 my_str을 n의 길이만큼 잘라 나뉜 배열을 반환
  const solution = (my_str, n) => {
    let result = [];

    for (let i = 0; i < my_str.length; i += n)
      result.push(my_str.slice(i, i + n));

    return result;
  };

  // test
  console.log(solution("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 4));

  // 다른 사람 풀이 :  정규표현식 사용

  function solution2(my_str, n) {
    return my_str.match(new RegExp(`.{1,${n}}`, "g"));
  }

  return (
    <>
      <h1>잘라서 배열로 저장하기</h1>
      <div></div>
    </>
  );
};
export default Test01;
