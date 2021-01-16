
<?php
$p = $this->fields->videourl;
$i = stripos($p, 'iframe');

$turl = stcdn($this->options->themeUrl); 

if($i==FALSE){
   $strhtml = '<iframe border="0" src="'.$turl.'/ext/danmu/player/?url='.$p.'" class="dmplay_sl" width="100%" height="100%" marginWidth="0" frameSpacing="0" marginHeight="0" frameBorder="0" scrolling="no" vspale="0" noResize></iframe>';
}
else{
   $strhtml =  $p."<script>$('iframe').addClass('ifr_sl');</script>";
}

echo $strhtml;

?>





