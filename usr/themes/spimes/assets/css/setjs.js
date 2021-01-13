

$(function(){   
$('#logoUrl-0-1').attr('placeholder','https://xxx.com/xxx.png')
$('#logoUrldark-0-2').attr('placeholder','https://xxx.com/xxx.png') 
$('#favicon-0-3').attr('placeholder','https://xxx.com/xxx.ico')
$('#liuyan-0-4').attr('placeholder','liuyan')
$('#sitelink-0-5').attr('placeholder','sitelink')
$('#imghdp-0-6').attr('placeholder','1,2')
$('#dhtop-0-7').attr('placeholder','1,2')
$('#nolist-0-8').attr('placeholder','选填')
$('#topnews-0-9').attr('placeholder','1,2,3,4') 
$('#sequid-0-10').attr('placeholder','1,2,3,4')   
$('#slidenum-0-11').attr('placeholder','默认为30天最热（选填）')
$('#zhiduid-0-12').attr('placeholder','1')  
$('#labanew-0-13').attr('placeholder','1,2')
$('#footnew-0-14').attr('placeholder','1')
$('#footnewmore-0-15').attr('placeholder','https://xxx.com/xxx')
$('#sidetag-0-16').attr('placeholder','https://xxx.com/xxx')
$('#liuynes-0-17').attr('placeholder','https://xxx.com/xxx')
$('#sitedate-0-18').attr('placeholder','2017-05-20')
$('#navtops-0-21').attr('placeholder','标题|https://xxx.com/xxx|文字描述|icon-icon-test')
$('#navsecs-0-22').attr('placeholder','标题|https://xxx.com') 
$('#adimg-0-23').attr('placeholder','<a href="https://xxx.com/xxx" ><img src="https://xxxx.com/xxxx.png"></a>')
$('#hdadimg-0-24').attr('placeholder','<a href="https://xxx.com/xxx" ><img src="https://xxxx.com/xxxx.png"></a>')  
$('#listadimg-0-25').attr('placeholder','<a href="https://xxx.com/xxx" ><img src="https://xxxx.com/xxxx.png"></a>')  
$('#txtadimg-0-26').attr('placeholder','<a href="https://xxx.com/xxx" ><img src="https://xxxx.com/xxxx.png"></a>')  
$('#txtaddown-0-27').attr('placeholder','<a href="https://xxx.com/xxx" ><img src="https://xxxx.com/xxxx.png"></a>')   
$('#footernavs-0-38').attr('placeholder','<a href="https://xxx.com/xxx">标题</a>')
$('#footernav-0-39').attr('placeholder','<a href="https://xxx.com/xxx">标题</a>')    
$('#footnav-0-40').attr('placeholder','版权所有 本站内容未经书面许可,禁止一切形式的转载')  
$('#footlogo-0-41').attr('placeholder','https://xxx.com/xxx.png')  
$('#navmobi-0-44').attr('placeholder','icon-huati|https://xxx.com')  
$('#Keywordspress-0-49').attr('placeholder','关键字|https:/xxx.com')  
$('#cdnurla-0-51').attr('placeholder','www.xxx.com/usr/uploads/') 
$('#cdnurlb-0-52').attr('placeholder','cdn.xxx.com/') 
$('#imageView-0-53').attr('placeholder','选填')    
$('#pdmapi-0-54').attr('placeholder','https://danmu.izhuolin.cn/3.0/')  
$('#plogo-0-55').attr('placeholder','https://xxx.com/xxx.png')
$('#navtops-0-23').attr('placeholder','自定义标题|https://www.xxx.com|自定义描述|icon-dianying')
$('#navsecs-0-24').attr('placeholder','标题|链接')
$('#footernavs-0-43').attr('placeholder','<a target="_blank" href="//www.dpaoz.com">小灯泡</a>')
$('#footernav-0-44').attr('placeholder','<a target="_blank" href="//www.dpaoz.com">小灯泡</a>')
$('#footnav-0-45').attr('placeholder','本站内容未经书面许可,禁止一切形式的转载。粤ICP备123456号-1')
$('#navmobi-0-49').attr('placeholder','icon-shouye|https://www.xxx.com')
$('#cdnurla-0-57').attr('placeholder','www.xxx.com/usr/uploads/')
$('#cdnurlb-0-58').attr('placeholder','x.xxx.com/')
$('#Keywordspress-0-55').attr('placeholder','关键词|www.xxx.com')
$('#navmobi-0-50').attr('placeholder','icon-shouye|https://www.xxx.com')
})


// Run when the DOM ready
jQuery( function ( $ ) {

	var clickEvent = 'ontouchstart' in window ? 'touchstart' : 'click';

	/**
	 * Scroll to top
	 */
	function scrollToTop() {
		var $window = $( window ),
			$button = $( '#scroll-to-top' );
		$window.scroll( function () {
			$button[$window.scrollTop() > 100 ? 'removeClass' : 'addClass']( 'hidden' );
		} );
		$button.on( clickEvent, function ( e ) {
			e.preventDefault();
			$( 'body, html' ).animate( {
				scrollTop: 0
			}, 500 );
		} );
	}

	scrollToTop();
} );


$(function() {
	$(".Close").click(function() {
		$(".pannel_box").stop().slideToggle();
        $(".Close").toggleClass("close_top",100);
	})
});


 $('.current').after('<li><a href="/usr/themes/spimes/ext/danmu/admin"><i class="icon iconfont icon-icon-test15"></i> 播放器设置</a></li>');

