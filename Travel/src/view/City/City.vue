<template>
    <div class="city">
        <city-header></city-header>
        <city-search></city-search>
        <city-list></city-list>
        <city-left></city-left>
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
        }
    }
</script>

<style>

</style>
