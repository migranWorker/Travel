<template>
    <div class="list">
        <div v-for="(item,i) in list" :key="i">
            <div  class="title"> <span class="icon"></span> {{item.title}}</div>
            <div v-if="item.children" class="children">
                <detail-list :list='item.children'></detail-list>
            </div>
        </div>
    </div>
</template>

<script>

    export default{
        name:'DetailList',
        props:{
            list:Array
        }
    }
</script>

<style>
.title{
    width:100%;
    line-height:.8rem; 
    font-size: .32rem;
    padding-left: .1rem;
}
.icon{
    position: relative;
    left: .06rem;
    top: .06rem;
    display: inline-block;
    width: .36rem;
    height: .36rem;
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
    margin-right: .1rem;
    background-size: .4rem 3rem;
}
.children{
    padding-left: .3rem;
}
</style>
