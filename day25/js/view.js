/* 
    new URL(주소) : 지정한 주소의 정보를 JS객체로 가져오기
    location.href : 현재 JS가 위치란 URL정보 객체를 가져오기(주소 부분에 작성)
    new URL(주소).searchParams : URL상의 쿼리스트림 정보를 반환한다.
    new URL(주소).searchParams.get("매개변수명") : 쿼리스트링에서 매개변수와 일치한 값을 반환한다.
*/
// 페이지 로드시 실행
detail();
// 상세페이지 출력 함수
function detail() {
    // 매개변수로 받던 식별자를 URL로 받는다.
    // URL 경로의 ?뒤 값들을 가져오기
    console.log(new URL(location.href));
    console.log(new URL(location.href).searchParams);
    console.log(new URL(location.href).searchParams.get("code"));
    // 1. 조회할 게시물 번호
    let code = new URL(location.href).searchParams.get("code");
    // 2. 게시물번호(식별자)를 가지고 해당 게시물의 모든 정보 가져오기
    let board = getBoard(code);
    let title = document.querySelector("#detail_title");
    let content = document.querySelector("#detail_content");
    let date = document.querySelector("#detail_date");
    let view = document.querySelector("#detail_view");
    let btn = document.querySelector("#detail_button");
    title.innerHTML = board.title;
    content.innerHTML = board.content;
    date.innerHTML = board.date;
    view.innerHTML = Number(board.view)+1;
    btn.innerHTML = `
                <button type = "button" onclick = "deletePosting(${board.code})">삭제</button>
                <button type = "button" onclick = "updatePosting(${board.code})">수정</button>`;
    board.view = Number(board.view)+1;
}

// 삭제함수 / 실행조건 : [삭제]버튼 클릭시
function deletePosting(code) {
    deleteBoard(code);
    alert("게시물이 삭제되었습니다.");
    location.href = "board.html";
    console.log(postingList);
}