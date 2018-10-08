<template>
    <div class="swiper">
        <mt-swipe class="mt-swipe">
            <mt-swipe-item v-for='item in imgList' :key='item.id'>
                <img :src="item.url" alt="">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    export default{
        name:'Swiper',
        data(){
            return{
                imgList:[
                    {
                        id:'001',
                        url:'http://dimg04.c-ctrip.com/images/700l0w000000kd8ly97F9_1242_248_25.jpg'
                    },
                     {
                        id:'002',
                        url:'http://dimg04.c-ctrip.com/images/70050w000000ka9ib1476_1242_248_25.jpg'
                    },
                    {
                        id:'003',
                        url:'http://dimg04.c-ctrip.com/images/700u0x000000l0eh1ACC1_1242_248_25.jpg'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
.mt-swipe{
    width:100%;
    height:1.65rem;
}
img{
    width:100%;
}
</style>
