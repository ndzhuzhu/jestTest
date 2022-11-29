import {create4DigitRandom} from './createFourDigitRandom'

//判断输入数字和随机数的相似性
var preRandom = create4DigitRandom()
export function judgeRandomSimilarity(num){
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
