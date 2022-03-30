const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getFilmTitles = function (){
  const result = [];
  this.films.forEach((film) => {

    result.push(film.title);
  })
  return result;
}

Cinema.prototype.findByTitle = function (filmName){
  const result = this.films.find((film) => {
    return film.title == filmName;
  })
  return result;
}

Cinema.prototype.findByGenre = function (filmGenre){
  const result = this.films.filter((film) => {
    return film.genre == filmGenre;
  })
  return result;
}
module.exports = Cinema;
