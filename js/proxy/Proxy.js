import { RatingSorterApi } from "../lib/sorter/index.js";
import { FilterV2 } from "../lib/filter-v2/index.js";

export class ProxyRatingSorter {
  constructor() {
    this.cache = [];
  }

  async sorter(movies, orderBy, actorFilter) {
    const cachedResult = this.cache.find(
      (elt) => elt.key === orderBy && elt.actorFilter === actorFilter
    );
    if (cachedResult) {
      console.log("get from cache");

      return cachedResult;
    }

    // Filtrer par acteur si un acteur est fourni
    const filteredMovies = actorFilter
      ? await FilterV2.filterByActor(actorFilter, movies)
      : movies;

    const data = await RatingSorterApi.sorter(
      filteredMovies,
      orderBy,
      actorFilter
    );

    // Ajouter le filtre acteur aux données pour identifier le cache
    data.actorFilter = actorFilter;

    this.cache.push(data);
    return data;
  }
}
