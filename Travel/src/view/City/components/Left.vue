<template>
    <div class="left">
        <div v-for="(item,k) in cities" :key="k">{{k}}</div>
    </div>
</template>

<script>
    export default{
        name:'Left',
        props:{
            cities:Object
        }
    }
</script>

<style scoped>
 .left{
     position: fixed;
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

