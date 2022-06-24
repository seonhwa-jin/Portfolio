$(document).ready(function(){



  

  //02
  $(".sec02_panel>li:not(:first)").hide();
	//첫번째를 제외한 나머지 내용 숨기기



  //--------02-1
  $(".sec02_tab>li").click(function(){

    for(i=0;i<6;i++){  
			$(".sec02_tab li").eq(i).find(">a>img").attr({"src":"img/tab"+i+".png"}); 
			//선택되지 않은 이미지는 회색이미지로....  
		}

    inum=$(this).index();
    $(this).find("a img").attr({"src":"img/tabon"+inum+".png"});

    $(".sec02-1_i1").removeClass("active1");  //css에서 적용된 1번째 현재위치활성화 해지
		
    $(".sec02_panel>li").hide();//기존의 보여진 내용 숨기기
		$($(this).find("a").attr("href")).show();//새로 선택된 내용 href 연결된내용 보여주기

  });




	//리스트 이미지 클릭시.....
  $(".graphic_list>li").click(function(){

    g_pop=$(this).index();

    $(".g_page span:nth-child(1)").text(g_pop+1); //오른쪽 상단 페이지 넘버
    $("html").css({overflowY:"hidden"}); //기존 html 스크롤 숨기기
		$(".sec02-1_pop>li").eq(g_pop).show(); //g_pop index에 해당하는 팝업보이기
		$("#sec02-1_popup").stop().fadeIn(); //검정배경

  });

















    //--------02-2
    $(".sec02-2_tab>li").click(function(){

      for(i=0;i<6;i++){  
        $(".sec02-2_tab li").eq(i).find(">a>img").attr({"src":"img/tab"+i+".png"}); 
        //선택되지 않은 이미지는 회색이미지로....  
      }
  
      inum=$(this).index();
      $(this).find("a img").attr({"src":"img/tabon"+inum+".png"});
  
      $(".sec02-2_i1").removeClass("active1");  //css에서 적용된 1번째 현재위치활성화 해지
      
      $(".sec02_panel>li").hide();//기존의 보여진 내용 숨기기
      $($(this).find("a").attr("href")).show();//새로 선택된 내용 href 연결된내용 보여주기
  
    });
  
  
  
  
    //리스트 이미지 클릭시.....
    $(".uiux_list>li").click(function(){
  
      g_pop2=$(this).index();
  
      $(".g_page span:nth-child(1)").text(g_pop2+1); //오른쪽 상단 페이지 넘버
      $("html").css({overflowY:"hidden"}); //기존 html 스크롤 숨기기
      $(".sec02-2_pop>li").eq(g_pop2).show(); //g_pop index에 해당하는 팝업보이기
      $("#sec02-2_popup").stop().fadeIn(); //검정배경
  
    });





  



















    
    //02-1
  //오른쪽 상단 버튼-다음보기
  $(".right_btn").click(function(){

    $("#sec02-1_popup").scrollTop(0);

    if(g_pop<11){

      $(".sec02-1_pop>li").eq(g_pop).stop().fadeOut(); //기존거 사라짐
			g_pop++;

			$(".g_page span:nth-child(1)").text(g_pop+1);
			$(".sec02-1_pop>li").eq(g_pop).stop().fadeIn();

    }

  });


  //오른쪽 상단 버튼-이전보기
  $(".left_btn").click(function(){

    $("#sec02-1_popup").scrollTop(0);

    if(g_pop>0){
      $(".sec02-1_pop>li").eq(g_pop).stop().fadeOut(); //기존거 사라짐
      g_pop--;

      $(".g_page span:nth-child(1)").text(g_pop+1);
      $(".sec02-1_pop>li").eq(g_pop).stop().fadeIn();
    }

  });


  //오른쪽 상단 버튼-닫기
  $(".btn_close").click(function(){ 
    
    $("html").css({overflowY:"scroll"});
		$("#sec02-1_popup").stop(true,true).fadeOut();
		$(".sec02-1_pop>li").stop(true,true).hide();

  });







    //02-2
  //오른쪽 상단 버튼-다음보기
  $(".right_btn2").click(function(){

    if(g_pop2<8){

      $(".sec02-2_pop>li").eq(g_pop2).stop().fadeOut(); //기존거 사라짐
			g_pop2++;

			$(".g_page2 span:nth-child(1)").text(g_pop2+1);
			$(".sec02-2_pop>li").eq(g_pop2).stop().fadeIn();

    }

  });


  //오른쪽 상단 버튼-이전보기
  $(".left_btn2").click(function(){

    if(g_pop2>0){
      $(".sec02-2_pop>li").eq(g_pop2).stop().fadeOut(); //기존거 사라짐
      g_pop2--;

      $(".g_page2 span:nth-child(1)").text(g_pop2+1);
      $(".sec02-2_pop>li").eq(g_pop2).stop().fadeIn();
    }

  });


  //오른쪽 상단 버튼-닫기
  $(".btn_close2").click(function(){ 
    
    $("html").css({overflowY:"scroll"});
		$("#sec02-2_popup").stop(true,true).fadeOut();
		$(".sec02-2_pop>li").stop(true,true).hide();

  });















  //03

  
	//화살표 깜빡깜빡___________________________________
  function guide1(){
    $(".w_slide_btn>i").toggleClass("active");
  }
  auto1=setInterval(guide1,500);


  //태블릿 화면(오버시 화면 올라가게)_________________
  $(".w_tab_slide ul li:nth-child(n)").mouseenter(function(){
    $(this).css("background-position","0 100%");
  });
  $(".w_tab_slide ul li:nth-child(n)").mouseleave(function(){
    $(this).css("background-position","0 0");
  });


  //웹디자인 슬라이드__________________________________
  $(".w_list li").click(function(){

    clearInterval(auto1);  //화살표 깜빡거림 멈추게

    $(".w_list li").removeClass("btn_active"); //기존 숫자 
    $(this).addClass("btn_active");  //클릭한 숫자

    val=$(this).index(); 
    $(".w_bg ul").animate({"left":-1300*val+"px"});  //왼쪽 배경이미지 슬라이드
    $(".w_txt_slide ul").animate({"left":-300*val+"px"});  //왼쪽 설명텍스트 슬라이드
    $(".w_tab_slide ul").animate({"left":-794*val+"px"});  //오른쪽 태블릿이미지 슬라이드

  });


  //DETAIL 버튼 클릭시 모달창 띄우기_______________________
  $(".w_txt_slide>ul>li>span").click(function(){

    w_pop=$(this).parent().index();	//Detail 버튼의 부모의 index	 
    $(".w_page span:nth-child(1)").text(w_pop+1); //오른쪽 상단 페이지 넘버
    $("html").css({overflowY:"hidden"}); //기존 html 스크롤 숨기기
    $(".w_pop>li").eq(w_pop).show(); //w_pop index에 해당하는 팜업보이기
    $("#w_popup").stop(true,true).fadeIn(); //검정배경    

  });

  

 
    /*오른쪽 상단 버튼-닫기*/
	$(".w_btn_close, .w_back").click(function(){
		$("html").css({overflowY:"scroll"});
		$("#w_popup").stop(true,true).fadeOut();
		$(".w_pop>li").stop(true,true).hide();
	}); 

	














	
});