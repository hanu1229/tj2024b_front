viewPosting();
// 출력함수 / 실행조건 : js열렸을때 최초1번 실행, 등록/삭제/수정처리 성공시 실행
function viewPosting() {
    let boardList = getBoardList();
    let innerHTML = "";
    let tbody = document.querySelector("#content > table > tbody");
    for(let index = 0; index < boardList.length; index++) {
        let board = boardList[index];
        innerHTML += `<tr>
            <td style = "text-align : center;">${board.date}</td>
            <td style = "text-align : center;"><a href = "./view.html?code=${board.code}" style = "text-decoration : none; color : black;">${board.title}</a></td>
            <td style = "text-align : center;">${board.view}</td>
        </tr>`;
    }
    tbody.innerHTML = innerHTML;
    // console.log(innerHTML);
}