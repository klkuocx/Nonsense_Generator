// return a random item in an arry
function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function generateNonsense(option) {
  // define tasks for different roles and nonsense phrases
  const targets = {
    developer: '工程師',
    designer: '設計師',
    founder: '創業家',
  }
  const tasks = {
    developer: ['加個按鈕', '加新功能', '切個版', '改一點 code', '生個演算法', '修個 Bug'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計', '弄張 Banner'],
    founder: ['週末加班', '能賺錢', '想個 business model', '找 VC 募錢', '病毒行銷', '找個大客戶', '自己掏點錢', 'Pitch 一下', '搞個群募']
  }
  const phrases = ['很簡單', '很容易', '很快', '很正常', '很愜意', '很輕鬆', '小事一件', '就像呼吸一樣', '就像喝杯水', '難不倒你']

  // return error message
  if (!option) {
    return `身為幹話王，記得選對象，很容易吧！`
  }

  // start generating task and phrase of nonsense for selected role
  const target = targets[option]
  const task = sample(tasks[option])
  const phrase = sample(phrases)

  // return the generated nonsense
  return `身為${target}，${task}，${phrase}吧！`
}
module.exports = generateNonsense
