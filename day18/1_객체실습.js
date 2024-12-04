let today = new Date();
let year = today.getFullYear();
let month = today.getMonth()+1;
let day = today.getDate();
let date2 = new Date(2023, 4, 20);
// console.log(new Date().getDay())

let contentArray = [
    {number : 1, content : "학원개강", date : "2024-12-04", backColor : "red"},
    {number : 2, content : "은행업무", date : "2024-12-10", backColor : "grey"},
    {number : 3, content : "친구약속", date : "2024-12-21", backColor : "pink"},
    {number : 4, content : "월급일", date : "2024-12-15", backColor : "blue"},
    {number : 5, content : "저녁약속", date : "2024-12-10", backColor : "coral"},
];
let number = 6;
console.log(contentArray);
calPrint();
// [1] 달력 출력 함수
function calPrint() {
    // [1-1] 상단의 달력 연도/월 표시
    let h4 = document.querySelector("#calTop > h4");
    let temp = month < 10 ? "0"+month : month;
    let html = `${year}년 ${temp}월`;
    h4.innerHTML = html;

    // [1-2] 하단의 현재 연도/월 표시
    let calBottom = document.querySelector("#calBottom");
    let html2 = ``;

    html2 += `<div class = "week" id = "sunday">일</div>
            <div class = "week">월</div><div class = "week">화</div>
            <div class = "week">수</div><div class = "week">목</div>
            <div class = "week">금</div><div class = "week">토</div>`;

    // 현재 월의 마지막 일 구하기
    // 지정한 연도와 월에 해당하는 날짜의 마지막일 구하는 법
    let date = new Date(year, month, 0);
    // console.log(date);
    let endDay = date.getDate();
    console.log("endDay : " + endDay);
    // 현재 월의 1일의 요일, 1일의 시작 위치를 찾기
    // 각 월의 1일 전까지 공백 출력
    let date2 = new Date(year, month-1, 1);
    let startDay = date2.getDay();
    console.log("stratDay : " + startDay);
    for(let blank = 1; blank <=startDay; blank++) {
        html2 += `<div></div>`;
    }
    // 달력의 날짜 출력
    // {number : 1, content : "학원개강", date : "2024-12-04", backColor : "red"}
    for(let i = 1; i <= endDay; i++) {
        let date3 = `${year}-${month}-${i > 9 ? i : "0"+i}`;
        // console.log(date3);
        // 현재 날짜와 등록된 일정날짜와 동일한 일정 찾기/검색해서 동일하면 일정 내용을 출력
        // planHTML : 동일한 날에 일정이 2개 이상일 수 있기 때문에 for문 밖에 생성
        let planHTML = ``;
        for (let j = 0; j < contentArray.length; j++) {
            let plan = contentArray[j];
            // console.log(plan.date);
            if(date3 == plan.date) {
                planHTML += `<div style = " color : white; background-color : ${plan.backColor}">${plan.content}</div>`;
            }
        }
        html2 += `<div>${i} ${planHTML}</div>`;
        // console.log(planHTML);
    }
    calBottom.innerHTML = html2;
}

// [2] 월 변경 함수(이전달, 다음달)
function monthChange(changeMonth) {
    console.log(changeMonth);
    month += changeMonth;
    if(month > 12) {
        year++;
        month = 1;
    } else if (month == 0) {
        year--;
        month = 12;
    }
    calPrint();
}