<template>
    <div class="list">
        <div class="container">
            <div class="title border-topbottom">当前城市</div>
            <div class="btn-list">
                <button class="btn">{{city}}</button>
            </div>
        </div>
         <div class="container">
            <div class="title border-topbottom">热门城市</div>
            <div class="btn-list">
                <button 
                    class="btn"
                    v-for="item in hotCities"
                    :key="item.id"
                    @click="change(item.name)"
                >{{item.name}}</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name:'List',
        props:{
            hotCities:Array
        },
        data(){
            return{
            }
        },
        methods:{
            change(x){
                this.$router.push('/');
                this.$store.commit('changeCity',x)
            }
        },
        computed:{
             city(){
                return this.$store.state.city
            }
        }
    }
</script>

<style scoped>
    .list{
        overflow: hidden;
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
</style>
