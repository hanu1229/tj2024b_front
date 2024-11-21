/*
    [ 타입 ]
        - 각 프로그래밍 언어들이 데이터들을 분류하는 것

    [ 배열 ] : 순서대로 번호를 붙인 원소들이 연속적인 형태로 구성된 타입
        - 나열      : 열거하기 위해 하나씩 줄로 하는 것
        - 열거      : 여러가지를 낱낱이 늘어놓음
        - 인덱스    : 순서대로 배정된 번호, 0번부터 시작
        - 선언 방법 : [] --> ,(쉼표)를 이용해서 값을 구분
            let/const 변수명 = [값1, 값2, 값3, ...];
        - 배열값 전체 호출
            변수명;
        - 특정 배열값 호출
            변수명[인덱스];
        - 배열값 전체 수정
            변수명 = [값1, 값2, ...];
        - 특정 배열값 수정
            변수명[인덱스] = 값;
        - 배열값 추가
            변수명.push(값);
        - 배열값 일부 삭제
            변수명.splice(삭제할인덱스번호, 삭제할개수);
        - 배열값 중간에 삽입
            변수명.splice(삭제할인덱스번호, 0, 새로운값);
        - 배열값 전부 삭제
            변수명.splice(0, 변수명.length);
        - 특정 배열값 인덱스 찾기 (값이 존재하면 인덱스 번호 반환, 없으면 -1 반환)
            변수명.indexOf(값);
*/

// [1] 배열 선언
let pointArray = [100, 50, 30];

// [2] 배열값 전체 호출
console.log(pointArray);

// [3] 특정 배열값 호출
console.log(pointArray[0]);
console.log(pointArray[1]);
console.log(pointArray[2]);

// [4-1] 배열값 전체 수정
pointArray = ["유재석" , "강호동"];
console.log(pointArray);

// [4-2] 특정 배열값 수정
pointArray[0] = "신동엽";
console.log(pointArray);

// [5] 배열값 추가
pointArray.push("서장훈");
console.log(pointArray);

// [6] 배열값 삭제
pointArray.splice(0, 1);
console.log(pointArray);
pointArray.splice(1, 0, "하하");
console.log(pointArray);

// [7] 특정 배열값 인덱스 찾기
pointArray.indexOf("서장훈");
// 인덱스 번호 반환
console.log(pointArray.indexOf("서장훈"));
// 값이 없어 -1 반환
console.log(pointArray.indexOf("유재석"));