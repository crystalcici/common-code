LazyMan = (name) => {
  var queue = [];
  const task = () => {
    console.log(`你好，我是${name}`)
    next()
  }
  queue.push(task)
  const next = () => {
    const first = queue.shift()
    first?.()
  }
  var api = {
    _x:queue,
    sleep(n) {
      const task = () => {
        setTimeout(() => {console.log(`我刚睡`)}, n*1000)
        next()
      }
      queue.push(task)
      return api
    },
    eat(type) {
      const task = () => {
        console.log('吃晚餐');
        next()
      }
      queue.push(task)
      return api
    },
    sleepFirst(n){ 
      const task = () => {
        setTimeout(() => {console.log(`我刚睡${n}秒`);next()}, n*1000)
      }
      queue.unshift(task)
      return api
    }
  }
  setTimeout(() => {next()})
  return api
}
LazyMan('cici').sleepFirst(6).eat('supper')