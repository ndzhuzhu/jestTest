export function createFourDigitRandom(){
    let randomDigit = 4
    let randomSet = new Set()
    let firstRandom = Math.floor(Math.random()*9 + 1)
    randomSet.add(firstRandom)
    let temp = 1;
    while(temp < randomDigit){
        let elseRandom = Math.floor(Math.random()*10)
        if(randomSet.has(elseRandom)){
            continue
        }else{
            randomSet.add(elseRandom)
            temp++
        }
    }
    return parseInt([...randomSet].reduce((pre,cur)=>pre += cur,''))
}

