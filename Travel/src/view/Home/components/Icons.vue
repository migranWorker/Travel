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
           
            }
        },
        computed:{
            pages(){
                const pages =[];
                this.iconsList.forEach((v,i)=>{
                    const page=Math.floor(i/8);
                    if(!pages[page]){
                        pages[page]=[];
                    }
                    pages[page].push(v)
                })
                return pages;
            }
        },
        props:{
            iconsList:Array
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
.icons>div{
    overflow: visible;
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
.mt-swipe-item1{
    width:100%;
    height:0;
    padding-bottom:50%;
    overflow:visible;
}
</style>
