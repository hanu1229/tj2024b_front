/*
    실습 주제 : 미니 웹페이지 가계부
        - 가계부 정보(항목)
            1. 날짜
            2. 항목명
            3. 금액
        - 세가지의 정보를 입력받아 하나의 배열 저장 기능
        - 등록된 모든 정보들을 HTML로 출력
        - HTML 출력 예시
            날짜            항목    금액
            2024-11-26      콜라    1000
            2024-11-27      커피    1200

    [생각1] 시각적으로 보이는 목표의 데이터 구성을 어떻게 해야하는지 생각
*/
function init() {
    let html = `
    <table border = "1" style = "margin : 0px auto;">
        <tr>
            <th>&nbsp;&nbsp;&nbsp;날짜&nbsp;&nbsp;&nbsp;</th>
            <th>&nbsp;&nbsp;&nbsp;항목&nbsp;&nbsp;&nbsp;</th>
            <th>&nbsp;&nbsp;&nbsp;금액&nbsp;&nbsp;&nbsp;</th>
        </tr>
    `;
    return html;
}

let dateArray = [];
let productArray = [];
let priceArray = [];

function submit() {
    let temp = init();
    let html = document.querySelector("table");
    let inputDate = document.querySelector("#inputDate");
    let inputProduct = document.querySelector("#inputProduct");
    let inputPrice = document.querySelector("#inputPrice");
    if (inputDate.value != "" && inputProduct.value != "" && inputPrice.value != "") {
        dateArray.push(inputDate.value);
        productArray.push(inputProduct.value);
        priceArray.push(inputPrice.value);
        for (let i = 0; i < productArray.length; i++) {
            temp += `<tr> 
            <td>${dateArray[i]}</td>
            <td>${productArray[i]}</td>
            <td>${priceArray[i]}</td>
            </tr>`;
        }
        temp += "</table>";
        html.innerHTML = temp;
        inputProduct.value = "";
        inputPrice.value = "";
        // console.log(`${dateArray} / ${productArray} / ${priceArray}`);
        console.log(dateArray);
        console.log(productArray);
        console.log(priceArray);
    } else {
        alert("정확히 입력해주세요!!!");
    }
}