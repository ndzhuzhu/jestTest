import {judgeNumberSimilarity} from '../assets/judgeNumberSimilarity.js'

jest.mock("../assets/createRandom.js",()=>{
    return {
        createFourDigitRandom:jest.fn(()=>1234)
    }
})
describe('judgeNumberSimilarity',()=>{
    test('相同位数数字-不同位数数字: 4 - 0',()=>{
        expect(judgeNumberSimilarity(1234) === '相同位数数字-不同位数数字: 4 - 0').toBeTruthy()
    })
    test('相同位数数字-不同位数数字: 3 - 0',()=>{
        expect(judgeNumberSimilarity(5234) === '相同位数数字-不同位数数字: 3 - 0').toBeTruthy()
    })
    test('相同位数数字-不同位数数字: 3 - 1',()=>{
        expect(judgeNumberSimilarity(2234) === '相同位数数字-不同位数数字: 3 - 1').toBeTruthy()
    })
    test('相同位数数字-不同位数数字: 2 - 0',()=>{
        expect(judgeNumberSimilarity(5634) === '相同位数数字-不同位数数字: 2 - 0').toBeTruthy()
    })
    test('相同位数数字-不同位数数字: 2 - 1',()=>{
        expect(judgeNumberSimilarity(2634) === '相同位数数字-不同位数数字: 2 - 1').toBeTruthy()
    })
    test('相同位数数字-不同位数数字: 2 - 2',()=>{
        expect(judgeNumberSimilarity(2134) === '相同位数数字-不同位数数字: 2 - 2').toBeTruthy()
    })
    test('相同位数数字-不同位数数字: 1 - 0',()=>{
        expect(judgeNumberSimilarity(7894) === '相同位数数字-不同位数数字: 1 - 0').toBeTruthy()
    })
    test('相同位数数字-不同位数数字: 1 - 1',()=>{
        expect(judgeNumberSimilarity(7814) === '相同位数数字-不同位数数字: 1 - 1').toBeTruthy()
    })
    test('相同位数数字-不同位数数字: 1 - 2',()=>{
        expect(judgeNumberSimilarity(2814) === '相同位数数字-不同位数数字: 1 - 2').toBeTruthy()
    })
    test('相同位数数字-不同位数数字: 1 - 3',()=>{
        expect(judgeNumberSimilarity(2314) === '相同位数数字-不同位数数字: 1 - 3').toBeTruthy()
    })
    test('相同位数数字-不同位数数字: 0 - 0',()=>{
        expect(judgeNumberSimilarity(7896) === '相同位数数字-不同位数数字: 0 - 0').toBeTruthy()
    })
    test('相同位数数字-不同位数数字: 0 - 1',()=>{
        expect(judgeNumberSimilarity(7891) === '相同位数数字-不同位数数字: 0 - 1').toBeTruthy()
    })
    test('相同位数数字-不同位数数字: 0 - 2',()=>{
        expect(judgeNumberSimilarity(7821) === '相同位数数字-不同位数数字: 0 - 2').toBeTruthy()
    })
    test('相同位数数字-不同位数数字: 0 - 3',()=>{
        expect(judgeNumberSimilarity(7321) === '相同位数数字-不同位数数字: 0 - 3').toBeTruthy()
    })
    test('相同位数数字-不同位数数字: 0 - 4',()=>{
        expect(judgeNumberSimilarity(4321) === '相同位数数字-不同位数数字: 0 - 4').toBeTruthy()
    })
})