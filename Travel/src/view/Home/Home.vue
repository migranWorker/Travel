<template>
    <div class="home">
        <home-header></home-header>
        <home-swiper></home-swiper>
        <p>123123123
            
        </p>
    </div>
</template>


<script>
    import HomeHeader from './components/Header'
    import HomeSwiper from './components/Swiper'
    export default{
        name:'Home',
        components:{
            HomeHeader,
            HomeSwiper
        }
    }
</script>

<style>

</style>
