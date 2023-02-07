<!DOCTYPE html>
<html>
    <head>
        <title>자바스크립트 문법 연습하기!</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    </head>
    <style>
        .button-part {
            display: flex;
            height: 50px;
        }
    </style>
    <script>
        function checkResult() {
            let a = ['사과', '배', '감', '귤']
            $('#q1').text(a[1])

            $('#q1').css('color', 'red')

            let b = {'name':'영수', 'age':30}
            $('#q2').text(b['name'])

            let c = [
                {'name':'영수', 'age':30},
                {'name':'철수', 'age':15}
            ]
            $('#q3').text(c[1]['age'])
        }
    </script>
    <script>
        
    </script>
    <body>
        <div class="top-part">
            <h1>자바스크립트 문법 연습하기!</h1>
        </div>
        <hr/>
        <br>
        <h2>1. 함수</h2>
        <div class="button-part">
            <button onclick="checkResult()">결과 확인하기!</button>
        </div>
        <div class="list-part">
            <h2>2. 리스트</h2>
            <div id="q1">테스트</div>
        </div>
        <div class="dict-part">
            <h2>3. 딕셔너리</h2>
            <div id="q2">테스트</div>
        </div>
        <div>
            <h2>4. 리스트 딕셔너리</h2>
            <div id="q3">테스트</div>
        </div>
    </body>
</html>
