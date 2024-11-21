/*
    [ 문자열 ]
        - 값을 " ", ' ', ` `로 감싸면 문자열이 된다.
        - 문자열은 의미가 없는 문자의 집합(단순 출력)
*/

// 유재석 is not defined
// console.log(유재석);

// [1] 문자열 처리
console.log("유재석1");
console.log('유재석2');
console.log(`유재석3`);
console.log("=============");

// [2] 기능이 있는 문자를 출력할 경우
console.log("'유재석'");
console.log("`유재석`");
console.log('"유재석"');
console.log('`유재석`');
console.log(`"유재석"`);
console.log(`'유재석'`);
console.log("=============");

// [3] 이스케이프(제어문자)
/*
    \n : 줄바꿈
    \" : " 출력
    \' : ' 출력
    \` : ` 출력
    \\ : \ 출력
    \t : TAB(들여쓰기)
*/
console.log("\"유재석\"");
console.log('\'유재석\'');
console.log(`\`유재석\``);
console.log("유재석\n강호동");
console.log("유재석\"강호동");
console.log("유재석\'강호동");
console.log("유재석\\강호동");
console.log("유재석\t강호동");
console.log("=============");