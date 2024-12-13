// 등록함수 / 실행조건 : [등록]버튼 클릭시
function writePosting() {
    let temp = "";

    // #region 날짜 구현
    let nowDate = new Date();
    let nowYear = nowDate.getFullYear();
    let nowMonth = nowDate.getMonth()+1 < 10 ? "0" + nowDate.getMonth()+1 : nowDate.getMonth()+1;
    let nowDay = nowDate.getDate();
    let date = `${nowYear}-${nowMonth}-${nowDay}`;
    // #endregion 날짜 구현

    let view = 0;

    // #region 값 가져오기
    let title = document.querySelector("#write_title");
    let content = document.querySelector("#write_content");
    let pw = document.querySelector("#write_pw");
    // #endregion 값 가져오기

    // #region 값 저장하기
    // temp = `${title.value},${content.value},${pw.value},${date},${view}`;
    // postingList.push(temp);
    // console.log(postingList);
    // localStorage 값 불러오기
    let boardList = getBoardList();
    // 게시물 식별코드
    let code = boardList.length != 0 ? boardList[boardList.length-1].code+1 : 1;
    let board = {
        code : code,
        title : title.value,
        content : content.value,
        password : pw.value,
        date : date,
        view : view
    }
    boardList.push(board);
    // localStorage 값 저장하기
    setBoardList(boardList);
    alert("게시물 등록 성공!!!");
    // #endregion 값 저장하기

    // 4. js에서 <a>마크업과 동일한 기능, JS에서 페이진 전환 함수
    location.href = "board.html";

    // #region 가져온 값 비우기
    title.value = "";
    content.value = "";
    pw.value = "";
    // #endregion 가져온 값 비우기
}