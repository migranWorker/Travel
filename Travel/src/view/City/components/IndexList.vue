<template>
    <div class="indexlist">
        <mt-index-list>
            <city-list :hotCities="hotCities"></city-list>
            <mt-index-section 
            v-for="(item,k) in cities"
            :key="k"
            :index="k">
                <mt-cell 
                    v-for="i in item"
                    :key="i.id"
                    :title="i.name"
                    >
                    </mt-cell>
            </mt-index-section>
        </mt-index-list>
    </div>
</template>


<script>
    import CityList from './List'
    export default{
        name:'IndexList',
        props:{
            cities:Object,
            hotCities:Array
        },
        components:{
            CityList
        }

    }

</script>

<style scoped>

</style>
