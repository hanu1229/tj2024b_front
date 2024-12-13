/* localStorage에 배열정보 불러오기 함수 */

// localStorage 불러오기
function getBoardList() {
    // 1. localStorage에 배열의 정보를 요청, key값을 보내야함
    let boardList = localStorage.getItem("boardList");
    if(boardList == null) {
        // 2-1. localStorage가 비여있으면 빈 배열을 대입
        boardList = [];
    } else {
        // 2-2. localStorage가 비여있지 않으면 JSON객체로 반환
        boardList = JSON.parse(boardList);
    }
    return boardList;
}

// localStorage 저장하기
function setBoardList(boardList) {
    localStorage.setItem("boardList", JSON.stringify(boardList));
}

// localStorage에서 특정한 게시물 정보를 불러오기
function getBoard(code) {
    // code : 조회할 게시물 번호를 매개변수로 받음
    let boardList = getBoardList();
    for(let index = 0; index < boardList.length; index++) {
        if(boardList[index].code == code ){
            // 찾은 게시물 반환
            return boardList[index];
        }
    }
    // 조회한 게시물이 없을 경우 null 반환
    return null;
}

// localStorage에서 특정한 게시물 1개를 삭제하기
function deleteBoard(code) {
    let boardList = getBoardList();
    let deleteIndex = -1;
    for(let index = 0; index < boardList.length; index++) {
        if(boardList[index].code == code) {
            deleteIndex = index;
            break;
        }
    }
    boardList.splice(deleteIndex, 1);
    setBoardList(boardList);
}