
//  边栏分享悬浮
var sleft=main.offsetLeft - 70;
$(document).ready(function() {  
        $(".sider-footer").css({'left': sleft+'px', 'opacity': '1', 'transition': '1s', 'top': '150px', 'width': '28px', 'position': 'fixed'})
})


//entry-footer fix
$(document).ready(function(){
    var anum=$(".agree-num").text();
    if ($("#footfix").length > 0) {
    
    var navOffw = $(".secnav").width();
	if (navOffw > 750) {
    
    var wseft=content.offsetWidth;
    $(".entry-bar-inner").css("width", wseft+'px');
    
    $(".entry-bar-inner .post-tags").prepend("<p class='bar_zan'><i class='icon iconfont icon-icon-test36'></i> 赞同 "+anum+"</p>");
    
    $(".bar_zan").click(function() {
    
     window.scroll({
        top: $("#agree-btn").first().offset().top - ($(".top-bar").height() + 100),
        behavior: "smooth"
       });
    })
    
    var a,b,c;
    a = $(window).height();    //浏览器窗口高度
    var group = $(".entry-footer");
    $(window).scroll(function(){
        b = $(this).scrollTop();   //页面滚动的高度
        c = group.offset().top;    //元素距离文档（document）顶部的高度
        if(a+b>c){
           $(".entry-footer").removeClass("fixed"); 
           $(".entry-bar-inner").css("width", 'auto');
           $(".entry-bar-inner .post-tags .bar_zan").remove();
           $(".entry-bar-inner .post-tags .bar_zan").remove();
           
        }
        else{
           $(".entry-footer").addClass("fixed"); 
           $(".entry-bar-inner").css("width", wseft+'px');
           if(!$(".bar_zan").width()){
           $(".entry-bar-inner .post-tags").prepend("<p class='bar_zan'><i class='icon iconfont icon-icon-test36'></i> 赞同 "+anum+"</p>");
           $(".bar_zan").click(function() {
    
     window.scroll({
        top: $("#agree-btn").first().offset().top - ($(".top-bar").height() + 100),
        behavior: "smooth"
       });
    })
           }
        }
    });
    
	}
	else{
	     $(".entry-footer").removeClass("fixed"); 
	     $(".entry-bar-inner .post-tags .bar_zan").remove();
	}
	
    }

  });

/**
 * ViewImage.js
 * https://tokinx.github.io/view-image
 */

! function(a) {
	a.extend({
		viewImage: function(c) {
			var b = a.extend({
				target: ".view-image img",
				exclude: "",
				delay: 300
			}, c);
			a(b.exclude).attr("view-image", !1);
			a(b.target).click(function() {
				var c = a(this).attr("src"),
					d = a(this).attr("href"),
					f = "";
				return a(this).attr("view-image") || a(this).attr("rel") ? void 0 : (f = c ? c : d, a("body").append(
					"\x3cstyle class\x3d'view-image-css'\x3e.view-img{position:fixed;background:#fff;background:rgba(255,255,255,.92);width:100%;height:100%;top:0;left:0;text-align:center;padding:2%;z-index:999;cursor: zoom-out}.view-img img,.view-img span{max-width:100%;max-height:100%;position:relative;top:50%;transform: translateY(-50%);}.view-img img{animation:view-img-show .8s -0.1s ease-in-out}.view-img span{height:2em;color:#AAB2BD;overflow:hidden;position:absolute;top:50%;left:0;right:0;width:120px;text-align:center;margin:-1em auto;}.view-img span:after{content:'';position:absolute;bottom:0;left:0;transform: translateX(-100%);width:100%;height:2px;background:#3274ff;animation:view-img-load .8s -0.1s ease-in-out infinite;}@keyframes view-img-load{0%{transform: translateX(-100%);}100%{transform: translateX(100%);}}@keyframes view-img-show{0%{opacity:0;}100%{opacity:1;}}\x3c/style\x3e\x3cdiv class\x3d'view-img'\x3e\x3cspan\x3eloading...\x3c/span\x3e\x3c/div\x3e"
				), setTimeout(function() {
					var b = new Image;
					b.src = f;
					b.onload = function() {
						a(".view-img").html("\x3cimg src\x3d" + this.src + "\x3e")
					};
					a(".view-img").click(function() {
						a(".view-image-css").remove();
						a(this).remove()
					})
				}, b.delay), !1)
			})
		}
	})
}(jQuery);
$(function() {
	if (document.getElementById("sideid")) {

		var r = $("#content").height()
		var b = $("#secondary").height()

		if (r < b) {
			var f = b - r;

			if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {} else {
				$("#content").css("margin-bottom", f + "px");
			};

		}

		//var a = $(".widget-fixed").offset().top - parseFloat($(".widget-fixed").css("marginTop").replace(/auto/, 0)),
		//	c = $(".site-footer").offset().top - parseFloat($(".site-footer").css("marginTop").replace(/auto/, 0)) - $(
		//		".widget-fixed").outerHeight();
		//$(window).scroll(function(b) {
		//	b = $(this).scrollTop();
		//	b > a ? b < c ? $(".widget-fixed").addClass("fixed").removeAttr("style") : $(".widget-fixed").removeClass(
		//		"fixed").css({
		//		position: "absolute",
		//       width: "90%",
		//       //top: c - a + "px",
		//		top: c + "px"
		//	}) : $(".widget-fixed").removeClass("fixed")
		//})
	}
});
$(function() {
	$(".navigation-tab-item").click(function() {
		$(".navigation-tab-item").removeClass("active");
		$(this).addClass("active");
		$(".navigation-tab-overlay").css({
			left: 25 * $(this).prevAll().length + "%"
		})
	})
});
$(function() {
	$(".menu-item").click(function() {
		$(".menu-item").removeClass("active");
		$(this).addClass("active");
		$(".menu-item-overlay").css({
			left: 25 * $(this).prevAll().length + "%"
		})
	})
});
$(function() {
	$("body").show();
	NProgress.start();
	setTimeout(function() {
		NProgress.done();
		$(".fade").removeClass("out")
	}, 1E3)
});
jQuery(function(a) {
	var c = "ontouchstart" in window ? "touchstart" : "click";
	(function() {
		var b = a(window),
			e = a("#scroll-to-top");
		b.scroll(function() {
			e[100 < b.scrollTop() ? "removeClass" : "addClass"]("hidden")
		});
		e.on(c, function(b) {
			b.preventDefault();
			a("body, html").animate({
				scrollTop: 0
			}, 500)
		})
	})()
});
jQuery(document).ready(function(a) {
	function c(b, c, d) {
		flag = !0;
		a(b).click(function() {
			a(b).prop("class", (flag = !flag) ? c : d)
		})
	}(function(b, c, d) {
		flag = !0;
		a(b).click(function() {
			a("#aus").prop("class", (flag = !flag) ? c : d)
		})
	})("#auStats", "austats_click", "austats_close");
	(function(b, c) {
		flag = !0;
		a(b).mouseleave(function() {
			a("#aus").prop("class", c)
		})
	})("#aus", "austats_click", "austats_close");
	c("#mStats", "stats_click", "stats_close");
	c("#mClick", "mobile_click", "mobile_close");
	(function(b, c, d) {
		flas = flag = !0;
		a(b).click(function() {
			a("#navbar-search").prop("class", (flag = !flag) ? c : d);
			a("#soico").prop("class", (flas = !flas) ? "icon iconfont icon-sousuo" : "icon iconfont icon-shibai1")
		})
	})("#soStats", "navbar-search socollapse sostats soopen", "navbar-search socollapse sostats sooff");
});
$(document).ready(function() {
	$(".article_click").click(function() {
		$(".fn_article_nav").toggle()
	})
});
// hljs行号
$(document).ready(function() {
	if ($("pre").length > 0) {
		$("pre").append("<i class='bg-primary'></i>");
	}
});
$("pre code").each(function() {
	$(this).html("<ol><li>" + $(this).html().replace(/\n/g, "\n</li><li>") + "\n</li></ol>");
});
$(".entry-content p img,.lonesome-img a img").each(function() {
	if ($(this).hasClass("biaoqing")) {} else {
		$("\x3cfigcaption class\x3d'image_title'\x3e\x3c/figcaption\x3e").insertAfter(this);
		var a = $(this).parents(".entry-content p,.lonesome-img a").find("img").attr("alt");
		$(this).siblings(".image_title").html('\x3ci class\x3d"icon iconfont icon-huatifuhao"\x3e\x3c/i\x3e ' + a)
	}
});
$(function() {
	function a() {
		$("footer").removeClass("fixed-bottom");
		document.body.scrollHeight > window.innerHeight ? $("footer").removeClass("fixed-bottom") : $("footer").addClass(
			"fixed-bottom")
	}
	a();
	$(window).resize(a)
});
$(function() {
	function a() {
		$("navigation-tab").removeClass("fixed-bottom");
		document.body.scrollHeight > window.innerHeight ? $("navigation-tab").removeClass("fixed-bottom") : $(
			"navigation-tab").addClass("fixed-bottom")
	}
	a();
	$(window).resize(a)
});
var regx = /\.(jpe?g|png)(?=\?|$)/i;
$(".entry-content").find("a").each(function() {
	var a = $(this).attr("href");
	regx.test(a) || $(this).attr("rel", "external")
});
$(document).ready(function() {
	$(".toc a").click(function() {
		if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
			var a = $(this.hash),
				a = a.length && a || $("[name\x3d" + this.hash.slice(1) + "]");
			if (a.length) return a = a.offset().top + -60 + "px", $("html,body").animate({
				scrollTop: a
			}, 500), !1
		}
	})
});
(function(a) {
	function c(b) {
		b.removeAttr("style").removeAttr("class").removeAttr("id");
		b = b.children();
		null != b && b.each(function() {
			c(a(this))
		})
	}
	a.fn.easyread = function(b) {
		var e = a.extend({
			contentClass: "none",
			titleClass: "none",
			videoClass: "none"
		}, b);
		a(this).bind("click", function() {
			a("body").css({
				overflow: "hidden"
			});
			a("article").append(
				'\x3cdiv id\x3d"bg_read" style\x3d"position:fixed; top: 0px; left: 0px; right: 0px; bottom: 0px; width: 100%; height: 100%; border: none; margin: 0px; padding: 0px; overflow: hidden; z-index: 99998; background-color: white; opacity: 1; "\x3e\x3cdiv style\x3d"position:absolute; width:32px; height32px; left:50%; top:50%"\x3e\x3cspan class\x3d"loading_read"\x3e\x3c/span\x3e\x3c/div\x3e\x3c/div\x3e'
			);
			var b = a("." + e.titleClass).text(),
				f = a("." + e.contentClass).clone();
			f.children().each(function() {
				c(a(this))
			});
			b = '\x3cdiv class\x3d"box_read"\x3e\x3cdiv class\x3d"entry-content"\x3e\x3ch1\x3e' + b + "\x3c/h1\x3e" + f.html() +
				'\x3cdiv style\x3d"clear: both;"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cspan class\x3d"close_read"\x3e\x3c/span\x3e';
			a("#bg_read").append(b);
			a(".title_read").animate({
				marginTop: "5px"
			}, 288);
			a(".loading_read").parent("div").remove();
			a(".close_read").bind("click", function() {
				a("#bg_read").fadeOut(288, function() {
					a(this).remove();
					a("body").css("overflow", "auto")
				});
				return !1
			});
			return !1
		})
	}
})(jQuery);
$(document).ready(function() {
    if ($(".read").length > 0) {
	$(".read").easyread({
		titleClass: "page-title",
		contentClass: "entry-content",
		videoClass: "entry-video"
	})
    }
});
$(window).scroll(function() {
	var a = $(window).scrollTop(),
		c = $(document).height(),
		b = $(window).height();
	scrollPercent = a / (c - b) * 100;
	scrollPercent = scrollPercent.toFixed(1);
	$("#percentageCounter").css({
		width: scrollPercent + "%"
	});
	70 < scrollPercent && $("#navigation").css({
		top: "0"
	});
	70 > scrollPercent && $("#navigation").css({
		top: "-66px"
	})
}).trigger("scroll");
if (0 < $(".OwO").length) var OwO_demo = new OwO({
	logo: '\x3csvg viewBox\x3d"0 0 24 24" stroke\x3d"currentColor" stroke-width\x3d"2" fill\x3d"none" stroke-linecap\x3d"round" stroke-linejoin\x3d"round" class\x3d"css-i6dzq1"\x3e\x3ccircle cx\x3d"12" cy\x3d"12" r\x3d"10"\x3e\x3c/circle\x3e\x3cpath d\x3d"M8 14s1.5 2 4 2 4-2 4-2"\x3e\x3c/path\x3e\x3cline x1\x3d"9" y1\x3d"9" x2\x3d"9.01" y2\x3d"9"\x3e\x3c/line\x3e\x3cline x1\x3d"15" y1\x3d"9" x2\x3d"15.01" y2\x3d"9"\x3e\x3c/line\x3e\x3c/svg\x3e',
	container: document.getElementsByClassName("OwO")[0],
	target: document.getElementsByClassName("OwO-textarea")[0],
	api: "/usr/themes/spimes/owo/OwO.json",
	position: "down",
	width: "70vw",
	maxHeight: "250px"
});
var swiper = new Swiper(".swiper-container", {
	pagination: ".swiper-pagination",
	direction: "vertical",
	slidesPerView: 1,
	paginationClickable: !0,
	spaceBetween: 30,
	mousewheelControl: !0
});
jQuery(document).ready(function(a) {
	var c = function() {
		var a = document.createElement("event"),
			c = {
				WebkitTransition: "webkitTransitionEnd",
				MozTransition: "transitionend",
				transition: "transitionend"
			},
			d;
		for (d in c)
			if (void 0 !== a.style[d]) return c[d]
	}();
	a('[data-toggle\x3d"offcanvas"], .mobile-overlay').click(function() {
		a(".mobile-overlay").toggleClass("active");
		a("body").toggleClass("active");
		a(".row-offcanvas").toggleClass("active");
		a(".sidebar-offcanvas").toggleClass("active");
		a(".navbar-toggle").toggleClass("collapsed");
		a(".navbar-collapse").addClass("transition");
		a(".collapse").toggleClass("navss");
		a(".m_nav-list").toggleClass("m_nav-close");
		a(".transition").one(c, function(b) {
			a(".navbar-collapse").removeClass("transition")
		});

		if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
			a(".g_m_i").appendTo(".mobile-sidebar-column");
		} else if (/(Android)/i.test(navigator.userAgent)) {
			a(".g_m_i").appendTo(".mobile-sidebar-column");
		} else {
			a(".g_m_i").appendTo(".mobile-sidebar-column");
		};


	})
});
$(function() {
	$(".menu-item").click(function() {
		$(this).children("ul").toggle()
	})
});

