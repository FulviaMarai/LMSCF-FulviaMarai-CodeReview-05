
// -- Here starts the variables 

var sortByLikes = false;
var movieListContent = '';
var serie = [];

// -- Here starts the function to display the content sorted by "likes" and sorted by "id" (not true alphabetical)

function displayMovies() {
    movieListContent = '';
    $('#movieCards').replaceWith(`<div id="movieCards" class="row text-center" style="background:rgb(29,35,41)"></div>`);
    if (sortByLikes == true) {
        serie = [];
        movieData.movies.sort(function(a, b) { return b.likes - a.likes});
        for (var sortThrough in movieData.movies) {
            serie.push(movieData.movies[sortThrough].id);
        }
    } else if (sortByLikes == false) {
        serie = [];
        movieData.movies.sort(function(x, y) { return x.id - y.id });
        for (var sortBy in movieData.movies) {
            serie.push(movieData.movies[sortBy].id);
        }
  };


// --Here starts the function to style the content "cards", using bootstrap coding


    for (var tempID in serie) {
        movieListContent += `

        <div class="card text-white my-4 p-1 col-lg-4 col-md-4 col-sm-8 col-xs-8 offset-lg-1 offset-md-1 offset-sm-1 justify-content-around" style="background:rgb(24,24,24)">
                <div class="row no-gutters">
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 p-1">
                        <img src="${movieData.movies[tempID].poster}" class="card-img" alt="${movieData.movies[tempID].title}">
                    </div>
                    <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8 p-2 col align-self-start">
                        <div class="text-left">
                            <h5 class="card-title">${movieData.movies[tempID].title}</h5>
                            <p class="card-text"><small>${movieData.movies[tempID].genre}</small></p>
                            <p class="card-text text-truncate font-weight-light font-italic"><small>${movieData.movies[tempID].info}</small></p>
                
                             <div class="text-right">
                                <button id="${tempID}" class="likeButton btn btn-lg" style="color:limegreen"><small>Like</small>
                                <i class="fas fa-thumbs-up" style="color:limegreen"></i>&nbsp;
                                <span id="displayLike}" class=" p-2 rounded-circle text-white" style="background:limegreen">${movieData.movies[tempID].likes}</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    };

//  -- Here starts the function to display the "cards"   

    $('#movieCards').replaceWith(`<div id="movieCards" class="row text-center" style="background:rgb(29,35,41)">${movieListContent}</div>`);
    setEventListeners();
};

function setEventListeners() {
    $('.likeButton').click(function() {
        movieData.movies[this.id].likes ++;
        console.log(movieData.movies);
        displayMovies();
    });
};

// -- Here starts the functions to make the button "sort" work

$('#mostLiked').click(function() {
    sortByLikes = true;
    displayMovies();
});

$('#alphabetical').click(function() {
    sortByLikes = false;
    displayMovies();
});