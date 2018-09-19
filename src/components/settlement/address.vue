<template>
   <div class="settltop">
            <div class="settlhead">
                <span>{{deliveryPerson}}</span>
                <span>{{deliveryPhone}}</span>
            </div>
            <div class="settladdress">
                 <span class="defaaddress">默认</span>   
                   <span class="settlright">
                         <i class="newaddressimg newaddressimgs"></i>
                 </span>
                 <span>{{fullAddress}}</span>
                 
            </div>
        </div>    
</template>

<script>
    export default {
        data () {
            return {

            }
        },
        props: {
            deliveryPerson: String,
            deliveryPhone: String,
            fullAddress: String,
        }
    }
</script>

<style>
.settltop{
    margin: 0.4rem;
    border: 1px solid #fff;
    box-shadow: 0px 0px 10px 5px #fafafa;
    background: url(../../assets/img/symbols-group-3.png) no-repeat bottom;
    font-size: 0.4rem;
}
.settlhead span{
    display: inline-block;
    margin: 0.2rem;
    font-size: 0.4rem;
    font-weight: bold;
}
.settladdress{
    margin: 0rem 0.6rem 0.6rem 0.2rem;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    position: relative;
    height: 1rem;
    padding-top: 0.3rem;
}
.defaaddress{
    color: #f00;
    display: inline-block;
    border: 1px solid #f00;
    padding: 0.1rem 0.2rem;
    border-radius: 0.3rem;
    font-size: 0.3rem;
    margin-right: 0.2rem;
}
.settlright{
    font-weight: bold;
    position: absolute;
    right: 0;
    top: -20px;
    text-align: left;
}
</style>
