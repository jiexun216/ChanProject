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
                     <div class="likesImgwidth">
                        <img :src="item.goodsCoverImg" alt="" style="height:4.3rem;width:100%;">
                     </div>
                     
                     <div class="likelefts">
                        <h4>{{item.name}}</h4>
                        <p>{{$t(yishou)}}  {{item.salesVolume}}  {{$t(jian)}}</p>
                        <div class="likemon">
                            <div>
                                <span class="likeone">￥{{item.price}}</span><br>
                                <span class="liketwo">￥{{item.market_price}}</span>
                            </div>
                            <img src="../../assets/img/26@0.5x.png" style="width:0.6rem;">
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
            chushou: 'common.chushou',
            yishou: 'common.yishou',
            jian: 'common.jian'
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
    padding-bottom:0.6rem;
}
.liketop{
    line-height: 0.8rem;
}
.likeleft{
    width: 48%;
    background: #fff;
    margin-top: 0.2rem;
}
.likesImgwidth{
  width: 4.2rem;
  margin: auto;
}
.likelefts{
    margin: 0.1rem;
}
.likelefts p{
    color: #ccc;
    line-height: 0.8rem;
    font-size:0.3rem;
}
.likemon{
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}
.likeone{
    font-weight: bold;
    font-size: 0.4rem;
    color: #ff525a;
}
.liketwo{
    color: #ccc;
    font-size: 0.25rem;
    text-decoration: line-through;
}
</style>
