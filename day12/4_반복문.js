// [1] continue : 가장 가까운 for문의 증감식으로 코드흐름이 이동한다.
// continue 이후의 코드는 실행되지 않는다.
// for (let i = 1; i <= 5; i++) {
//     if (i == 3) {
//         continue;
//     }
//     console.log(i);
// }

// [2] break : 가장 가까운 반복문을 강제로 빠져나온다.
// for (let i = 1; i <= 10; i++) {
//     if ( i == 5) {
//         break;
//     }
//     console.log(i);
// }

// [3] 무한루프 : 종료되는 조건이 없어 계속적으로 반복되는 구조 (메모리 과부하 될 수 있음)
// for ( ; ; ) {
//     prompt("무한입력 : ");
// }

// [실습 1] 총 6개의 정수를 입력받아 하나의 배열에 저장하시오.
// 조건1 : 배열 내 중복된 값은 없어야 한다.
// 조건2 : 배열 내 개수가 6개가 되면 프로그램을 종료한다.
// let numbers = [];
// let count = false;
// for (let i = 0; i < 6; i++) {
//     numbers[i] = Number(prompt(`${i+1}번째 정수 입력 : `));
//     for (let j = 0; j < i; j++) {
//         if (numbers[j] == numbers[i]) {
//             count = true;
//             break;
//         }
//     }
//     if (count) {
//         count = false;
//         i--;
//     }
// }
// console.log(`[실습 1] 결과값 : ${numbers}`);

let numArray = [];
for ( ; ; ) {
    let num = Number(prompt(`${numArray.length}번째 수 입력 : `));
    if (numArray.indexOf(num) != -1) {
        alert("중복입니다.");
        continue;
    }
    numArray.push(num);
    if (numArray.length == 6) {
        break;
    }
}
console.log(`[실습 1] 결과값 : ${numArray}`);