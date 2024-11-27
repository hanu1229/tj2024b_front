/*
    학생들의 점수를 출력하는 것을 구현
    1. 학생이름배열
        let nameArray = ["유재석", "강호동", "신동엽"];
    2. 학생점수배열 
        let score = [92, 86, 72]
    3. 아래와 같이 출력, 100점 만점이라고 했을때 점수를 ●표기 나머지 점수 ○로 표기
        이름    점수 시각화
        유재석  ●●●●●●●●○○
        강호동  ●●●●○○○○○○
        신동엽  ●●●●●●○○○○
*/

let nameArray = ["유재석", "강호동", "신동엽"];
let score = [92, 86, 72];
innerHTML = "<h1>[ 문제 ]</h1><table><tr><th>이름</th><th>점수 시각화</th></tr>";

for (let i = 0; i < nameArray.length; i++) {
    let temp = "";
    for (let j = 0; j < 100; j++) {
        if (j < score[i]) {
            temp += "●";
        } else {
            temp += "○";
        }
    }
    innerHTML += `<tr><td>${nameArray[i]}</td><td>${temp}</td></tr>`;
}
innerHTML += "</table>";
document.write(innerHTML);