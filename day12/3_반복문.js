// [1] for 중첩
// for (let i = 1; i <= 3; i++) {
//     console.log(i);
//     for (let j = 1; j <= 5; j++) {
//         console.log(`---> ${j}`);
//     }
// }

// [2] 구구단 2~9단 만들기
// for (let i = 2; i <= 9; i++) {
//     for (let j = 1; j < 10; j++) {
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
// }

// [3] 별모양 출력
// 5 입력시 아래와 같이 5줄의 직각삼각형을 출력
/* 
    *
    **
    ***
    ****
    *****
*/
// let temp = "";
// let number = Number(prompt("숫자 입력 : "));
// for (let i = 1; i <= number; i++) {
//     for (let j = 1; j <= i; j++) {
//         temp = temp + "*";
//     }
//     temp = temp + "\n";
// }
// console.log(temp);