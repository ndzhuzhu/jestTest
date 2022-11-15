// //引入文件
// const testFile = require('./jestTest.js')
// //解构文件中的函数
// const {create4DigitRandom,judgeRandomSimilarity} = testFile

//es6
import {create4DigitRandom,judgeRandomSimilarity} from './jestTest.js'

test('create4DigitRandom - ',()=>{
    let resultArr = create4DigitRandom().toString().split("")
    expect([...new Set(resultArr)].length).toBe(4)
    expect(create4DigitRandom()).toBeLessThan(10000)
    expect(create4DigitRandom()).toBeGreaterThan(999)
})

test('judgeRandomSimilarity - ',()=>{

    expect(judgeRandomSimilarity(1234567890)).toBe('异位相似')
})