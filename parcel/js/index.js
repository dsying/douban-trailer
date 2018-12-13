function changeTitle(){
    const app = document.querySelector('#app')
    app.textContent = 'parcel 打包包'
}
setTimeout(changeTitle, 5000)
// changeTitle()