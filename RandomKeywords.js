/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */
var theKeyWords = [
  [
  '内裤女蕾丝低腰 火辣',
  4
  ],
  [
    '内裤女蕾丝低腰',
    2
  ],
  [
    '内裤女',
    5
  ],
  [
    '内裤女蕾丝',
    10
  ]
];
///要求：按照给定关键词和出现比例，按比例概率随机展现一个
///思路：结果是只随机展示一个，那么就要创造一个集合，从集合中随机抽取一个。（平权集合）
var theKeyWordsNew = [
];
for (TheIndex = 0; TheIndex < theKeyWords.length; TheIndex++) {
  //console.log(theKeyWords[TheIndex]);
  //theKeyWords[TheIndex][0] 这是关键词
  //theKeyWords[TheIndex][1] 这是关键词需要平权的次数
  for (times = 0; times < theKeyWords[TheIndex][1]; times++)
  theKeyWordsNew.push(theKeyWords[TheIndex][0]);
} 
//输出核对下数据
//console.log(theKeyWordsNew);
//随机抽出一个关键词
var RandomNumber = Math.round(Math.random() * (theKeyWordsNew.length - 1)); //这个地方length要-1
var RandomKeywords = theKeyWordsNew[RandomNumber];
//console.log(RandomNumber);
console.log(RandomKeywords);
