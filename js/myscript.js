
        for (let i in moviedata.movies) {
            $('#moviecards').append(`
            <div class="card text-white my-4 p-1 col-lg-4 col-md-4 col-sm-8 offset-lg-1 offset-md-1 offset-sm-1 justify-content-around" style="background:rgb(24,24,24) ">
                <div class="row no-gutters">
                    <div class="col-lg-4 col-md-4 col-sm-4 p-1">
                        <img src="${moviedata.movies[i].poster}" class="card-img" alt="${moviedata.movies[i].title}">
                    </div>
                    <div class="col-lg-8 col-md-8 col-sm-8 p-2 col align-self-start">
                        <div class="text-left">
                            <h5 class="card-title">${moviedata.movies[i].title}</h5>
                            <p class="card-text"><small>${moviedata.movies[i].genre}</small></p>
                            <p class="card-text text-truncate font-weight-light font-italic"><small>${moviedata.movies[i].info}</small></p>
                
                             <div class="text-right">
                            <button id="clickme" class="btn btn-lg" style="color:limegreen"><small>Like</small>
                               <i class="fas fa-thumbs-up" style="color:limegreen"></i></span>&nbsp;
                                <span id="${moviedata.movies[i].id}" class="badge badge-success rounded-circle">${moviedata.movies[i].likes}</span></button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>

          
            </div>
            `)

            var button = document.getElementById("clickme"),
                count = 0;
                button.onclick = function() {
                count += 1;
              document.getElementById("${moviedata.movies[i].id}").innerHTML = count;
};

        };