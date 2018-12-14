const rp = require('request-promise-native')

async function fetchMovie(item){
    const url = `http://api.douban.com/v2/movie/subject/${item.doubanId}`

    const res = await rp(url)
    return res
}

!(async () => {
    let movies = [
        { doubanId: '3878007',
            poster:
            'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2541280047.jpg',
            title: '海王',
            rate: '8.0' 
        },
        { doubanId: '27110296',
            poster:
            'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2539661066.jpg',
            title: '无名之辈',
            rate: '8.2' 
        }
    ]

    movies.map(async movie => {
        let result = await fetchMovie(movie)
        console.log(result);
    })
})()