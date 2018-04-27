<template>
    <div class="out">
        <div class="bgOuter" >
        	
        	
            <!-- <div id="particles"></div> -->
            <div class="logo"></div>
            <div class="content">
                <div class="paperTitle">
                    <div class="parprBigSize">{{$t('homePage.bigTitle')}}</div>
                    <div class="parprSmallSize">{{$t('homePage.smallTitle')}}</div>
                </div>
                <!-- <span class="down">下载白皮书 -->
                    <a v-if="$i18n.locale=='zh'" class="down" href="/static/img/pdx-wingchunfans-cn.pdf" target="_bank" download>{{$t('homePage.paper')}}</a>
                    <a v-else class="down" href="/static/img/pdx-wingchunfans-en.pdf" target="_bank" download>{{$t('homePage.paper')}}</a>
                <!-- </span> -->
            </div>
        </div>
        <div class="aboutUS">
            <div class="main">
                <span class="title">{{$t('aboutUs.title')}}</span>
                <span class="UsContent">{{$t('aboutUs.concent')}}</span>
            </div>
        </div>
    </div>
</template>
<script>
import particles from 'particles.js';
export default {
//    mounted(){
//     particlesJS.load('particles','/static/data/data.json');
//     }
}
</script>

<style scoped>
/* #particles{
        width: 100%;
        height: 100%;
    } */

.logo{
    width: 10.8rem;
    height: 7rem;
    background: url("/static/img/logo.png") no-repeat center;
	background-size: 80%;
    position: absolute;
    z-index: 90005;
    top: 5.25rem;
    left: 50%;
    transform: translateX(-50%);
}
.out{
    position: relative;
    width: 100%;
    height: 49.5rem;
    background-color: #ffffff; 
}
.bgOuter{
    width: 100%;
    height: 46rem;
    padding-top: 0.1px;
    background: url("/static/img/homebj.jpg") no-repeat center;
	background-size: cover;
    position: relative;
}
.content{
    text-align: center;
    margin: 13rem auto 0;
    position: relative;
    z-index: 100;
}
.parprBigSize{
    font-size: 3.6rem;
    color: #fff;
    font-weight: 900;
     margin-top: 2rem;
}
.parprSmallSize{
    margin-top: 0.5rem;
    font-size: 1.5rem;
    color: #fff;
}
/* .fontEn{
    width: 44rem;
    height: 12rem;
    background: url("/static/img/titleen.png") no-repeat center;
	background-size: contain;
} */
.down{
    /* margin:2.5rem auto 0; */
    text-decoration: none;
    display: inline-block;
    margin-top: 2.5rem;
    width: 15rem;
    height: 3.2rem;
    color: #ffffff;
    background: url("/static/img/buttone.png") no-repeat center;
	background-size: contain;
    font-size: 1.2rem;
    line-height: 3.5rem;
    cursor:pointer;
    transition: all .6s ease-out;
}
.down:hover{
     background: url("/static/img/butttwo.png") no-repeat center;
	background-size: contain;
}
.aboutUS{
    width: 49rem;
    height: 17.5rem;
    background-color: #01121b;
    opacity: .95;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
}
.main{
    margin-top: 3rem;
}
.aboutUS span{
    display: block;
}
.title{
    text-align: center;
    font-size: 1.8rem;
    color: #fff;
    font-weight: 600;
}
.UsContent{
    margin-top: 1.5rem;
    padding: 0 2.5rem 0 2.5rem;
    font-size: 1rem;
    line-height: 1.8rem;
    color: #fff;
}
</style>
