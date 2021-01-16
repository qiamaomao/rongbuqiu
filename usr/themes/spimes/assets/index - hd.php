<?php if ($this->options->dhtop): ?>
<div class="main-slider row">
<div class="sp-slideshow">	
<!-- Swiper -->
<div class="swiper-container">
<div class="swiper-wrapper">
<?php 
$lunbotop = $this->options->dhtop;
$hang = explode(",", $lunbotop);
$n=count($hang);
$html="";
for($i=0;$i<$n;$i++){
$this->widget('Widget_Archive@lunbotop'.$i, 'pageSize=1&type=post', 'cid='.$hang[$i])->to($jis);
if($i==0){$no=" sx_no";}else{$no="";}
$str = stcdn($jis->fields->img);
$html=$html.'<div class="swiper-slide"><a class="block-fea" href="'.$jis->permalink.'" title="'.$jis->title.'" style="background-image: url('.$str.');"><i class="mask"></i><div class="entyr-icon"><i class="icon iconfont icon-shoucang"></i></div><header class="video-header"><span class="video-title"><span class="badge arc_v2">推荐</span>'.$jis->title.'</span></header></a></div>';
}
echo $html;
?>
</div>
<!-- Add Pagination -->
<div class="swiper-pagination"></div>
</div>			
</div><!-- sp-slideshow -->
<div class="small-slider">
<?php 
$lunbo = $this->options->imghdp;
$hang = explode(",", $lunbo);
$n=count($hang);
$html="";
for($i=0;$i<$n;$i++){
$this->widget('Widget_Archive@lunbo'.$i, 'pageSize=1&type=post', 'cid='.$hang[$i])->to($ji);
if($i==0){$no=" sx_no";}else{$no="";}
$str = stcdn($ji->fields->img);
$html=$html.'<div class="small-slider-item"><a href="'.$ji->permalink.'"  style="background-image: url('.$str.');" class="small-slider-img"><i class="mask"></i><div class="title"><span class="badge arc_v2">推荐</span>'.$ji->title.'</div></a><div class="entyr-icon"><i class="icon iconfont icon-shoucang"></i></div></div>';
}
echo $html;
?>
</div>
</div>
<?php endif; ?>
<?php if ($this->options->topnews): ?>
<?php $this->need('assets/top-news.php'); ?>
<?php endif; ?>
