/* 
    실습 : 비회원제 게시판 구현하기
        [요구사항] Create Read Update Delete
        1. 게시물 등록 : 비회원제이므로 제목, 내용, 비밀번호 입력 받아 등록 처리
        2. 게시물 전체 출력 : 날짜, 제목, 조회수 순으로 전체 게시물을 출력
        3. 게시물 (1개)상세 출력 : 전체출력화면에서 특정한 제목을 클릭시 클릭한 게시물의 상세 정보를 보여주세요.
            상세 정보: 날짜, 제목, 조회수, 내용 / 조회수 : 상세 정보 조회시 1증가
        4. 게시물 삭제 : 상세 출력 화면에서 삭제 버튼 클릭시 비밀번호를 입력받아 일치하면 삭제 처리
        5. 게시물 수정 : 상세 출력 화면에서 수정 버튼 클릭시 비밀번호를 입력받아 일치하면 새로운 내용을 입력받아 수정 처리

    [개발순서]
        1. HTML(HTML/CSS/JS) :프론트엔드 와이어프레임/프로토타입 구성 보고 HTML 작성 <CSS>
        2. JS(JAVA) : 구성된 화면과 요구사항에서 필요한 메모리 구성
        3. JS(JAVA) :요구사항에 따라 구현할 기능/함수 구성, 함수별 비지니스 로직 구성
        4. HTML/JS 연동
        5. 테스트
        6. 유지보수
    [1] HTML 작성
    [2] 구현할 페이지 메모리 구성
        - 제목, 내용, 비밀번호, 작성일자, 조회수 필드/속성 값을 저장
        [방법1] 각 속성별로 배열을 선언한다.
            // 제목
            let titleArray = ["첫번째 게시물 제목", "두번째 게시물 제목", "세번째 게시물 제목"];
            // 내용
            let conArray = ["첫번째 게시물 내용", "두번째 게시물 내용", "세번째 게시물 내용"];
            // 비밀번호
            let pwArray = ["1234", "4567", "7890"];
            // 작성일자
            let dateArray = ["2024-11-26", "2024-11-27", "2024-11-28"];
            // 조회수
            let viewArray = ["3", "2", "1"];
        [방법2] 각 속성별 하나의 문자열로 구성하여 구성된 문자열을 하나의 배열에서 관리
            [CSV란] 여러개의 값들을 쉼표(,)로 구분한 텍스트(문자열)
                - 주의할 점: 데이터 자체의 ,가 존재하면 문제가 발생할 수 있다.
                - 주의할 점: 배열의 요소 ,(쉼표)와 csv의 ,(쉼표)는 다르다.
                - 값을 다시 구분할때는 문자열 함수중에 문자열.split()함수를 사용하여 분해
            첫번째 게시물 : "첫번째 게시물 제목, 첫번째 게시물 내용, 1234, 2024-11-26, 3"
            첫번째 게시물 : "두번째 게시물 제목, 두번째 게시물 내용, 4567, 2024-11-27, 2"
            첫번째 게시물 : "세번째 게시물 제목, 세번째 게시물 내용, 7890, 2024-11-28, 1"

            [방법1] : 하나의 문자열(게시물)들을 여러개 구성하여 배열 저장
            let 게시물목록 = ["첫번째 게시물 제목, 첫번째 게시물 내용, 1234, 2024-11-26, 3", 
                             "두번째 게시물 제목, 두번째 게시물 내용, 4567, 2024-11-27, 2",
                             "세번째 게시물 제목, 세번째 게시물 내용, 7890, 2024-11-28, 1"
                            ];

            [방법2] 하나의 문자열(게시물)들을 \n으로 구분하여 또 하나의 문자열에 구성
            let 게시물목록 = "첫번째 게시물 제목, 첫번째 게시물 내용, 1234, 2024-11-26, 3\n
                             두번째 게시물 제목, 두번째 게시물 내용, 4567, 2024-11-27, 2\n
                             세번째 게시물 제목, 세번째 게시물 내용, 7890, 2024-11-28, 1
                            ";
    [3] 함수/기능 구성
        1. 등록함수 : [등록]버튼 클릭시 입력받은 3개의값(제목, 내용, 비밀번호)를 JS에 가져와서 배열에 저장함수 .push
        2. 출력함수 : 배열내 변화(최초실행1번/등록/삭제/수정)이 있을경우 배열내 모든 정보(게시물)을 출력하는 함수 .length
        3. 삭제함수 : [삭제] 버튼 클릭시 비밀번호를 입력받아서 현재 상세게시물의 비밀번호와 일치하면 배열내 해당 게시물 삭제 함수 .splice
        4. 수정함수 : [수정] 버튼 클릭시 비밀번호를 입력받아서 현재 상세게시물의 비밀번호와 일치하면 새로운 내용을 입력받아 해당 게시물 내용 수정 함수 배열명[index] = 새로운값;

                        
*/

