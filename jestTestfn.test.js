import {judgeRandomSimilarity} from './jestTestfn.js'

jest.mock("./jestTest.js",()=>{
    return {
        create4DigitRandom:jest.fn(()=>1234)
    }
})

test('judgeRandomSimilarity - 相同位数数字-不同位数数字: 4 - 0',()=>{
    expect(judgeRandomSimilarity(1234) === '相同位数数字-不同位数数字: 4 - 0').toBeTruthy()
})
test('judgeRandomSimilarity - 相同位数数字-不同位数数字: 3 - 0',()=>{
    expect(judgeRandomSimilarity(5234) === '相同位数数字-不同位数数字: 3 - 0').toBeTruthy()
})
test('judgeRandomSimilarity - 相同位数数字-不同位数数字: 3 - 1',()=>{
    expect(judgeRandomSimilarity(2234) === '相同位数数字-不同位数数字: 3 - 1').toBeTruthy()
})
test('judgeRandomSimilarity - 相同位数数字-不同位数数字: 2 - 0',()=>{
    expect(judgeRandomSimilarity(5634) === '相同位数数字-不同位数数字: 2 - 0').toBeTruthy()
})
test('judgeRandomSimilarity - 相同位数数字-不同位数数字: 2 - 1',()=>{
    expect(judgeRandomSimilarity(2634) === '相同位数数字-不同位数数字: 2 - 1').toBeTruthy()
})
test('judgeRandomSimilarity - 相同位数数字-不同位数数字: 2 - 2',()=>{
    expect(judgeRandomSimilarity(2134) === '相同位数数字-不同位数数字: 2 - 2').toBeTruthy()
})
