<template>
    <div class="home">
        <home-header :city='city'></home-header>
        <home-swiper :swiperList='swiperList'></home-swiper>
        <home-icons :iconsList='iconsList'></home-icons>
        <home-recommend :recommendList="recommendList"></home-recommend>
        <home-weekend :weekendList="weekendList"></home-weekend>
    </div>
</template>


<script>

    import HomeHeader from './components/Header'
    import HomeSwiper from './components/Swiper'
    import HomeIcons from './components/Icons'
    import HomeRecommend from './components/Recommend'
    import HomeWeekend from './components/Weekend'
    export default{
        name:'Home',
        components:{
            HomeHeader,
            HomeSwiper,
            HomeIcons,
            HomeRecommend,
            HomeWeekend
        },
        data(){
            return{
                city:'',
                swiperList:[],
                iconsList:[],
                recommendList:[],
                weekendList:[]
            }
        },
        mounted(){
            this.$http.get('/api/index.json')
            .then(({data})=>{
                if(data.ret){
                    const msg=data.data;
                    this.city=msg.city;
                    this.swiperList=msg.swiperList;
                    this.iconsList=msg.iconsList;
                    this.recommendList=msg.recommendList;
                    this.weekendList=msg.weekendList;
                }
                })
        }
    }
</script>

<style>

</style>
