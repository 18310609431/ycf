<template>
	<div class="contactUs">
		<div class="container">
			<div class="head">{{$t('contact.title')}}</div>
			<div class="about">{{$t('contact.content')}}</div>
			<div class="center">
				<a class="ctImg ctus01" target="_bank" href="mailto:info@pdxchg.com"></a>
				<a class="ctImg ctus02" target="_bank" href="https://www.facebook.com/PDXbaap"></a>
				<a class="ctImg ctus03" target="_bank" href="https://twitter.com/PDXbaap"></a>
				<a class="ctImg ctus04" target="_bank" href="https://www.linkedin.com/company/PDXbaap"></a>
				<a class="ctImg ctus05" target="_bank" href="https://www.reddit.com/user/pdxbaap"></a>
				<a class="ctImg ctus06" target="_bank" href="https://github.com/PDXbaap"></a>
				<a class="ctImg ctus07" target="_bank" href="https://t.me/PDXbaap"></a>
			</div>
			<footer class="footer">
				Copyright ©2018 {{$t('home.companyName')}} All Rights Reserved.
			</footer>
		</div>
		
	</div>
</template>
<style scoped>
.contactUs
{
	width:100%;
	min-width:1200px;
	height:100%;
	padding-bottom: 5rem;
	background:#1a1a1e;
	display: flex;
    justify-content: center;
}
.container
{
	width:100%;
}
.head
{
	text-align: center;
	padding: 4rem 0 1rem 0;
	font-size: 2.4rem;
	color: #FEB612;
	font-weight: 600;	
}
.about
{
	text-align: center;
	font-size: 1rem;
	color: #FFFFFF;	
	margin-bottom: 3rem;
}
.center
{
	display: flex;
	justify-content: center;
	flex-direction: row;
	flex-wrap: wrap;
}
.center .ctImg
{
	margin-right: 2rem;
	width: 4rem;
	height: 4rem;
	display: inline-block;
}
.center .ctus01
{
	/*background: url(../../static/img/contactUs/ctus01.png) no-repeat center;*/
	/*background-size: cover;*/
}
/*.center .ctus01:hover
{
	cursor: pointer;
	background: url(../../static/img/contactUs/h_ctus01.png) no-repeat center;
	background-size: cover;
}
.center .ctus02
{
	background: url(../../static/img/contactUs/ctus02.png) no-repeat center;
	background-size: cover;
}
.center .ctus02:hover
{
	cursor: pointer;
	background: url(../../static/img/contactUs/h_ctus02.png) no-repeat center;
	background-size: cover;
}
.center .ctus03
{
	background: url(../../static/img/contactUs/ctus03.png) no-repeat center;
	background-size: cover;
}
.center .ctus03:hover
{
	cursor: pointer;
	background: url(../../static/img/contactUs/h_ctus03.png) no-repeat center;
	background-size: cover;
}
.center .ctus04
{
	background: url(../../static/img/contactUs/ctus04.png) no-repeat center;
	background-size: cover;
}
.center .ctus04:hover
{
	cursor: pointer;
	background: url(../../static/img/contactUs/h_ctus04.png) no-repeat center;
	background-size: cover;
}
.center .ctus05
{
	background: url(../../static/img/contactUs/ctus05.png) no-repeat center;
	background-size: cover;
}
.center .ctus05:hover
{
	cursor: pointer;
	background: url(../../static/img/contactUs/h_ctus05.png) no-repeat center;
	background-size: cover;
}
.center .ctus06
{
	background: url(../../static/img/contactUs/ctus06.png) no-repeat center;
	background-size: cover;
}
.center .ctus06:hover
{
	cursor: pointer;
	background: url(../../static/img/contactUs/h_ctus06.png) no-repeat center;
	background-size: cover;
}
.center .ctus07
{
	background: url(../../static/img/contactUs/ctus07.png) no-repeat center;
	background-size: cover;
}
.center .ctus07:hover
{
	cursor: pointer;
	background: url(../../static/img/contactUs/h_ctus07.png) no-repeat center;
	background-size: cover;
}*/
footer.footer
{
  position: absolute;
  bottom: 0;
  height: 2.5rem;
  line-height: 2.5rem;
  width: 100%;
  text-align: center;
  font-size: .8rem;
  color: rgba(255, 255, 255, .7);
  background-color:#111;
}
</style>