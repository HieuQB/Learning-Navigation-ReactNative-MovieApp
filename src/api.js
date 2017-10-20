let rootURL = 'http://theapache64.xyz:8080/movie_db/search';

exports.search = function(q){
    let url = `${rootURL}?keyword=${q}`;
    console.log(url);
    return fetch(url)
        .then((resp)=>resp.json())
        .then((json)=>{
            return json;
        });
}

exports.view = function(id){
    let url = `${rootURL}?i=${id}&plot=short&r=json`;
    return fetch(url)
        .then((resp)=>resp.json());
}