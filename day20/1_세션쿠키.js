/*
    객체 : 여러가지 자료를 하나의 자료로 만드는 타입 구조
        - 객체 2개
            1. 내가만든객체
            2. 남이만든객체 : document, console, new Date() 등등
                - 다른 사람이 미리 데이터/함수를 제공함으로써 빠른개발이 가능하다(도구 제공)
                - 내가 집을 만드는데 도구는 사서 사용한다(라이브러리)
                - 그냥 아무것도 없는 집을 산다(프레임워크)
        
    세션과 쿠키
        - 브라우저에서 제공하는 기능
        - 브라우저 F12(개발자도구) -> [Application] -> 왼쪽사이드 메뉴 (local storage(쿠키) / session storage(세션))
        - 브라우저 : HTTP통신과 HTML/CSS/JS 코드를 렌더링해주는 프로그램
            1. 세션 : 사용자가 웹페이지를 방문하고 있는 동안 메모리를 저장하는 공간
                (휘발성 : 브라우저가 꺼지면 메모리 삭제)
                sessionStorage
                사용처 : 검색엔진, 임시데이터
            2. 쿠키 : 사용자의 웹페이지 방문이 끝나도 메모리에 저장하는 공간
                (비휘발성 : 브라우저가 꺼져도 메모리 유지)
                localStorage
                사용처 : 자동로그인 기능 구현
            3. 주의할점
                - 세션과 쿠키는 무조건 문자열로만 구성된 자료
                - 문자는 저장이 가능하나 배열이나 객체는 저장할 수 없다.
                    해결책 : 타입변환(변경)
                        문자열 <----> 격체(json)
    
    JSON(JavaScript Object Notation) : 자바스크립트 객체 문법의 형식
        - 실무에서 많이 사용되는 형식 : JSON/XML/CSV
        - JSON.stringify({속성 : 값, 속성 : 값}) : "{속성 : 값, 속성 : 값}" 문자열로 반환
        - JSON.parse("{속성 : 값, 속성 : 값}") : {속성 : 값, 속성 : 값} 객체로 반환
        - { } 과 "{ }"은 다르다.
*/

// [1] 세션
console.log(sessionStorage);
console.log(localStorage);

// [2] 세션 / 쿠키 데이터 삽입
// setItem("key" , "value"); : 세션/쿠키값을 저장하는 함수(배열의 push()함수와 비슷)
sessionStorage.setItem("name" , "유재석");
localStorage.setItem("age", 40);

// [3] 세션 / 쿠키 데이터 호출
// getItem("key"); : 세션/쿠키값을 호출하는 함수
// key가 없다면 null값을 반환
let 반환값1 = sessionStorage.getItem("name");
console.log(반환값1);
let 반환값2 = localStorage.getItem("age");
console.log(반환값2);
let 반환값3 = sessionStorage.getItem("phone");
console.log(반환값3);

// [4] 관례적으로 세션과쿠키에 객체를 대입하는 방법은 JSON객체를 활용
console.log(JSON.stringify({"name" : "유재석"}));
console.log(JSON.parse('{"name" : "유재석"}'));
sessionStorage.setItem("할일", JSON.stringify({할일내용 : "밥먹기", 할일상태 : true}));
let 반환값4 = sessionStorage.getItem("할일");
console.log(반환값4);
console.log(JSON.parse(반환값4));
