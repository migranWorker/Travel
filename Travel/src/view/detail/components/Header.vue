<template>
<div class="one">
    <div class="header">
        <router-link to="/" tag="div" class="back-abs" v-show="show">
            <div class="iconfont icon-back">&#xe624;</div>
        </router-link>
        <div class="back-fix" v-show="!show" :style="opacityObj">
            <router-link to="/">
                <div class="header-left">
                    <div class="iconfont icon-back">&#xe624;</div>
                </div>
            </router-link>
        <div class="header-content" @click="change"> 
            景点详情
        </div>
        </div>
    </div>
    </div>
</template>

<script>

    export default{
        name:'Header',
        data(){
            return{
                show:true,
                opacityObj:{
                    opacity:0
                }
            }
        },
        methods:{
            change(){
                console.log(1);
                let top = document.documentElement.scrollTop;
                if(top>60){
                    let opacity=top/160;
                    opacity >1 ? 1 : opacity
                    this.show=false;
                    this.opacityObj.opacity=opacity;
                }else{
                    this.show=true;
                }
            }
        },
        mounted(){
            window.addEventListener('scroll',this.change)
        },
        destroyed(){
            window.removeEventListener('scroll',this.change);
        }
    }
</script>

<style scoped>
    .header{
        width:100%;
        height:.8rem;
        position: fixed;
        top:0;
        right:0;
        left:0;
    }
    .back-abs{
        width:.8rem;
        height: .8rem;
        border-radius: 50%;
        background-color: green;
        margin-left: .2rem;
        background-color: rgba(0,0,0,0.5);
    }
    .icon-back{
        width:100%;
        height:100%;
        font-size: .4rem;
        text-align: center;
        line-height: .8rem;
        margin-top: .1rem;
        color: #fff;
    }
    .back-fix{
        height: 0.86rem;
        line-height:1rem;
        background-color: #00bcd4;
        color:white;
        position: relative;
    }
    .header-left{
        position: absolute;
        width:0.8rem;
    }

    .header-content{
        text-align: center;
        font-size: .34rem;
    }
   .one{
       height: 40rem;
       width:100%;
   }
</style>
