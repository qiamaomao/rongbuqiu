document.write('<div class="fixed-sidebar" style="margin-left: -430px;">');
document.write('<div class="panel-set"><h3 class="panel-title">主题设置<small>Spimes</small></h3></div>');
document.write('<ul id="menu-items" class="menu">');
document.write('<li id="menu-item" class="item-0 "><a href="#div-1" class="link-0"><span><i class="icon iconfont icon-icon-test13"></i> 常规设置 Info </span></a></li>');
document.write('<li id="menu-item" class="item-0 "><a href="#div-2" class="link-0"><span><i class="icon iconfont icon-shouye"></i> 首页设置 Index </span></a></li>');
document.write('<li id="menu-item" class="item-0 "><a href="#div-3" class="link-0"><span><i class="icon iconfont icon-icon-test16"></i> 会员中心 member </span></a></li>');
document.write('<li id="menu-item" class="item-0 "><a href="#div-4" class="link-0"><span><i class="icon iconfont icon-icon-test16"></i> 广告设置 Advert </span></a></li>');
document.write('<li id="menu-item" class="item-0 "><a href="#div-5" class="link-0"><span><i class="icon iconfont icon-tupian"></i> 风格样式 Style</span></a></li>');
document.write('<li id="menu-item" class="item-0 "><a href="#div-6" class="link-0"><span><i class="icon iconfont icon-wenjuan"></i> 边栏页脚 Side</span></a></li>');
document.write('<li id="menu-item" class="item-0 "><a href="#div-7" class="link-0"><span><i class="icon iconfont icon-jiju"></i> 移动设置 Mobi</span></a></li>');
document.write('<li id="menu-item" class="item-0 "><a href="#div-8" class="link-0"><span><i class="icon iconfont icon-sousuo"></i> SEO设置 SEO</span></a></li>');
document.write('<li id="menu-item" class="item-0 "><a href="#div-9" class="link-0"><span><i class="icon iconfont icon-shandian"></i> 优化加速 Optim</span></a></li>');
document.write('<li id="menu-item" class="item-0 "><a href="#typecho-option-item--69" class="link-0 ss"><span><i class="icon iconfont icon-anquan"></i> 保存设置 Save</span></a></li>');
document.write('</ul></div>');
document.write('<a href="#" id="scroll-to-top" class=""><span class="text-lg icon iconfont icon-icon-test26"></span></a>');


$(document).ready(function() { $('a.link-0').click(function() { $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top+-60+'px' }, { duration: 500, easing: 'swing' }); return false; }); }); $(function(){ $('a.link-0').click(function (e) {  $('a.link-0').removeClass('active'); $(this).addClass('active'); }); });