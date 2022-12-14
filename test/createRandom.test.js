import {createFourDigitRandom} from '../assets/createRandom.js'

describe('createFourDigitRandom',()=>{
    test('返回数为四位',()=>{
        let resultArr = createFourDigitRandom().toString().split("")
        expect(resultArr).toHaveLength(4)
    })
    test('返回四位数中每位皆为数字',()=>{
        let result = createFourDigitRandom()
        let resultInt = parseInt(result)
        expect(resultInt).toEqual(result)
    })
    test('返回四位数无重复数字',()=>{
        let resultArr = createFourDigitRandom().toString().split("")
        expect([...new Set(resultArr)]).toHaveLength(4)
    })
    test('返回数为随机数',()=>{
        let testNumber = 10
        let resultSet = new Set()
        for (let i = 0 ; i < testNumber ; i++){
            let result = createFourDigitRandom()
            resultSet.add(result)
        }
        expect(resultSet.size).toBe(10)
    })
})