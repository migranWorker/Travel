<template>
    <div class="swiper">
        <mt-swipe class="mt-swipe">
            <mt-swipe-item v-for='item in swiperList' :key='item.id'>
                <img :src="item.imgUrl" alt="">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    export default{
        name:'Swiper',
        data(){
            return{
            }
        },
        props:{
            swiperList:Array
        }
    }
</script>

<style scoped>
.mt-swipe{
    width:100%;
    height:2.5rem;
}
img{
    width:100%;
    height:100%;
}
</style>
