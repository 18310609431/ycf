<template>
   <div class="design">
       <div class="container">
           <div class="head">{{$t('design.title')}}</div>
           <div class="center">
               <div class="package">
           			<div class="left img01"></div>
           			<div class="right">
						<span>
							{{$t('design.iaas')}}
						</span>
           			</div>
               </div>
               <div class="package">
				   <div class="right">
					   <span>
           				{{$t('design.net')}}
					   </span>	   
           			</div>
           			<div class="left img02"></div>
           		</div>
               <div class="package none-pm">
           			<div class="left img03"></div>
           			<div class="right">
						   <span>
							  {{$t('design.safe')}}
						   </span>
           			</div>
               </div>
           </div>
       </div>
   </div>
</template>
<!--<script>
//export default 
//{
//	data(){
//		return {
//			
//		}
//	},
//	mounted()
//	{
//		/* eslint-disable */
// 		console.log($)
// 		$(function(){
//			$('.container1 .div_scroll').scroll_absolute({arrows:true})
//		})
//	}
//}
</script>-->
<style scoped>
.design
{
  	width:100%;
   	min-width:1200px;
  	height: 100%;
  	padding-bottom:6.425rem;
}
.head
{
   text-align: center;
   padding: 3rem 0 3rem 0;
   font-size: 2.4rem;
   color: #3d3d3d;
   font-weight: 600;
   
}
.center
{
   /* justify-content: center;
   flex-direction: row;
   flex-wrap: wrap; */
   width: 60rem;
   margin-top: 4.5rem;
   margin: 0 auto;
}
.package
{
	
   	display: flex;
	width: 100%;
	height: 12rem;
	margin-bottom: 1.5rem;
	position: relative;
}
.package .left
{
	width: 22rem;
	height: 12rem;
}
.package .right
{
	width: 34rem;
	font-size: 1rem;
	line-height: 1.8rem;
	color: #3d3d3d;
	position: relative;
}
.right span{
	display: block;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
}
.package .img01
{
	margin-right: 4rem;
	background: url(../../static/img/design_01.png) no-repeat center;
	background-size: cover;
}
.package .img02
{
	margin-left: 4rem;
	background: url(../../static/img/design_02.png) no-repeat center;
	background-size: cover;
}
.package .img03
{
	margin-right: 4rem;
	background: url(../../static/img/design_03.png) no-repeat center;
	background-size: cover;
}
</style>