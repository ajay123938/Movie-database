const URL =
  "https://api.themoviedb.org/3/discover/movie?api_key=a305d32d712cb7234773afa1a221884b";
let data;
const fetchMovie = async () => {
  const response = await fetch(URL);
  const data1 = await response.json();
  data = data1.results;

  console.log(data);
  const displaymovie = document.querySelector(".displaymovie");
  for (let i = 0; i < data.length; i++) {
    displaymovie.innerHTML += `
        <div class="card" style="width:80% ;height:90% ;margin-top:10px; border-radius:10px ;box-shadow:0 4px 8px rgba(0, 0, 0, 0.4)  ">
                <img src='https://image.tmdb.org/t/p/w500${data[i].poster_path}' class="card-img-top" alt="...">
               <div class="card-body ">
               <p ><b>${data[i].title}</b></p>
              
               </div>
              </div>      
        `;

    if (i <= 5) {
      data[i]["genere"] = "action";
    } else if (i > 5 && i <= 10) {
      data[i]["genere"] = "comedy";
    } else if (i > 10 && i <= 15) {
      data[i]["genere"] = "horror";
    } else {
      data[i]["genere"] = "romantic";
    }
  }

  console.log(data);

  const cardBodies = document.querySelectorAll(".card-body");

  cardBodies.forEach((cardBody) => {
    cardBody.classList.add("play");
  });

  middle();
};

const releasedate = (event) => {
  console.log("ajay");
  event.preventDefault();

  const fromDate = document.querySelector("#from").value;
  const displaymovie = document.querySelector(".displaymovie");
  displaymovie.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    if (fromDate === data[i].release_date)
      displaymovie.innerHTML += `
            <div class="card" style="width:80% ;height:90% ;margin-top:10px; border-radius:10px ;box-shadow:0 4px 8px rgba(0, 0, 0, 0.4) ">
                    <img src='https://image.tmdb.org/t/p/w500${data[i].poster_path}' class="card-img-top" alt="...">
                   <div class="card-body ">
                   <p ><b>${data[i].title}</b></p>
                  
                   </div>
                  </div>      
            `;
  }
};

const genere = (movie) => {
  const displaymovie = document.querySelector(".displaymovie");
  displaymovie.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    if (data[i].genere === movie) {
      displaymovie.innerHTML += `
            <div class="card" style="width:80% ;height:90% ;margin-top:10px; border-radius:10px ;box-shadow:0 4px 8px rgba(0, 0, 0, 0.4) ">
                    <img src='https://image.tmdb.org/t/p/w500${data[i].poster_path}' class="card-img-top" alt="...">
                   <div class="card-body ">
                   <p ><b>${data[i].title}</b></p>
                  
                   </div>
                  </div>      
            `;
    }
  }
};

fetchMovie();

const middle = () => {
  const middle = document.querySelector(".middle");

  for (let i = 0; i < data.length; i++) {
    if (data[i].popularity > 2000) {
      middle.innerHTML += `
         <div style="
         padding:6px;
         border-radius:10px;
         height:100%;
         width:100%;
         width:75%;
         margin-bottom:2px;
         "><img src = 'https://image.tmdb.org/t/p/w500${data[i].poster_path}'
         style ="height:140px;
         width:100%;
         border-radius:10px;
         box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);"
          ></img></div>
        `;
    }
  }
};
