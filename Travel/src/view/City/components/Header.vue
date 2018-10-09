<template>
    <div class="header">
        <router-link to="/">
            <div class="header-left">
                <div class="iconfont icon-back">&#xe624;</div>
            </div>
        </router-link>
        <div class="header-content">
            城市选择
        </div>
    </div>
</template>

<script>
    export default{
        name:'Header'
    }
</script>

<style scoped>
    .header{
        height: 0.86rem;
        line-height: 0.86rem;
        background-color: #00bcd4;
        color:white;
        position: relative;
    }
    .header-left{
        position: absolute;
        width:0.8rem;
    }
    .icon-back{
        text-align: center;
        font-size: .4rem;
        color: white;
    }
    .header-content{
        text-align: center;
        font-size: .34rem;
    }
</style>
