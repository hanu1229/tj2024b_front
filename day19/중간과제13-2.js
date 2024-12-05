/*
    주제 : todo list 구현하기
*/

work_list = [
    {index : 0, title : "수업듣기", state : false},
    {index : 1, title : "밥먹기", state : true},
    {index : 2, title : "코드치기", state : false},
];
let index = 3;
printWork();

// 등록함수
function addWork() {
    let work = document.querySelector("#input_work");
    if(work.value != "") {
        let newWork = {index : index, title : work.value, state : false};
        index++;
        work_list.push(newWork);
        work.value = "";
    }
    printWork();
}

// 출력함수
function printWork() {
    let content = document.querySelector("#content");
    let html = ``;
    for(let i = 0; i < work_list.length; i++) {
        let temp = work_list[i];
        let state = temp.state ? "success" : "content_box";
        html += `<div class = "${state}">
            <label>${temp.title}</label>
            <div>
                <button onclick = "stateChange(${temp.index})">변경</button>
                <button onclick = "deleteWork(${temp.index})">삭제</button>
            </div>
        </div>`;
    }
    content.innerHTML = html;
}

// 수정함수
function stateChange(index) {
    for(let i = 0; i < work_list.length; i++) {
        let temp = work_list[i];
        if(temp.index == index) {
            temp.state = !temp.state;
            console.log("실행 : " + temp.state);
        }
    }
    printWork();
}

// 삭제함수
function deleteWork(index) {
    for(let i = 0; i < work_list.length; i++) {
        let temp = work_list[i];
        if(temp.index == index) {
            work_list.splice(i, 1);
        }
    }
    printWork();
}