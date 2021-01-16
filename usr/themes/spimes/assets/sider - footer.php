<footer class="sider-footer">
			<div class="pos-r clearfix">
				<div class="share-box ">

        <div class="weixin mouh" id="share-weixin">
			<i class="icon iconfont icon-icon-test38"></i>
			<div class="wx-t-x pos-a hide box" id="weixin-box">
		        <img class="qrcode fl bor-3" src="<?php $this->options->themeUrl("poster/api.php"); ?>?url=<?php $this->permalink() ?>">
		    </div>
		</div>
        <span class="dot"></span>
        <!--<a href=""  class="qzone">
		<i class="icon iconfont icon-QQkongjian"></i>
		</a>
        <span class="dot"></span>-->
        <a href="javascript:Share('tqq')" class="qq">
		<i class="icon iconfont icon-qq"></i>
		</a>
        <span class="dot"></span>
        <a href="javascript:Share('sina')" class="weibo">
		<i class="icon iconfont icon-weibo"></i>
		</a>
        <?php if (($this->options->closelun == '1') && ($this->fields->pinglun !='0')):?>          
        <span class="dot"></span>
        <a href="#comments" class="taolunqu">
		<i class="icon iconfont icon-taolunqu"></i>
		</a>
        <?php endif; ?>  
        <span class="dot"></span>
        <a href="javascript:addFavorite2()" class="weibo">
		<i class="icon iconfont icon-fuzhi"></i>
		</a>          
	    </div>              
        
        
		</div>

</footer>  