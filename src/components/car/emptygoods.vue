<template>
<div>
    <div class="header">
    <div class="empty">
        <div>
            <img src="../../assets/img/26.png" alt="">
            <div class="emptytop">
                <p>购物车空空如也，快去选购商品吧~</p>
                <button class="hot">逛逛店铺热卖</button>
            </div>
        </div> 
    </div>  
    </div>
    <div class="emptycon">
        <div class="like">
            <p class="liketop">你可能喜欢</p>
            <div class="likes">
                <div class="likeleft">
                     <img src="../../assets/img/like.png" alt="">
                     <div class="likelefts">
                        <h3>你喜欢的都在这里</h3>
                        <p>已售1313件</p>
                        <div class="likemon">
                            <span class="likeone">￥1313</span>
                            <span class="liketwo">￥4331</span>
                        </div>
                     </div>
                </div>
                <div class="likeleft">
                     <img src="../../assets/img/like.png" alt="">
                     <div class="likelefts">
                        <h3>你喜欢的都在这里</h3>
                        <p>已售1313件</p>
                        <div class="likemon">
                            <span class="likeone">￥1313</span>
                            <span class="liketwo">￥4331</span>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>
    
</script>
<style>
.header{
    box-shadow: 0px 5px 0px 0px #fafafa; 
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
    font-size: 0.5rem;
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
    height: 100%;
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
    height: 5rem;
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
    font-size: 0.45rem;
}
.liketwo{
    color: #ccc;
    text-decoration: line-through;
}
</style>
