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

module.exports = Cinema;
