//生成没有重复数字的四位数
export function create4DigitRandom(){
    //set实现
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

//判断输入数字和随机数的相似性
export function judgeRandomSimilarity(num){
    let randomArr = create4DigitRandom().toString().split("")
    let numArr = num.toString().split("")
    let result = '不相似'
    randomArr.map((item,index) => {
        var numIndex = numArr.indexOf(item)
        if(numIndex && result == '不相似'){
            result = '异位相似'
        }else if(numIndex == index ){
            result = '同位相似'
        } 
    })
    console.log(result,randomArr,numArr);
    return result
}