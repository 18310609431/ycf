<template>
    <div id="about">
        <div class="bgAbout">
            <div class="main">
                <span class="title">{{$t('aboutUs.title')}}</span>
                <span class="content">{{$t('aboutUs.concent')}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
    .bgAbout{
        width: 100%;
        height: 24rem;
        position: relative;
        background-color: #1a1a1e;
    }
    .main span{
        display: block;
    }
    .main{
        margin-top: 4.5rem;
        text-align: center;
        width: 57rem;
        color: #fff;
        position:absolute;
        /* top: 50%; */
        left: 50%;
        transform: translate(-50%);

    }
    .title{
        font-size: 2.4rem;
        color: #fdc811;
        font-weight: 600;
        margin-bottom: 1.5rem;
        color: #feb612;
        font-weight: 600;
    }
    .content{
        font-size: 1rem;
        line-height: 1.8rem;
    }
</style>
