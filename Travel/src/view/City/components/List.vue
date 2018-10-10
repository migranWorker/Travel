<template>
    <div class="list">
        <div class="container">
            <div class="title border-topbottom">当前城市</div>
            <div class="btn-list">
                <button class="btn">北京</button>
            </div>
        </div>
         <div class="container">
            <div class="title border-topbottom">热门城市</div>
            <div class="btn-list">
                <button 
                    class="btn"
                    v-for="item in hotCities"
                    :key="item.id"
                >{{item.name}}</button>
            </div>
        </div>
         <div class="container">
             <div v-for="(item,k) in cities" :key="k">
                <div class="title border-topbottom">{{k}}</div>
                <div class="item-list" v-for="i in item" :key='i.id'>
                    <div class="item border-bottom">{{i.name}}</div>
                </div>
             </div>
        </div>
    </div>
</template>

<script>
    export default{
        name:'List',
        props:{
            hotCities:Array,
            cities:Object
        },
        mounted(){
            console.log(this.hotCities);
            console.log(this.cities);
        }
    }
</script>

<style scoped>
    .list{
        overflow: hidden;
        position: absolute;
        right: 0;
        left:0;
    }
    .title{
        line-height:.54rem;
        padding-left:.2rem;
        background-color: #eee;
        color:#666;
    }
    .title::after,.title::before{
        background-color: #ddd;
    }
    .btn-list{
        padding:.1rem .6rem .1rem .1rem;
    }
    .btn{
        width:30%;
        background-color: #fff;
        border-radius:.06rem;
        border:0.02rem solid #ccc;
        padding:.06rem 0;
        font-size: 0.2rem;
        color: #555;
        margin:.1rem;
    }
    .item-list{
        line-height: .66rem;
    }
    .item{
         padding-left:.2rem;
    }
    .item::before{
        background-color:#ddd;
    }
    .container{
        overflow: hidden;
    }
</style>
