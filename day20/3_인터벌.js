/*
    인터벌(interval : 간격)
        - 주기에 따라 특정 함수를 반복실행
        - 시계를 만들거나 인증시간을 표현할때 사용
        - setInterval(함수, 주기); --> 객체가 아닌 함수
            함수 : 주기에 따라 실행할 함수
            주기 : 1/1000초(밀리초), 1000 : 1초, 10000 : 10초
            -> 주기마다 지정한 함수를 실행
        - clearInterval(종료할인터벌변수) : interval을 종료
*/

// [1] 예제1
let value = 0;
function 증가함수() {
    value++;
    document.querySelector(".box1").innerHTML = value;
}

setInterval(증가함수, 1000);

// [2] 예제2
function 시계함수() {
    // 현재 시스템의 시분초
    let today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    document.querySelector(".box2").innerHTML = `${hour} : ${minute} : ${second}`;
}
setInterval(시계함수, 1000);

//[3] 예제3
let time = 0;
let timerId;
let timerState = false;
function 타이머() {
    time++;
    document.querySelector(".box3").innerHTML = time;
}
function 타이머시작함수() {
    if(!timerState) {
        timerId = setInterval(타이머, 1000);
        timerState = !timerState;
    } else {
        console.log("이미 실행중");
    }
}
function 타이머멈춤함수() {
    if(timerState) {
        clearInterval(timerId);
        timerState = !timerState;
    } else {
        console.log("타이머 이미 멈춤");
    }
}
function 타이머종료함수() {
    if(timerState) {
        clearInterval(timerId);
        time = 0;
        document.querySelector(".box3").innerHTML = "";
        timerState = !timerState;
    } else {
        console.log("이미 초기화됨");
    }
}