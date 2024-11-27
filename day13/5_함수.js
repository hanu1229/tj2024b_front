/*
    HTML 마크업 이벤트 함수 / onXXX 속성 함수 제공
        1. onclick : 지정한 마크업을 마우스 클릭을 했을때 js코드를 연결시킨다.
*/

// [1] func1 함수정의
function func1() {
    console.log("func1 execute");
}

// [2] 등록함수 함수 정의
let 이름명단 = []
function 등록함수() {
    // DOM객체(document) : HTML을 조작할 수 있는 객체
    // document.querySelector(".클래스명");
    // document.querySelector("#id명");
    // document.querySelector("마크업명");
    // document.querySelector(".클래스명 > #id명");
    // 1. html input마크업을 js로 가져오기
    let input = document.querySelector(".nameInput");
    // 2. input(객체)에서 입력된 value속성 호출하기
    let data = input.value;
    console.log(data);
    // 함수가 종료되면 입력받은 'data'는 사라진다
    // 3. 'data'변수의 값을 전역변수로 대입
    이름명단.push(data);
    출력함수();
}
// [3] 출력함수 함수 정의 : 배열의 변화가 있을때 화면(HTML)을 새로고침(출력) 하는 함수
function 출력함수() {
    let html = "";
    for(let index = 0; index <= 이름명단.length-1; index++) {
        console.log(이름명단[index]);
        html += `<div> ${이름명단[index]} </div>`
    }
    // inner : <시작마크업> inner </끝마크업> / 마크업 사이를 뜻함
    document.querySelector(".printBox").innerHTML = html;
    console.log("====================");
}