function switchNightMode() {
	"0" == (
	    
	    document.cookie.replace(/(?:(?:^|.*;\s*)night\s*\=\s*([^;]*).*$)|^.*$/, "$1") || "0") ? (document.body.classList
		.add("sp-dark-mode"), document.getElementById("logo-light").classList.add("d-none"), document.getElementById(
			"logo-dark").classList.remove("d-none"), document.cookie = "night\x3d1;path\x3d/", console.log(
			"\u591c\u95f4\u6a21\u5f0f\u5f00\u542f")) : (document.body.classList.remove("sp-dark-mode"), document.getElementById(
			"logo-light").classList.remove("d-none"), document.getElementById("logo-dark").classList.add("d-none"), document.cookie =
		"night\x3d0;path\x3d/", console.log("\u591c\u95f4\u6a21\u5f0f\u5173\u95ed")
		
		)
}(function() {
   
    if ($(".wb-switch").length > 0) {
	if ("" === document.cookie.replace(/(?:(?:^|.*;\s*)night\s*\=\s*([^;]*).*$)|^.*$/, "$1")) 21 < (new Date).getHours() ||
		6 > (new Date).getHours() ? (document.body.classList.add("sp-dark-mode"), document.getElementById("logo-light").classList
			.add("d-none"), document.getElementById("logo-dark").classList.remove("d-none"), document.cookie =
			"night\x3d1;path\x3d/", console.log("\u591c\u95f4\u6a21\u5f0f\u5f00\u542f")) : (document.body.classList.remove(
			"sp-dark-mode"), document.getElementById("logo-light").classList.remove("d-none"), document.getElementById(
			"logo-dark").classList.add("d-none"), document.cookie = "night\x3d0;path\x3d/", console.log(
			"\u591c\u95f4\u6a21\u5f0f\u5173\u95ed"));
	else {
		var a = document.cookie.replace(/(?:(?:^|.*;\s*)night\s*\=\s*([^;]*).*$)|^.*$/, "$1") || "0";
		"0" == a ? (document.body.classList.remove("sp-dark-mode"), document.getElementById("logo-light").classList.remove(
			"d-none"), document.getElementById("logo-dark").classList.add("d-none")) : "1" == a && (document.body.classList.add(
			"sp-dark-mode"), document.getElementById("logo-light").classList.add("d-none"), document.getElementById(
			"logo-dark").classList.remove("d-none"))
	}}
})();

