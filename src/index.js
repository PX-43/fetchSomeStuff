import jquery from 'jquery';
import {randomWordUrl, getWordDefinitionUrl} from './wordNikUrl';

// note: getting random word works, but definition doesn't
/*jquery.get(randomWordUrl, (data) => {
    console.log(data.word);
    const defUrl = getWordDefinitionUrl(data.word);
    fetch(defUrl, {mode: 'no-cors', headers: new Headers({
            'Access-Control-Allow-Origin': '*',
        })})
        .then((resp) => resp.json()) // Transform the data into json
        .then((data) => console.log(data)).catch(function() {
            console.error('failed');
        });

});*/


/*fetch(url) // Call the fetch function passing the url of the API as a parameter
    .then((resp) => resp.json()) // Transform the data into json
    .then(function(data) {
        // Create and append the li's to the ul
        console.log(data);
    }).catch(function() {
        // This is where you run code if the server returns any errors
    });*/

/*jquery.get(randomWordUrl, (data) => {
    const defUrl = getWordDefinitionUrl(data.word);
    console.log(defUrl);
    jquery.get(defUrl, (def) => console.log(def))
});*/

// this works upto 20 movies
jquery.get('https://api.themoviedb.org/3/search/movie?api_key=f073485e382fd3d0282e8d66bfb0f3fb&query=Star', (data) => console.log(data));


/*jquery.ajax({
    url: getWordDefinitionUrl('cat'),
    type: 'GET',
    dataType: 'jsonp',
    success: (data) => console.log(data),
    error: () => console.log('Failed!'),
});*/

