/*
    - 사원 정보와 각 사원의 연도별 점수평가 메모리 구성
    1. 저장할 데이터들을 모두 생각한다.
        사원명, 생년월일, 연도, 상반기점수, 하반기점수
    2. 데이터끼리 관계성을 파악해서 분류하기
        - 사원정보(사원명, 생년월일), 점수정보(연도, 상반기점수, 하반기점수)
        - 상하관계(1 : N 관계) : 하나의 데이터가 여러개의 데이터를 참조한다.
            - 하나의 사원이 여러개 연도별 점수를 가질 수 있다.
            - 하나의 회원이 여러개의 게시물을 작성할 수 있다.
            - 하나의 카테고리에 여러개의 제품을 등록할 수 있다.

    3. 데이터 분류간의 관계성 연결
        - 사원정보(상위/식별가능한필드가 필요), 점수정보(하위)
        1. 유재석 정보등록, 유재석 2002-10-02
        2. 유재석 2024점수 등록, 유재석 2002-10-02 2024 90 80
        3. 유재석 2023점수 등록, 유재석 2002-10-02 2024 90 80 2023 100 97
            1 유재석 2002-10-02 --> 1 2024 90 80
                                --> 1 2023 100 97
*/

// [1] 객체지향으로 메모리 구성
// 1. 두 사원의 정보 샘플
let 사원1 = {no : 1, name : "유재석", birth : "2000-10-02"};
let 사원2 = {no : 2, name : "강호동", birth : "1980-01-25"};
// 2. 사원목록 등록
let 사원목록 = [];
사원목록.push(사원1);
사원목록.push(사원2);
console.log(사원목록);
// 3. 평가 등록
// 유재석 2024 평가 등록
let 점수1 = {no : 1, year : "2024", first : 100, second : 80};
// 강호동 2024 평가 등록
let 점수2 = {no : 2, year : "2024", first : 92, second : 71};
// 유재석 2023 평가 등록
let 점수3 = {no : 1, year : "2023", first : 82, second : 97};
// 4. 평가 목록에 등록
let 평가목록 = [];
평가목록.push(점수1);
평가목록.push(점수2);
평가목록.push(점수3);
// console.log(평가목록);

let eno = 3;
// [1] 사원 등록 함수
function 사원등록() {
    let name = document.querySelector("#name").value;
    let birth = document.querySelector("#birth").value;
    let info = {
        no : eno,
        name : name,
        birth : birth
    }
    사원목록.push(info);
    console.log(사원목록);
    // console.log(`사원목록 : ${사원목록}`);
    eno++;
    사원전체출력();
}
사원전체출력();
// [2] 사원 목록 전체 출력 / 1. 최초실행때 실행, 사원목록에 변화(저장/수정/삭제)가 있을때 마다
function 사원전체출력() {
    let tbody = document.querySelector("#사원테이블");
    let html = ``;
    for(let i = 0; i < 사원목록.length; i++) {
        let info = 사원목록[i];
        html += `<tr>
            <td>${info.no}</td>
            <td>${info.name}</td>
            <td>${info.birth}</td>
            <td>
                <button type = "button" onclick = "평가등록출력(${info.no})">평가등록</button>
                <button type = "button" onclick = "평가결과출력(${info.no})">평가결과</button>
            </td>
        </tr>`;
    }
    tbody.innerHTML = html;
}

function 평가등록출력(사원번호) {
    let 검색사원 = null;
    for(let i = 0; i < 사원목록.length; i++) {
        let info = 사원목록[i];
        if(info.no == 사원번호) {
            검색사원 = info;
            break;
        }
    }
    if(검색사원 == null) {
        alert("사원정보가 없습니다.");
        return;
    }
    let div = document.querySelector("#평가입력구역");
    let html = `<h3>사원 평가 등록</h3>
            <!-- <form>
            </form> -->
            <h5>평가사원명 : ${검색사원.name}</h5>
            평가연도 : <input id = "year" type = "text"/>
            상반기평가 : <input id = "first" type = "text"/>
            하반기평가 : <input id = "second" type = "text"/>
            <button onclick = "평가등록(${검색사원.no})">점수 등록</button>`;
    div.innerHTML = html;
}

function 평가등록(사원번호) {
    let year = document.querySelector("#year").value;
    let first = document.querySelector("#first").value;
    let second = document.querySelector("#second").value;
    let info = {no : 사원번호, year : year, first : first, second : second};
    평가목록.push(info);
    console.log(평가목록);
    평가결과출력(사원번호);
}

function 평가결과출력(사원번호) {
    let div = document.querySelector("#점수테이블");
    let html = ``;
    for(let i = 0; i < 평가목록.length; i++) {
        let info = 평가목록[i];
        console.log(평가목록[i]);
        if(info.no == 사원번호) {
            html += `<tr>
                <td>${info.year}</td>
                <td>${info.first}</td>
                <td>${info.second}</td>
            </tr>`;
        }
    }
    div.innerHTML = html;
}