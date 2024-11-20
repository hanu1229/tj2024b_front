/*
    JS의 데이터 기본 타입
    1. 문자열(String) : " " or ' ' or ` `
        10 과 "10"은 다른 타입 10(Number) "10"(String)
    2. 숫자(Number)
        10, 7, 3.14
    3. 불리언(Boolean)
        true 또는 false

    JS의 변수
        - 변수 : 변하는 수 VS 상수 : 고정된 수
        1. 하나의 자료/데이터를 저장할 수 있는 메모리 공간
        2. let 변수명 = 값; / const 상수명 = 값;
        3. 메모리 공간에 상징적인 이름이 필요함 --> 변수명

    리터럴 : 데이터/자료 그 자체를 뜻함, 각 언어들이 미리 정의해두고 동일한 데이터/자료를 참조해 사용하는 방법
            메모리 효율성 극대화를 하기 위해 사용
*/

10;
"안녕하세요";
"안녕";
true;

let 숫자상자 = 10;
let 문자열상자 = "안녕하세요";
let 불리언상자 = true;

// [1] 변수를 선언하는 방법

// let : 변수를 선언시 사용되는 키워드(미리 의미가 부여된 단어)
// 변수명 : 자료/데이터를 저장하는 메모리의 상징적인 이름
// 변수명 규칙 : 중복X, 숫자로 시작, 띄어쓰기
// = : 오른쪽의 값(항)을 왼쪽으로 대입(삽입) 연산자
let 변수상자1 = 10;

// [2] 변수를 사용하는 이유 : 값 저장, 값 재사용
변수상자1 = 20 + 10; // 20 + 10 했을때 새로운 리터럴 30 대입한다.

// [3] 변수의 값 변경하기
변수상자1 = "유재석";

// [4] 변수의 연산
let 정수1 = 10;
let 정수2 = 20;
let 결과 = 점수1 + 점수2;
// 명령어 처리 순서
// 1. = 대입 기준으로 오른쪽 먼저 처리, 점수1 + 점수2
// 2. "점수1" 변수가 가진 값을 호출/반환 10 + 점수2
// 3. "점수2" 변수가 가진 값을 호출/반환 10 + 20
// 4. 연산 30,
// 5. 변수의 메모리 공간 호출, let 결과 = 30
// 6. 대입 연산자, 결과(30)

// [5] 변수의 값이 대입되지 않을때
let 이름;
console.log(이름) // undefined타입, 변수의 값을 초기화가 안됨

// [6] 상수 만들기
// 1. const : 상수 만들기 위한 키워드
// 2. 상수명
// 3. = 
// 4. 리터럴(값)
const 고정상자 = "안녕하세요"

// [7] 상수는 수정이 불가능
// const 고정상자 = 10; --> 안됨