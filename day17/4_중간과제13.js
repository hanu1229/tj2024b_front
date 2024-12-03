/*
    주제 : todo list 구현하기
*/

work_list = [
    {index : 0, title : "수업듣기", state : true},
    {index : 1, title : "밥먹기", state : false},
    {index : 2, title : "코드치기", state : true},
];
index = 3;

// 로딩 출력
printWork();

// 추가 함수
function addWork() {
    let work = document.querySelector("#input_work");
    if(work.value != "") {
        let temp = {index : index, title : work.value, state : true};
        index++;
        work_list.push(temp);
        console.log(work_list);
        work.value = "";
    }
    printWork();
}

// 출력 함수
function printWork() {
    let content  = document.querySelector("#content");
    let html = ``;
    for(let i = 0; i < work_list.length; i++) {
        let temp = work_list[i];
        let state = "";
        state = temp.state == true ? "content_box" : "success";
        html += `<div class = "${state}">
            <label>${temp.title}</label>
            <div id = "btn${temp.index}" style = "display : inline-block;">
                <button onclick = "stateChange(${i})">변경</button>
                <button onclick = "deleteWork(${i})">삭제</button>
            </div>
        </div>`;
    }
    content.innerHTML = html;
}

// 상태변경 함수
function stateChange(index) {
    let temp = work_list[index];
    console.log(temp);
    if(temp.state == true) {
        temp.state = false;
    } else {
        temp.state = true;
    }
    printWork();
}

// 삭제 함수
function deleteWork(index) {
    work_list.splice(index, 1);
    console.log(work_list);
    printWork();
}