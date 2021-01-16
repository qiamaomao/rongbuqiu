<nav class="navigation-tab">
<?php navmobis(); ?>  
<div class="navigation-tab-overlay"></div>
</nav>

<script>
//底部移动端菜单pjax
$(document).pjax('a[data-pjax]', {
    container: '#main',
    fragment: '#main',
    timeout: 8000,
	scrollTo: true
}).on('pjax:send',
function() {
    NProgress.start();
}).on('pjax:complete',
function() {
    NProgress.done();	
})
</script>

