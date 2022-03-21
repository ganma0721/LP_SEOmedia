var delaySpeed = 300;
$(window).on("load scroll", function (){
	$(".fade_trigger1 .element").each(function(i){
		var element = $(".fade_trigger1").offset().top;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll > element - windowHeight + windowHeight / 5){
			$(this).delay(i*(delaySpeed)).queue(function(){

				$(this).stop(true, true).animate( { opacity: 1 }, {
					duration: 700,
					step: function (now) {
					var dist = 70 - (70 * now);
					$(this).css({ transform: 'translateY(' + dist + 'px)' });
					}
				});

			});
		}
	});
});



$(function(){
	$(window).scroll(function (){
		$('.header_icon').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 200){
				$(this).addClass('scrollin');
			}
		});
	});
});



// スムーススクロール
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});


// 下から上
$(function(){
  $(window).scroll(function (){
    $('.fadein').each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 100){
        $(this).addClass('scrollin');
      }
    });
  });
});

// 右から左
$(function(){
  $(window).scroll(function (){
    $('.fadein_right').each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 120){
        $(this).addClass('scrollin');
      }
    });
  });
});


// 左から右
$(function(){
  $(window).scroll(function (){
    $('.fadein_left').each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 120){
        $(this).addClass('scrollin');
      }
    });
  });
});



// 追従アンカーリンク
$(function() {
    var topBtn = $('#fixe');
    topBtn.hide();
    //スクロールがxxxに達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
});


$(function() {
  $('#submit').prop('disabled', true);

  $('#check').on('click', function() {
    if ( $(this).prop('checked') == false ) {
      $('#submit').prop('disabled', true);
    } else {
      $('#submit').prop('disabled', false);
    }
  });
});
