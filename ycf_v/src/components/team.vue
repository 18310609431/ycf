<template>
	<div class="team">
    	<div class="container">
        	<div class="head">{{$t('team.title')}}</div>
        	<div class="center">
        		<div class="teamList">
		       		<div class="teamTitle right">{{$t('team.Jgz')}}</div>
		        	<div class="teamImg img01"></div>
		        	<div class="teamListR">
		           		<div class="blank"></div>
	               		<div class="teamCon">
	               			{{$t('team.Jgz_info')}}
	               		</div>
					</div>
               	</div>
               	<div class="teamList">
		       		<div class="teamTitle right">{{$t('team.Tl')}}</div>
		        	<div class="teamImg img02"></div>
		        	<div class="teamListR">
		           		<div class="blank"></div>
	               		<div class="teamCon">
							{{$t('team.Tl_info')}}
	               		</div>
					</div>
               	</div>
               	<div class="teamList">
               		<div class="teamListR">
		           		<div class="blank"></div>
	               		<div class="teamCon">
	               			{{$t('team.Dms_info')}}
	               		</div>
					</div>
		       		<div class="teamTitle left">{{$t('team.Dms')}}</div>
		        	<div class="teamImg img03"></div>
               	</div>
               	<div class="teamList">
               		<div class="teamListR">
		           		<div class="blank"></div>
	               		<div class="teamCon">
	               			{{$t('team.Pe_info')}}
	               		</div>
					</div>
		       		<div class="teamTitle left">{{$t('team.Pe')}}</div>
		        	<div class="teamImg img04"></div>
               	</div>
               	<div class="teamList">
		       		<div class="teamTitle right">{{$t('team.Wh')}}</div>
		        	<div class="teamImg img05"></div>
		        	<div class="teamListR">
		           		<div class="blank"></div>
	               		<div class="teamCon">
	               			{{$t('team.Wh_info')}}
	               		</div>
					</div>
               	</div>
               	<div class="teamList">
		       		<div class="teamTitle right">{{$t('team.Tc')}}</div>
		        	<div class="teamImg img06"></div>
		        	<div class="teamListR">
		           		<div class="blank"></div>
	               		<div class="teamCon">
	               			{{$t('team.Tc_info')}}
	               		</div>
					</div>
               	</div>
               	<div class="teamList">
               		<div class="teamListR">
		           		<div class="blank"></div>
	               		<div class="teamCon">
	               			{{$t('team.Ns_info')}}
	               		</div>
					</div>
		       		<div class="teamTitle left">{{$t('team.Ns')}}</div>
		        	<div class="teamImg img07"></div>
               	</div>
               	<div class="teamList">
               		<div class="teamListR">
		           		<div class="blank"></div>
	               		<div class="teamCon">
	               			{{$t('team.Az_info')}}
	               		</div>
					</div>
		       		<div class="teamTitle left">{{$t('team.Az')}}</div>
		        	<div class="teamImg img08"></div>
               	</div>
        	</div>
     	</div>
  	</div>
</template>
<script>
export default 
{
   data(){
       return {
       	
       }
   },
}
</script>
<style scoped>
.team
{
   width:100%;
   min-width:1200px;
   height:100%;
   /*background:red;*/
}
.container
{
   /* margin-top: -6rem;
   position: absolute; */
   width: 60rem;
   margin: 0 auto;
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
	width: 60rem;
	height: 76rem;
}
.center .teamList
{
	position: relative;
	cursor: pointer;
	width: 30rem;
	height: 19rem;
	float: left;
} 
.center .teamTitle
{
	width: 9rem;
	height: 3rem;
	font-size: 1rem;
	line-height: 3rem;
	text-align: center;
	background: #20AF8A;
	color: #FFFFFF;
}
.center .left,.center .right
{
	position: absolute;
	top: 1rem;
	left: 50%;
	transform: translate(-50%, 0);
	transition: all 0.5s ease-in-out;
}
.center .teamImg,.center .teamListR
{
	float: left;
}
.center .teamImg
{
	width: 15rem;
	height: 19rem;
	background: #888888;
}
.center .teamList:hover .right
{
	position: absolute;
	top: 1rem;
	left: 75%;
	transition: all 0.5s ease-in-out;
}
.center .teamList:hover .left
{
	position: absolute;
	top: 1rem;
	left: 25%;
	transition: all 0.5s ease-in-out;
}
.center .teamListR
{
	width: 15rem;
	height: 19rem;
	background: #EFF2F2;
	padding: 0 1.5rem;
	overflow-x: hidden;
	/*padding: 1.5rem;*/
}
.center .teamListR .blank
{
	width: 100%;
	height: 5rem;
}
.center .teamListR .teamCon
{
	height: 12.5rem;
	overflow-y: auto;
	font-size: 0.8rem;
	color: #3D3D3D;
	line-height: 1.4rem;
	padding-right: 2rem;
    width: 15rem;
}
.teamList .img01
{
	background: url(../../static/img/team/zhang.png) no-repeat center;
	background-size: cover;
}
.teamList .img02
{
	background: url(../../static/img/team/liu.png) no-repeat center;
	background-size: cover;
}
.teamList .img03
{
	background: url(../../static/img/team/shang.png) no-repeat center;
	background-size: cover;
}
.teamList .img04
{
	background: url(../../static/img/team/ellehauge.png) no-repeat center;
	background-size: cover;
}
.teamList .img05
{
	background: url(../../static/img/team/huang.png) no-repeat center;
	background-size: cover;
}
.teamList .img06
{
	background: url(../../static/img/team/chen.png) no-repeat center;
	background-size: cover;
}
.teamList .img07
{
	background: url(../../static/img/team/sharma.png) no-repeat center;
	background-size: cover;
}
.teamList .img08
{
	background: url(../../static/img/team/andy.png) no-repeat center;
	background-size: cover;
}
</style>