//点击弹出热门搜索推荐
$("#soblur").click(function(){
$(".top_so").toggleClass("top_ac"); 
})
//$(".search-area").mouseout(function(){    
//$(".top_so").removeClass("top_ac");
//})
//点击搜索访问外触发关闭
$(document).bind("click",function(e){
       var target = $(e.target);
      if(target.closest(".search-warp").length == 0){//点击id为parentId之外的地方触发
          $(".top_so").removeClass("top_ac");
        }
 })




jQuery(document).ready(function(a) {
	a(".next").click(function() {
		$this = a(this);
		$this.addClass("loading").html(
			"\x3cdiv class\x3d'loading-5'\x3e\x3ci\x3e\x3c/i\x3e\x3ci\x3e\x3c/i\x3e\x3c/div\x3e");
		var c = $this.attr("href");
		void 0 != c && a.ajax({
			url: c,
			type: "get",
			error: function(a) {},
			success: function(b) {
				$this.removeClass("loading").text("\u70b9\u51fb\u67e5\u770b\u66f4\u591a");
				var c = a(b).find(".post-list");
				a("#content").append(c.fadeIn(500));
				b = a(b).find(".next").attr("href");
				void 0 != b ? a(".next").attr("href", b) : (a(".next").remove(), a("#content").append(
					" \x3cdiv class\x3d'content-none'\x3e\u6ca1\u6709\u66f4\u591a\u5185\u5bb9\u4e86\x3c/div\x3e"));
				$(".scrollLoading").scrollLoading();

				$( 'body, html' ).animate( {scrollTop: $(c).first().offset().top - ($(".top-bar").height() + 20), }, 500 ); //点击播放后跳回			
			}
		});
		return !1
	})
});
jQuery(document).ready(function() {
    if ($(".entry-content").length > 0) {
	jQuery.viewImage({
		target: ".entry-content a,.entry-content p img,.lonesome-img a",
		exclude: ".exc",
		delay: 300
	})
     }
});

// 边栏滚动插件
jQuery(document).ready(function() {
	jQuery('#secondary').theiaStickySidebar({
		// Settings 距离浏览器顶部10px
		additionalMarginTop: 10
	});
});
// 边栏滚动插件

function shareys(a, c, b, e, d) {
	switch (a) {
		case "sina":
			c = "http://service.weibo.com/share/share.php?title\x3d" + encodeURIComponent(d + "\u300c" + b +
				"\u300d \u70b9\u8fd9\u91cc" + c) + "\x26pic\x3d" + e;
			window.open(c);
			break;
		case "tqq":
			c = "https://connect.qq.com/widget/shareqq/index.html?url\x3d" + encodeURIComponent(c) + "\x26title\x3d" +
				encodeURIComponent(b) + "\x26pics\x3d" + e;
			window.open(c);
			break;
		case "qzone":
			c = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url\x3d" + encodeURIComponent(c) + "\x26title\x3d" +
				encodeURIComponent(b) + "\x26site\x3d\x26pics\x3d" + encodeURIComponent(e) + "\x26desc\x3d" + encodeURIComponent(d) +
				"\x26summary\x3d" + encodeURIComponent(d);
			window.open(c);
			break;
		case "ren":
			c = "http://widget.renren.com/dialog/share?resourceUrl\x3d" + encodeURIComponent(c) + "\x26srcUrl\x3d" + e +
				"\x26title\x3d" + encodeURIComponent(b), NaN + d, window.open(c)
	}
}
$(function() {
	$(".menu-item").click(function() {
		$(".menu-item").removeClass("active");
		$(this).addClass("active")
	})
});

function Scroll() {}
if (document.getElementById("gogo")) {
	Scroll.prototype.upScroll = function(a, c, b) {
		a = document.getElementById(a);
		var e = setTimeout(function() {
			a.firstElementChild.style.marginTop = c;
			clearTimeout(e)
		}, 1E3);
		setInterval(function() {
			var b = a.firstElementChild;
			b.style.marginTop = "0px";
			a.appendChild(b);
			b = a.firstElementChild;
			b.style.marginTop = c
		}, b)
	};
	var myScroll = new Scroll;
	myScroll.upScroll("gogo", "-36px", 3E3)
}
$(document).pjax("a[data-post]", {
	container: "#content",
	fragment: "#content",
	timeout: 8E3,
	scrollTo: !0
}).on("pjax:send", function() {
	//NProgress.start();
	$("#content").html("<div class='nxts'><div class='loading-5'><i></i><i></i></div></div>");
	$('.next').hide();
	$('.cck').hide();
}).on("pjax:complete", function() {
	//NProgress.done();
	$(".scrollLoading").scrollLoading();
});


$(document).ready(function() {
	var navOffw = $(".secnav").width();
	var navOffh = $(".top-bar").height() * 4;
	if (navOffw > 750) {
		var navOffset = $(".secnav").offset().top; //先得到据顶部的距离
		$(window).scroll(function() {
			var scrollPos = $(window).scrollTop(); //得到滚动的距离
			if (scrollPos >= navOffh) { //比较判断是否fixed
				$(".secnav").stop().slideUp();
				$("#post_top_title").removeClass("post_no"); 
				if ( $("#post_top_title").length > 0 ){
				$(".top-bar-navigation").addClass("post_no");
				}
			} else {
				$(".secnav").stop().slideDown();
				$("#post_top_title").addClass("post_no");
				$(".top-bar-navigation").removeClass("post_no");
				$(".top_so").removeClass("top_ac");
			}
		})
	}
})

//判断页面 阅读全文
$(document).ready(function() {
	var navcontop = $(".entry-content").height();

	if (navcontop < 900) {

		$(".showall").addClass("showwen");
		$(".show_text").removeClass("show_text");

	}
})
$(function() {
	$('.showall').click(function() {
		$(".show_text").css("height", "100%");
		$(".showall").addClass("showwen");
		$(".showall").html("");
	})
})
//站点导航页滚动
$(document).ready(function() {
	$('a.nav-item').click(function() {
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top + -60 + 'px'
		}, {
			duration: 500,
			easing: 'swing'
		});
		return false;
	});
});
$(function() {
	$('a.nav-item').click(function(e) {
		$('a.nav-item').removeClass('active');
		$(this).addClass('active');
	});
});

//  点赞按钮点击
$('#agree-btn').on('click', function () {
  $('#agree-btn').get(0).disabled = true;  //  禁用点赞按钮
  //  发送 AJAX 请求
  $.ajax({
    //  请求方式 post
    type: 'post',
    //  url 获取点赞按钮的自定义 url 属性
    url: $('#agree-btn').attr('data-url'),
    //  发送的数据 cid，直接获取点赞按钮的 cid 属性
    data: 'agree=' + $('#agree-btn').attr('data-cid'),
    async: true,
    timeout: 30000,
    cache: false,
    //  请求成功的函数
    success: function (data) {
      var re = /\d/;  //  匹配数字的正则表达式
      //  匹配数字
      if (re.test(data)) {
        //  把点赞按钮中的点赞数量设置为传回的点赞数量
        $('#agree-btn .agree-num').html(data);
      }
    },
    error: function () {
      //  如果请求出错就恢复点赞按钮
      $('#agree-btn').get(0).disabled = false;
    },
  });
});




//  点击复制收藏
function addFavorite2() {
var url = window.location;
var title = document.title;
var ua = navigator.userAgent.toLowerCase();
if (ua.indexOf("360se") > -1) {
alert("由于360浏览器功能限制，请按 Ctrl+D 手动收藏！");
}
else if (ua.indexOf("msie 8") > -1) {
window.external.AddToFavoritesBar(url, title); //IE8
}
else if (document.all) {
try{
window.external.addFavorite(url, title);
}catch(e){
alert('您的浏览器不支持,请按 Ctrl+D 手动收藏!');
}
}
else if (window.sidebar) {
window.sidebar.addPanel(title, url, "");
}
else {
alert('您的浏览器不支持,请按 Ctrl+D 手动收藏!');
}
}



