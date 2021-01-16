<div class="news-foot">
<?php if ($this->is('author')) : ?><?php else : ?>
<div class="container"><div class="part-news-foot">
  <h2 class="section-title">
  <i class="icon iconfont icon-icon-test25"></i>  悦看推荐
	<?php if ($this->options->footnewmore): ?>
    <a href="<?php $this->options->footnewmore(); ?>" class="more" >查看更多</a>
	<?php endif; ?>
  </h2>
 <div class="section-content">    
<?php $this->widget('Widget_Archive@indextuis', 'pageSize=5&type=category', 'mid='.$this->options->footnew.'')->to($categoryPosts); ?>
<?php while($categoryPosts->next()): ?>
      <div class="item">
            
                <div class="item-thumb"><div class="feaimg"><a href="<?php $categoryPosts->permalink(); ?>" class="block-fea scrollLoading" data-url="<?php echo stcdn($categoryPosts->fields->img); ?>" ></a><div class="entyr-icon ico-p"><?php if ($categoryPosts->fields->videourl): ?><i class="icon iconfont icon-icon-test15"></i><?php else : ?><?php echo ''.imgNums($categoryPosts->content).'' ; ?><?php endif; ?></div></div></div>
                <div class="item-main">
                <div class="t_tl"><a href="<?php $categoryPosts->permalink(); ?>"><?php $categoryPosts->title(); ?></a></div>
                
               <div class="t_tls a_cl"> <span><?php $email=$categoryPosts->author->mail; $imgUrl = getGravatar($email);echo '<img src="'.$imgUrl.'" srcset="'.$imgUrl.'" class="avatar photo" height="22" width="22">'; ?> <?php $categoryPosts->author->screenName(); ?></span>
                 <span><?php Postviews($categoryPosts); ?>阅读</span></div>
                </div>
              
            </div>  
<?php endwhile; ?>	
             </div>

</div>
</div>
<?php endif; ?>
</div>

