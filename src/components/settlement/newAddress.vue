<template>
         <div class="newaddtop">
            <div class="newaddress">
                <div>
                    <p class="newaddressone">$t(newaddress)</p>
                    <p>$t(addressshou)</p> 
                </div>
                <i class="newaddressimg newaddressimgs"></i>
                 
            </div>
        </div>    
</template>

<script>
    export default {
        data () {
            return {
                newaddress: 'common.newaddress',
                addressshou: 'common.addressshou'
            }
        }
    }
</script>

<style>
.newaddtop{
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
.newaddress{
    margin: 0rem 0.6rem 0.6rem 0.2rem;
    padding-top: 0.3rem;
    display: flex;
    justify-content: space-between;
}
.newaddressone{
    color: #f00;
    font-size: 0.45rem;
}
.newaddressimg{
    display: inline-block;
    width: 1.5rem;
    height:1.5rem;
    background-size: cover;
    display: inline-block;
    margin-right: -0.5rem;
}
.newaddressimgs {
    background: url(../../assets/img/19.png) no-repeat center center;
}
</style>
