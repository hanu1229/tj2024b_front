let idList = [
    {code : 1, id : "test1", pw : "1234"},
    {code : 2, id : "test2", pw : "3456"},
    {code : 3, id : "test3", pw : "6789"},
];
let postingList = [
    {code : 1, title : "제목이에요11", date : "2024-12-03", view : "3"},
    {code : 2, title : "제목이에요22", date : "2024-12-04", view : "2"},
    {code : 3, title : "제목이에요33", date : "2024-12-05", view : "1"},
];
let loginState = {id : "", pw : ""};
let IDcode = 4;
let PCode = 4;
// 첫 로드 출력
printPosting();

// 로그인함수
function signIn() {
    let login = document.querySelector("#singIn_box > h2");
    let id = document.querySelector("#input_id");
    let pw = document.querySelector("#input_pw");
    for(let index = 0; index < idList.length; index++) {
        if(id.value == idList[index].id && pw.value == idList[index].pw) {
            console.log(id.value + " : 로그인 성공");
            let content = document.querySelector("#content_box > button");
            let logoutBtn = document.querySelector("#btn_logout");
            let signInBtn = document.querySelector("#btn_signIn");
            let signUpBtn = document.querySelector("#btn_signUp");
            content.style.display = "inline-block";
            logoutBtn.style.display = "inline-block";
            signInBtn.style.display = "none";
            signUpBtn.style.display = "none";
            login.innerHTML = `로그인 [${id.value}]`;
            console.log(login.innerHTML);
            loginState.id = id.value;
            loginState.pw = pw.value;
            console.log(loginState);
            id.value = "";
            pw.value = "";
            return;
        }
    }
    console.log(id.value + " : 로그인 실패");
}

// 회원가입버튼클릭함수
function signUp() {
    let sign = document.querySelector("#signUp_box");
    sign.style.display = "block";
}

// 게시물출력함수
function printPosting() {
    let tbody = document.querySelector("#content_box > table > tbody");
    // console.log(tbody);
    let html = ``;
    for(let index = 0; index < postingList.length; index++) {
        let temp = postingList[index];
        html += `<tr>
            <td>${index+1}</td>
            <td style = "cursor : pointer;" onclick = "detailPosting(${temp.code})">${temp.title}</td>
            <td>${temp.date}</td>
            <td>${temp.view}</td>
        </tr>`;
    }
    tbody.innerHTML = html;
}

// 게시물상세보기함수
function detailPosting(postingCode) {
    for(let index = 0; index < postingList.length; index++) {
        let temp = postingList[index];
        if(temp.code == postingCode) {
            temp.view++;
            let posting = document.querySelector("#detail_posting > div");
            posting.innerHTML = `<div>
                <div>
                    <div><span>제목 : </span><label>제목이에요111</label></div>
                    <fieldset>
                        <legend> 내용 </legend>
                        <p>내용이에요11</p>
                    </fieldset>
                    <button class = "btn">수정</button>
                    <button class = "btn" onclick = "deletePosting(${temp.code})">삭제</button>
                </div>
            </div>`;
        }
        // if()
    }
    printPosting();
}

// 게시물삭제함수
function deletePosting(postingCode) {
    for(let index = 0; index < postingList.length; index++) {
        let temp = postingList[index];
        if(temp.code == postingCode) {
            alert(`${temp.title}이(가) 삭제되었습니다.`);
            postingList.splice(index, 1);
        }
    }
    printPosting();
}