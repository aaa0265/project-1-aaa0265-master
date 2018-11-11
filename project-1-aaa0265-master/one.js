//tip을 누르면 tip내용이 스르륵 열려요!
$("#tip").click(function(){
  $("#tiptext").slideToggle(1000);

  var max = Math.pow( 256, 3 ); //256의 3승 -> 색조합 RGB 각 265 3개씩
  //floor : 작거나 같은 정수.
  //random : 난수생성!!
  //toString : 생성 된 숫자를 몇진수로 바꿀거냐 >> 색 표기법은 16진수임!
  var random = Math.floor(Math.random()*max).toString(16);
  //이제 tip이 있는 곳에서 랜덤하게 숫자 바꿔줄거임~
  document.getElementById("tip").style.color = "#"+random; //색상 표기법

});

//꿀팁은 길어서 숨겨뒀다가 제목을 누르면 스르륵 열리게 해줄겁니다!
$("#htip").click(function(){
  $("#exp").slideToggle(1000);
});

//첫화면에서 설명부분에 페이드 인 효과를 줍니다!
$("#back").hide();
show();

function show(){
  $("#back").fadeIn(2000);
}

var it=0;
var it2=0;
var it3=0;

//나라별로 공통적인 효과.
//나라소개와, 사진, 꿀팁 부분의 큰 제목에 타이핑효과를 줍니다.
function first(){
	text=ctyname.innerText;
  text2=picture.innerText;
  text3=htip.innerText;
	typing_name();
  typing_pic();
  typing_tip();
}

function typing_name(){
  //한글자씩 추가, 정해준 시간대로 타이핑.
	if(it<=text.length){
		ctyname.innerText=text.substring(0,it)
    //하나씩 추가
		it++;
		setTimeout("typing_name()",100);
	}
	else {
		return;
	}
}

function typing_pic(){
  if(it2<=text2.length){
    picture.innerText=text2.substring(0,it2)
    it2++;
    setTimeout("typing_pic()",100);
  }
  else {
    return;
  }
}

function typing_tip(){
  if(it3<=text3.length){
    htip.innerText=text3.substring(0,it3)
    it3++;
    setTimeout("typing_tip()",100);
  }
  else {
    return;
  }
}

//마우스 올렸을 때 크게 하고 싶어서 만든 함수
function bigger(x) {
    x.style.height="16em";
    x.style.width="auto";
}

//마우스 나갔을 때 다시 돌려놓고 싶어서 만든 함수
function back(x) {
    x.style.height="10em";
    x.style.width="auto";
}


//로켓을 쏴줍니다!
//left와 bottom은 좌표. 그냥 여기저기 돌아다니다가 홈페이지 이름부분에서 멈춰요.
$("#roket").click(function(){
  $("#roket").animate({
    left: '20%' ,bottom: -30},
  function(){$("#roket").animate({
    left: '23%' ,top: -80
  },function(){$("#roket").animate({
    left: '95%' ,top: -500
  },function(){$("#roket").animate({
    left: '70%' ,top: -500
  },function(){$("#roket").animate({
    left: '30%', top :-500
  },function(){$("#roket").animate({
    left:'0%', top: -500
  },function(){$("#roket").animate({
    left:'27%', top:-950
  },function(){$("#roket").animate({
    left:"34%", top:-770
  },function(){$("#roket").animate({
    left:"60%", top:-770
  },function(){$("#roket").animate({
    left:"64%", top:-880
  });
});
});
});
});
});
});
});
});
});
});
