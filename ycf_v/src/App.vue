<template>
  <div id="app">
    <!-- 头部导航 -->
    <header class="header">
      <div class="fleft">
        <a class="email1 email" target="_bank" href="mailto:support@wingchunfans.com"></a>
        <a class="email2 email" target="_bank" href="https://www.facebook.com/chunfans.wing.3"></a>
        <a class="email3 email" target="_bank" href="https://twitter.com/wingchunfans"></a>
        <!--<a class="email4 email" target="_bank" href="https://www.linkedin.com/company/PDXbaap"></a>-->
        <a class="email5 email" target="_bank" href="https://www.reddit.com/user/wingchunfans/"></a>
        <a class="email6 email" target="_bank" href="https://github.com/PDXbaap"></a>
        <a class="email7 email" target="_bank" href="https://t.me/yongchunfang"></a>
      </div>
      <div class="menu fright">
        <a href="javascript:void(0)" class="link" :class="{active:pageType==page.HOME}" @click="pageLink(page.HOME,'#paper')">{{$t('home.home')}}</a>
        <a href="javascript:void(0)"  class="link" :class="{active:pageType==page.TECH}" @click="pageLink(page.TECH,'#technology')">{{$t('home.tech')}}</a>
        <a href="javascript:void(0)"  class="link" :class="{active:pageType==page.SCENE}" @click="pageLink(page.SCENE,'#coin')">{{$t('home.scene')}}</a>
        <a href="javascript:void(0)"  class="link" :class="{active:pageType==page.PLANNING}" @click="pageLink(page.PLANNING,'#development')">{{$t('home.prod')}}</a>
        <a href="javascript:void(0)"  class="link" :class="{active:pageType==page.TEAM}" @click="pageLink(page.TEAM,'#team')">{{$t('home.team')}}</a>
        <a href="javascript:void(0)"  class="link" :class="{active:pageType==page.CONTACTUS}" @click="pageLink(page.CONTACTUS,'#hx')">{{$t('home.contactUs')}}</a>
        <span class="btnlang" @click="changeLunage">{{$t('locale')}}</span>
      </div>
    </header>
    <main>
        <!-- <transition  name="fade"> -->
          <router-view class="view"></router-view>
        <!-- </transition> -->
    </main>
   </div>
</template>
 
<script>
 
import Vue from 'vue';
import 'assets/css/common.css';
import enums from "./enum.js";
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)
 
export default {
  name: 'app',
  data: function (){
    return {
      pageType:enums.page.HOME,
      page:enums.page,
      zhTitle:"公共的内容分发生态",
      enTitle:"A public content delivery ecosystem",
      scorll:''
    }
  },
  created(){
    this.setHtmlSize();
    if(sessionStorage.getItem('lunage')&&sessionStorage.getItem('lunage')=="en")
    {
      this.$i18n.locale="en";
      document.title=this.enTitle;
    }
    else
    {
      this.$i18n.locale="zh";
      document.title=this.zhTitle;
    }
  },
  mounted () {
    this.$nextTick(function () {
      window.addEventListener('scroll', this.onScroll)
    })
  },
  methods: {
    onScroll () {
      try{
         let scrolled = document.documentElement.scrollTop || document.body.scrollTop
        let paper = document.getElementById("paper").offsetHeight;
        let sj = document.getElementById("sj").offsetHeight;
        let technology = document.getElementById("technology").offsetHeight;
        let coin = document.getElementById("coin").offsetHeight;
        let development = document.getElementById("development").offsetHeight;
        let team = document.getElementById("team").offsetHeight;
        let hx = document.getElementById("hx").offsetHeight;
        if(scrolled < paper  + sj){
          this.pageType = enums.page.HOME;
        }
        if(scrolled >= paper  + sj && scrolled <  paper + sj + technology){
          this.pageType = enums.page.TECH;
        }
        if(scrolled >=  paper + sj + technology && scrolled  <  paper + sj + technology + coin){
          this.pageType = enums.page.SCENE;
        }
        if(scrolled >=  paper + sj + technology + coin && scrolled  <  paper + sj + technology + coin + development){
          this.pageType = enums.page.PLANNING;
        }
        if(scrolled >=  paper + sj + technology + coin + development && scrolled  <  paper + sj + technology + coin + development + team){
          this.pageType = enums.page.TEAM;
        }
        if(scrolled >=  paper + sj + technology + coin + development + team/2 ){
          this.pageType = enums.page.CONTACTUS;
        }
      }
      catch(err){
        console.log(err);
      }
     
    },
    changeLunage()
    {
      if(this.$i18n.locale=="en")
      {
        this.$i18n.locale="zh";
        document.title=this.zhTitle;
      }
      else
      {
        this.$i18n.locale="en";
        document.title=this.enTitle;
      }
      sessionStorage.setItem('lunage', this.$i18n.locale);
    },
    pageLink(type,selector)
    {
      this.pageType=type;
      var anchor = this.$el.querySelector(selector);
      let total = anchor.offsetTop;
      let distance = document.documentElement.scrollTop || document.body.scrollTop;
      console.log(total);
      let step = total / 30;
      if (total > distance) {
          smoothDown()
        } else {
          let newTotal = distance - total
          step = newTotal / 20
          smoothUp()
        }
        function smoothDown () {
          if (distance < total) {
            distance += step
　　　　　　　document.body.scrollTop = distance
            document.documentElement.scrollTop = distance
            setTimeout(smoothDown, 10)
          } else {
            document.body.scrollTop = total
            document.documentElement.scrollTop = total
          }
        }
        function smoothUp () {
          if (distance > total) {
            distance -= step
　　　　　　　document.body.scrollTop = distance
            document.documentElement.scrollTop = distance
            setTimeout(smoothUp, 10)
          } else {
            document.body.scrollTop = total
            document.documentElement.scrollTop = total
          }
       } 
      // document.body.scrollTop = anchor.offsetTop;
      // document.documentElement.scrollTop = anchor.offsetTop;
    },
    setHtmlSize()
    {
        //获取页面宽度
        var winW =document.body.clientWidth;
        //根据页面宽度设置html字体大小。
        document.documentElement.style.fontSize =winW / (1920 / 20)  + "px";
        //当页面大小发生改变,重新修正rem为新窗口尺寸的3.75分之一
        window.onresize =function(){
          document.documentElement.style.fontSize =(document.body.clientWidth) / (1920 / 20) + "px";
        }
    }
  }
}
</script>
 
