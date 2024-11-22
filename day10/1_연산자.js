// 개발자도구(F12) [console]탭 출력 함수, console.log()
// HTML에서 알림창으로 input[입력] 함수, prompt() --> 반환값은 문자열(String)

/*
    연산자: 연산할 때 사용되는 기호
        1. 산술연산자 : 숫자값으로 결과를 알려줌
            + (더하기), - (빼기), * (곱하기), / (나누기/몫), % (나누기/나머지), parseInt(); (소수점을 버리고 정수로 변환 함수)
        2. 연결연산자
            +
        3. 비교연산자 : true 또는 false로 결과를 알려줌
            > (크다), < (작다), >= (크거나같다), <= (작거나같다), == (값이 같다), != (값이 다르다), === (타입까지 확인), !== (타입까지 확인)
        4. 관계연산자
            && (AND연산자), || (OR연산자), ! (NOT연산자)
        5. (복합)대입연산자
            = (오른쪽 항의 값을 왼쪽 항에 대입)
            [복합 대입연산자]
            += (변수명 = 변수명 + 오른쪽 값), -= (변수명 = 변수명 - 오른쪽 값), /= (변수명 = 변수명 / 오른쪽 값), %= (변수명 = 변수명 % 오른쪽 값) 등등
        6. 증감연산자
            ++ (1증가), -- (1감소)
                변수명++ : 후위증가, ++변수명 : 선위증가
                변수명-- : 후위감소, --변수명 : 선위감소
            주의할점 : 선/후위 증가/감소 기준 명령어 하나의 단위 ;
                console.log(정수++); : 후위증가라서 출력 후 증가
                console.log(++정수); : 선위증가라서 출력 전 증가 후 출력
        7. 삼항연산자 : true
                1. 조건문 ? true : false               , let 점수 = 50, 점수 > 90 ? "합격" : "탈락"
                2. 조건문1 ? 참1 : 조건문2 ? 참2 : 거짓 , let 점수 = 50, 점수 > 90 ? "합격" : 점수 > 70 ? "재시험" : "탈락"

    ★ 타입변환이 필요한 이유
    문자열 타입 --> 숫자 타입으로 변환하는 방법
        1. 곱셈 연산을 이용한 방법
            "10" * 1; --> 숫자 10으로 반환
        2. Number(문자열); 객체
            Number("10") --> 숫자 10으로 반환
    숫자 타입 --> 문자열로 변환하는 방법
        1. 연결연산자를 이용한 방법
            10 + ""; --> "10"
        2. String(숫자); 객체
            String(10) --> "10"
*/

// [1] 산술연산자
// 더하기 연산자 --> 13
console.log(10 + 3);
// 빼기 연산자 --> 7
console.log(10 - 3);
// 곱하기 연산자 --> 30
console.log(10 * 3);
// 나누기(몫) 연산자 --> 3.333333335
console.log(10 / 3);
// 나누기(나머지) 연산자 --> 1
console.log(10 % 3);
// parseInt() --> 3
console.log(parseInt(10 / 3));
// 문자열과 연결
console.log(`점수 : ` + 10);
console.log("=====================");

// [2] 비교연산자
console.log(10 > 3);
console.log(10 >= 3);
console.log(10 < 3);
console.log(10 <= 3);
console.log(10 == 3);
console.log(10 != 3);
console.log(10 === "10");
console.log(10 !== "10");
console.log("=====================");

// [3] 관계연산자
// true and true --> true
console.log(10 > 3 && 20 > 10);
// true and false --> false
console.log(10 > 3 && 20 > 30);
// true and true --> true
console.log(10 > 3 || 20 > 10);
// true and false --> true
console.log(10 > 3 || 20 > 30);
// !true --> false
console.log(!(10 > 3));
console.log("=====================");

// [4] (복합대입)연산자
let 변수 = 10;
// 13
변수 += 3; console.log(변수);
// 10
변수 -= 3; console.log(변수);
// 20
변수 *= 2; console.log(변수);
console.log("=====================");

// [5] 증감연산자
let age = 40;
// 40
console.log(age++);
// 41
console.log(age);
// 42
console.log(++age);
// 42
console.log(age--);
// 41
console.log(age);
// 40
console.log(--age);
console.log("=====================");

// [6] 삼항연산자
let 점수 = 80;
let 결과1 = 점수 >= 80 ? "합격" : "불합격";
console.log(결과1);
점수 = 70;
let 결과2 = 점수 >= 80 ? "합격" : 점수 >= 60 ? "재시험" : "불합격";
console.log(결과2);
점수 = 50;
let 결과3 = 점수 >= 80 ? "합격" : 점수 >= 60 ? "재시험" : "불합격";
console.log(결과3);
console.log("=====================");


