<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h4>{{hint}}</h4>
    <div>
      <span>
          最好记录：{{lastCount}}
      </span>
      <span style="margin-left:5rem">
        您已猜测次数: {{guessCount}}
      </span>
    </div>
    <a-input-group compact class="a-input-group">
      <a-input v-model:value="randomInput" style="width: 20rem" placeholder="请输入一个四位数" @pressEnter="inputValidation()"/>
      <a-button type="primary" @click="inputValidation()">确认</a-button>
    </a-input-group>
    <div>
      <div>您的猜测记录：</div>
      <div style="width:280px;margin:0 auto">{{countHistory}} </div>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
import { message } from 'ant-design-vue';
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    hint: String 
  },
  setup() {
    var randomInput = ref('')
    var guessCount = ref("0")
    var countHistory = ref("")
    var lastCount = ref(100000)
    //生成没有重复数字的四位数
    const create4DigitRandom = () =>{
      let set = new Set()
      let digit = 4
      let random = Math.floor(Math.random()*9 + 1)
      set.add(random)
      for (let i = 1 ; i < digit ; ){
          let random = Math.floor(Math.random()*10)
          if(set.has(random)){
              continue
          }else{
              set.add(random)
              i++
          }
      }
      let result = ''
      set.forEach((item)=>{
          result += item
      })
      return parseInt(result)
    }
    var preRandom = create4DigitRandom()
    const judgeRandomSimilarity = (num) =>{
      let randomArr = preRandom.toString().split("")
      let numArr = num.toString().split("")
      let result = [0,0]
      for(let i = 0 ; i < 4 ; i++){
          for(let j = 0 ; j < 4 ; j++){
              if (randomArr[i] == numArr[j]){
                  if (i == j){
                      result[0]++
                  }else{
                      result[1]++
                  }
              }
          }
      }
      return `同位相同数字-异位相同数字: ${result[0]} - ${result[1]}`
    }
    const inputValidation = () =>{
      console.log(preRandom)
      var result = judgeRandomSimilarity(randomInput.value)
      if (!randomInput.value.match(/^\d{4}$/g)){
        message.error('请输入一个四位数', 5);
      }else if (result == '相同位数数字-不同位数数字: 4 - 0'){
        message.success('恭喜你！');
        lastCount.value = Math.min(lastCount.value,guessCount.value)
        guessCount.value =0
        countHistory.value = ""
        preRandom = create4DigitRandom()

      }else{
          message.warning(result, 5);
          
          guessCount.value++;
          countHistory.value += "\n" + randomInput.value + " ： " + result
          randomInput.value = ""
      }
    }
    return{
      lastCount,
      guessCount,
      countHistory,
      randomInput,
      inputValidation,
      create4DigitRandom
    }
  } 
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.a-input-group{
  margin-top: 1rem
}
</style>
