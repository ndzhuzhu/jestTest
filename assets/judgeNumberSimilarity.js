import {createFourDigitRandom} from './createRandom.js'

export function judgeNumberSimilarity(num){
    let randomArr = createFourDigitRandom().toString().split("")
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
    return `相同位数数字-不同位数数字: ${result[0]} - ${result[1]}`
}
