const rp = require('request-promise-native')

async function fetchMovie(item) {
	const url = `http://api.douban.com/v2/movie/subject/${item.doubanId}`;
	const rs = await rp(url);
	return rs;
}

;(async () => {
	let movies = [
		{
			doubanId: "26985127",
			title: "一出好戏",
			rate: "7.4",
			poster: "https://img3.doubanio.com/view/photo/l_ratio_poster/public/p2529571873.jpg"
		},
		{
			doubanId: "26958485",
			title: "逆流大叔",
			rate: "7.7",
			poster: "https://img3.doubanio.com/view/photo/l_ratio_poster/public/p2516804723.jpg"
		}
	];

	movies.map(async movie => {
		let movieData = await fetchMovie(movie);
		try {
			let movieInfo = JSON.parse(movieData);
			console.log(movieInfo.genres);
			console.log(movieInfo.summary);
		}catch(err) {
			console.log(err);
		}
	});
})()