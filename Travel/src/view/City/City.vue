<template>
    <div class="city">
        <city-header></city-header>
        <city-search></city-search>
        <city-index-list :cities='cities' :hotCities="hotCities"></city-index-list>

    </div>
</template>


<script>
    import CityHeader from './components/Header'
    import CitySearch from './components/Search'
    import CityIndexList from './components/IndexList'
    export default{
        name:'City',
        components:{
            CityHeader,
            CitySearch,
            CityIndexList
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
.mint-indexlist-nav{
    background-color:rgba(0,0,0,0);
    position: fixed;
    border-left:none;
    top:1.42rem;
}
.mint-indexsection-index{
    height:.54rem;
    background-color: #eee;
    padding: 0;
    padding-left:.2rem;
    line-height: .54rem;
    color:#666;
}
.mint-cell-wrapper{
    border-bottom: .02rem solid #ddd;
}
.mint-indexlist-content{
    margin-right: 0 !important;
}
.mint-indexlist-navlist{
    color: #00bcd4;
}
</style>
