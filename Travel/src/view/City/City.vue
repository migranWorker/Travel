<template>
    <div class="city">
        <city-header></city-header>
        <city-search></city-search>
        <city-list :hotCities="hotCities" :cities='cities'></city-list>
        <city-left :cities='cities'></city-left>
    </div>
</template>


<script>
    import CityHeader from './components/Header'
    import CitySearch from './components/Search'
    import CityList from './components/List'
    import CityLeft from './components/Left'
    export default{
        name:'City',
        components:{
            CityHeader,
            CitySearch,
            CityList,
            CityLeft
        },
        data(){
            return{
                hotCities:[],
                cities:{}
            }
        },
        mounted(){
            this.$http.get('api/city.json')
                .then(({data})=>{
                    if(data.ret){
                        const msg =data.data;
                        this.hotCities=msg.hotCities;
                        this.cities=msg.cities
                    }
                })
        }
    }
</script>

<style>

</style>