// 지문[1] prompt()함수로 국어, 영어, 수학 점수를 각 입력받아서 각 변수에 저장하고 총점과 평균을 계산하여 console탭에 출력하시오.
// let kor = Number(prompt("국어 점수"));
// let eng = Number(prompt("영어 점수"));
// let math = Number(prompt("수학 점수"));
// let total = kor + eng + math;
// let avg = total / 3;
// console.log(`총점 : ${total} / 평균 : ${avg}`);

// [지문2] prompt()함수로 반지름을 입력받아서 원넓이(반지름*반지름*3.14) 계산하여 console탭에 출력하시오.
// let radius = Number(prompt("반지름을 입력하세요 : "));
// console.log(radius * radius * 3.14);

// [지문3] prompt()함수로 두 실수를 입력받아서 앞 실수의 값이 뒤 실수의 값의 차지하는 비율% 계산하여 console탭에 출력하시오.
// let float1 = Number(prompt("실수1 : "));
// let float2 = Number(prompt("실수2 : "));
// console.log(`비율 : ${(float1 / float2) * 100}%`);


// [지문4] prompt 함수로 정수를 입력받아 입력받은 값이 홀수이면 true / 짝수이면 false 로 console탭에 출력하시오.
// let num1 = Number(prompt("정수를 입력하세요 : "));
// let result1 = num1 % 2 == 1;
// console.log(`[4] 결과 : ${result1}`);

// [지문5] prompt 함수로 정수를 입력받아 입력받은 값이 7의 배수이면 true / 아니면 false 로 console탭에 출력하시오.
// let num2 = Number(prompt("정수2를 입력하세요 : "));
// let result2 = num2 % 7 == 0;
// console.log(`[5] 결과 : ${result2}`);

// [지문6] prompt 함수로 아이디 와 비밀번호를 입력받아서 아이디가 'admin' 이고 비밀번호가 1234 와 일치하면 true / 아니면 false 출력하시오.
// let id = prompt("아이디 : ");
// let pw = prompt("비밀번호 : ");
// let idCheck = (id == "admin");
// let pwCheck = (pw == 1234);
// let result3 = (idCheck && pwCheck);
// console.log(`[6] 결과 : ${result3}`)

// [지문7] prompt 함수로 정수를 입력받아 입력받은 값이 홀수 이면서 7배수 이면 true / 아니면 false 로 console탭에 출력하시오.
// let num4 = Number(prompt("정수4 : "));
// let result4 = (num4 % 2 == 1) && (num4 % 7 == 0);
// console.log(`[7] 결과 : ${result4}`);

// [지문8] prompt 함수로 십만원 단위의 금액을 입력받아 입력받은 금액의 지폐수를 console탭에 출력하시오.
    // -> 입력 예] 356789 입력시 , 출력 예] 십만원:3장 만원:5장 천원6장
// let num5 = Number(prompt("금액 : "));
// let 십만원 = parseInt(num5 / 100000);
// let 만원 = parseInt((num5 - (십만원 * 100000)) / 10000);
// let 천원 = parseInt((num5 - (십만원 * 100000 + 만원 * 10000)) / 1000);
// console.log(`[8] 결과 : 십만원 : ${십만원}장, 만원 : ${만원}장, 천원 : ${천원}장`);

// [지문9] 1차점수와 2차점수 prompt함수로 각 입력받아서 총점이 150점이상이면 "합격" 아니면 :불합격" HTML의 h3에 표시하시오.
// let point1 = Number(prompt("1차 점수 : "));
// let point2 = Number(prompt("2차 점수 : "));
// let total = (point1 + point2 >= 150) ? "합격" : "불합격";
// console.log(`[9] 결과 : ${total}`);
// document.write(`<h3>[9] 결과 : ${total}</h3>`);

// [지문10] 두 사람의 이름을 prompt함수로 각 입력받아서
// 만일 이름이 "유재석"이면 뒤에 (방장)이라고 이름 뒤에 붙이고 아니면 생략한다.
//  ex) 유재석(방장), 강호동
//  HTML의 ol에 표시하시오.

let name1 = prompt("이름1 : ");
let name2 = prompt("이름2 : ");
document.write(
    `<ol>
        <li>${(name1) == "유재석" ? name1 + "(방장)" : name1}</li>  
        <li>${(name2) == "유재석" ? name2 + "(방장)" : name2}</li>  
    </ol>`
);