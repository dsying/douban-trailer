const cp = require('child_process')
const { resolve } = require('path')

!(async () => {
    const script = resolve(__dirname, '../crawler/trailer-list')
    const child = cp.fork(script,[])

    let invoked = false
    child.on('error', err => {
        if(invoked) return 
        invoked = true
        console.log(err);
    })

    child.on('exit', code => {
        if(invoked) return
        invoked = false
        let err = code === 0 ? null : new Error(`exit code ${code}`)
        console.log(err);
    })

    //当子进程使用 process.send() 发送消息时触发
    child.on('message', msg => {
        let result = msg.result 
        console.log(result);
    })
})()