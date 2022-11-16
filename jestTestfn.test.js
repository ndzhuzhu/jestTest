import {judgeRandomSimilarity} from './jestTestfn.js'

jest.mock("./jestTest.js",()=>{
    return {
        create4DigitRandom:jest.fn(()=>1234)
    }
})
// jest.mock('../foo-bar-baz', () => {
//     const originalModule = jest.requireActual('../foo-bar-baz');
  
//     //Mock the default export and named export 'foo'
//     return {
//       __esModule: true,
//       ...originalModule,
//       default: jest.fn(() => 'mocked baz'),
//       foo: 'mocked foo',
//     };
//   });

test('judgeRandomSimilarity - 异位相似',()=>{
    expect(judgeRandomSimilarity(2345)).toBe('异位相似')
    // let mockFn = jest.fn().mockReturnValue(1234);
    // expect(mockFn()).toBe("1234");
    //myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);
         // > 10 'x' true
    //expect(judgeRandomSimilarity(1234567890)).toBe('异位相似')
})
test('judgeRandomSimilarity - 同位相似',()=>{
    expect(judgeRandomSimilarity(1234)).toBe('同位相似')
})
test('judgeRandomSimilarity - 不相似',()=>{
    expect(judgeRandomSimilarity(6789)).toBe('不相似')
})
//非四位数