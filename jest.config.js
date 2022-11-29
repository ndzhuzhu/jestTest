module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  "moduleFileExtensions": [ //不需要配置
      "js",
      "json",
      // 告诉 Jest 处理 `*.vue` 文件
      "vue"
  ],
  // 指定测试文件范围
  testMatch: [
    '**/__tests__/*.[jt]s?(x)', // __tests__文件夹内的ts/js文件
    '**/?(*.)(spec|test).[jt]s?(x)' // 任意文件夹内的spec.ts/test.ts结尾的文件
  ],
  // 显示每一个测试的结果
  verbose: true,
  "collectCoverage": true,  //是否创建报告
  "collectCoverageFrom": ["**/src/**.{js,vue}", "!**/node_modules/**","!**src/main.js**", "!**src/router.js**"],//报告创建格式
  "coverageReporters": ["html", "text-summary"],   //报告的格式                  
   "globals":{ //配置全局变量，此处我配置了一个全局变量VUE_APP_DATA，也可以在setup file中配置，如下说的lodash      
 "VUE_APP_DATA": {siteENV:'DEV'}}, 

};