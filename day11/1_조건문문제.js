// 1. 3개의 점수를 각 입력받아 총점 계산 하여 총점이 90 이상이면 '성공' 아니면 '실패' 출력하시오.

// let score1 = Number(prompt("점수1 : "));
// let score2 = Number(prompt("점수2 : "));
// let score3 = Number(prompt("점수3 : "));
// let total = score1 + score2 + score3;

// if (total >= 90) {
//     console.log("성공");
// } else {
//     console.log("실패");
// }

// 2. 2개의 정수를 각 입력받아 더 큰수를 출력 하시오.

// let score1 = Number(prompt("정수1 : "));
// let score2 = Number(prompt("정수2 : "));

// if (score1 > score2) {
//     console.log(score1);
// } else {
//     console.log(score2);
// }

// 3. 3개의 정수를 각 입력받아 가장 큰수를 출력 하시오.

// let score1 = Number(prompt("정수1 : "));
// let score2 = Number(prompt("정수2 : "));
// let score3 = Number(prompt("정수3 : "));
// let max = score1;

// if (score2 > max) {
//     max = score2;
// }
// if (score3 > max) {
//     max = score3;
// }
// console.log(max);


// 4. 3개의 정수를 각 입력받아 오름차순 또는 내림차순 하여 정렬해서 출력하시오. 

// let number1 = Number(prompt("정수1 : ")); // 10
// let number2 = Number(prompt("정수2 : ")); // 20
// let number3 = Number(prompt("정수3 : ")); // 30
// let temp;
// if (number2 < number1) {
//     temp = number1;
//     number1 = number2;
//     number2 = temp;
// }
// if (number3 < number1) {
//     temp = number1;
//     number1 = number3;
//     number3 = temp;
// }
// if (number3 < number2) {
//     temp = number2;
//     number2 = number3;
//     number3 = temp;
// }
// console.log(`${number1} / ${number2} / ${number3}`);

// 5. 1개의 점수를 입력받아 90점 이상이면 'A등급' 80점이상이면 'B등급' 70점이상 'C등급' 그외 '재시험' 출력하시오.

// let score = Number(prompt("점수 : "));

// if (score >= 90) {
//     console.log("A등급");
// } else if (score >= 80) {
//     console.log("B등급");
// } else if (score >= 70) {
//     console.log("C등급");
// }else {
//     console.log("재시험");
// }

// 6. 아이디와 비밀번호 입력받아 아이디가 'admin' 이고 비밀번호가 '1234' 이면 '로그인 성공' 아니면 '로그인실패' 출력하시오.

// let id = prompt("아이디 : ");
// let pw = prompt("비밀번호 : ");

// if (id == "admin" && pw == "1234") {
//     console.log("로그인 성공");
// } else {
//     console.log("로그인 실패");
// }

// 7. 과일 배열 선언하고 let fruitList = [ '바나나' , '사과' ]
// 하나의 과일명을 입력받아 fruitList 에 존재하는 과일이면 '이미 존재하는 과일입니다' 출력 
// 아니면 배열에 입력받은 과일명 저장 하고 현재 배열을 출력하시오.

let fruitList = ["바나나", "사과"];
let fruitName = prompt("과일명 : ");

if (fruitList.indexOf(fruitName) > -1) {
    console.log("이미 존재하는 과일입니다.");
} else {
    fruitList.push(fruitName);
    console.log(fruitList);
}

// 8. 주민등록번호를 입력받아서 성별이 남자이면 색상변수에 'blue' 을 여자이면 'red' 을 대입 하고 색상변수 출력하시오.

// let number = prompt("주민등록번호 : ");
// let colors;
// if (number[0] == 1 || number[0] == 3) {
//     colors = "blue";
// } else if (number[0] == 2 || number[0] == 4) {
//     colors = "red";
// } else {
//     colors = "잘못된 주민등록번호입니다.";
// }
// console.log(colors);

// 9. 가위바위보 게임 
// 조건1 : 가위 0 , 바위 1 , 보 2 입니다.
// 조건2 : 플레이어 2 명 입니다.
// 실행조건 : 각 플레이어가 가위바위보 중에 한번씩 입력받기 
// 출력조건 : 
// 플레이어1 이겼을때 '플레이어1 승리' 출력 하시오.
// 플레이어2 이겼을때 '플레이어2 승리' 출력 하시오.
// 비겼을경우 '무승부' 출력 하시오.

// let player1 = Number(prompt("플레이어1 : "));
// let player2 = Number(prompt("플레이어2 : "));
// if (player1 == player2) {
//     console.log("무승부");
// } else if (player1 > player2) {
//     if (player1 == 2 && player2 == 0) {
//         console.log("플레이어2 승리");
//     } else {
//         console.log("플레이어1 승리");
//     }
// } else if (player1 < player2) {
//     if(player1 == 0 && player2 == 2) {
//         console.log("플레이어1 승리");
//     } else {
//         console.log("플레이어2 승리");
//     }
// }

// 10. 좌석 3개의 상태를 가지는 배열 선언하고 let sheetList = [ 'O' , 'X' , 'O' ]
//     하나의 좌석 순서번호를 입력받아 빈좌석 이면 '예약성공' 아니면 '예약불가' 출력하시오.
//     빈좌석 : 'X'  사용중인좌석 : 'O'

// let sheetList = ["O", "X", "O"];
// let sheetNumber = Number(prompt("좌석 선택(1~3) : "));

// if (sheetList)

// 11 : 주차장 차량 검색대
//     조건1 : let carArray = [ '250어7142' , '142가7415' ]  : 차량번호
//     조건2 : let locationArray = [ 'A1' , 'B3' ]           : 주차위치
//     조건3 : carArray, locationArray 인덱스가 같은 정보의 차량
//     조건4 : 차량번호 입력받아 내 차량 위치 찾기 