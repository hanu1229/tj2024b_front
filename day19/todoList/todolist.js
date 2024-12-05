let work_list = [
    {index : 0, title : "아침 밥먹기", state : false},
    {index : 1, title : "저녁 밥먹기", state : true},
    {index : 2, title : "코딩하기", state : false},
];
let index = 3;
printWork();

// 출력함수
function printWork() {
    let content = document.querySelector("#content");
    let html = ``;
    for(let i = 0; i < work_list.length; i++) {
        let temp = work_list[i];
        let state = temp.state ? "success" : "content_box";
        html += `<div id = "div${temp.index}" class = "${state}">
            <label>${temp.title}</label>
            <div>
                <button onclick = "stateChange(${temp.index})">변경</button>
                <button id = "test" onclick = "deleteWork(${temp.index})">삭제</button>
            </div>
        </div>`;
    }
    content.innerHTML = html;
}

// 등록함수
function addWork() {
    let work = document.querySelector("#input_work");
    if(work.value != "") {
        let newWork = {index : index, title : work.value, state : false};
        work_list.push(newWork);
        work.value = "";
        index++;
    }
    printWork();
}

// 변경함수
function stateChange(indexNumber) {
    for(let index = 0; index < work_list.length; index++) {
        let temp = work_list[index];
        if(temp.index == indexNumber) {
            temp.state = !temp.state;
        }
    }
    printWork();
}

// 삭제함수
function deleteWork(indexNumber) {
    for(let index = 0; index < work_list.length; index++) {
        let temp = work_list[index];
        if(temp.index == indexNumber) {
            work_list.splice(index, 1);
        }
    }
    printWork();
}