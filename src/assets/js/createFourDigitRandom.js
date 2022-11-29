//生成没有重复数字的四位数
export function createFourDigitRandom() {
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
    return parseInt(result);
}
