<div class="part-mor contt">
<h3 class="section-title">
<span><i class="icon iconfont icon-icon-test25"></i> 精彩推荐</span>
</h3>
<div class="section-cont">
<div class="items">
<?php 
$sequid = $this->options->sequid;
$hang = explode(",", $sequid);
$n=count($hang);
$html="";
for($i=0;$i<$n;$i++){
$this->widget('Widget_Archive@sequid'.$i, 'pageSize=1&type=post', 'cid='.$hang[$i])->to($ji);
if($ji->fields->thumb){$img=$ji->fields->thumb;}
if($i==0){$no=" sx_no";}else{$no="";}
$created = date('m-d', $ji->created);
$str = stcdn($ji->fields->img);  
$html=$html.'<div class="item"><div class="hunter-item"><a href="'.$ji->permalink.'" ><div class="hunter-thumb"><i class="thumb scrollLoading" data-url="'.$str.'"></i></div><h2>'.$ji->title.'</h2><!--<h4><span class="hunter-tag btn btn-default">' . $ji->commentsNum .' 评论</span> <span class="hunter-product">' . $created .' </span></h4>--></a></div></div>';
}
echo $html;
?>
</div>
</div>
</div>
