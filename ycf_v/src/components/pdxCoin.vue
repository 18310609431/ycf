<template>
    <div class="coin">
    	<div class="title">{{$t('coin.title')}}</div>
        <div class="main">
            <div class="contentTop">
                <div class="topWords">
                    <div class="lastWords">{{$t('coin.first')}}</div>
                </div>
                <div class="topImg rigtImg">
                	<img src="/static/img/img.png" alt="">
                    <!--<img v-if="$i18n.locale=='zh'" src="/static/img/img.png" alt="">-->
                    <!-- <img v-else src="/static/img/imgen.png"> -->
                </div>
            </div>
            <div class="contentBottom">
                <div class="bottomImg">
                	<img src="/static/img/imgtwo.png" alt="">
                    <!--<img v-if="$i18n.locale=='zh'" src="/static/img/imgtwo.png" alt="">-->
                    <!-- <img v-else src="/static/img/imgtwoen.png"> -->
                </div>
                <div class="bottomWords">
                    <div class="lastWords">{{$t('coin.last')}}</div>
                </div>
            </div>
            <div class="contentTop contentThree">
                <div class="topWords">
                    <div class="lastWords">{{$t('coin.three')}}</div>
                </div>
                <div class="topImg rigtImg">
                	<img src="/static/img/imgthree.png" alt="">
                    <!--<img v-if="$i18n.locale=='zh'" src="/static/img/imgthree.png" alt="">-->
                    <!-- <img v-else src="/static/img/imgthreeen.png"> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.coin{
    width: 100%;
    height: 100%;
    background-color: #fff;
    position: relative;
}
.title{
	text-align: center;
	font-size: 2.4rem;
	color: #3d3d3d;
	font-weight: 600;
	padding-bottom: 4rem;
	padding-top: 4rem;
}
.main{
    /* position: absolute;
    top: 50%;
    transform: translateY(-50%); */
    margin: 0 auto 8rem;
    width: 60rem;
}
.contentTop,.contentBottom{
    display: flex;
    width: 100%;
}
.contentBottom{
    margin-top: 4.5rem;
}
.topWords,.topImg{
    display: inline-block;
}
.topWords{
    position: relative;
    width: 23rem;
}
.bottomWords{
    position: relative;
    /* vertical-align: top; */
    width: 23rem;
    margin-left: 3.5rem;
    text-align: right;
}
.lastWords{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
.topImg{
    margin-left: 3.5rem;
    width: 37rem;
    height: 23rem;
}
.topImg img{
    width: 100%;
    height: 100%;
}
.bottomImg{
    width: 37rem;
    height: 23rem;
}
.bottomImg img{
    width: 100%;
    height: 100%;
}
.firstWords{
    font-size: 2.4rem;
    color: #3d3d3d;
    margin-bottom: 1.5rem;
}
.lastWords{
    font-size: 1rem;
    line-height: 1.6rem;
    color: #3d3d3d;
}
.contentThree{
    margin-top: 4.5rem;
}
</style>
