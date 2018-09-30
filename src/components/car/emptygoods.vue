<template>
<div>
    <div class="emptyheader">
        <div class="empty">
        <div>
            <img src="../../assets/img/26.png" alt="">
            <div class="emptytop">
                <p>{{$t(empty)}}</p>
                <button @click="$router.push({name:'goodsList'})" class="hot">{{$t(hot)}}</button>
            </div>
        </div> 
    </div>  
    <div class="emptycon">
        <div class="like">
            <p class="liketop">{{$t(youlike)}}</p>
            <div class="likes">
                <div class="likeleft" v-for="(item, index) in goodsList" :key="index" @click="$router.push({ name: 'goodsDetail', query: { goodsId: item.id }})">
                     <img :src="item.goodsCoverImg" alt="">
                     <div class="likelefts">
                        <h4>{{item.name}}</h4>
                        <p>已售{{item.salesVolume}}件</p>
                        <div class="likemon">
                            <span class="likeone">￥{{item.price}}</span>
                            <span class="liketwo">￥{{item.market_price}}</span>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    </div>
    <Footer></Footer>
    </div>
    
</div>

</template>

<script>
import Footer from '../footer'
export default {
    data () {
        return {
            empty: 'common.emptygoods',
            hot: 'common.goodshot',
            youlike: 'common.youlike',
            chushou: 'common.chushou'
        }
    },
    components: {
        Footer
    },
    props: {
        goodsList: Array
    }
}
</script>
<style>
.emptyheader{
    box-shadow: 0px 5px 0px 0px #fafafa; 
    position: relative;   
}
.empty{
    height: 5rem;
    margin: 0.4rem;
    text-align: center;
    margin-top: 0.8rem;
    
}
.emptytop{
    text-align: center;
}
.emptytop p{
    font-size: 0.4rem;
    color: #ccc;
}
.hot{
    color: #f00;
    padding: 0.2rem 0.4rem;
    margin-top: 0.2rem;
    font-size: 0.4rem;
    border-radius: 0.5rem;
    border: 1px solid #f00;
}
.emptycon{
    width: 100%;
    padding-bottom: 0.4rem;
    background: #fafafa;
}
.like{
    margin: 0.4rem;
    font-size: 0.4rem;
}
.likes{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}
.liketop{
    line-height: 0.8rem;
}
.likeleft{
    width: 48%;
    background: #fff;
    margin-top: 0.2rem;
}
.likeleft img{
    width: 100%;
}
.likelefts{
    margin: 0.1rem;
}
.likelefts p{
    color: #ccc;
    line-height: 0.8rem;
}
.likeone{
    font-weight: bold;
    font-size: 0.4rem;
}
.liketwo{
    color: #ccc;
    font-size: 0.3rem;
    text-decoration: line-through;
}
</style>
