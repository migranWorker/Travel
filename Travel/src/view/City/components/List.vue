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
                <button class="btn">北京</button>
                <button class="btn">北京</button>
                <button class="btn">北京</button>
                <button class="btn">北京</button>
            </div>
        </div>
         <div class="container">
            <div class="title border-topbottom">A</div>
            <div class="item-list">
                <div class="item border-bottom">阿坝</div>
            </div>
            <div class="item-list">
                <div class="item border-bottom">阿坝</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name:'List'
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
        margin-top:.1rem;
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
