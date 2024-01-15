export class Search {
  constructor(Movies) {
    this.Movies = Movies;
  }

  search(query) {
    return this.filterMovies(query);
  }
}

export class MovieNameSearch extends Search {
  constructor(Movies) {
    super(Movies);
  }

  filterMovies(query) {
    return this.Movies.filter((Movie) =>
      Movie.title.toLowerCase().includes(query.toLowerCase())
    );
  }
}

// continuer ici prochaine fois 
export class NoFilterSearch extends Search {
  constructor(Movies) {
    super(Movies);
  }

  filterMovies(query) {
    // No filtering, just return the original list of movies
    return this.Movies;
  }
}


export class ActorNameSearch extends Search {
  constructor(Movies) {
    super(Movies);
  }

  filterMovies(query) {
    return this.Movies.filter((Movie) =>
      Movie.actor.toLowerCase().includes(query.toLowerCase())
    );
  }
}
