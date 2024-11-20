console.log("[2]안녕 JS");

// 1. JS 출력 관련 기능/함수

// [1] console.log();
// 개발자도구(F12)의 [console]탭에 출력하는 함수
// ★개발자가 데이터 확인/유지보수/테스트를 위해서 자주 사용 배포시 삭제
console.log("[3]console함수 출력");

// [2] alert();
// 브라우저에 알림창과 내용을 출력하는 함수 (확인만 있음)
alert("[4]alert함수 출력");

// [3] document.write();
// 현재 HTML에 내용을 출력하는 함수
document.write("[5] document.write 함수 출력");

// [4] document.마크업명.innerHTML = "";
// 특정 마크업의 메시지를 출력하는 방법
document.body.innerHTML = "[6] document.body.innerHTML 속성/필드/멤버변수를 이용한 출력";

// 2. JS 입력 관련 기능/이벤트/함수

// [1] confirm();
// 브라우저에 알림 메시지 창과 내용을 출력 (확인(true)/취소(false)가 있음)
confirm("[7] 확인 메시지 창");

// [2] prompt();
// 브라우저에 메시지가 입력 가능한 알림 창
prompt("[8] 내용 입력 메시지 창")

// [3] document.querySelector("마크업명").innerHTML
// 마크업명에 있는 내용을 입력
let test = document.querySelector("body").innerHTML