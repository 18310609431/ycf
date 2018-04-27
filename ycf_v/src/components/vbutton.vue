<template>
    <span class="arrow">
        <img src="../assets/img/arrow.png" alt="">
    </span>
</template>
<script>
export default {
  
}
</script>
<style scoped>
    .arrow{
        display: inline-block;
        width: 6.4rem;
        height: 2rem;
        border: 1px solid #333;
        position: relative;
        transition: all .6s ease-out;
    }
    .arrow:hover{
    	cursor:pointer;
        background-color: #0090cc;
        border: 0;
    }
    .arrow img{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 1.6rem;
        height: 0.6rem;
    }
</style>

