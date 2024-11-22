/*
    조건문 : 조건 문법
        - 조건의 결과값 : true / false
        - 삼항연산자 : 간단한 조건문
        1. IF 조건문 : 조건문을 표현 가능한 문법
            - 조건에 trhe / false , 비교연산 또는 관계연산
        2. IF 형태
            1. if (조건) 참일경우코드;
            2. if (조건) { 참일경우코드; 참일경우코드; }
            3. if (조건) { 참일경우코드; } else { 거짓일경우코드; }
            4. if (조건1) {
                    조건1이 참일 경우 코드;
                } else if (조건2) {
                    조건2가 참일 경우 코드; 
                } else if (조건3) {
                    조건3이 참일 경우 코드; 
                } else if (조건4) {
                    조건4가 참일 경우 코드; 
                } else {
                    조건1~4가 거짓일 경우 코드; 
                }
            5. if (조건) {
                if (조건) {

                } else {
                
                }
            } else {

            }
*/

// [1] if
 
if (10 > 3) console.log(`1. T 10 > 3`);
if (10 > 20) console.log(`2 T 10 > 20`);
//if(10 > 20) console.log(`3 T 10 > 20`);

// [2] 참일경우코드의 명령어 2개 이상이면 { } 묶어주자
if (10 > 20) console.log(`4-1 10 > 20`); console.log(`4-2 10 > 20`);
if (10 > 20) {
    console.log(`5-1 10 > 20`);
    console.log(`5-2 10 > 20`);
}
if ( 10 > 3) {
    console.log(`6-1 10 > 3`);
    console.log(`6-2 10 > 3`);
}

// [3] if ~ else
if (10 > 3) { console.log(`7. T 10 > 3`); }
else { console.log(`7. F 10 > 3`); }

// [4] if ~ else if ~ else if else
if (10 >= 20) { console.log(`8. T1 10`); } 
else if (10 >= 15) { console.log(`8. T 10 >= 15`); }
else if (10 >= 10) { console.log(`8.T3 10 >= 10`); }
else { console.log(`8. F 그외`); }  

// [5] if 중첩
let 성별 = "남"; let 점수 = 80;
if (성별 == "남") {
    if (점수 >= 90) {
        console.log("남자우수");
    } else {
        console.log("남자");
    }
} else {
    if (점수 >= 90) {
        console.log("여자우수");
    } else {
        console.log("여자");
    }
}