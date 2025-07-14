const movies = {
  Comedy: [
    "com1.jpeg",
    "com2.jpeg",
  ],
  Horror: [
    "hor1.jpeg",
    "hor2.jpeg",
  ],
  Emotional: [
    "emo1.jpeg",
    "emo2.jpeg",
  ],
  Love: [
    "lo1.jpeg",
    "lo2.jpeg",
  ],
};

function login() {
  const name = document.getElementById("username").value;
  if (name.trim()) {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("homePage").style.display = "block";
    document.getElementById("userWelcome").innerText = name;
  } else {
    alert("Please enter a valid username.");
  }
}

function showMovies(category) {
  const movieList = document.getElementById("movieList");
  const categoryTitle = document.getElementById("categoryTitle");

  categoryTitle.innerText = `${category} Movies`;
  movieList.innerHTML = "";

  movies[category].forEach((movieURL) => {
    const movieCard = document.createElement("div");
    movieCard.className = "movie-card";
    movieCard.innerHTML = `<img src="${movieURL}" alt="${category} Movie" />`;
    movieList.appendChild(movieCard);
  });
}
