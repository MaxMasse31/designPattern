 export class Search {
    constructor(Movies) {
        this.Movies = Movies
    }

    search(query) {
        return this.filterMovies(query)
    }
}


export class MovieNameSearch extends Search {
    constructor(Movies) {
        super(Movies)
    }

    filterMovies(query) {
        return this.Movies.filter(Movie =>
            Movie.title.toLowerCase().includes(query.toLowerCase())
        )
    }
}


export class ActorNameSearch extends Search {
    constructor(Movies) {
        super(Movies)
    }

    filterMovies(query) {
        return this.Movies.filter(Movie =>
            Movie.actor.toLowerCase().includes(query.toLowerCase())
        )
    }
}