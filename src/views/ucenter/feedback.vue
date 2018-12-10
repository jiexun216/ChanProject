<template>
   <div>
       <div>
            <div class="feedtop">
                <i class="back backs" @click="$router.back(-1)"></i>     
                <span class="fankui">{{$t(fellback)}}</span>
          </div>
        </div>
        <div class="feed">
          <div class="pleaseinput">
            <textarea v-model="opinion" cols="45" rows="8" :placeholder="$t(entering)" class="pleasesr"> </textarea>
            <p>{{$t(liuyan)}}</p>
            <button type="submit" @click="submitOpinion()" class="submit">{{$t(submit)}}</button>
          </div>
          
        </div>
        
   </div>    
</template>

<script>
import { issueOpinion } from '@/api/ucenter/index.js'
    export default {
        data () {
            return {
                opinion: "",
                fellback: 'common.fellback',
                liuyan: 'common.liuyan',
                submit: 'common.submit',
                entering: 'common.placeholder.entering'
            }
        },
        methods: {
            submitOpinion () {
                issueOpinion (this.opinion).then(res => {
                    this.$toast(res.data.message ? res.data.message : this.$t("common.failuredcaozuo"))
                    if (res.data.status == 0) {
                        this.$router.push({name: 'ucenterSetup'});
                    } else if (res.data.status == 99) {
                        this.$toast(res.data.message ? res.data.message : this.$t("common.failuredcaozuo"))
                        this.$router.push({name: res.data.data.url})
                    }
                }).catch(err => {
                    return err
                })
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
 .fankui {
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
    padding: 0.2rem;
    color: #000;
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
