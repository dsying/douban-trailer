const puppeteer = require('puppeteer')

const url = 'https://movie.douban.com/tag/#/?sort=U&range=6,10&tags='

const sleep = time => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, time)
    })
}
!(async () => {
  // 打开 chrome 浏览器 
  console.log('打开浏览器');
  const browser = await puppeteer.launch({
      args: ['--no-sandbox'],
      dumpio: false
  });

  // 打开一个空白页面
  console.log('打开空白页面');
  const page = await browser.newPage();

  // 输入 url
  console.log('输入url');
  await page.goto(url,{
    waitUntil: 'networkidle2'
  });

  // 等待3秒钟
  console.log('等待3秒钟');
  await sleep(3000)

  // 等待 选择器对应的元素 出现在 page 上
  console.log('等待 选择器对应的元素 出现在 page 上');
  await page.waitForSelector('.more')

  for(let i = 0; i <= 1; i++){
      await sleep(3000) 
      // 点击更多 出现 在页面上后 每隔3秒 点击一次该按钮 连续2次(目的是为了出现两页的数据)
      console.log('点击更多');
      await page.click('.more')
  }

  // 评估页面
  const result = await page.evaluate(() => {
    //该回调函数 可视作 当前页面内的 脚本 ，用于获取页面数据
    const items = document.querySelectorAll('.list-wp>a')
    const links = []
    console.log(items);
    for(let item of items){
        let doubanId = item.querySelector('div').getAttribute('data-id')
        let poster = item.querySelector('div>span.pic>img').getAttribute('src')
        let title = item.querySelector('p>span.title').textContent
        let rate = item.querySelector('p>span.rate').textContent
        links.push({ doubanId, poster, title, rate })
    }

    return links
  })

  browser.close();

  //process.send()方法可以用来给父进程发送消息。 接收到的消息被视为父进程的ChildProcess对象上的一个'message'事件
  process.send({result})
  process.exit(0)
})();