<style>
/*::-webkit-scrollbar {
            width: 0px;
        }*/
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: "Microsoft YaHei","PingFang SC",sans-serif;
}
#app main
{
  height: 100%;
  width: 100%;
}
.fleft{
  height: 100%;
}
.header .email{
  display: inline-block;
  width: 1.6rem;
  height: 1.6rem;
  margin-top: 1rem;
  margin-right: 0.75rem;
}
header.header
{
  height: 4rem;
  line-height: 4rem;
  background-color: rgba(0,0,0,.25);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9001;
  font-size: .7rem;
  padding: 0 1.5rem;
  
}
.headerLogo
{
  vertical-align: middle;
  height: 2.3rem;
  width: 7rem;
}
.header .menu a.link
{
  text-decoration: none;
  display: inline-block;
  color:#fff;
  height: 1.8rem;
  line-height: 1.8rem;
  /*width: 4rem;*/
  margin-left: 0.4rem;
  padding: 0 1rem;
  text-align: center;
  cursor: pointer;
  transition: all .6s ease-out;
   border-radius: 3px;
}
.header .menu a.active
{
  background-color: #20af8a;
  color: #fff;
  /*transition: all 0.6s ease-out;*/
}
.header .menu a:hover
{
  background-color: #20af8a;
  color: #fff;
  /*transition: all 0.6s ease-out;*/
}
.header .menu span.btnlang
{
  display: inline-block;
  /*background-color: #20af8a;*/
  color: #fff;
  border-radius: 50%;
  height: 1.4rem;
  width: 1.4rem;
  text-align: center;
  line-height: 1.4rem;
  margin-left: 1rem;
  cursor: pointer;
  transition: all 0.6s ease-out;
}
.header .menu span.btnlang:hover
{
  background-color: #20af8a;
  color: #fff;
}

label{
  cursor: pointer;
}
.email1{
  background: url("/static/img/lxfs.png") no-repeat center;
	background-size: cover;
}
.email2{
  background: url("/static/img/facebook.png") no-repeat center;
	background-size: cover;
}
.email3{
  background: url("/static/img/thurnn.png") no-repeat center;
	background-size: cover;
}
.email4{
  background: url("/static/img/in.png") no-repeat center;
	background-size: cover;
}
.email5{
  background: url("/static/img/xiong.png") no-repeat center;
	background-size: cover;
}
.email6{
  background: url("/static/img/githulb.png") no-repeat center;
	background-size: cover;
}
.email7{
  background: url("/static/img/fei.png") no-repeat center;
	background-size: cover;
}
</style>