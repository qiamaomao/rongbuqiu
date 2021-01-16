<?php $this->related(5)->to($relatedPosts); ?>	
<?php if ($relatedPosts->have()): ?>
<div class="stui part-mor">
<h3 class="section-title">  
    <span><i class="icon iconfont icon-icon-test25"></i> 相关推荐 </span>    
  </h3>  
<?php while ($relatedPosts->next()): ?>
<?php if ($relatedPosts->fields->img): ?>
<article class="post-list contt blockimg">
                <div class="entry-container">
                    <div class="block-image feaimg">
                    <a class="block-fea" href="<?php $relatedPosts->permalink(); ?>" title="<?php $relatedPosts->title(); ?>" style="background-image: url(<?php echo stcdn($relatedPosts->fields->img); ?>);"></a>
					<?php if ($relatedPosts->fields->videourl): ?><div class="entyr-icon"><i class="icon iconfont icon-icon-test15"></i></div><?php else : ?><div class="entyr-icon"><?php echo ''.imgNums($relatedPosts->content).'' ; ?></div><?php endif; ?>
                    </div>
                    <header class="entry-header"><span class="entry-title"><a href="<?php $relatedPosts->permalink() ?>"><?php listdeng($relatedPosts);?><?php if(timeZone($relatedPosts->date->timeStamp)) echo '<span class="badge arc_v2">最新</span>'; ?><?php $relatedPosts->sticky(); $relatedPosts->title() ?></a></span></header>
                    <div class="entry-summary ss"><p><?php if ($relatedPosts->fields->tdesc): ?><?php $relatedPosts->fields->tdesc(); ?><?php else : ?><?php $relatedPosts->excerpt(80, '...');?><?php endif; ?></p></div>
                    <div class="entry-meta">
					    <a href="<?php $this->options->siteUrl(); ?><?php if ($this->options->rewrite==0): ?>index.php/<?php endif; ?>author/<?php $relatedPosts->author->uid(); ?>"><?php $email=$relatedPosts->author->mail; $imgUrl = getGravatar($email);echo '<img src="'.$imgUrl.'" srcset="'.$imgUrl.'" class="avatar avatar-140 photo" height="25" width="25">'; ?><?php $relatedPosts->author->screenName(); ?></a><span class="separator">/</span><?php $relatedPosts->category(',', true, 'none'); ?><span class="separator">/</span><time datetime="<?php $relatedPosts->date('Y-m-d'); ?>"><?php $relatedPosts->date('Y-m-d'); ?></time>
                        <span class="separator">/</span>
                        <?php Postviews($relatedPosts); ?>阅读</div>
                </div><?php if ($this->options->oncosmore == '1'):?><?php cosmore($relatedPosts->content); ?><?php endif; ?>
  
</article>
<?php else: ?>
<article class="post-list contt blockimg">
                <div class="entry-container">
                    <div class="block-image feaimg">
                    <a class="block-fea" href="<?php $relatedPosts->permalink(); ?>" title="<?php $relatedPosts->title(); ?>" style="background-image: url(<?php echo stcdn(showThumbnail($relatedPosts,0)); ?>);"></a>
					<?php if ($relatedPosts->fields->videourl): ?><div class="entyr-icon"><i class="icon iconfont icon-icon-test15"></i></div><?php else : ?><div class="entyr-icon"><?php echo ''.imgNums($relatedPosts->content).'' ; ?></div><?php endif; ?>
                    </div>
                    <header class="entry-header"><span class="entry-title"><a href="<?php $relatedPosts->permalink() ?>"><?php listdeng($relatedPosts);?><?php if(timeZone($relatedPosts->date->timeStamp)) echo '<span class="badge arc_v2">最新</span>'; ?><?php $relatedPosts->sticky(); $relatedPosts->title() ?></a></span></header>
                    <div class="entry-summary ss"><p><?php if ($relatedPosts->fields->tdesc): ?><?php $relatedPosts->fields->tdesc(); ?><?php else : ?><?php $relatedPosts->excerpt(80, '...');?><?php endif; ?></p></div>
                    <div class="entry-meta">
					    <a href="<?php $this->options->siteUrl(); ?><?php if ($this->options->rewrite==0): ?>index.php/<?php endif; ?>author/<?php $relatedPosts->author->uid(); ?>"><?php $email=$relatedPosts->author->mail; $imgUrl = getGravatar($email);echo '<img src="'.$imgUrl.'" srcset="'.$imgUrl.'" class="avatar avatar-140 photo" height="25" width="25">'; ?><?php $relatedPosts->author->screenName(); ?></a><span class="separator">/</span><?php $relatedPosts->category(',', true, 'none'); ?><span class="separator">/</span><time datetime="<?php $relatedPosts->date('Y-m-d'); ?>"><?php $relatedPosts->date('Y-m-d'); ?></time>
                        <span class="separator">/</span>
                        <?php Postviews($relatedPosts); ?>阅读</div>
                </div><?php if ($this->options->oncosmore == '1'):?><?php cosmore($relatedPosts->content); ?><?php endif; ?>
  
</article>
<?php endif; ?>	   
<?php endwhile; ?>
</div>
<?php else: ?>
<div class="stui part-mor">
<h3 class="section-title">  
<span><i class="icon iconfont icon-icon-test25"></i> 随机推荐 </span>    
</h3> 
<div class="section-cont">
    <div class="items">	  
	  <?php getRandomPosts(4);?>  	  	  
	</div>
</div>
</div>
<?php endif; ?>	