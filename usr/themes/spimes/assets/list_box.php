<?php if (($this->fields->img) && ($this->fields->abcimg == 'shuos')): ?>
<article class="post-list contt blockimg shuobg">
<div class="ad-container">
<div class="entry-meta"><a href="<?php $this->options->siteUrl(); ?><?php if ($this->options->rewrite==0): ?>index.php/<?php endif; ?>author/<?php $this->author->uid(); ?>"><?php $email=$this->author->mail; $imgUrl = getGravatar($email);echo '<img src="'.$imgUrl.'" srcset="'.$imgUrl.'" class="avatar photo " style="margin: 5px 10px 5px 0;" height="30" width="30">'; ?><?php $this->author->screenName(); ?></a></div>  
<div class="ad-image feaimg"><a class="block-fea" href="<?php $this->permalink(); ?>" style="background-image: url('<?php echo stcdn($this->fields->img); ?>');"></a><?php if ($this->fields->videourl): ?><div class="entyr-icon ico-p"><i class="icon iconfont icon-icon-test15"></i></div><?php else : ?><div class="entyr-icon"><?php echo ''.imgNums($this->content).'' ; ?></div><?php endif; ?></div>
<header class="entry-header">
<span class="entry-title"> <a href="<?php $this->permalink(); ?>"><?php $this->sticky(); $this->title() ?></a></span>
</header>
<div class="entry-summary"><p><?php if ($this->fields->tdesc): ?><?php $this->fields->tdesc(); ?><?php else : ?><?php $this->excerpt(80, '...');?><?php endif; ?></p></div></div>
</article>
<?php elseif (($this->fields->img) && ($this->fields->abcimg == 'mable')): ?>
<article class="post-list contt featured">
<div class="featured-container">
                    <header class="entry-header featitle">
                        <span class="entry-title"><a href="<?php $this->permalink(); ?>"><?php listdeng($this);?><?php if(timeZone($this->date->timeStamp)) echo '<span class="badge arc_v2">最新</span>'; ?><?php $this->sticky(); $this->title() ?></a></span>
                    </header>
					<div class="entry-meta fea-meta">
					<a href="<?php $this->options->siteUrl(); ?><?php if ($this->options->rewrite==0): ?>index.php/<?php endif; ?>author/<?php $this->author->uid(); ?>"><?php $email=$this->author->mail; $imgUrl = getGravatar($email);echo '<img src="'.$imgUrl.'" srcset="'.$imgUrl.'" class="avatar avatar-140 photo" height="25" width="25">'; ?> <?php $this->author->screenName(); ?></a><span class="separator">/</span>
                        <?php $this->category(',', true, 'none'); ?> <span class="separator">/</span>
                       <time datetime="<?php $this->date('Y-m-d'); ?>"><?php echo formatTime($this->created); ?></time>
                        <span class="separator">/</span>
                        <?php Postviews($this); ?> 阅读<span class="separator">/</span><?php zannum($this); ?>赞</div>
 <div class="rowimg">
            <div class="col-4">
                <div class="feaimg">
                 <?php if (showThumbnail($this,0)): ?>  <!--如果有自定义img-->
                 <a class="feaimg-content scrollLoading" title="<?php $this->title() ?>" href="<?php $this->permalink() ?>" data-url="<?php echo stcdn(showThumbnail($this,0)); ?>"></a>
				 <?php if ($this->fields->videourl): ?><div class="entyr-icon ico-p"><i class="icon iconfont icon-icon-test15"></i></div><?php else : ?><div class="entyr-icon"><?php echo ''.imgNums($this->content).'' ; ?></div><?php endif; ?>
				 <?php else: ?>
                 <a class="feaimg-content" title="<?php $this->title() ?>" href="<?php $this->permalink() ?>" style="background-image: url(<?php $this->options->themeUrl(); ?>images/thumbs/other_thumbnail.png);" ></a>
				 <?php endif; ?>
                </div>
</div>
<div class="col-4">
                <div class="feaimg">
				 <?php if (showThumbnail($this,1)): ?>  <!--如果有自定义img-->
                 <a class="feaimg-content scrollLoading" title="<?php $this->title() ?>" href="<?php $this->permalink() ?>" data-url="<?php echo stcdn(showThumbnail($this,1)); ?>" ></a>
				 <?php if ($this->fields->videourl): ?><div class="entyr-icon ico-p"><i class="icon iconfont icon-icon-test15"></i></div><?php else : ?><div class="entyr-icon"><?php echo ''.imgNums($this->content).'' ; ?></div><?php endif; ?>
                 <?php else: ?>
                 <a class="feaimg-content" title="<?php $this->title() ?>" href="<?php $this->permalink() ?>" style="background-image: url(<?php $this->options->themeUrl(); ?>images/thumbs/other_thumbnail.png);" ></a>
				 <?php endif; ?>                    
                </div>