/*!
 * jquery.scrollLoading.js
 * by 
 * 2010-11-19 v1.0
 * 2012-01-13 v1.1 偏移值计算修改 position → offset
 * 2012-09-25 v1.2 增加滚动容器参数, 回调参数
 * 2015-11-17 v1.3 只对显示元素进行处理
*/
(function($) {
	$.fn.scrollLoading = function(options) {
		var defaults = {
			attr: "data-url",
			container: $(window),
			callback: $.noop
		};
		var params = $.extend({}, defaults, options || {});
		params.cache = [];
		$(this).each(function() {
			var node = this.nodeName.toLowerCase(), url = $(this).attr(params["attr"]);
			//重组
			var data = {
				obj: $(this),
				tag: node,
				url: url
			};
			params.cache.push(data);
		});
		
		var callback = function(call) {
			if ($.isFunction(params.callback)) {
				params.callback.call(call.get(0));
			}
		};
		//动态显示数据
		var loading = function() {
			
			var contHeight = params.container.height();
			if ($(window).get(0) === window) {
				contop = $(window).scrollTop();
			} else {
				contop = params.container.offset().top;
			}		
			
			$.each(params.cache, function(i, data) {
				var o = data.obj, tag = data.tag, url = data.url, post, posb;

				if (o) {
					post = o.offset().top - contop, post + o.height();
	
					if (o.is(':visible') && (post >= 0 && post < contHeight) || (posb > 0 && posb <= contHeight)) {
						if (url) {
							//在浏览器窗口内
							if (tag === "a" || tag === "i") {
								//图片，改变src
								
                              callback(o.attr("style",'background-image:url(' + url + ')' ));
							}
                            else if (tag === "img"){
                               callback(o.attr("src", url));
                            }  
                            else {
								o.load(url, {}, function() {
									callback(o);
								});
							}		
						} else {
							// 无地址，直接触发回调
							callback(o);
						}
						data.obj = null;	
					}
				}
			});	
		};
		
		//事件触发
		//加载完毕即执行
		loading();
		//滚动执行
		params.container.bind("scroll", loading);
	};
})(jQuery);



//  边栏滚动theia-sticky-sidebar.min.js

