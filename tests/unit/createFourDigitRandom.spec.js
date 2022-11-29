import createFourDigitRandom from '@/assets/js/createFourDigitRandom.js'

describe('createFourDigitRandom.js',()=>{
    it('createFourDigitRandom() test',()=>{
        let resultArr = createFourDigitRandom().toString().split("")
        expect(resultArr).toHaveLength(4)
        let result = createFourDigitRandom()
        let resultInt = parseInt(result)
        expect(resultInt).toEqual(result)
        expect([...new Set(resultArr)]).toHaveLength(4)
    })
})
