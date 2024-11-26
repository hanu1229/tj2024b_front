/*
    반복문과 배열 관계
        - 배열의 인덱스는 순차적인 순서가 존재한다.
            배열    : 여러개의 데이터(값)들을 순서대로 나열한 자료의 타입
            인덱스  : 배열내 데이터(값)이 저장된 순서의 번호

        - 0 부터 마지막 인덱스까지 1씩 증가
        - 배열명.length;     --> 배열의 길이를 구하는 방법
        - 배열명.length - 1; --> 마지막 인덱스를 구하는 방법
        - 배열 순회 : 배열내 모든 데이터(값)을 하나씩 호출 하는 작업
            for (let index = 0; index < 배열명.length; index++) {
                console.log(배열명[index]);
            }
*/

// [1] 배열의 데이터
// let fruits = ["사과", "포도", "딸기"];
// for (let i = 0; i < fruits.length; i++) {
//     console.log(`fruits[${i}] : ${fruits[i]}`);
// }

// [2] 3개의 점수를 입력받아 점수배열에 모두 저장하시오.
// let scoreArray = [];
// for (let i = 0; i < 3; i++) {
//     let score = Number(prompt(`점수${i+1}를 입력 : `));
//     scoreArray[i] = score;
//     // scoreArray.push(score);
//     console.log(scoreArray);
// }
// console.log(`[2] 결과값 : ${scoreArray}`);

// [3] 배열에 저장된 모든 점수들을 <li> 마크업에 출력하시오.
let scoreArray = [];
let innerHTML = "<h1>[3] 결과값</h1><ol>";
for (let i = 0; i < 3; i++) {
    let score = Number(prompt(`점수${i+1}를 입력 : `));
    scoreArray[i] = score;
    // scoreArray.push(score);
    console.log(scoreArray);
    innerHTML = innerHTML + `<li>${scoreArray[i]}</li>`;
}
innerHTML = innerHTML + "</ol>";
document.write(innerHTML);
console.log(`[2] 결과값 : ${scoreArray}`);

// innerHTML = "<h1>[3] 결과값</h1><ol>";
// for (let i = 0; i < scoreArray.length; i++) {
//     innerHTML = innerHTML + `<li>${scoreArray[i]}</li>`;
// }
// innerHTML = innerHTML + "</ol>";
// document.write(innerHTML);
