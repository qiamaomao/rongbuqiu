	<?php if ( $this->is('index') ) : ?>
	<header class="site-header">
        <nav class="main-navigation">
		<ul class="menu-nav-inline">
		<li class="menu-item active"> <a data-post href="<?php $this->options->siteUrl(); ?>">最新文章 </a> </li>
        <?php navsecinfo(); ?>   
        </ul>
		<div class="primary-menu" >
		<ul class="_container" id="gogo">
		<?php 
$lunbotop = $this->options->labanew;
$hang = explode(",", $lunbotop);
$n=count($hang);
$html="";
for($i=0;$i<$n;$i++){
$this->widget('Widget_Archive@lunbolaba'.$i, 'pageSize=1&type=post', 'cid='.$hang[$i])->to($jis);
if($jis->fields->thumb){$img=$jis->fields->thumb;}
if($i==0){$no=" sx_no";}else{$no="";}
$html=$html.'<li><a href="'.$jis->permalink.'"><i class="icon iconfont icon-shengyin"></i> '.$jis->title.'</a></li>';
}
echo $html;
?>		
</ul>
		</div>	        
        </nav>
	</header><!-- #masthead -->
	<?php else : ?>
	<div class="empty"></div>
	<?php endif; ?>	
