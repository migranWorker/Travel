<template>
    <div class="icons">
        <mt-swipe class="mt-swipe"
        :auto="0"
        :show-indicators="false"
        :continuous='false'
        >
        <mt-swipe-item class="mt-swipe-item1" 
        v-for='(item,i) in pages'
        :key='i'
        >
            <div class="icon" v-for='item1 in item' :key="item1.id">
                <div class="icon-img">
                    <img :src="item1.src" alt="">
                </div>
                <div class="icon-content">
                    {{item1.title}}
                </div>
            </div>
        </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    export default{
        name:'Icons',
        data(){
            return{
                iconList:[
                    {
                        id:'001',
                        src:'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
                        title:'景点门票'
                    },
                    {
                        id:'002',
                        src:'http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png',
                        title:'滑雪季'
                    },
                    {
                        id:'003',
                        src:'http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png',
                        title:'泡温泉'
                    },
                    {
                        id:'004',
                        src:'http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png',
                        title:'动植园'
                    },
                    {
                        id:'005',
                        src:'http://img1.qunarzz.com/piao/fusion/1611/59/569d3c096e542502.png',
                        title:'必游榜单'
                    },
                    {
                        id:'006',
                        src:'http://img1.qunarzz.com/piao/fusion/1611/17/4bd370f3eb1acd02.png',
                        title:'演出'
                    },
                    {
                        id:'007',
                        src:'http://img1.qunarzz.com/piao/fusion/1611/d0/e09575e66f4aa402.png',
                        title:'游乐园'
                    },
                    {
                        id:'008',
                        src:'http://img1.qunarzz.com/piao/fusion/1611/7f/b1ea3c8c7fb6db02.png',
                        title:'城市观光'
                    },
                      {
                        id:'009',
                        src:'http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png',
                        title:'一日游'
                    }
                ]
            }
        },
        computed:{
            pages(){
                const pages =[];
                this.iconList.forEach((v,i)=>{
                    const page=Math.floor(i/8);
                    if(!pages[page]){
                        pages[page]=[];
                    }
                    pages[page].push(v)
                })
                return pages;
            }
        }
    }
</script>

<style scoped>
.icons{
    width:100%;
    height:0;
    padding-bottom:50%;
    overflow: hidden;
}
.icon{
    width:25%;
    height:0;
    padding-bottom:25%;
    overflow: hidden;
    position: relative;
    float: left;
}
.icon-img{
    position: absolute;
    top:0;
    bottom:.44rem;
    left:0;
    right:0;
    box-sizing: border-box;
    padding:.1rem;
}
.icon-img>img{
    height:100%;
    display: block;
    margin:0 auto;
}
.icon-content{
    position: absolute;
    width:100%;
    line-height: .44rem;
    bottom:0;
    left:0;
    text-align: center;
}
.mt-swipe{
    height: 3.74rem ;
}

</style>
