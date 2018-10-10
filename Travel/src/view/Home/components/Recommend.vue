<template>
    <div class="recommend">
        <div class="title">
            热门推荐
        </div>
        <ul>
            <router-link to="/detail" tag='li' v-for="item in recommendList" :key="item.id">
                <div class="content border-bottom" >
                    <div class="content-img">
                        <img :src="item.imgUrl" alt="">
                    </div>
                    <div class="content-desc">
                        <p class="p-title">{{item.title}}</p>
                        <p class="p-desc">{{item.desc}}</p>
                        <button class="btn">查看详情</button>
                    </div>
                </div>
            </router-link> 
        </ul>
    </div>
</template>

<script>
    export default{
        name:'Recommend',
        props:{
            recommendList:Array
        }
    }
</script>

<style scoped>
    .recommend{
        margin-top:.2rem;
    }
    .title{
        line-height: .8rem;
        background-color: #eee;
        box-sizing: border-box;
        text-indent: .3rem;
    }
    .content{
        width:100%;
        height:1.9rem;
        display:flex;
    }
    .content-img>img{
        width:1.7rem;
        height:1.7rem;
        padding:.1rem;
    }
    .content-desc{
        flex: 1;
        padding: .3rem;
        min-width: 0;
    }
    .p-title{
        font-size: .36rem;
        margin-bottom: .2rem;
    }
    .p-desc{
        color: #ccc;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .btn{
        border-radius: .1rem;
        padding:.1rem;
        box-sizing: border-box;
        font-size: .2rem;
        margin-top: .1rem;
        color: white;
        background-color: orange;
    }
</style>
