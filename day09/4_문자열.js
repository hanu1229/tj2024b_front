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

// [4] 문자열 연결, 문자열(`백틱)템플릿 --> 백틱 사이에 ${}을 작성하면 중괄호안에 js코드를 적을 수 있다.
// JS에서 HTML을 작성시 JS코드와 함쳐서 작성할 수 있다.
console.log('유재석' + '강호동');
console.log('유재석' + 40);
console.log('400' + '100');
let age = 40;
console.log("유재석" + age);
console.log(`유재석${age}`);
console.log(`평균 : ${100+50}`);

let 직원명1 = "유재석";
let 직원명2 = "강호동";
let nameHTML = `<ol> <li>${직원명1}</li> <li>${직원명2}</li> </ol>`;
document.write(nameHTML);

// 예1 : 입력받은 데이터를 HTML로 출력하시오
let result = prompt("이름을 입력하세요");
let inputHTML = `<h3>입력받은 데이터 : ${result}</h3>`;
document.write(inputHTML);

// 예2 : 2명의 사원이름을 입력받아서 HTML(table)형식으로 출력하시오.
/*

*/
let 직원이름 = [];
직원이름[0] = prompt("이름을 입력하세요");
직원이름[1] = prompt("이름을 입력하세요");
let tableHTML = `
                    <table> 
                        <tr> 
                            <th>번호</th> 
                            <th>이름</th>
                        </tr> 
                        <tr> 
                            <td>${직원이름.indexOf(직원이름[0])+1}</td> 
                            <td>${직원이름[0]}</td> 
                        </tr>
                        <tr> 
                            <td>${직원이름.indexOf(직원이름[1])+1}</td> 
                            <td>${직원이름[1]}</td> 
                        </tr> 
                    </table>
                    `;
document.write(tableHTML);