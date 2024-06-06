const search_btn = document.getElementById("search_btn");

console.log(search_btn);
let MOVIE_INFOR_CONTAINER = Document.getElementById("movie_infor_container");
//show loading text while getting the movie
MOVIE_INFOR_CONTAINER.innerHTML = `<h1 class="text-[10rem] bg-white">Getting movie...</h1>`;

const text_input_field = document.getElementById("text_input_field");

console.log("text_input_field");

searchButton.addEventListener("click", getMovieInfor);

//create a function getMovieInfor

async function getMovieInfor(e) {
  // this is to prevent the form from auto refreshing
  e.preventDefault();

  //the movie to search
  const movieTittle = text_input_field.value.trim();

  MOVIE_INFOR_CONTAINER.innerHTML = `<section class="flex justify-center items-center max-w-[600px] bg-white p-4 rounded-md gap-5">
  <div class="loader"><div>
  <h1 class="text-[2rem]  bg-white p-2 rounded-md font-bold">Getting movie...</h1>
  </section>`;

  try {
    //make an https request to movie API
    const data = await fetch(
      `https://www.omdbapi.com/?apikey=b3a2e9c5&t=${movieTittleS}`
    );
    const movieInfor = await data.json();
    console.log(movieInfor);

    // check if movie was not found
    if (movieInfor.Error) {
      MOVIE_INFOR_CONTAINER.innerHTML = `<h1 class="text-[4rem] text-red-400 bg-white">${movieInfor.Error}</h1>`;
      return;
    }

    //show the actual movie infor
    MOVIE_INFOR_CONTAINER.innerHTML`<section
          class="flex flex-col lg:flex-row gap-5 max-w-[600px] w-full justify-between bg-white p-4 rounded-lg"
        >
          <div>
            <h2 class="text-3xl font-bold tracking-wider">${movieInfor.Tittle}</h2>
            <p>
              <strong class="mr-2">Year:</strong
              ><span class="text-gray-500">${movieInfor.Year}</span>
            </p>
            <p>
              <strong class="mr-2">Release:</strong
              ><span class="text-gray-500">${movieInfor.Release}</span>
            </p>
            <p>
              <strong class="mr-2">Duration:</strong
              ><span class="text-gray-500">${movieInfor.Runtime}</span>
            </p>
            <p>
              <strong class="mr-2">Director:</strong
              ><span class="text-gray-500">${movieInfor.Director}</span>
            </p>
            <p>
              <strong class="mr-2">Plot:</strong
              ><span class="text-gray-500">${movieInfor.Plot}</span>
            </p>
            <p>
              <strong class="mr-2">Awards:</strong
              ><span class="text-gray-500">${movieInfor.Awards}</span>
            </p>

            <p>
              <strong class="mr-2">Genre:</strong
              ><span class="text-gray-500">${movieInfor.Genre}</span>
            </p>
          </div>
          <div>
            <img
              class="max-w-{600px} w-full rounded-md"
              src=${movieInfor.Poster}
              alt="movie poster"
            />
          </div>
        </section>`;
  } catch (error) {
    console.log(error);
  }
}
