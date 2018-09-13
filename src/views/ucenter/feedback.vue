<template>
   <div>
       <div>
            <div class="feedtop">
                <router-link to="/Personal">
                    <i class="back backs"></i>     
                </router-link>
                <span class="stt">意见反馈</span>
          </div>
        </div>
        <div class="feed">
          <div class="pleaseinput">
            <textarea name="" id="" cols="35" rows="8" placeholder="请输入..." class="pleasesr"> </textarea>
            <p>如果您在网站和APP发现任何问题，或者有更好的建议，欢迎给我们留言！</p>
            <button type="submit" class="submit">提交</button>
          </div>
          
        </div>
        
   </div>    
</template>

<script>
    export default {
        data () {
            return {
               
            }
        }
    }
</script>
<style>
.feedtop{
    display: flex;
    justify-content:center;
    align-items: center;
    padding-bottom: 0.2rem;
}
  .back{
   display: inline-block;
   width: 0.7rem;
   height: 0.7rem;
   background-size: cover;
   margin-left: 0.2rem;
 }
 .backs {
   background: url(../../assets/img/42.png) no-repeat center center;
 }
 .stt {
     margin:0 auto;
     font-size: 0.5rem;
 }

.pleaseinput{
    text-align: center;
    margin: 0.3rem;
    font-size: 0.4rem;
    color: #ccc;
}
.pleasesr{
    box-shadow: 0 0 0.4rem #ccc;
    border: none;
    font-size: 0.5rem;
    padding: 0.2rem;
}
.pleaseinput .submit{
    width: 90%;
    font-size: 0.5rem;
    background: #ff525a;
    color: #fff;
    line-height: 1.2rem;
    border-radius: 0.2rem;
    margin-top: 0.6rem;
}
</style>