</div>
<div class="col-4">
                <div class="feaimg">
                  <?php if (showThumbnail($this,2)): ?>  <!--如果有自定义img-->
                 <a class="feaimg-content scrollLoading" title="<?php $this->title() ?>" href="<?php $this->permalink() ?>" data-url="<?php echo stcdn(showThumbnail($this,2)); ?>" ></a>
				 <?php if ($this->fields->videourl): ?><div class="entyr-icon ico-p"><i class="icon iconfont icon-icon-test15"></i></div><?php else : ?><div class="entyr-icon"><?php echo ''.imgNums($this->content).'' ; ?></div><?php endif; ?>
                 <?php else: ?>
                 <a class="feaimg-content" title="<?php $this->title() ?>" href="<?php $this->permalink() ?>" style="background-image: url(<?php $this->options->themeUrl(); ?>images/thumbs/other_thumbnail.png);" ></a>
				 <?php endif; ?>
                </div>
            </div>
        </div>
<div class="entry-summary feasum"><p><?php if ($this->fields->tdesc): ?><?php $this->fields->tdesc(); ?><?php else : ?><?php $this->excerpt(80, '...');?><?php endif; ?></p></div></div>
</article>
<?php elseif(($this->fields->img) && ($this->fields->abcimg == 'bable')): ?>
<article class="post-list contt featured" id="post_<?php $this->cid(); ?>">
       <div class="featured-container">
                    <header class="entry-header featitle">
                        <span class="entry-title"><a href="<?php $this->permalink(); ?>"><?php listdeng($this);?><?php if(timeZone($this->date->timeStamp)) echo '<span class="badge arc_v2">最新</span>'; ?><?php $this->sticky(); $this->title() ?></a></span>
                    </header>
					 <div class="entry-meta fea-meta">
					     <a href="<?php $this->options->siteUrl(); ?><?php if ($this->options->rewrite==0): ?>index.php/<?php endif; ?>author/<?php $this->author->uid(); ?>"><?php $email=$this->author->mail; $imgUrl = getGravatar($email);echo '<img src="'.$imgUrl.'" srcset="'.$imgUrl.'" class="avatar avatar-140 photo" height="25" width="25">'; ?>
					    <?php $this->author->screenName(); ?></a><span class="separator">/</span>				  
                        <?php $this->category(',', true, 'none'); ?>                        <span class="separator">/</span>
                        <time datetime="<?php $this->date('Y-m-d'); ?>"><?php echo formatTime($this->created); ?></time>
                        <span class="separator">/</span>
                        <?php Postviews($this); ?> 阅读<span class="separator">/</span><?php zannum($this); ?>赞</div>
        <div class="feaimg fea-21x9">
            <a id="post_a_<?php $this->cid(); ?>" class="feaimg-content scrollLoading" title="<?php $this->title(); ?>" href="<?php if ($this->fields->videourl && ($this->options->ajxplay == '1') && ($this->options->aboutme) ): ?>javascript:;fn_conid(<?php $this->cid(); ?>)<?php else : ?><?php $this->permalink(); ?><?php endif; ?>" data-url="<?php echo stcdn($this->fields->bimg); ?>"></a>
			<?php if ($this->fields->videourl): ?><div class="entyr-icon ico-p"><i class="icon iconfont icon-icon-test15"></i></div><?php else : ?><div class="entyr-icon"><?php echo ''.imgNums($this->content).'' ; ?></div><?php endif; ?>
        </div> <div class="entry-summary feasum"><p><?php if ($this->fields->tdesc): ?><?php $this->fields->tdesc(); ?><?php else : ?><?php $this->excerpt(80, '...');?><?php endif; ?></p></div> 
               </div>
         </article>
<?php else: ?>


<?php if ($this->fields->img): ?>
<article class="post-list contt blockimg " id="post_<?php $this->cid(); ?>">
                <div class="entry-container"><span class="laid_title_l"></span>
                    <div class="block-image feaimg">
                    <a id="post_a_<?php $this->cid(); ?>" class="block-fea scrollLoading" data-url="<?php echo stcdn($this->fields->img); ?>" href="<?php if ($this->fields->videourl && ($this->options->ajxplay == '1') && ($this->options->aboutme) ): ?>javascript:;fn_conid(<?php $this->cid(); ?>)<?php else : ?><?php $this->permalink(); ?><?php endif; ?>" title="<?php $this->title(); ?>" ><?php if ($this->fields->videourl): ?><i class="mask"></i><?php endif; ?>
                    <span class="vodlist_top"><em class="voddate voddate_year"><?php $this->category(',', false, 'none'); ?></em></span>
                    </a>
					<?php if ($this->fields->videourl): ?><div class="entyr-icon ico-p"><i class="icon iconfont icon-icon-test15"></i></div><?php else : ?><div class="entyr-icon"><?php echo ''.imgNums($this->content).'' ; ?></div><?php endif; ?>
                    </div>
                    <header class="entry-header"><span class="entry-title"><a href="<?php $this->permalink() ?>"><?php listdeng($this);?><?php if(timeZone($this->date->timeStamp)) echo '<span class="badge arc_v2">最新</span>'; ?><?php $this->sticky(); $this->title(31, '...') ?></a></span></header>
                    <div class="entry-summary ss"><p><?php if ($this->fields->tdesc): ?><?php $this->fields->tdesc(); ?><?php else : ?><?php $this->excerpt(80, '...');?><?php endif; ?></p></div>
                    <div class="entry-meta">
					    <a href="<?php $this->options->siteUrl(); ?><?php if ($this->options->rewrite==0): ?>index.php/<?php endif; ?>author/<?php $this->author->uid(); ?>"><?php $email=$this->author->mail; $imgUrl = getGravatar($email);echo '<img src="'.$imgUrl.'" srcset="'.$imgUrl.'" class="avatar avatar-140 photo" height="25" width="25" >'; ?><?php $this->author->screenName(); ?></a><span class="separator">/</span><?php $this->category(',', true, 'none'); ?><span class="separator">/</span><time datetime="<?php $this->date('Y-m-d'); ?>"><?php echo formatTime($this->created); ?></time>
                        <span class="separator">/</span>
                        <?php Postviews($this); ?> 阅读 <span class="separator">/</span><?php zannum($this); ?>赞</div> 
                  
                </div><?php if ($this->options->oncosmore == '1'):?><?php cosmore($this->content); ?><?php endif; ?>
  
