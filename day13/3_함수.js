// [1] 매개변수 X, 반환값 X
function func1() { console.log("func1 execute "); }

// [2] 매개변수 O, 반환값 X --> ex) console.log( );, document.write( );
function func2(x, y) { console.log(`func2 execute ${x+y}`); }

// [3] 매개변수 O, 반환값 O --> ex) let 변수명 = prompt( );
function func3(x, y) { 
    console.log("func3 execute");
    let result = x + y;
    return result;
}

// [4] 매개변수 X, 반환값 O
function func4() { console.log("func4 execute"); return 10; }

// [5] 함수 호출
func1();
func2(1, 2);
let var1 = func3(1, 2);
let var2 = func4();