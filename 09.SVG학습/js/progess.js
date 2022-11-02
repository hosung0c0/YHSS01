// 프로그레스 페이지 JS - progess.js

$(()=>{ //////////////////// jQB ////////////////////

    // 로딩확인
    console.log("로딩완료");

    // 2. 변수세팅
    // 2-1. 변경대상 : .lbar
    const lbar = $(".lbar");
    // 2-2. 변경대상 숫자박스 ; .ltxt b
    const ltxt = $(".ltxt b");

    // 3. 펭수2 버튼 클릭시
    // .lineper 박스의 .lbar의 width크기를
    // %숫자 증가와 매칭하여 보여주기
    // 클릭대상: .act button -> 마지막버튼
    $(".act button").last()
    .click(()=>{
        // 1. 숫자 데이터 증가하기
        chgPer( );
    }); ////////// click //////////

    // 퍼센트 증가 숫자변수
    let pernum = 0;

    /*************************************** 
        함수명: chgPer
        기능: 숫자%변경 및 바%변경하기
    ***************************************/
   function chgPer(){
        // 1. 호출확인
        console.log("%변경중");
        // 2. 숫자 % 변경하기
        // 대상: .ltxt b -> ltxt변수
        // 퍼센트 숫자 변수 1씩 증가
        pernum++
        ltxt.text(pernum);
        
        // 3. 바 % 변경하기
        // 대상: .lbar -> lbar변수
        lbar.css({width:pernum+"%"});
        // 3. 재귀호출하기 -> 자기자신 호출
        // 재귀호출의 한계를 if문으로 제어함
        // pernum이 100 이하일 때 까지만 재귀호출
        if(pernum < 100){
            // 시차를 주기위해 setTimeout 사용
            setTimeout(() => {
                chgPer();
            }, 25); // 타임아웃 //
        

        }

   } /////////////// chgPer함수 ///////////////


}); //////////////////// jQB ////////////////////