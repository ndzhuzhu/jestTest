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
test('judgeRandomSimilarity - 相同位数数字-不同位数数字: 1 - 0',()=>{
    expect(judgeRandomSimilarity(7894) === '相同位数数字-不同位数数字: 1 - 0').toBeTruthy()
})
test('judgeRandomSimilarity - 相同位数数字-不同位数数字: 1 - 1',()=>{
    expect(judgeRandomSimilarity(7814) === '相同位数数字-不同位数数字: 1 - 1').toBeTruthy()
})
test('judgeRandomSimilarity - 相同位数数字-不同位数数字: 1 - 2',()=>{
    expect(judgeRandomSimilarity(2814) === '相同位数数字-不同位数数字: 1 - 2').toBeTruthy()
})
test('judgeRandomSimilarity - 相同位数数字-不同位数数字: 1 - 3',()=>{
    expect(judgeRandomSimilarity(2314) === '相同位数数字-不同位数数字: 1 - 3').toBeTruthy()
})
test('judgeRandomSimilarity - 相同位数数字-不同位数数字: 0 - 0',()=>{
    expect(judgeRandomSimilarity(7896) === '相同位数数字-不同位数数字: 0 - 0').toBeTruthy()
})
test('judgeRandomSimilarity - 相同位数数字-不同位数数字: 0 - 1',()=>{
    expect(judgeRandomSimilarity(7891) === '相同位数数字-不同位数数字: 0 - 1').toBeTruthy()
})
test('judgeRandomSimilarity - 相同位数数字-不同位数数字: 0 - 2',()=>{
    expect(judgeRandomSimilarity(7821) === '相同位数数字-不同位数数字: 0 - 2').toBeTruthy()
})
test('judgeRandomSimilarity - 相同位数数字-不同位数数字: 0 - 3',()=>{
    expect(judgeRandomSimilarity(7321) === '相同位数数字-不同位数数字: 0 - 3').toBeTruthy()
})
test('judgeRandomSimilarity - 相同位数数字-不同位数数字: 0 - 4',()=>{
    expect(judgeRandomSimilarity(4321) === '相同位数数字-不同位数数字: 0 - 4').toBeTruthy()
})


