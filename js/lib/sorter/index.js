// export class RatingSorterApi {
//   static async sorter(data, orderBy) {
//     console.log("Get from compute");

//     if (orderBy === "ASC") {
//       return new Promise((resolve) => {
//         setTimeout(() => {
//           const result = {
//             key: orderBy,
//             data: Array.from(data).sort(
//               (a, b) => a.released_in - b.released_in
//             ),
//           };

//           resolve(result);
//         }, 1000);
//       });
//     } else if (orderBy === "DESC") {
//       return new Promise((resolve) => {
//         setTimeout(() => {
//           const result = {
//             key: orderBy,
//             data: Array.from(data).sort(
//               (a, b) => b.released_in - a.released_in
//             ),
//           };

//           resolve(result);
//         }, 1000);
//       });
//     } else {
//       throw "unknow orderBy type";
//     }
//   }
// }



import { FilterV2 } from '../filter-v2/index.js'; // chemin vers le filter acteur 

export class RatingSorterApi {
  static async sorter(data, orderBy, actorFilter) {
    console.log("Get from compute");

    // Filtrer par acteur si un acteur est fourni
    if (actorFilter) {
      data = await FilterV2.filterByActor(actorFilter, data);
    }

    if (orderBy === "ASC") {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = {
            key: orderBy,
            data: Array.from(data).sort(
              (a, b) => a.released_in - b.released_in
            ),
          };

          resolve(result);
        }, 1000);
      });
    } else if (orderBy === "DESC") {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = {
            key: orderBy,
            data: Array.from(data).sort(
              (a, b) => b.released_in - a.released_in
            ),
          };

          resolve(result);
        }, 1000);
      });
    } else {
      throw "unknown orderBy type";
    }
  }
}
