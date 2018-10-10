<template>
    <div class="left">
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
    </div>
</template>

<script>
    export default{
        name:'Left'
    }
</script>

<style scoped>
 .left{
     position: absolute;
     right: 0;
     z-index: 1;
     width:.32rem;
     display: flex;
     flex-direction: column;
     justify-content: center;
     bottom: 0;
     top:1.58rem;
 }
 .left>div{
     color: #00bcd4;
     line-height: .4rem;
     text-align: center;
 }
</style>

