<template>
    <div>
        <div class="search">
            <input 
                type="text" 
                class="input" 
                placeholder="请输入城市名或拼音"
                v-model="keyword"
            >
        </div>
        <div class="list" v-show="keyword">
            <ul>
                <li v-for="item in list" :key="item.id" @click="change(item.name)">{{item.name}}</li>
                <li v-show='!list.length'>没有找到匹配数据</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default{
        name:'Search',
        data(){
            return{
                keyword:'',
                list:[],
                timer:null
            }
        },
        props:{
            cities:Object
        },
        watch:{
            keyword(){
                if(this.timer){
                    clearTimeout(this.timer)
                }
                if(!this.keyword){
                    this.list=[];
                    return;
                }
                this.timer=setTimeout(()=>{
                    const arr=[];
                    for(let v in this.cities){
                        this.cities[v].forEach(x=>{
                            if(x.spell.indexOf(this.keyword)>-1 || x.name.indexOf(this.keyword)>-1){
                                arr.push(x);
                            }
                        })
                    }
                        this.list=arr;
                },100)
            }
        },
        methods:{
             change(x){
                this.$router.push('/');
                this.$store.commit('changeCity',x)
            }
        }
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
    .list{
        width:100%;
        min-height:100%;
        background-color: #eee;
        position: absolute;
        z-index: 2;
    }
    li{
        padding-left: .2rem;
        line-height: .5rem;
        background-color: #fff;
        border-bottom: .02rem solid #eee;
    }
</style>

