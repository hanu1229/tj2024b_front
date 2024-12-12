/*
    세션을 이용한 회원가입/로그인 구현
*/

// [1] 회원가입 함수 정의
// 함수를 언제 사용할것인지     / [회원가입]버튼 클릭시
// 함수의 매개변수가 필요한지   / 없음
// 힘수의 반환값이 필요한지     / 없음
function 회원가입함수() {
    // 1. [입력]
    let id = document.querySelector(".signId").value;
    let pw = document.querySelector(".signPw").value;
    // 2. [처리]
    let member = {"id" : id, "pw" : pw};
    // 현재 회원정보를 저장하기 위한 회원정보목록을 세션에서 가져오기
    let memberList = 회원정보목록반환함수();
    // 배열에 입력받은 객체를 저장
    for(let i = 0; i < memberList.length; i++) {
        if(memberList[i].id == member.id) {
            continue;
        }
    }
    memberList.push(member);
    console.log(memberList);

    // 배열을 세션/쿠키에 다시 저장
    sessionStorage.setItem("memberList", JSON.stringify(memberList));

    // 3. [출력]
    console.log(memberList);
    return;
}

// [2] 로그인함수 : [로그인]버튼 클릭시
function 로그인함수() {
    let loginId = document.querySelector(".loginId").value;
    let loginPw = document.querySelector(".loginPw").value;
    let memberList = 회원정보목록반환함수();
    console.log(memberList)
    for(let index = 0; index <= memberList.length-1; index++) {
        let info = memberList[index];
        console.log(info);
        if(info.id == loginId && info.pw == loginPw) {
            alert("로그인 성공");
            return;
        }
    }
    alert("동일한 회원정보가 없습니다. 로그인 실패");
    return;
}

// [3] 세션/쿠키에 있는 회원정보목록을 반환하는 함수
function 회원정보목록반환함수() {
    let memberList = sessionStorage.getItem("memberList");
    if(memberList == null) {
        memberList = [];
    } else {
        memberList = JSON.parse(memberList);
        console.log(memberList);
    }
    return memberList;
}