let postingList = ["첫번째 게시물 제목,첫번째 게시물 내용,1234,2024-11-26,3",
                    "두번째 게시물 제목,두번째 게시물 내용,4567,2024-11-27,5",
                    "세번째 게시물 제목,세번째 게시물 내용,7890,2024-11-28,1"];

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
    temp = `${title.value},${content.value},${pw.value},${date},${view}`;
    postingList.push(temp);
    console.log(postingList);
    // #endregion 값 저장하기
    viewPosting();
    // #region 가져온 값 비우기
    title.value = "";
    content.value = "";
    pw.value = "";
    // #endregion 가져온 값 비우기
}

// 출력함수 / 실행조건 : js열렸을때 최초1번 실행, 등록/삭제/수정처리 성공시 실행
function viewPosting() {
    let temp = "";
    let innerHTML = "";
    let tbody = document.querySelector("#content > table > tbody");
    for(let i = 0; i < postingList.length; i++) {
        let listSplit = postingList[i].split(",");
        temp = `<tr>
        <td style = "text-align : center;">${listSplit[3]}</td>
        <td style = "text-align : center;"><a href = "#detail_title" style = "text-decoration : none; color : black;" onclick = "detail(${i})">${listSplit[0]}</a></td>
        <td style = "text-align : center;">${listSplit[4]}</td>
        </tr>`;
        innerHTML += temp;
        // <td><a href = "#" onclick = "detail()"> ${listSplit[0]}</a></td>
        // <td style = "text-align : center; cursor : pointer;" onclick = "detail(${i})">${listSplit[0]}</td>
    }
    tbody.innerHTML = innerHTML;
    // console.log(innerHTML);
}
function detail(index) {
    // console.log(index);
    let title = document.querySelector("#detail_title");
    let content = document.querySelector("#detail_content");
    let date = document.querySelector("#detail_date");
    let view = document.querySelector("#detail_view");
    let btn = document.querySelector("#detail_button");
    let temp = postingList[index].split(",");
    // console.log(temp);
    title.innerHTML = temp[0];
    content.innerHTML = temp[1];
    date.innerHTML = temp[3];
    view.innerHTML = Number(temp[4])+1;
    btn.innerHTML = `
                <button type = "button" onclick = "deletePosting(${index})">삭제</button>
                <button type = "button" onclick = "updatePosting(${index})">수정</button>`;
    temp[4] = Number(temp[4])+1;
    postingList[index] = `${temp[0]},${temp[1]},${temp[2]},${temp[3]},${temp[4]}`;
    // console.log(temp[4]);
    viewPosting();
}

// 삭제함수 / 실행조건 : [삭제]버튼 클릭시
function deletePosting(index) {
    let title = document.querySelector("#detail_title");
    let content = document.querySelector("#detail_content");
    let date = document.querySelector("#detail_date");
    let view = document.querySelector("#detail_view");
    let pw = prompt("비밀번호를 입력하세요 : ");
    if(pw == postingList[index].split(",")[2]) {
        postingList.splice(index, 1);
        title.innerHTML = "";
        content.innerHTML = "";
        date.innerHTML = "";
        view.innerHTML = "";
    } else {
        alert("비밀번호 틀렸습니다!");
    }
    viewPosting();
    console.log(postingList);
}

// 수정함수 / 실행조건 : [수정]버튼 클릭시
function updatePosting(index) {
    let btn = document.querySelector("#detail_");
}