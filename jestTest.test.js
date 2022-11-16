import {create4DigitRandom} from './jestTest.js'

test('create4DigitRandom - 返回四位数',()=>{
    let resultArr = create4DigitRandom().toString().split("")
    expect(resultArr).toHaveLength(4)
})
test('create4DigitRandom - 返回四位数中每位皆为数字',()=>{
    let result = create4DigitRandom()
    let resultInt = parseInt(result)
    expect(resultInt).toEqual(result)
})
test('create4DigitRandom - 返回四位数无重复数字',()=>{
    let resultArr = create4DigitRandom().toString().split("")
    expect([...new Set(resultArr)]).toHaveLength(4)
})