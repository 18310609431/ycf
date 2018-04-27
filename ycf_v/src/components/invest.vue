<template>
	<div class="invest">
		<div class="container">
			<div class="head">{{$t('invest.title')}}</div>
			<div class="center">
				<span class="ctImg ctus01"></span>
				<span class="ctImg ctus02"></span>
				<span class="ctImg ctus03"></span>
				<span class="ctImg ctus04 nomp"></span>
			</div>
		</div>
		<footer class="footer">
			Copyright ©2018 {{$t('home.companyName')}} All Rights Reserved.
		</footer>
	</div>
</template>
<style scoped>
.invest
{
	width:100%;
	min-width:1200px;
	height:100%;
	background:#eff2f2;;
}
.container
{
	padding-bottom: 7rem;	
}
.head
{
	text-align: center;
	padding: 4rem 0 3rem 0;
	font-size: 2.4rem;
	color: #3D3D3D;
	font-weight: 600;	
}
.center
{
	width: 100%;
	min-width: 1200px;
	display: flex;
	justify-content: center;
	flex-direction: row;
}
.center .ctImg
{
	display: inline-block;
	margin-right: 4rem;
	width: 12rem;
	height: 6.5rem;
}
.center .ctus01
{
	background: url(/static/img/invest_01.png) no-repeat center;
	background-size: cover;
}
.center .ctus02
{
	background: url(/static/img/invest_02.png) no-repeat center;
	background-size: cover;
}
.center .ctus03
{
	background: url(/static/img/invest_03.png) no-repeat center;
	background-size: cover;
}
.center .ctus04
{
	background: url(/static/img/invest_04.png) no-repeat center;
	background-size: cover;
}
.center .nomp{
	margin: 0;
}
footer.footer
{ 
  width: 100%;
  height: 2.5rem;
  line-height: 2.5rem;
  text-align: center;
  font-size: .8rem;
  color: rgba(255, 255, 255, .7);
  background-color:#20af8a;
}
</style>