<template>
    <div>
        <div class="banner" @click="change">
            <img :src="bannerImg" alt="">
            <div class="content">
                <div class="title">{{sightName}}</div>
                <div class="num">
                <span class="iconfont">&#xe7f1;</span>&nbsp;&nbsp;2
                </div>
            </div>
        </div>
        <pic v-show="show" @close='closePic' :gallaryImgs='gallaryImgs'></pic>
    </div>
</template>

<script>
    import Pic from '@/components/Pic/Pic'
    export default{
        name:'Banner',
        components:{
            Pic
        },
        props:{
            sightName:String,
            bannerImg:String,
            gallaryImgs:Array
        },
        data(){
            return{
                show:false
            }
        },
        methods:{
            change(){
                this.show=true;
            },
            closePic(){
                this.show=false;
            }
        }
    }
</script>

<style scoped>
    .banner{
        width: 100%;
        height:0;
        padding-bottom: 54%;
        position: relative;
    }
    img{
        width:100%;
    }
    .content{
        position: absolute;
        right: 0;
        left:0;
        bottom:0;
        line-height: .6rem;
        display:flex;
    }
    .title{
        flex:1;
        color: white;
        font-size: .32rem;
        padding-left:.2rem;
    }
    .num{
        height: .32rem;
        line-height: .32rem;
        color: white;
        padding: 0 .4rem;
        margin-top:.14rem;
        font-size: .2rem;
        background-color: black;
        border-radius: .16rem;
        text-align: center;
    }
    .num span{
        font-size: .24rem;
    }
</style>
