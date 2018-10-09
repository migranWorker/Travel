<template>
    <div class="recommend">
        <div class="title">
            热门推荐
        </div>
        <ul>
            <li v-for="item in recommendList" :key="item.id">
                <div class="content border-bottom" >
                    <div class="content-img">
                        <img :src="item.src" alt="">
                    </div>
                    <div class="content-desc">
                        <p class="p-title">{{item.title}}</p>
                        <p class="p-desc">{{item.desc}}</p>
                        <button class="btn">查看详情</button>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default{
        name:'Recommend',
        data(){
            return{
                // "recommendList":[
                //     {
                //         "id":"001",
                //         "src":"http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg",
                //         "title":"故宫",
                //         "desc":"东方宫殿建筑代表，世界宫殿建筑典范"
                //     },
                //     {
                //         "id":"002",
                //         "src":"http://img1.qunarzz.com/sight/p0/1511/d2/d2aec2dfc5aa771290.water.jpg_140x140_abb362a7.jpg",
                //         "title":"南山滑雪场",
                //         "desc":"北京专业级滑雪圣地"
                //     },
                //     {
                //         "id":"003",
                //         "src":"http://img1.qunarzz.com/sight/p0/1501/f4/f467729126949c3a.water.jpg_140x140_ef235b1c.jpg",
                //         "title":"天安门广场",
                //         "desc":"我爱北京天安门，天安门上太阳升"
                //     },
                //     {
                //         "id":"004",
                //         "src":"http://img1.qunarzz.com/sight/p0/1501/40/40b2b6c951b28fdd.water.jpg_140x140_1c863e5c.jpg",
                //         "title":"水立方",
                //         "desc":"中国的荣耀，阳光下的晶莹水滴"
                //     },
                //     {
                //         "id":"005",
                //         "src":"http://img1.qunarzz.com/sight/p0/201308/23/b283071686e64dfec8d65eac.jpg_140x140_8c5a7c49.jpg",
                //         "title":"温都水城养生",
                //         "desc":"各种亚热带植物掩映其间仿佛置身热带雨林"
                //     }
                // ]
            }
        },
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
