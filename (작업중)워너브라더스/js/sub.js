$(document).ready(function(){

  /* /////////////////1.Movies/////////////////// */
  //메인top메뉴-서브메뉴나오게
  $(".WbMainMenu>li").hover(function(){

    $(this).find("a>span").css({"opacity":"1"}).animate({top:"44px"});

    $(this).find(">ul").stop().slideDown("fast");

  },function(){


    $(this).find("a>span").css({"opacity":"0"}).animate({top:"50px"});

    $(this).find(">ul").stop().slideUp("slow");
  }); 






  //auto-slide
  function bannerAuto(){

    $(".ban ul").stop().animate({marginLeft:"-=150px"},500,function(){			
      $(".ban ul li:first-child").appendTo(".ban ul"); //첫번째 이미지 맨뒤로 이동
      $(this).css({marginLeft:"0px"}); //최종목적지
    });	

  }
  bauto=setInterval(bannerAuto,4000);


  //next
  $(".ban_btn .ban_right").click(function(){

    clearInterval(bauto);  

    $(".ban ul").stop().animate({marginLeft:"-=150px"},500,function(){			
			$(".ban ul li:first-child").appendTo(".ban ul"); //첫번째 이미지 맨뒤로 이동
			$(this).css({marginLeft:"0px"}); //최종목적지
		});
    
    bauto=setInterval(bannerAuto,4000);

  });

  //prev
  $(".ban_btn .ban_left").click(function(){

    clearInterval(bauto);

    $(".ban ul").stop().animate({marginLeft:"+=150px"},500,function(){			
			$(".ban ul li:last-child").prependTo(".ban ul"); //마지막 이미지 맨앞로 이동
			$(this).css({marginLeft:"0px"}); //최종목적지
		});

    bauto=setInterval(bannerAuto,4000);

  });

  
  //mouse hover - stop slide
  $(".ban").hover(function(){ 
		clearInterval(bauto);  
	}, function(){
		bauto=setInterval(bannerAuto,4000);
	});



  //slide로 visual change , 소개page change
 
  $(".ban ul li").click(function(){

    clearInterval(bauto);
    $(".play2").hide();
    $(".stop2").show();

    $(".movieVisual img").attr("src",$(this).find(">a img").attr("src"));
    $(".bb1 img").attr("src",$(this).find(">a img").attr("src"));
    $(".panel>li").hide(); //기존의 보여진 내용 숨기기
    $($(this).find("a").attr("href")).fadeIn("slow");
    return false;
    
    

    
  });






  



   /* stop/play */
   $(".play2").hide();

   $(".stop2").click(function(){
     clearInterval(bauto);
     $(".stop2").hide();
     $(".play2").show();
     
   });
 
   $(".play2").click(function(){
    bauto=setInterval(bannerAuto,4000);
     $(".play2").hide();
     $(".stop2").show();
   });


   /* 영화소개page바뀌는거 */
   $(".panel>li:not(:first)").hide();















   /* /////////////6.additional///////////////////// */
   /* 탭메뉴 클릭_____________________________*/

  /* 탭메뉴 클릭_____________________________*/

  $(".panel2>li:not(:first)").hide();
	//첫번째를 제외한 나머지 내용 숨기기
	
	$(".tab>li").click(function(){
		$(".tab>li").removeClass("selected");//기존선택된 selected 클래스삭제
		$(this).addClass("selected"); //새로 선택된 selected 클래스 생성
		$(".panel2>li").hide();//기존의 보여진 내용 숨기기
		$($(this).find("a").attr("href")).show();//새로 선택된 내용 href 연결된내용 보여주기
	});

  
  //해당 탭메뉴를 클릭할때 해당 첫 썸네일을 클릭시킴....(마지막에 누른채로 보이지 않고 항상 처음처럼 보이게 함)
  $(".tab li:first-child").click(function(){  
    $(".gallery1 .thumbs li:first").click();
  }); 
  $(".tab li:nth-child(2)").click(function(){  
    $(".gallery2 .thumbs li:first").click();
  });
  $(".tab li:last-child").click(function(){  
      $(".gallery3 .thumbs li:first").click();
  });


  /*탭메뉴별 이미지갤러리_____________________________*/

  //tab1-gallery
  let goldidxA=0;  //기존이미지
  let gidxA=0;   //선택되는 이미지

  function galleryImgA(gidxA){ //gidx는 선택되는 이미지

    if(goldidxA!=gidxA){ //기존의 이미지와 선택된 이미지가 다를때...

      $(".gallery1 .thumbs li").eq(goldidxA).css({"opacity":0.3}); // 기존의 썸네일 흐리게		
      $(".gallery1 .thumbs li").eq(gidxA).css({"opacity":1}); //선택된 썸네일 선명하게
      $(".gallery1 .largeImg li").eq(goldidxA).stop().fadeOut(300);  //기존 이미지 사라짐
      $(".gallery1 .largeImg li").eq(gidxA).stop().fadeIn(300); //선택된 이미지 나타남

    }
    goldidxA=gidxA; //선택된 이미지는 다시 기존이미지로 저장

  }

  //썸네일버튼 클릭시.....
  $(".gallery1 .thumbs li").click(function(){

		gidxA=$(this).index();
		galleryImgA(gidxA);

    $("#tabmenu .blackTitle").text($(this).find("a img").attr("alt"));
    return false;




	});


  //tab2-gallery
  let goldidxB=0;  //기존이미지
  let gidxB=0;   //선택되는 이미지

  function galleryImgB(gidxB){ //gidx는 선택되는 이미지

    if(goldidxB!=gidxB){ //기존의 이미지와 선택된 이미지가 다를때...

      $(".gallery2 .thumbs li").eq(goldidxB).css({"opacity":0.3}); // 기존의 썸네일 흐리게		
      $(".gallery2 .thumbs li").eq(gidxB).css({"opacity":1}); //선택된 썸네일 선명하게
      $(".gallery2 .largeImg li").eq(goldidxB).stop().fadeOut(300);  //기존 이미지 사라짐
      $(".gallery2 .largeImg li").eq(gidxB).stop().fadeIn(300); //선택된 이미지 나타남

    }
    goldidxB=gidxB; //선택된 이미지는 다시 기존이미지로 저장

  }

  //썸네일버튼 클릭시.....
  $(".gallery2 .thumbs li").click(function(){

		gidxB=$(this).index();
		galleryImgB(gidxB);

    $("#tabmenu .blackTitle").text($(this).find("a img").attr("alt"));
    return false;

	});





  

  

    
    
    

    
  

  




  








    

	});














































	

