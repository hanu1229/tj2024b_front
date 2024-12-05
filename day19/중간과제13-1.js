work_list = [
    {index : 0, title : "수업듣기", state : true},
    {index : 1, title : "밥먹기", state : false},
    {index : 2, title : "코드치기", state : true},
];
let index = 3;
printWork();

function addWork() {
    let work = document.querySelector("#input_work");
    if(work.value != "") {
        let temp = {index : index, title : work.value, state : true};
        work_list.push(temp);
        console.log(work_list);
        index++;
        work.value = "";
    }
    printWork();
}
function printWork() {
    let content = document.querySelector("#content");
    let html = ``;
    for(let i = 0; i < work_list.length; i++) {
        let temp = work_list[i];
        let state = temp.state ? "content_box" : "success";
        html += `<div class = "${state}">
            <label>${temp.title}</label>
            <div id = "btn${temp.index}">
                <button onclick = "stateChange(${temp.index})">변경</button>
                <button onclick = "deleteWork(${temp.index})">삭제</button>
            </div>
        </div>`;
    }
    content.innerHTML = html;
}

function stateChange(index) {
    for(let i = 0; i < work_list.length; i++) {
        let temp = work_list[i];
        if(temp.index == index) {
            temp.state = !temp.state;
            // console.log("실행 : " + temp.state);
        }
    }
    printWork();
}

function deleteWork(index) {
    for(let i = 0; i < work_list.length; i++) {
        let temp = work_list[i];
        if(temp.index == index) {
            work_list.splice(i, 1);
            console.log(work_list);
        }
    }
    printWork();
}
