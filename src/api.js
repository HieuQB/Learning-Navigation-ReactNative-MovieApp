let rootURL = 'https://api.themoviedb.org/3/search/movie?api_key=ec89dc1159316cad876c98da0d99ae3a';

exports.result = function (q) {
    let url = `${rootURL}&query=${q}`;
    console.log(url);
    return fetch(url)
        .then((resp) => resp.json())
        .then((json) => {
            return json.results;
        });
}

exports.view = function (id) {
    let url = `${rootURL}?i=${id}&plot=short&r=json`;
    return fetch(url)
        .then((resp) => resp.json());
}