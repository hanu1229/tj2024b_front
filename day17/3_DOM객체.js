/*
    객체
        - 속성과 함수를 가질 수 있는 자료구조/타입
        - 객체는 .(접근연산자)를 이용하여 속송의 값과 함수 호출
            객체명.속성명   객체명.함수명()
        - 내가 만든 객체 VS 남이 만든 객체(라이브러리)
            남이 만든 객체
                1. console.log() / console객체내 log함수 호출
                2. document.querySelector() / document객체내 querySelector()함수 호출
    
    DOM객체
        - JS화사에서 미리 만들어진 HTML관련 객체 제공(JS에서 HTML을 조작하기 위해서)
        - document : 현재 JS가 위치한 HTML을 객체화(HTML/CSS 조작)
        - document객체내 속성과 함수
            1. document.write("출력할 내용") : HTML에 출력할 내용을 출력해주는 함수
            2. document.querySelector("선택자")     : HTML에 지정한 선택자의 마크업을 객체타입으로 반환하는 함수
                - DOM트리에서 내가 원하는 마크업 선택
            3. document.querySelectorAll("선택자") : HTML에 지정한 선택자의 모든 마크업을 객체타입으로 반환하는 함수
                - 선택자 : 마크업, .클래스명, #아이디명, >자식선택자, 띄어쓰기 자손 등등
        - 마크업 객체 주요 속성/함수 : 마크업들의 속성들을 JS에서도 접근이 가능하다.
            1. .value : 지정된 마크업(태그)의 value속성값 호출 및 대입
                - 사용가능한 요소 : input, select, textarea등등
                - 사용불가한 요소 : div, table, span등등
                - 호출하는 법 : document.querySelector("선택자").value --> 반환타입 : 문자열
                - 대입하는 법 : document.querySelector("선택자").value = 새로운값;
            2. .innerHTML : 지정된 마크업(태그)의 시작과 끝마크업 사이를 inner라고 한다.
                - 사용가능한 요소 : div, table, ul, span등등
                - 사용블가한 요소 : input, textarea등등
                - 호출하는 법 : document.querySelector("선택자").innerHTML --> 반환타입 : 문자열
                - 대입하는 법 : document.querySelector("선택자").innerHTML = 새로운값;
            3. .style : 지정된 마크업(태그)의 style속성을 이용한 css 조작
                - 모든 마크업
                - 호출하는 법 : document.querySelector("선택자").style
                - 대입하는 법 : document.querySelector("선택자"). style = "css문법";
            4. .src : 지정된 마크업(태그)의 src 속성값 호출 및 대입
                - 사용 가능한 요소 : img, audio, video등등

    DOM트리
        document
            -> html
                -> head
                    -> title
                    -> style
                -> body
                    -> div
                    -> table
                    -> span
            
*/

//  [1]
console.log( document );

// [2]
console.log(document.querySelector("title"));
// [3]
console.log(document.querySelector("div"));
console.log(document.querySelectorAll("div"));
// div마크업중에서 class속성이 "box2"
console.log(document.querySelector(".box2"))
console.log(document.querySelector("#box3"))

// [4]
let box2 = document.querySelector(".box2");
let box22 = document.querySelector(".box2").innerHTML;
let box222 = document;
console.log(box2);
console.log(box22);
console.log(box222);
console.log(typeof(box2));
console.log(typeof(box22));
console.log(typeof(box223));