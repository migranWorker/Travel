<template>
    <div class="detail">
        <detail-banner :sightName="sightName" :bannerImg='bannerImg' :gallaryImgs='gallaryImgs'></detail-banner>
        <detail-header></detail-header>
        <detail-list :list='categoryList'></detail-list>
    </div>
</template>

<script>
    import DetailBanner from './components/Banner'
    import DetailHeader from './components/Header'
    import DetailList from './components/List'
    export default{
        name:'Detail',
        components:{
            DetailBanner,
            DetailHeader,
            DetailList
        },
        data(){
            return{
                categoryList:[],
                sightName:'' ,
                bannerImg:'',
                gallaryImgs:[]
            }
        },
        mounted(){
            this.$http.get('/api/detail.json')
                .then(({data})=>{
                    if(data.ret){
                        const msg=data.data;
                        this.categoryList=msg.categoryList;
                        this.sightName=msg.sightName;
                        this.bannerImg=msg.bannerImg;
                        this.gallaryImgs=msg.gallaryImgs;
                    }
                })
        }
    }
</script>

<style>

</style>
