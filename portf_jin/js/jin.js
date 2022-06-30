

$(document).ready(function(){



  //main
  $(window).scroll(function(){ //브라우저에 스크롤이 발생하는 순간부터 
		 let curpos=$(window).scrollTop(); 
		/*$(".jinlogo").stop().animate({top:curpos},"fast");

    if($(this).scrollTop()>545){
      $(".jinlogo").fadeOut();
    }else{
      $(".jinlogo").fadeIn();
    } */

    $("#txt1").text($(this).scrollTop());

    

    if($(this).scrollTop()<29){
      $(".main_blue").stop().animate({top:0},"normal");
    }else if($(this).scrollTop()>30 && $(this).scrollTop()<200){
      $(".main_blue").stop().animate({top:curpos+100},"normal");
    } else if($(this).scrollTop()<201){
      $("main_blue").stop().animate({top:100},"normal");
    } 

    if($(this).scrollTop()<29){
      $(".main_gold").stop().animate({top:0},"slow");
    }else if($(this).scrollTop()>30 && $(this).scrollTop()<200){
      $(".main_gold").stop().animate({top:curpos},"slow");
    } else if($(this).scrollTop()<201){
      $("main_gold").stop().animate({top:0},"slow");
    } 

    if($(this).scrollTop()<29){
      $(".main_text").stop().animate({top:150},"slow");
    }else if($(this).scrollTop()>30 && $(this).scrollTop()<200){
      $(".main_text").stop().animate({top:curpos+250},"slow");
    } else if($(this).scrollTop()<201){
      $("main_text").stop().animate({top:0},"slow");
    } 


    /*if($(this).scrollTop()>200 && $(this).scrollTop()<415){
      $(".main_blue").stop().animate({top:curpos},"fast");
    }else if($(this).scrollTop()<416){
      $("main_blue").stop().animate({top:415},"fast");
    } else{
      $("main_blue").stop().animate({top:10},"fast");
    }   */

  /*   if($(this).scrollTop()<149){
      $(".main_gold").stop().animate({top:curpos+200},"normal");
    }else if($(this).scrollTop()>150){
      $(".main_gold").stop().animate({top:curpos},"normal");
    } 
 */
    /* if($(this).scrollTop()>300 && $(this).scrollTop()<415){
      $(".main_gold").stop().animate({top:curpos},"fast");
    }else{
      $(".main_gold").stop().animate({top:415},"fast")
    }  */

    if($(this).scrollTop()>300){
      $(".jinlogo").fadeOut();
    }else{
      $(".jinlogo").fadeIn();
    } 
    
	});


  

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

  


  $(".sec02_i2").click(function(){
    $(this).removeClass("sec02_clicked2");
    $(this).addClass("sec02_clicked");
    $(".sec02_i1").removeClass("sec02_clicked");
    $(".sec02_i1").addClass("sec02_clicked2");
  });

  $(".sec02_i1").click(function(){
    $(this).addClass("sec02_clicked");
    $(this).removeClass("sec02_clicked2");
    $(".sec02_i2").removeClass("sec02_clicked");
    $(".sec02_i2").addClass("sec02_clicked2");
  });

















    //--------02-2
  /*   $(".sec02-2_tab>li").click(function(){

      for(i=0;i<6;i++){  
        $(".sec02-2_tab li").eq(i).find(">a>img").attr({"src":"img/tab"+i+".png"}); 
     
      }
  
      inum=$(this).index();
      $(this).find("a img").attr({"src":"img/tabon"+inum+".png"});
  
      $(".sec02-2_i1").removeClass("active1"); 
      
      $(".sec02_panel>li").hide();
      $($(this).find("a").attr("href")).show();
    });
   */
  
  
  
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

    $("#sec02-2_popup").scrollTop(0);

    if(g_pop2<8){

      $(".sec02-2_pop>li").eq(g_pop2).stop().fadeOut(); //기존거 사라짐
			g_pop2++;

			$(".g_page2 span:nth-child(1)").text(g_pop2+1);
			$(".sec02-2_pop>li").eq(g_pop2).stop().fadeIn();

    }

  });


  //오른쪽 상단 버튼-이전보기
  $(".left_btn2").click(function(){

    $("#sec02-2_popup").scrollTop(0);

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
  /* $(".w_tab_slide ul li:nth-child(n)").mouseenter(function(){
    $(this).css("background-position","0 100%");
  });
  $(".w_tab_slide ul li:nth-child(n)").mouseleave(function(){
    $(this).css("background-position","0 0");
  }); */


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

	







  //04
    //DETAIL 버튼 클릭시 모달창 띄우기_______________________
    $(".w_txt_slide_04>ul>li>span").click(function(){

      w_pop4=$(this).parent().index();	//Detail 버튼의 부모의 index	 
     
      $("html").css({overflowY:"hidden"}); //기존 html 스크롤 숨기기
      $(".w_pop_04>li").eq(w_pop4).show(); //w_pop index에 해당하는 팜업보이기
      $("#w_popup_04").stop(true,true).fadeIn(); //검정배경    
  
    });
  
    
  
   
      /*오른쪽 상단 버튼-닫기*/
    $(".w_btn_close_04, .w_back_04").click(function(){
      $("html").css({overflowY:"scroll"});
      $("#w_popup_04").stop(true,true).fadeOut();
      $(".w_pop_04>li").stop(true,true).hide();
    }); 
  
    


//05
    //DETAIL 버튼 클릭시 모달창 띄우기_______________________
    $(".w_txt_slide_05>ul>li>span").click(function(){

      w_pop5=$(this).parent().index();	//Detail 버튼의 부모의 index	 
     
      $("html").css({overflowY:"hidden"}); //기존 html 스크롤 숨기기
      $(".w_pop_05>li").eq(w_pop5).show(); //w_pop index에 해당하는 팜업보이기
      $("#w_popup_05").stop(true,true).fadeIn(); //검정배경    
  
    });
  
    
  
   
      /*오른쪽 상단 버튼-닫기*/
    $(".w_btn_close_05, .w_back_05").click(function(){
      $("html").css({overflowY:"scroll"});
      $("#w_popup_05").stop(true,true).fadeOut();
      $(".w_pop_05>li").stop(true,true).hide();
    }); 
  
    

//05  버튼-모바일 폰 연결
$(".sec05_btn1").click(function(){//각 메뉴를 클릭했을때
  $(this).next().show(); //다음 형제인 .pop을 보이게함
  $('#ttee').attr('src', $('#ttee').attr('src'));
  $("html").css({overflowY:"hidden"});//body스크롤없앰
  return false;
});





$(".close").click(function(){//close눌렀을때
  $(".sec05_pop").hide(); //.sec05_pop을 안보이게함
  $("html").css({"overflow-y":"scroll"});//body스크롤생김   
});

/*검정 배경 클릭시 닫기*/
$(".sec05_pop").click(function(){
  $("html").css({"overflow-y":"scroll"});
  $(".sec05_pop").hide();
  return false;
});






//06
	//리스트 이미지 클릭시.....
  $(".planStep_list>li").click(function(){

    g_pop6=$(this).index();

    $(".g_page_06 span:nth-child(1)").text(g_pop6+1); //오른쪽 상단 페이지 넘버
    $("html").css({overflowY:"hidden"}); //기존 html 스크롤 숨기기
		$(".pop_06>li").eq(g_pop6).show(); //g_pop index에 해당하는 팝업보이기
		$("#sec06_popup").stop().fadeIn(); //검정배경

  });


  //오른쪽 상단 버튼-다음보기
  $(".right_btn_06").click(function(){

    if(g_pop6<2){

      $(".pop_06>li").eq(g_pop6).stop().fadeOut(); //기존거 사라짐
			g_pop6++;

			$(".g_page_06 span:nth-child(1)").text(g_pop6+1);
			$(".pop_06>li").eq(g_pop6).stop().fadeIn();

    }

  });


  //오른쪽 상단 버튼-이전보기
  $(".left_btn_06").click(function(){

    if(g_pop6>0){
      $(".pop_06>li").eq(g_pop6).stop().fadeOut(); //기존거 사라짐
      g_pop6--;

      $(".g_page_06 span:nth-child(1)").text(g_pop6+1);
      $(".pop_06>li").eq(g_pop6).stop().fadeIn();
    }

  });


  //오른쪽 상단 버튼-닫기
  $(".btn_close_06").click(function(){ 
    
    $("html").css({overflowY:"scroll"});
		$("#sec06_popup").stop(true,true).fadeOut();
		$(".pop_06>li").stop(true,true).hide();

  });










	
});