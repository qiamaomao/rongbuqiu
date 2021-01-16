<div class="apply_tip">
    
    <div class="apply_header">
        <svg width="168" height="140" viewBox="0 0 168 140" xmlns:xlink="http://www.w3.org/1999/xlink" class="CreatorRecruitHeader-bgLeftImg" fill="currentColor"><defs><path id="id-231874171-a" d="M0 0h168v140H0z"></path><path id="id-231874171-c" d="M0 0h168v140H0z"></path></defs><g fill="none" fill-rule="evenodd"><mask id="id-231874171-b" fill="#fff"><use xlink:href="#id-231874171-a"></use></mask><path fill="#97D1FE" d="M150 36h15v15h-15z" mask="url(#id-231874171-b)" transform="rotate(-45 157.5 43.5)" fill-rule="nonzero"></path><mask id="id-231874171-d" fill="#fff"><use xlink:href="#id-231874171-c"></use></mask><g mask="url(#id-231874171-d)"><g transform="translate(-86 -105)"><circle cx="106.5" cy="106.5" r="106.5" stroke="#FFF" opacity=".197" stroke-width="20"></circle><rect width="15" height="15" x="97" y="200.828" fill="#F4C245" rx="7.5" transform="rotate(-45 104.5 208.328)" fill-rule="nonzero"></rect><circle cx="106.5" cy="106.5" r="64.5" stroke="#FFF" opacity=".197" stroke-width="16"></circle><circle cx="106.5" cy="106.5" r="28.5" stroke="#FFF" opacity=".197" stroke-width="12"></circle><circle cx="107" cy="107" r="7" fill="#D8D8D8" opacity=".197" fill-rule="nonzero"></circle></g></g></g></svg>
    <div class="apply-title">好文推荐 创作者招募</div>    
    </div>
    
    <div class="apply-section">
        <div class="apply-section-des">
            <div class="CreatorRecruitDesc-container">
                <div class="CreatorRecruitTitle">什么是创作者？</div>
                <div class="CreatorRecruitDesc-text">
                    <p>自媒体创作平台致力于为创作者提供更优质的创作环境，帮助原创作者打造专属的个人品牌。</p>
                    <p>为创作者和机构提供强大的运营管理、高清视频上传、多维度数据分析、内容生产等辅助工具、依托平台丰富的资源提供热点趋势,更好的服务每个创作者</p>
                </div>
            </div>
            <div class="CreatorRecruitDesc-image"><img src="<?php echo stcdn($this->options->themeUrl); ?>/images/chuangzuoz.png" alt=""></div>
        </div>
        <!--申请资格-->
        <div class="CreatorRecruitApplyCondition" style="margin-top: -12px;">
            <div class="CreatorRecruitTitle">申请条件</div>
            <div class="CreatorRecruitApplyCondition-conditionList">
            <div class="CreatorRecruitApplyCondition-conditionItem">
            <span class="CreatorRecruitApplyCondition-conditionItemText">会员积分 ≥ 1000</span>
            </div>
            <div class="CreatorRecruitApplyCondition-conditionItem">
            <span class="CreatorRecruitApplyCondition-conditionItemText">帐号注册时间 ≥ 90 天</span>
            </div>
            <div class="CreatorRecruitApplyCondition-conditionItem">
            <span class="CreatorRecruitApplyCondition-conditionItemText">过去 90 天未有违反《社区管理规定》的行为</span>
            </div>
            <div class="CreatorRecruitApplyCondition-conditionItem">
            <span class="CreatorRecruitApplyCondition-conditionItemText">仅限个人帐号申请</span>
            </div>
            </div>
        </div>
        <!--申请资格-->
        <div class="CreatorRecruitApplyCondition-additionalIntro"><div class="CreatorRecruitApplyCondition-additionalIntroTitle">补充说明</div><div class="CreatorRecruitApplyCondition-additionalIntroListItem">除以上申请条件，系统还会对帐号使用行为及内容进行审核，满足如下要求，方可通过系统审核：</div>
        <div class="CreatorRecruitApplyCondition-additionalIntroListItem">1、帐号发布的内容符合原创要求；</div>
        <div class="CreatorRecruitApplyCondition-additionalIntroListItem">2、帐号使用行为无异常。</div>
        </div>
        
         
        <button class="form__btn"  onclick="javascrtpt:window.location.href='<?php $this->options->siteUrl(); ?><?php $this->options->liuyan(); ?>.html'"  <?php apply_get($this->user->uid); ?> ><span>申请</span></button>
    
    </div>
    
</div>

<style>
.apply_header {
    position: relative;
    width: 100%;
    height: 190px;
    background-color: #1f44f4;
}
.apply-title {
        padding: 80px 0 0 40px;
    line-height: 37px;
    font-size: 26px;
    font-weight: 700;
    color: #fff;
}
.apply-section{
position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    min-height: 110px;
    margin: -50px 0 0 16px;
    padding: 0 24px 48px;
    border-radius: 2px 0 0 0;
    background-color: #fff;
}
.apply-section-des{
    display: flex;
    overflow: hidden;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.CreatorRecruitHeader-bgLeftImg {
    position: absolute;
    top: 0;
    left: 0;
}
.CreatorRecruitTitle {
    line-height: 25px;
    margin-top: 24px;
    font-size: 18px;
    font-weight: 700;
    color: #121212;
}
.CreatorRecruitDesc-text {
    line-height: 24px;
    margin-top: 16px;
    font-size: 14px;
    color: #444;
}
@media screen and (max-width: 767px){
    .CreatorRecruitDesc-image {
   display: none;
}
}

.CreatorRecruitApplyCondition-conditionList {
    margin-top: 16px;
}
.CreatorRecruitApplyCondition-conditionItem {
    width: 100%;
    height: 20px;
    margin-bottom: 16px;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.CreatorRecruitApplyCondition-additionalIntro:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    border-top: 1px solid #ebebeb;
}
.CreatorRecruitApplyCondition-additionalIntro {
    position: relative;
    padding: 14px 0 16px;
}

.CreatorRecruitApplyCondition-additionalIntroTitle {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    margin-bottom: 6px;
}
.CreatorRecruitApplyCondition-additionalIntroListItem {
    font-size: 13px;
    line-height: 22px;
    color: #999;
}
</style>