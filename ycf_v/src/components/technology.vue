<template>
	<div class="outer">
		<div class="top">
			<div class="blueTop">
				<div class="main">
					<div class="title">{{$t('tech.title')}}</div>
				</div>
			</div>
		</div>
		<div class="concent">
			<div class="box img">
				<img src="/static/img/highights1.png" alt="">
			</div>
			<div class="box wordls">
				<span clsaa="worTitle">{{$t('tech.one')}}</span>
				<span clsaa="worMain">
					<div class="scolor">{{$t('tech.oneContent')}}</div>
				</span>
			</div>
			<div class="box img">
				<img src="/static/img/highights2.png" alt="">
			</div>
			<div class="box wordls">
				<span clsaa="worTitle">{{$t('tech.two')}}</span>
				<span clsaa="worMain">
					<div class="scolor">{{$t('tech.twoContent')}}</div>
				</span>
			</div>
		</div>
		<div class="concent">
			<div class="box wordls">
				<span clsaa="worTitle">{{$t('tech.three')}}</span>
				<span clsaa="worMain">
					<div class="scolor">{{$t('tech.threeContent')}}</div>
				</span>
			</div>
			<div class="box img">
				<img src="/static/img/highights3.png" alt="">
			</div>
			<div class="box wordls">
				<span clsaa="worTitle">{{$t('tech.four')}}</span>
				<span clsaa="worMain">
					<div class="scolor">{{$t('tech.fourContent')}}</div>
				</span>
			</div>
			<div class="box img">
				<img src="/static/img/highights4.png" alt="">
			</div>
		</div>
		<div class="concent">
			<div class="box img">
				<img src="/static/img/highights5.png" alt="">
			</div>
			<div class="box wordls">
				<span clsaa="worTitle">{{$t('tech.five')}}</span>
				<span clsaa="worMain">
					<div class="scolor">{{$t('tech.fiveContent')}}</div>
				</span>
			</div>
			<div class="box img">
				<img src="/static/img/highights6.png" alt="">
			</div>
			<div class="box wordls">
				<span clsaa="worTitle">{{$t('tech.six')}}</span>
				<span clsaa="worMain">
					<div class="scolor">{{$t('tech.sixContent')}}</div>
				</span>
			</div>
		</div>
		<div class="bottom"></div>
	</div>
    
</template>
<script>
export default {
  
}
</script>
<style scoped>
    .outer{
		background-color: #eff2f2;
        width: 100%;
    }
	.top{
		padding-top: 1px;
		width: 100%;
		/* height: 32.5rem; */
	}
    .main{
        color: #fff;
        margin: 4rem auto 3rem;
    }
    .title,.smallTitle{
        text-align: center;
    }
    .title{
        font-size: 2.4rem;
        color: #3d3d3d;
		font-weight: 600;
    }
    .smallTitle{
        margin-top: 1rem;
        font-size: 1rem;
        color: #3d3d3d;
    }
	.concent{
		width: 60rem;
		display: flex;
		margin: 0 auto;
	}
	.concent .box{
		width: 15rem;
		height: 19rem;
	}
	.concent img{
		width: 100%;
		height: 100%;
	}
	.bottom{
		height: 5rem;
		width: 100%;
	}
	.concent .wordls{
		padding: 0 1rem 0;
		text-align: center;
		background-color: #fff;

	}
	.wordls span{
		display: block;
	} 
	.wordls span:first-of-type{
		font-style: 1rem;
		margin-top: 1.5rem;
		color: black;
	}
	.wordls span:last-of-type{
		text-align: left;
		margin-top: 1rem;
		font-size: 0.8rem;
		line-height: 1.4rem;
		color: #3d3d3d;
		height: 12rem;
		overflow: hidden;
		word-wrap: break-word;
	}
	.wordls .scolor{
		overflow-x: hidden;
    	overflow-y: scroll;
		width: 14.8rem;
    	padding-right: 1rem;
    	box-sizing: border-box;
		height: 100%;
	}
</style>
