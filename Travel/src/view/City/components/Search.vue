<template>
    <div class="search">
        <input type="text" class="input" value="输入城市名或拼音">
    </div>
</template>

<script>
    export default{
        name:'Search'
    }
</script>

<style scoped>
    .search{
        height:0.72rem;
        background-color: #00bcd4;
        box-sizing: border-box;
    }
    .input{
        width:96%;
        height:0.6rem;
        margin-left:2%;
        text-align: center;
        color: #666;
    }
</style>

