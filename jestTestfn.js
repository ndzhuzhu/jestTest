import {create4DigitRandom} from './jestTest.js'

//判断输入数字和随机数的相似性
export function judgeRandomSimilarity(num){
    let randomArr = create4DigitRandom().toString().split("")
    let numArr = num.toString().split("")
    let result = '不相似'
    randomArr.map((item,index) => {
        var numIndex = numArr.indexOf(item)
        //不写>=0会出错？
        if(numIndex >= 0 && result == '不相似'){
            result = '异位相似'
        }else if(numIndex == index ){
            result = '同位相似'
        } 
    })
    return result
}