<!-- 首页og -->
<?php if ($this->is('index')):?>
<meta property="og:title" content="<?php $this->options->title(); ?>">
<meta property="og:type" content="website">
<meta property="og:url" content="<?php $this->options->siteUrl(); ?>" />
<meta property="og:image" content="<?php $this->options->favicon(); ?>">
<meta property="og:description" content="<?php $this->options->description() ?>">
<?php endif; ?>
<!-- 内容页og -->
<?php if ( $this->is('post') || $this->is('page') ) : ?>
<meta property="og:title" content="<?php $this->title(); ?>">
<meta property="og:type" content="article">
<meta property="og:url" content="<?php $this->permalink() ?>" />
<?php if ($this->fields->img): ?> 
<meta property="og:image" content="<?php $this->fields->img(); ?>">
<?php endif; ?>
<meta property="og:description" content="<?php $this->excerpt(30, '...');?>">
<?php endif; ?>