</article>
<?php else: ?>
<article class="post-list contt blockimg">
 
                <?php if (showThumbnail($this,-1)): ?>
                 <div class="entry-container"><span class="laid_title_l"></span>
                    <div class="block-image feaimg">
                    <a class="block-fea scrollLoading" data-url="<?php echo stcdn(showThumbnail($this,0)); ?>" href="<?php $this->permalink(); ?>" title="<?php $this->title(); ?>" ><?php if ($this->fields->videourl): ?><i class="mask"></i><?php endif; ?>
                    <span class="vodlist_top"><em class="voddate voddate_year"><?php $this->category(',', false, 'none'); ?></em></span>  
                    </a>
					<?php if ($this->fields->videourl): ?><div class="entyr-icon ico-p"><i class="icon iconfont icon-icon-test15"></i></div><?php else : ?><div class="entyr-icon"><?php echo ''.imgNums($this->content).'' ; ?></div><?php endif; ?>
                    </div>
                    <header class="entry-header"><span class="entry-title"><a href="<?php $this->permalink() ?>"><?php listdeng($this);?><?php if(timeZone($this->date->timeStamp)) echo '<span class="badge arc_v2">最新</span>'; ?><?php $this->sticky(); $this->title(31, '...') ?></a></span></header>
                    <div class="entry-summary ss"><p><?php if ($this->fields->tdesc): ?><?php $this->fields->tdesc(); ?><?php else : ?><?php $this->excerpt(80, '...');?><?php endif; ?></p></div>
                    <div class="entry-meta">
					    <a href="<?php $this->options->siteUrl(); ?><?php if ($this->options->rewrite==0): ?>index.php/<?php endif; ?>author/<?php $this->author->uid(); ?>"><?php $email=$this->author->mail; $imgUrl = getGravatar($email);echo '<img src="'.$imgUrl.'" srcset="'.$imgUrl.'" class="avatar avatar-140 photo" height="25" width="25">'; ?><?php $this->author->screenName(); ?></a><span class="separator">/</span><?php $this->category(',', true, 'none'); ?><span class="separator">/</span><time datetime="<?php $this->date('Y-m-d'); ?>"><?php echo formatTime($this->created); ?></time>
                        <span class="separator">/</span>
                        <?php Postviews($this); ?> 阅读<span class="separator">/</span><?php zannum($this); ?>赞</div>
                </div><?php if ($this->options->oncosmore == '1'):?><?php cosmore($this->content); ?><?php endif; ?>
                <?php else: ?>  
                <div class="entry-container" style="padding-left: 0px  !important;">                   
                    <header class="entry-header"><span class="entry-title"><a href="<?php $this->permalink() ?>"><?php listdeng($this);?><?php if(timeZone($this->date->timeStamp)) echo '<span class="badge arc_v2">最新</span>'; ?><?php $this->sticky(); $this->title(31, '...') ?></a></span></header>
                    <div class="entry-summary ss"><p><?php if ($this->fields->tdesc): ?><?php $this->fields->tdesc(); ?><?php else : ?><?php $this->excerpt(80, '...');?><?php endif; ?></p></div>
                    <div class="entry-meta">
					    <a href="<?php $this->options->siteUrl(); ?><?php if ($this->options->rewrite==0): ?>index.php/<?php endif; ?>author/<?php $this->author->uid(); ?>"><?php $email=$this->author->mail; $imgUrl = getGravatar($email);echo '<img src="'.$imgUrl.'" srcset="'.$imgUrl.'" class="avatar avatar-140 photo" height="25" width="25">'; ?><?php $this->author->screenName(); ?></a><span class="separator">/</span><?php $this->category(',', true, 'none'); ?><span class="separator">/</span><time datetime="<?php $this->date('Y-m-d'); ?>"><?php echo formatTime($this->created); ?></time>
                        <span class="separator">/</span>
                        <?php Postviews($this); ?> 阅读</div>
                </div>
               <?php endif; ?>
</article>
<?php endif; ?>


<?php endif; ?>