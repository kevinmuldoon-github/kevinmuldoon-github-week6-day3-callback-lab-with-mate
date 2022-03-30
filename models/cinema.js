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

module.exports = Cinema;
