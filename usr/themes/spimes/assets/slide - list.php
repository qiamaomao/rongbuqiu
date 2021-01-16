<?php if ($this->options->slidenum): ?>
<div class="part-mor contt slidels">
<div class="aui-flex">
                <h3 class="section-title aui-flex-box"> <span><i class="icon iconfont icon-icon-test25"></i> 最新推荐</span> </h3>
                <div class="aui-arrow">
                    <span><a href="<?php $this->options->siteUrl(); ?><?php if ($this->options->rewrite==0): ?>index.php/<?php endif; ?><?php $this->options->sitelink(); ?>.html">查看全部</a></span>
                </div>
            </div>
            <div class="aui-slide-list b-line">
<ul class="aui-slide-item-list" id="projList">
<?php 
$slidenum = $this->options->slidenum;
$hang = explode(",", $slidenum);
$n=count($hang);
$html="";
for($i=0;$i<$n;$i++){
$this->widget('Widget_Archive@kans'.$i, 'pageSize=1&type=post', 'cid='.$hang[$i])->to($ji);
if($i==0){$no=" sx_no";}else{$no="";}
$created = date('m-d', $ji->created);
$str = stcdn($ji->fields->img);  
$limg="/usr/themes/spimes/images/piex.gif";
$html=$html.' <li class="aui-slide-item-item"><a href="'.$ji->permalink.'" ><img class="scrollLoading" data-url="'.$str.'" src="'.$limg.'" alt=""><h2>'.$ji->title.'</h2></a></li>';
}
echo $html;
?> </ul> </div> 
</div>

<?php else: ?>
<div class="part-mor contt slidels">
<div class="aui-flex">
                <h3 class="section-title aui-flex-box"> <span class="li_i"><i class="icon iconfont icon-icon-test25"></i> 热门推荐</span> </h3>
                <div class="aui-arrow">
                    <span><a href="<?php $this->options->siteUrl(); ?><?php if ($this->options->rewrite==0): ?>index.php/<?php endif; ?><?php $this->options->sitelink(); ?>.html">查看全部</a></span>
                </div>
            </div>
            <div class="aui-slide-list b-line">
<ul class="aui-slide-item-list" id="projList">
  
<?php $i=exicache('sequhot'); if(($this->options->txtopcas == '1') && $i ):?> 
<?php foliehot(); ?>
<?php else: ?>    
<?php             
$period = time() - 2592000; // 单位: 秒, 时间范围: 30天
$counts = Typecho_Db::get()->fetchAll(Typecho_Db::get()
->select()                                      
->from('table.contents')
->where('created > ?', $period )
->where('type = ?', 'post')
->where('status = ?', 'publish')                                  
->order('views', Typecho_Db::SORT_DESC)
->limit('8')
); 
foreach ($counts as $count) {              
$this->widget('Widget_Archive@hots'.$count['cid'], 'pageSize=1&type=post', 'cid='.$count['cid'])->to($ji);
if($i==0){$no=" sx_no";}else{$no="";}
$created = date('m-d', $ji->created);
$picsum = imgNum($ji->content);  
$str = stcdn($ji->fields->img);
$limg="/usr/themes/spimes/images/pixel.gif";
$html=$html.' <li class="aui-slide-item-item"><a class="sle_i" href="'.$ji->permalink.'" ><img class="scrollLoading" data-url="'.$str.'" src="'.$limg.'" alt=""><div class="picsum-icon">'.$picsum.'图</div><h2>'.$ji->title.'</h2></a></li>';
}
echo $html;                  
?>
<?php endif; ?>
</ul>
</div> 
</div>
<?php endif; ?>

<script>
    window.onload = function () {
        var dv = document.getElementById('projList'), ox;
        //上一次的位置 scrollLeft
        var last_left = 0;
        dv.onmousemove = function (e) {
            dv.onmousemove = mousemove;
            dv.onmouseup = mouseup;
            e = e || window.event;
            //如果上次有记录
            if(last_left > 0 ){
                //就减掉上次的距离
                ox = e.clientX-last_left;
            }else{
                ox = e.clientX- dv.scrollLeft;
                ox = e.clientX;
            }
            dv.className = 'aui-slide-item-list';
        };
        function mousemove(e) {
            e = e || window.event;
            
            dv.scrollLeft = e.clientX - ox;
        }
        function mouseup() {
            dv.className = 'aui-slide-item-list';
            dv.onmouseup = dv.onmousemove = null;
            
        }

    }()
</script>