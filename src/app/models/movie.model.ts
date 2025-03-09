export interface MovieModel {
     id: string,
     posterImage: string,
     title: string,
     descriptionCalculated: string,
     descriptionShortCalculated: string,
     trailers: {
          trailerKey: string,
          keyframeUrl: string,
          videoUrl: string,
          iosUrl: string,
          androidUrl: string,
          universalPlayerUrl: string
     }[],
     director: string,
     actors: string[],
     startDate: string,
     openingDate: string,
     genres: string[],
     comingSoon: boolean,
     isScheduledAtCinema: boolean,
     rating: string,
     runTime: number,
     gallery: string[],
     movieCountryCMS: string[],
     distributorName: string,
     synopsis: string,
     shortSynopsis: string
}