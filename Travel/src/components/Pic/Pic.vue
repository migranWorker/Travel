<template>
    <div class="pic" @click="picClose">
        <div class="container">
            <swiper ref="mySwiper" :options="swiperOption">
                <swiper-slide v-for="(item,i) in gallaryImgs" :key="i">
                    <img :src="item" alt="">
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
    export default{
        name:'Pic',
        data(){
            return{
                swiperOption:{
                    pagination:'.swiper-pagination',
                    paginationType:'fraction',
                    observeParents:true,
                    observer:true
                }
            }
        },
        props:{
            gallaryImgs:{
                type:Array,
                default(){
                    return[
                        'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg',
                        'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg'
                    ]
                }
            }
        },
        methods:{
            picClose(){
                this.$emit('close');
            }
        }
    }

</script>

<style scoped>
    .pic{
        width: 100%;
        position: fixed;
        background-color: black;
        z-index: 99;
        top: 0;
        bottom:0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
    }
    .container{
        width:100%;

    }
    img{
        width:100%;
    }
    .swiper-pagination{
        width: 100%;
        position: fixed;
        text-align: center;
        bottom:1rem;
        color: white;
        font-size: .3rem;
    }
</style>