!function(i){i.fn.theiaStickySidebar=function(t){function e(t,e){var a=o(t,e);a||(console.log("TSS: Body width smaller than options.minWidth. Init is delayed."),i(document).on("scroll."+t.namespace,function(t,e){return function(a){var n=o(t,e);n&&i(this).unbind(a)}}(t,e)),i(window).on("resize."+t.namespace,function(t,e){return function(a){var n=o(t,e);n&&i(this).unbind(a)}}(t,e)))}function o(t,e){return t.initialized===!0||!(i("body").width()<t.minWidth)&&(a(t,e),!0)}function a(t,e){t.initialized=!0;var o=i("#theia-sticky-sidebar-stylesheet-"+t.namespace);0===o.length&&i("head").append(i('<style id="theia-sticky-sidebar-stylesheet-'+t.namespace+'">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>')),e.each(function(){function e(){a.fixedScrollTop=0,a.sidebar.css({"min-height":"1px"}),a.stickySidebar.css({position:"static",width:"",transform:"none"})}function o(t){var e=t.height();return t.children().each(function(){e=Math.max(e,i(this).height())}),e}var a={};if(a.sidebar=i(this),a.options=t||{},a.container=i(a.options.containerSelector),0==a.container.length&&(a.container=a.sidebar.parent()),a.sidebar.parents().css("-webkit-transform","none"),a.sidebar.css({position:a.options.defaultPosition,overflow:"visible","-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"}),a.stickySidebar=a.sidebar.find(".theiaStickySidebar"),0==a.stickySidebar.length){var s=/(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;a.sidebar.find("script").filter(function(i,t){return 0===t.type.length||t.type.match(s)}).remove(),a.stickySidebar=i("<div>").addClass("theiaStickySidebar").append(a.sidebar.children()),a.sidebar.append(a.stickySidebar)}a.marginBottom=parseInt(a.sidebar.css("margin-bottom")),a.paddingTop=parseInt(a.sidebar.css("padding-top")),a.paddingBottom=parseInt(a.sidebar.css("padding-bottom"));var r=a.stickySidebar.offset().top,d=a.stickySidebar.outerHeight();a.stickySidebar.css("padding-top",1),a.stickySidebar.css("padding-bottom",1),r-=a.stickySidebar.offset().top,d=a.stickySidebar.outerHeight()-d-r,0==r?(a.stickySidebar.css("padding-top",0),a.stickySidebarPaddingTop=0):a.stickySidebarPaddingTop=1,0==d?(a.stickySidebar.css("padding-bottom",0),a.stickySidebarPaddingBottom=0):a.stickySidebarPaddingBottom=1,a.previousScrollTop=null,a.fixedScrollTop=0,e(),a.onScroll=function(a){if(a.stickySidebar.is(":visible")){if(i("body").width()<a.options.minWidth)return void e();if(a.options.disableOnResponsiveLayouts){var s=a.sidebar.outerWidth("none"==a.sidebar.css("float"));if(s+50>a.container.width())return void e()}var r=i(document).scrollTop(),d="static";if(r>=a.sidebar.offset().top+(a.paddingTop-a.options.additionalMarginTop)){var c,p=a.paddingTop+t.additionalMarginTop,b=a.paddingBottom+a.marginBottom+t.additionalMarginBottom,l=a.sidebar.offset().top,f=a.sidebar.offset().top+o(a.container),h=0+t.additionalMarginTop,g=a.stickySidebar.outerHeight()+p+b<i(window).height();c=g?h+a.stickySidebar.outerHeight():i(window).height()-a.marginBottom-a.paddingBottom-t.additionalMarginBottom;var u=l-r+a.paddingTop,S=f-r-a.paddingBottom-a.marginBottom,y=a.stickySidebar.offset().top-r,m=a.previousScrollTop-r;"fixed"==a.stickySidebar.css("position")&&"modern"==a.options.sidebarBehavior&&(y+=m),"stick-to-top"==a.options.sidebarBehavior&&(y=t.additionalMarginTop),"stick-to-bottom"==a.options.sidebarBehavior&&(y=c-a.stickySidebar.outerHeight()),y=m>0?Math.min(y,h):Math.max(y,c-a.stickySidebar.outerHeight()),y=Math.max(y,u),y=Math.min(y,S-a.stickySidebar.outerHeight());var k=a.container.height()==a.stickySidebar.outerHeight();d=(k||y!=h)&&(k||y!=c-a.stickySidebar.outerHeight())?r+y-a.sidebar.offset().top-a.paddingTop<=t.additionalMarginTop?"static":"absolute":"fixed"}if("fixed"==d){var v=i(document).scrollLeft();a.stickySidebar.css({position:"fixed",width:n(a.stickySidebar)+"px",transform:"translateY("+y+"px)",left:a.sidebar.offset().left+parseInt(a.sidebar.css("padding-left"))-v+"px",top:"0px"})}else if("absolute"==d){var x={};"absolute"!=a.stickySidebar.css("position")&&(x.position="absolute",x.transform="translateY("+(r+y-a.sidebar.offset().top-a.stickySidebarPaddingTop-a.stickySidebarPaddingBottom)+"px)",x.top="0px"),x.width=n(a.stickySidebar)+"px",x.left="",a.stickySidebar.css(x)}else"static"==d&&e();"static"!=d&&1==a.options.updateSidebarHeight&&a.sidebar.css({"min-height":a.stickySidebar.outerHeight()+a.stickySidebar.offset().top-a.sidebar.offset().top+a.paddingBottom}),a.previousScrollTop=r}},a.onScroll(a),i(document).on("scroll."+a.options.namespace,function(i){return function(){i.onScroll(i)}}(a)),i(window).on("resize."+a.options.namespace,function(i){return function(){i.stickySidebar.css({position:"static"}),i.onScroll(i)}}(a)),"undefined"!=typeof ResizeSensor&&new ResizeSensor(a.stickySidebar[0],function(i){return function(){i.onScroll(i)}}(a))})}function n(i){var t;try{t=i[0].getBoundingClientRect().width}catch(i){}return"undefined"==typeof t&&(t=i.width()),t}var s={containerSelector:"",additionalMarginTop:0,additionalMarginBottom:0,updateSidebarHeight:!0,minWidth:0,disableOnResponsiveLayouts:!0,sidebarBehavior:"modern",defaultPosition:"relative",namespace:"TSS"};return t=i.extend(s,t),t.additionalMarginTop=parseInt(t.additionalMarginTop)||0,t.additionalMarginBottom=parseInt(t.additionalMarginBottom)||0,e(t,this),this}}(jQuery);
//# sourceMappingURL=maps/theia-sticky-sidebar.min.js.map

//  highlight.pack.js 高亮代码设置

/*! highlight.js v9.15.6 | BSD3 License | git.io/hljslicense */
!function(e){var n="object"==typeof window&&window||"object"==typeof self&&self;"undefined"!=typeof exports?e(exports):n&&(n.hljs=e({}),"function"==typeof define&&define.amd&&define([],function(){return n.hljs}))}(function(a){var E=[],u=Object.keys,N={},g={},n=/^(no-?highlight|plain|text)$/i,R=/\blang(?:uage)?-([\w-]+)\b/i,t=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,r={case_insensitive:"cI",lexemes:"l",contains:"c",keywords:"k",subLanguage:"sL",className:"cN",begin:"b",beginKeywords:"bK",end:"e",endsWithParent:"eW",illegal:"i",excludeBegin:"eB",excludeEnd:"eE",returnBegin:"rB",returnEnd:"rE",relevance:"r",variants:"v",IDENT_RE:"IR",UNDERSCORE_IDENT_RE:"UIR",NUMBER_RE:"NR",C_NUMBER_RE:"CNR",BINARY_NUMBER_RE:"BNR",RE_STARTERS_RE:"RSR",BACKSLASH_ESCAPE:"BE",APOS_STRING_MODE:"ASM",QUOTE_STRING_MODE:"QSM",PHRASAL_WORDS_MODE:"PWM",C_LINE_COMMENT_MODE:"CLCM",C_BLOCK_COMMENT_MODE:"CBCM",HASH_COMMENT_MODE:"HCM",NUMBER_MODE:"NM",C_NUMBER_MODE:"CNM",BINARY_NUMBER_MODE:"BNM",CSS_NUMBER_MODE:"CSSNM",REGEXP_MODE:"RM",TITLE_MODE:"TM",UNDERSCORE_TITLE_MODE:"UTM",COMMENT:"C",beginRe:"bR",endRe:"eR",illegalRe:"iR",lexemesRe:"lR",terminators:"t",terminator_end:"tE"},b="</span>",h={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0};function _(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function d(e){return e.nodeName.toLowerCase()}function v(e,n){var t=e&&e.exec(n);return t&&0===t.index}function p(e){return n.test(e)}function l(e){var n,t={},r=Array.prototype.slice.call(arguments,1);for(n in e)t[n]=e[n];return r.forEach(function(e){for(n in e)t[n]=e[n]}),t}function M(e){var a=[];return function e(n,t){for(var r=n.firstChild;r;r=r.nextSibling)3===r.nodeType?t+=r.nodeValue.length:1===r.nodeType&&(a.push({event:"start",offset:t,node:r}),t=e(r,t),d(r).match(/br|hr|img|input/)||a.push({event:"stop",offset:t,node:r}));return t}(e,0),a}function i(e){if(r&&!e.langApiRestored){for(var n in e.langApiRestored=!0,r)e[n]&&(e[r[n]]=e[n]);(e.c||[]).concat(e.v||[]).forEach(i)}}function m(c){function s(e){return e&&e.source||e}function o(e,n){return new RegExp(s(e),"m"+(c.cI?"i":"")+(n?"g":""))}!function n(t,e){if(!t.compiled){if(t.compiled=!0,t.k=t.k||t.bK,t.k){var r={},a=function(t,e){c.cI&&(e=e.toLowerCase()),e.split(" ").forEach(function(e){var n=e.split("|");r[n[0]]=[t,n[1]?Number(n[1]):1]})};"string"==typeof t.k?a("keyword",t.k):u(t.k).forEach(function(e){a(e,t.k[e])}),t.k=r}t.lR=o(t.l||/\w+/,!0),e&&(t.bK&&(t.b="\\b("+t.bK.split(" ").join("|")+")\\b"),t.b||(t.b=/\B|\b/),t.bR=o(t.b),t.endSameAsBegin&&(t.e=t.b),t.e||t.eW||(t.e=/\B|\b/),t.e&&(t.eR=o(t.e)),t.tE=s(t.e)||"",t.eW&&e.tE&&(t.tE+=(t.e?"|":"")+e.tE)),t.i&&(t.iR=o(t.i)),null==t.r&&(t.r=1),t.c||(t.c=[]),t.c=Array.prototype.concat.apply([],t.c.map(function(e){return(n="self"===e?t:e).v&&!n.cached_variants&&(n.cached_variants=n.v.map(function(e){return l(n,{v:null},e)})),n.cached_variants||n.eW&&[l(n)]||[n];var n})),t.c.forEach(function(e){n(e,t)}),t.starts&&n(t.starts,e);var i=t.c.map(function(e){return e.bK?"\\.?(?:"+e.b+")\\.?":e.b}).concat([t.tE,t.i]).map(s).filter(Boolean);t.t=i.length?o(function(e,n){for(var t=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,r=0,a="",i=0;i<e.length;i++){var c=r,o=s(e[i]);for(0<i&&(a+=n);0<o.length;){var u=t.exec(o);if(null==u){a+=o;break}a+=o.substring(0,u.index),o=o.substring(u.index+u[0].length),"\\"==u[0][0]&&u[1]?a+="\\"+String(Number(u[1])+c):(a+=u[0],"("==u[0]&&r++)}}return a}(i,"|"),!0):{exec:function(){return null}}}}(c)}function C(e,n,o,t){function u(e,n,t,r){var a='<span class="'+(r?"":h.classPrefix);return(a+=e+'">')+n+(t?"":b)}function s(){g+=null!=E.sL?function(){var e="string"==typeof E.sL;if(e&&!N[E.sL])return _(R);var n=e?C(E.sL,R,!0,i[E.sL]):O(R,E.sL.length?E.sL:void 0);return 0<E.r&&(d+=n.r),e&&(i[E.sL]=n.top),u(n.language,n.value,!1,!0)}():function(){var e,n,t,r,a,i,c;if(!E.k)return _(R);for(r="",n=0,E.lR.lastIndex=0,t=E.lR.exec(R);t;)r+=_(R.substring(n,t.index)),a=E,i=t,c=f.cI?i[0].toLowerCase():i[0],(e=a.k.hasOwnProperty(c)&&a.k[c])?(d+=e[1],r+=u(e[0],_(t[0]))):r+=_(t[0]),n=E.lR.lastIndex,t=E.lR.exec(R);return r+_(R.substr(n))}(),R=""}function l(e){g+=e.cN?u(e.cN,"",!0):"",E=Object.create(e,{parent:{value:E}})}function r(e,n){if(R+=e,null==n)return s(),0;var t=function(e,n){var t,r,a;for(t=0,r=n.c.length;t<r;t++)if(v(n.c[t].bR,e))return n.c[t].endSameAsBegin&&(n.c[t].eR=(a=n.c[t].bR.exec(e)[0],new RegExp(a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"m"))),n.c[t]}(n,E);if(t)return t.skip?R+=n:(t.eB&&(R+=n),s(),t.rB||t.eB||(R=n)),l(t),t.rB?0:n.length;var r,a,i=function e(n,t){if(v(n.eR,t)){for(;n.endsParent&&n.parent;)n=n.parent;return n}if(n.eW)return e(n.parent,t)}(E,n);if(i){var c=E;for(c.skip?R+=n:(c.rE||c.eE||(R+=n),s(),c.eE&&(R=n));E.cN&&(g+=b),E.skip||E.sL||(d+=E.r),(E=E.parent)!==i.parent;);return i.starts&&(i.endSameAsBegin&&(i.starts.eR=i.eR),l(i.starts)),c.rE?0:n.length}if(r=n,a=E,!o&&v(a.iR,r))throw new Error('Illegal lexeme "'+n+'" for mode "'+(E.cN||"<unnamed>")+'"');return R+=n,n.length||1}var f=S(e);if(!f)throw new Error('Unknown language: "'+e+'"');m(f);var a,E=t||f,i={},g="";for(a=E;a!==f;a=a.parent)a.cN&&(g=u(a.cN,"",!0)+g);var R="",d=0;try{for(var c,p,M=0;E.t.lastIndex=M,c=E.t.exec(n);)p=r(n.substring(M,c.index),c[0]),M=c.index+p;for(r(n.substr(M)),a=E;a.parent;a=a.parent)a.cN&&(g+=b);return{r:d,value:g,language:e,top:E}}catch(e){if(e.message&&-1!==e.message.indexOf("Illegal"))return{r:0,value:_(n)};throw e}}function O(t,e){e=e||h.languages||u(N);var r={r:0,value:_(t)},a=r;return e.filter(S).filter(s).forEach(function(e){var n=C(e,t,!1);n.language=e,n.r>a.r&&(a=n),n.r>r.r&&(a=r,r=n)}),a.language&&(r.second_best=a),r}function B(e){return h.tabReplace||h.useBR?e.replace(t,function(e,n){return h.useBR&&"\n"===e?"<br>":h.tabReplace?n.replace(/\t/g,h.tabReplace):""}):e}function c(e){var n,t,r,a,i,c,o,u,s,l,f=function(e){var n,t,r,a,i=e.className+" ";if(i+=e.parentNode?e.parentNode.className:"",t=R.exec(i))return S(t[1])?t[1]:"no-highlight";for(n=0,r=(i=i.split(/\s+/)).length;n<r;n++)if(p(a=i[n])||S(a))return a}(e);p(f)||(h.useBR?(n=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n"):n=e,i=n.textContent,r=f?C(f,i,!0):O(i),(t=M(n)).length&&((a=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=r.value,r.value=function(e,n,t){var r=0,a="",i=[];function c(){return e.length&&n.length?e[0].offset!==n[0].offset?e[0].offset<n[0].offset?e:n:"start"===n[0].event?e:n:e.length?e:n}function o(e){a+="<"+d(e)+E.map.call(e.attributes,function(e){return" "+e.nodeName+'="'+_(e.value).replace('"',"&quot;")+'"'}).join("")+">"}function u(e){a+="</"+d(e)+">"}function s(e){("start"===e.event?o:u)(e.node)}for(;e.length||n.length;){var l=c();if(a+=_(t.substring(r,l[0].offset)),r=l[0].offset,l===e){for(i.reverse().forEach(u);s(l.splice(0,1)[0]),(l=c())===e&&l.length&&l[0].offset===r;);i.reverse().forEach(o)}else"start"===l[0].event?i.push(l[0].node):i.pop(),s(l.splice(0,1)[0])}return a+_(t.substr(r))}(t,M(a),i)),r.value=B(r.value),e.innerHTML=r.value,e.className=(c=e.className,o=f,u=r.language,s=o?g[o]:u,l=[c.trim()],c.match(/\bhljs\b/)||l.push("hljs"),-1===c.indexOf(s)&&l.push(s),l.join(" ").trim()),e.result={language:r.language,re:r.r},r.second_best&&(e.second_best={language:r.second_best.language,re:r.second_best.r}))}function o(){if(!o.called){o.called=!0;var e=document.querySelectorAll("pre code");E.forEach.call(e,c)}}function S(e){return e=(e||"").toLowerCase(),N[e]||N[g[e]]}function s(e){var n=S(e);return n&&!n.disableAutodetect}return a.highlight=C,a.highlightAuto=O,a.fixMarkup=B,a.highlightBlock=c,a.configure=function(e){h=l(h,e)},a.initHighlighting=o,a.initHighlightingOnLoad=function(){addEventListener("DOMContentLoaded",o,!1),addEventListener("load",o,!1)},a.registerLanguage=function(n,e){var t=N[n]=e(a);i(t),t.aliases&&t.aliases.forEach(function(e){g[e]=n})},a.listLanguages=function(){return u(N)},a.getLanguage=S,a.autoDetection=s,a.inherit=l,a.IR=a.IDENT_RE="[a-zA-Z]\\w*",a.UIR=a.UNDERSCORE_IDENT_RE="[a-zA-Z_]\\w*",a.NR=a.NUMBER_RE="\\b\\d+(\\.\\d+)?",a.CNR=a.C_NUMBER_RE="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",a.BNR=a.BINARY_NUMBER_RE="\\b(0b[01]+)",a.RSR=a.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",a.BE=a.BACKSLASH_ESCAPE={b:"\\\\[\\s\\S]",r:0},a.ASM=a.APOS_STRING_MODE={cN:"string",b:"'",e:"'",i:"\\n",c:[a.BE]},a.QSM=a.QUOTE_STRING_MODE={cN:"string",b:'"',e:'"',i:"\\n",c:[a.BE]},a.PWM=a.PHRASAL_WORDS_MODE={b:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},a.C=a.COMMENT=function(e,n,t){var r=a.inherit({cN:"comment",b:e,e:n,c:[]},t||{});return r.c.push(a.PWM),r.c.push({cN:"doctag",b:"(?:TODO|FIXME|NOTE|BUG|XXX):",r:0}),r},a.CLCM=a.C_LINE_COMMENT_MODE=a.C("//","$"),a.CBCM=a.C_BLOCK_COMMENT_MODE=a.C("/\\*","\\*/"),a.HCM=a.HASH_COMMENT_MODE=a.C("#","$"),a.NM=a.NUMBER_MODE={cN:"number",b:a.NR,r:0},a.CNM=a.C_NUMBER_MODE={cN:"number",b:a.CNR,r:0},a.BNM=a.BINARY_NUMBER_MODE={cN:"number",b:a.BNR,r:0},a.CSSNM=a.CSS_NUMBER_MODE={cN:"number",b:a.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0},a.RM=a.REGEXP_MODE={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[a.BE,{b:/\[/,e:/\]/,r:0,c:[a.BE]}]},a.TM=a.TITLE_MODE={cN:"title",b:a.IR,r:0},a.UTM=a.UNDERSCORE_TITLE_MODE={cN:"title",b:a.UIR,r:0},a.METHOD_GUARD={b:"\\.\\s*"+a.UIR,r:0},a});hljs.registerLanguage("php",function(e){var c={b:"\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*"},i={cN:"meta",b:/<\?(php)?|\?>/},t={cN:"string",c:[e.BE,i],v:[{b:'b"',e:'"'},{b:"b'",e:"'"},e.inherit(e.ASM,{i:null}),e.inherit(e.QSM,{i:null})]},a={v:[e.BNM,e.CNM]};return{aliases:["php","php3","php4","php5","php6","php7"],cI:!0,k:"and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",c:[e.HCM,e.C("//","$",{c:[i]}),e.C("/\\*","\\*/",{c:[{cN:"doctag",b:"@[A-Za-z]+"}]}),e.C("__halt_compiler.+?;",!1,{eW:!0,k:"__halt_compiler",l:e.UIR}),{cN:"string",b:/<<<['"]?\w+['"]?$/,e:/^\w+;?$/,c:[e.BE,{cN:"subst",v:[{b:/\$\w+/},{b:/\{\$/,e:/\}/}]}]},i,{cN:"keyword",b:/\$this\b/},c,{b:/(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/},{cN:"function",bK:"function",e:/[;{]/,eE:!0,i:"\\$|\\[|%",c:[e.UTM,{cN:"params",b:"\\(",e:"\\)",c:["self",c,e.CBCM,t,a]}]},{cN:"class",bK:"class interface",e:"{",eE:!0,i:/[:\(\$"]/,c:[{bK:"extends implements"},e.UTM]},{bK:"namespace",e:";",i:/[\.']/,c:[e.UTM]},{bK:"use",e:";",c:[e.UTM]},{b:"=>"},t,a]}});hljs.registerLanguage("css",function(e){var c={b:/[A-Z\_\.\-]+\s*:/,rB:!0,e:";",eW:!0,c:[{cN:"attribute",b:/\S/,e:":",eE:!0,starts:{eW:!0,eE:!0,c:[{b:/[\w-]+\(/,rB:!0,c:[{cN:"built_in",b:/[\w-]+/},{b:/\(/,e:/\)/,c:[e.ASM,e.QSM]}]},e.CSSNM,e.QSM,e.ASM,e.CBCM,{cN:"number",b:"#[0-9A-Fa-f]+"},{cN:"meta",b:"!important"}]}}]};return{cI:!0,i:/[=\/|'\$]/,c:[e.CBCM,{cN:"selector-id",b:/#[A-Za-z0-9_-]+/},{cN:"selector-class",b:/\.[A-Za-z0-9_-]+/},{cN:"selector-attr",b:/\[/,e:/\]/,i:"$"},{cN:"selector-pseudo",b:/:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/},{b:"@(font-face|page)",l:"[a-z-]+",k:"font-face page"},{b:"@",e:"[{;]",i:/:/,c:[{cN:"keyword",b:/\w+/},{b:/\s/,eW:!0,eE:!0,r:0,c:[e.ASM,e.QSM,e.CSSNM]}]},{cN:"selector-tag",b:"[a-zA-Z-][a-zA-Z0-9_-]*",r:0},{b:"{",e:"}",i:/\S/,c:[e.CBCM,c]}]}});hljs.registerLanguage("json",function(e){var i={literal:"true false null"},n=[e.QSM,e.CNM],r={e:",",eW:!0,eE:!0,c:n,k:i},t={b:"{",e:"}",c:[{cN:"attr",b:/"/,e:/"/,c:[e.BE],i:"\\n"},e.inherit(r,{b:/:/})],i:"\\S"},c={b:"\\[",e:"\\]",c:[e.inherit(r)],i:"\\S"};return n.splice(n.length,0,t,c),{c:n,k:i,i:"\\S"}});hljs.registerLanguage("xml",function(s){var e={eW:!0,i:/</,r:0,c:[{cN:"attr",b:"[A-Za-z0-9\\._:-]+",r:0},{b:/=\s*/,r:0,c:[{cN:"string",endsParent:!0,v:[{b:/"/,e:/"/},{b:/'/,e:/'/},{b:/[^\s"'=<>`]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist"],cI:!0,c:[{cN:"meta",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},s.C("\x3c!--","--\x3e",{r:10}),{b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{cN:"meta",b:/<\?xml/,e:/\?>/,r:10},{b:/<\?(php)?/,e:/\?>/,sL:"php",c:[{b:"/\\*",e:"\\*/",skip:!0},{b:'b"',e:'"',skip:!0},{b:"b'",e:"'",skip:!0},s.inherit(s.ASM,{i:null,cN:null,c:null,skip:!0}),s.inherit(s.QSM,{i:null,cN:null,c:null,skip:!0})]},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{name:"style"},c:[e],starts:{e:"</style>",rE:!0,sL:["css","xml"]}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{name:"script"},c:[e],starts:{e:"<\/script>",rE:!0,sL:["actionscript","javascript","handlebars","xml"]}},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"name",b:/[^\/><\s]+/,r:0},e]}]}});hljs.registerLanguage("javascript",function(e){var r="[A-Za-z$_][0-9A-Za-z$_]*",t={keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},a={cN:"number",v:[{b:"\\b(0[bB][01]+)"},{b:"\\b(0[oO][0-7]+)"},{b:e.CNR}],r:0},n={cN:"subst",b:"\\$\\{",e:"\\}",k:t,c:[]},c={cN:"string",b:"`",e:"`",c:[e.BE,n]};n.c=[e.ASM,e.QSM,c,a,e.RM];var s=n.c.concat([e.CBCM,e.CLCM]);return{aliases:["js","jsx"],k:t,c:[{cN:"meta",r:10,b:/^\s*['"]use (strict|asm)['"]/},{cN:"meta",b:/^#!/,e:/$/},e.ASM,e.QSM,c,e.CLCM,e.CBCM,a,{b:/[{,]\s*/,r:0,c:[{b:r+"\\s*:",rB:!0,r:0,c:[{cN:"attr",b:r,r:0}]}]},{b:"("+e.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[e.CLCM,e.CBCM,e.RM,{cN:"function",b:"(\\(.*?\\)|"+r+")\\s*=>",rB:!0,e:"\\s*=>",c:[{cN:"params",v:[{b:r},{b:/\(\s*\)/},{b:/\(/,e:/\)/,eB:!0,eE:!0,k:t,c:s}]}]},{b:/</,e:/(\/\w+|\w+\/)>/,sL:"xml",c:[{b:/<\w+\s*\/>/,skip:!0},{b:/<\w+/,e:/(\/\w+|\w+\/)>/,skip:!0,c:[{b:/<\w+\s*\/>/,skip:!0},"self"]}]}],r:0},{cN:"function",bK:"function",e:/\{/,eE:!0,c:[e.inherit(e.TM,{b:r}),{cN:"params",b:/\(/,e:/\)/,eB:!0,eE:!0,c:s}],i:/\[|%/},{b:/\$[(.]/},e.METHOD_GUARD,{cN:"class",bK:"class",e:/[{;=]/,eE:!0,i:/[:"\[\]]/,c:[{bK:"extends"},e.UTM]},{bK:"constructor get set",e:/\{/,eE:!0}],i:/#(?!!)/}});


//  nprogress.js  加载进度条 

/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */

;(function(root, factory) {

  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.NProgress = factory();
  }

})(this, function() {
  var NProgress = {};

  NProgress.version = '0.2.0';

  var Settings = NProgress.settings = {
    minimum: 0.08,
    easing: 'linear',
    positionUsing: '',
    speed: 200,
    trickle: true,
    trickleSpeed: 200,
    showSpinner: true,
    barSelector: '[role="bar"]',
    spinnerSelector: '[role="spinner"]',
    parent: 'body',
    template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  };

  /**
   * Updates configuration.
   *
   *     NProgress.configure({
   *       minimum: 0.1
   *     });
   */
  NProgress.configure = function(options) {
    var key, value;
    for (key in options) {
      value = options[key];
      if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
    }

    return this;
  };

  /**
   * Last number.
   */

  NProgress.status = null;

  /**
   * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
   *
   *     NProgress.set(0.4);
   *     NProgress.set(1.0);
   */

  NProgress.set = function(n) {
    var started = NProgress.isStarted();

    n = clamp(n, Settings.minimum, 1);
    NProgress.status = (n === 1 ? null : n);

    var progress = NProgress.render(!started),
        bar      = progress.querySelector(Settings.barSelector),
        speed    = Settings.speed,
        ease     = Settings.easing;

    progress.offsetWidth; /* Repaint */

    queue(function(next) {
      // Set positionUsing if it hasn't already been set
      if (Settings.positionUsing === '') Settings.positionUsing = NProgress.getPositioningCSS();

      // Add transition
      css(bar, barPositionCSS(n, speed, ease));

      if (n === 1) {
        // Fade out
        css(progress, {
          transition: 'none',
          opacity: 1
        });
        progress.offsetWidth; /* Repaint */

        setTimeout(function() {
          css(progress, {
            transition: 'all ' + speed + 'ms linear',
            opacity: 0
          });
          setTimeout(function() {
            NProgress.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(next, speed);
      }
    });

    return this;
  };

  NProgress.isStarted = function() {
    return typeof NProgress.status === 'number';
  };

  /**
   * Shows the progress bar.
   * This is the same as setting the status to 0%, except that it doesn't go backwards.
   *
   *     NProgress.start();
   *
   */
  NProgress.start = function() {
    if (!NProgress.status) NProgress.set(0);

    var work = function() {
      setTimeout(function() {
        if (!NProgress.status) return;
        NProgress.trickle();
        work();
      }, Settings.trickleSpeed);
    };

    if (Settings.trickle) work();

    return this;
  };

  /**
   * Hides the progress bar.
   * This is the *sort of* the same as setting the status to 100%, with the
   * difference being `done()` makes some placebo effect of some realistic motion.
   *
   *     NProgress.done();
   *
   * If `true` is passed, it will show the progress bar even if its hidden.
   *
   *     NProgress.done(true);
   */

  NProgress.done = function(force) {
    if (!force && !NProgress.status) return this;

    return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
  };

  /**
   * Increments by a random amount.
   */

  NProgress.inc = function(amount) {
    var n = NProgress.status;

    if (!n) {
      return NProgress.start();
    } else if(n > 1) {
      return;
    } else {
      if (typeof amount !== 'number') {
        if (n >= 0 && n < 0.2) { amount = 0.1; }
        else if (n >= 0.2 && n < 0.5) { amount = 0.04; }
        else if (n >= 0.5 && n < 0.8) { amount = 0.02; }
        else if (n >= 0.8 && n < 0.99) { amount = 0.005; }
        else { amount = 0; }
      }

      n = clamp(n + amount, 0, 0.994);
      return NProgress.set(n);
    }
  };

  NProgress.trickle = function() {
    return NProgress.inc();
  };

  /**
   * Waits for all supplied jQuery promises and
   * increases the progress as the promises resolve.
   *
   * @param $promise jQUery Promise
   */
  (function() {
    var initial = 0, current = 0;

    NProgress.promise = function($promise) {
      if (!$promise || $promise.state() === "resolved") {
        return this;
      }

      if (current === 0) {
        NProgress.start();
      }

      initial++;
      current++;

      $promise.always(function() {
        current--;
        if (current === 0) {
            initial = 0;
            NProgress.done();
        } else {
            NProgress.set((initial - current) / initial);
        }
      });

      return this;
    };

  })();

  /**
   * (Internal) renders the progress bar markup based on the `template`
   * setting.
   */

  NProgress.render = function(fromStart) {
    if (NProgress.isRendered()) return document.getElementById('nprogress');

    addClass(document.documentElement, 'nprogress-busy');

    var progress = document.createElement('div');
    progress.id = 'nprogress';
    progress.innerHTML = Settings.template;

    var bar      = progress.querySelector(Settings.barSelector),
        perc     = fromStart ? '-100' : toBarPerc(NProgress.status || 0),
        parent   = document.querySelector(Settings.parent),
        spinner;

    css(bar, {
      transition: 'all 0 linear',
      transform: 'translate3d(' + perc + '%,0,0)'
    });

    if (!Settings.showSpinner) {
      spinner = progress.querySelector(Settings.spinnerSelector);
      spinner && removeElement(spinner);
    }

    if (parent != document.body) {
      addClass(parent, 'nprogress-custom-parent');
    }

    parent.appendChild(progress);
    return progress;
  };

  /**
   * Removes the element. Opposite of render().
   */

  NProgress.remove = function() {
    removeClass(document.documentElement, 'nprogress-busy');
    removeClass(document.querySelector(Settings.parent), 'nprogress-custom-parent');
    var progress = document.getElementById('nprogress');
    progress && removeElement(progress);
  };

  /**
   * Checks if the progress bar is rendered.
   */

  NProgress.isRendered = function() {
    return !!document.getElementById('nprogress');
  };

  /**
   * Determine which positioning CSS rule to use.
   */

  NProgress.getPositioningCSS = function() {
    // Sniff on document.body.style
    var bodyStyle = document.body.style;

    // Sniff prefixes
    var vendorPrefix = ('WebkitTransform' in bodyStyle) ? 'Webkit' :
                       ('MozTransform' in bodyStyle) ? 'Moz' :
                       ('msTransform' in bodyStyle) ? 'ms' :
                       ('OTransform' in bodyStyle) ? 'O' : '';

    if (vendorPrefix + 'Perspective' in bodyStyle) {
      // Modern browsers with 3D support, e.g. Webkit, IE10
      return 'translate3d';
    } else if (vendorPrefix + 'Transform' in bodyStyle) {
      // Browsers without 3D support, e.g. IE9
      return 'translate';
    } else {
      // Browsers without translate() support, e.g. IE7-8
      return 'margin';
    }
  };

  /**
   * Helpers
   */

  function clamp(n, min, max) {
    if (n < min) return min;
    if (n > max) return max;
    return n;
  }

  /**
   * (Internal) converts a percentage (`0..1`) to a bar translateX
   * percentage (`-100%..0%`).
   */

  function toBarPerc(n) {
    return (-1 + n) * 100;
  }


  /**
   * (Internal) returns the correct CSS for changing the bar's
   * position given an n percentage, and speed and ease from Settings
   */

  function barPositionCSS(n, speed, ease) {
    var barCSS;

    if (Settings.positionUsing === 'translate3d') {
      barCSS = { transform: 'translate3d('+toBarPerc(n)+'%,0,0)' };
    } else if (Settings.positionUsing === 'translate') {
      barCSS = { transform: 'translate('+toBarPerc(n)+'%,0)' };
    } else {
      barCSS = { 'margin-left': toBarPerc(n)+'%' };
    }

    barCSS.transition = 'all '+speed+'ms '+ease;

    return barCSS;
  }

  /**
   * (Internal) Queues a function to be executed.
   */

  var queue = (function() {
    var pending = [];

    function next() {
      var fn = pending.shift();
      if (fn) {
        fn(next);
      }
    }

    return function(fn) {
      pending.push(fn);
      if (pending.length == 1) next();
    };
  })();

  /**
   * (Internal) Applies css properties to an element, similar to the jQuery
   * css method.
   *
   * While this helper does assist with vendor prefixed property names, it
   * does not perform any manipulation of values prior to setting styles.
   */

  var css = (function() {
    var cssPrefixes = [ 'Webkit', 'O', 'Moz', 'ms' ],
        cssProps    = {};

    function camelCase(string) {
      return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function(match, letter) {
        return letter.toUpperCase();
      });
    }

    function getVendorProp(name) {
      var style = document.body.style;
      if (name in style) return name;

      var i = cssPrefixes.length,
          capName = name.charAt(0).toUpperCase() + name.slice(1),
          vendorName;
      while (i--) {
        vendorName = cssPrefixes[i] + capName;
        if (vendorName in style) return vendorName;
      }

      return name;
    }

    function getStyleProp(name) {
      name = camelCase(name);
      return cssProps[name] || (cssProps[name] = getVendorProp(name));
    }

    function applyCss(element, prop, value) {
      prop = getStyleProp(prop);
      element.style[prop] = value;
    }

    return function(element, properties) {
      var args = arguments,
          prop,
          value;

      if (args.length == 2) {
        for (prop in properties) {
          value = properties[prop];
          if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
        }
      } else {
        applyCss(element, args[1], args[2]);
      }
    }
  })();

  /**
   * (Internal) Determines if an element or space separated list of class names contains a class name.
   */

  function hasClass(element, name) {
    var list = typeof element == 'string' ? element : classList(element);
    return list.indexOf(' ' + name + ' ') >= 0;
  }

  /**
   * (Internal) Adds a class to an element.
   */

  function addClass(element, name) {
    var oldList = classList(element),
        newList = oldList + name;

    if (hasClass(oldList, name)) return;

    // Trim the opening space.
    element.className = newList.substring(1);
  }

  /**
   * (Internal) Removes a class from an element.
   */

  function removeClass(element, name) {
    var oldList = classList(element),
        newList;

    if (!hasClass(element, name)) return;

    // Replace the class name.
    newList = oldList.replace(' ' + name + ' ', ' ');

    // Trim the opening and closing spaces.
    element.className = newList.substring(1, newList.length - 1);
  }

  /**
   * (Internal) Gets a space separated list of the class names on the element.
   * The list is wrapped with a single space on each end to facilitate finding
   * matches within the list.
   */

  function classList(element) {
    return (' ' + (element && element.className || '') + ' ').replace(/\s+/gi, ' ');
  }

  /**
   * (Internal) Removes an element from the DOM.
   */

  function removeElement(element) {
    element && element.parentNode && element.parentNode.removeChild(element);
  }
  return NProgress;
});



//  鼠标是向上滚动还是向下滚动 

if ( $(".post_sider").length > 0 ){
$(document).on("mousewheel DOMMouseScroll", function (e) {
            // jq 获取dom 事件对象要通过originalEvent 
            var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||
                // chrome & ie
                (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1)); // firefox
            if (delta > 0) {
                // 向上滚
                 $(".post_sider").removeClass("imask");
                
 
            } else if (delta < 0) {
                // 向下滚
               
               if($.contains($(".post_sider")[0],e.target) || $(".post_sider")[0]==e.target){ $(".post_sider").removeClass("imask"); }
               else { $(".post_sider").addClass("imask");}
             
                
            }
        });
$(".post_sider").mouseover(function(){
  $(".sider-footer").removeClass("imask");    
  $(".post_sider").removeClass("imask");
}); 
}  





//  弹出信息toast
'use strict';(function($,window){var loadStyles=function(url){var hasSameStyle=false;var links=$('link');for(var i=0;i<links.length;i++){if(links.eq(i).attr('href')==url){hasSameStyle=true;return}}
if(!hasSameStyle){var link=document.createElement("link");link.type="text/css";link.rel="stylesheet";link.href=url;document.getElementsByTagName("head")[0].appendChild(link);}}
loadStyles('/usr/themes/spimes/css/animate.css');$.fn.toast=function(options){var $this=$(this);var _this=this;return this.each(function(){$(this).css({position:'relative'});var top='';var translateInfo='';var box='';var defaults={position:"absolute",animateIn:"fadeIn",animateOut:"fadeOut",padding:"10px 20px",background:"rgb(234, 57, 115)",borderRadius:"6px",duration:3000,animateDuration:500,fontSize:14,content:"这是一个提示信息",color:"#fff",top:"80%",zIndex:1000001,isCenter:true,closePrev:true,}
var opt=$.extend(defaults,options||{});var t='';top=opt.isCenter===true?'40%':opt.top;defaults.isLowerIe9=function(){return(!window.FormData);}
defaults.createMessage=function(){if(opt.closePrev){$('.cpt-toast').remove();}
box=$("<span class='animated "+opt.animateIn+" cpt-toast'></span>").css({"position":opt.position,"padding":opt.padding,"background":opt.background,"font-size":opt.fontSize,"-webkit-border-radius":opt.borderRadius,"-moz-border-radius":opt.borderRadius,"border-radius":opt.borderRadius,"color":opt.color,"top":top,"z-index":opt.zIndex,"-webkit-transform":'translate3d(-50%,-50%,0)',"-moz-transform":'translate3d(-50%,-50%,0)',"transform":'translate3d(-50%,-50%,0)','-webkit-animation-duration':opt.animateDuration/1000+'s','-moz-animation-duration':opt.animateDuration/1000+'s','animation-duration':opt.animateDuration/1000+'s',}).html(opt.content).appendTo($this);defaults.colseMessage();}
defaults.colseMessage=function(){var isLowerIe9=defaults.isLowerIe9();if(!isLowerIe9){t=setTimeout(function(){box.removeClass(opt.animateIn).addClass(opt.animateOut).on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){box.remove();});},opt.duration);}else{t=setTimeout(function(){box.remove();},opt.duration);}}
defaults.createMessage();})};})(jQuery,window);var showMessage=function(content,duration,isCenter,animateIn,animateOut){var animateIn=animateIn||'fadeIn';var animateOut=animateOut||'fadeOut';var content=content||'这是一个提示信息';var duration=duration||'3000';var isCenter=isCenter||false;$('body').toast({position:'fixed',animateIn:animateIn,animateOut:animateOut,content:content,duration:duration,isCenter:isCenter,});}


