const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getFilmTitles = function (){
  const result = [];
  this.films.forEach((film) => {

    result.push(film.title);
  });
  return result;
}

Cinema.prototype.findByTitle = function (filmName){
  const result = this.films.find((film) => {
    return film.title == filmName;
  });
  return result;
}

Cinema.prototype.findByGenre = function (filmGenre){
  const result = this.films.filter((film) => {
    return film.genre == filmGenre;
  });
  return result;
}


Cinema.prototype.filmByYear = function (filmYear){
  const result = this.films.some((film) => {
    return film.year == filmYear;
  });
  return result;
}

Cinema.prototype.noFilms = function (filmYear){
  const result = this.films.every((film) => {
    return film.year == filmYear;
  });
  return result;
}

Cinema.prototype.filmOverLength = function (filmLength){
  const result = this.films.every((film) => {
    return film.length >= filmLength;
  });
  return result;
}

Cinema.prototype.totalFilm = function (){
  const result = this.films.reduce((total,film) => {
    return total + film.length
  },0);
  return result;
}


module.exports = Cinema;
