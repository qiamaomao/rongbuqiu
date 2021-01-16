<?php if ($this->options->navpages == 'navshu'):?>
<?php if ($this->is('index')) : ?>
<?php $this->pageNav('<', '>', 3, '...', array('wrapTag' => 'ol', 'wrapClass' => 'page-navigator cck', 'itemTag' => 'li', 'textTag' => 'span', 'currentClass' => 'current', 'prevClass' => 'prev', 'nextClass' => 'nexts',)); ?>
<?php else : ?>
<?php $this->pageNav('<', '>', 3, '...', array('wrapTag' => 'ol', 'wrapClass' => 'page-navigator', 'itemTag' => 'li', 'textTag' => 'span', 'currentClass' => 'current', 'prevClass' => 'prev', 'nextClass' => 'nexts',)); ?>
<?php endif; ?>
<?php else : ?>
<?php if ($this->is('index')) : ?>
<?php $this->pageLink('点击查看更多','next'); ?>
<?php else : ?>
<?php $this->pageNav('<', '>', 3, '...', array('wrapTag' => 'ol', 'wrapClass' => 'page-navigator', 'itemTag' => 'li', 'textTag' => 'span', 'currentClass' => 'current', 'prevClass' => 'prev', 'nextClass' => 'nexts',)); ?>
<?php endif; ?>
<?php endif; ?>

