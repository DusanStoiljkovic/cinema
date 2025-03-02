// api.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MovieModel } from '../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}

  // Simuliraj API poziv
  getMovies(): Observable<MovieModel[]> {
    // Simuliramo odgovor sa servera sa statičkim podacima
    const movies: MovieModel[] = [
      {
        id: 1,
        title: 'The Shawshank Redemption',
        poster_path: 'https://image.tmdb.org/t/p/w500/9kMhFOMYbmrQhMjLOEhI3IbIkzw.jpg',
        release_date: '1994-09-22',
        vote_average: 9.3,
      },
      {
        id: 2,
        title: 'The Godfather',
        poster_path: 'https://image.tmdb.org/t/p/w500/1yoGG0VxAeZsI3E40tdeBfSgq4v.jpg',
        release_date: '1972-03-24',
        vote_average: 9.2,
      },
      {
        id: 3,
        title: 'The Dark Knight',
        poster_path: 'https://image.tmdb.org/t/p/w500/6H8e7K6mTpZaMIInRbS9V5pXYWy.jpg',
        release_date: '2008-07-18',
        vote_average: 9.0,
      },
      {
        id: 4,
        title: 'Pulp Fiction',
        poster_path: 'https://image.tmdb.org/t/p/w500/lpNfThV9XvDks4pprkfrqRmoSBZ.jpg',
        release_date: '1994-10-14',
        vote_average: 8.9,
      },
      {
        id: 5,
        title: 'The Lord of the Rings: The Return of the King',
        poster_path: 'https://image.tmdb.org/t/p/w500/hpzwAzovlrPYYhRsjdBB4TbL9g8.jpg',
        release_date: '2003-12-17',
        vote_average: 8.9,
      },
      {
        id: 6,
        title: 'Forrest Gump',
        poster_path: 'https://image.tmdb.org/t/p/w500/kFQh3LFcOVbFzZoV7oof2DsV1g7.jpg',
        release_date: '1994-07-06',
        vote_average: 8.8,
      },
      {
        id: 7,
        title: 'Inception',
        poster_path: 'https://image.tmdb.org/t/p/w500/qnYHmpQgVDbkkpIVCqs43fnrzAP.jpg',
        release_date: '2010-07-16',
        vote_average: 8.8,
      },
      {
        id: 8,
        title: 'The Matrix',
        poster_path: 'https://image.tmdb.org/t/p/w500/lZxz6R4hguTzRSOBcF1JHTrD0Gz.jpg',
        release_date: '1999-03-31',
        vote_average: 8.7,
      },
      {
        id: 9,
        title: 'Fight Club',
        poster_path: 'https://image.tmdb.org/t/p/w500/bFu1iOWz2RA5o9l5Aq0ayIk32tt.jpg',
        release_date: '1999-10-15',
        vote_average: 8.8,
      },
      {
        id: 10,
        title: 'Interstellar',
        poster_path: 'https://image.tmdb.org/t/p/w500/wo9Zn9vNNITl2dAOW9m92d4rW6d.jpg',
        release_date: '2014-11-07',
        vote_average: 8.6,
      },
      {
        id: 11,
        title: 'The Lion King',
        poster_path: 'https://image.tmdb.org/t/p/w500/1G2r5Azw26vstU7Ymjl30GjHpJW.jpg',
        release_date: '1994-06-15',
        vote_average: 8.5,
      },
      {
        id: 12,
        title: 'The Empire Strikes Back',
        poster_path: 'https://image.tmdb.org/t/p/w500/5K5lmlgdwoCllubT4m3eFhQy1aB.jpg',
        release_date: '1980-05-21',
        vote_average: 8.7,
      },
      {
        id: 13,
        title: 'The Godfather: Part II',
        poster_path: 'https://image.tmdb.org/t/p/w500/gBLxJrsLSkO6cVmMz93YyLzH8lI.jpg',
        release_date: '1974-12-20',
        vote_average: 9.0,
      },
      {
        id: 14,
        title: 'The Prestige',
        poster_path: 'https://image.tmdb.org/t/p/w500/dAFJuytNtz34B9Jf2uRACypY9bM.jpg',
        release_date: '2006-10-20',
        vote_average: 8.5,
      },
      {
        id: 15,
        title: 'Goodfellas',
        poster_path: 'https://image.tmdb.org/t/p/w500/9GEFbYbHFmn9hYXjwBz8zFqodv1.jpg',
        release_date: '1990-09-19',
        vote_average: 8.7,
      },
      {
        id: 16,
        title: 'Star Wars: A New Hope',
        poster_path: 'https://image.tmdb.org/t/p/w500/2Db3Fu87XH06UzxQgozEwswU9sH.jpg',
        release_date: '1977-05-25',
        vote_average: 8.6,
      },
      {
        id: 17,
        title: 'The Departed',
        poster_path: 'https://image.tmdb.org/t/p/w500/m8VtxV1uWzTe5a9IEJ5FOJe4bWz.jpg',
        release_date: '2006-10-06',
        vote_average: 8.5,
      },
      {
        id: 18,
        title: 'The Green Mile',
        poster_path: 'https://image.tmdb.org/t/p/w500/4nzZ4FATjS0ikFw8bo1xfZBmlHr.jpg',
        release_date: '1999-12-10',
        vote_average: 8.6,
      },
      {
        id: 19,
        title: 'Schindler\'s List',
        poster_path: 'https://image.tmdb.org/t/p/w500/aNcSyIf9OZjc9nJXQy0kQdJj5vs.jpg',
        release_date: '1993-12-15',
        vote_average: 9.0,
      },
      {
        id: 20,
        title: 'Se7en',
        poster_path: 'https://image.tmdb.org/t/p/w500/sWmE5DiAPwxl66tAt5J5WcdSxpRL.jpg',
        release_date: '1995-09-22',
        vote_average: 8.6,
      },
      {
        id: 21,
        title: 'A Clockwork Orange',
        poster_path: 'https://image.tmdb.org/t/p/w500/aWhROxuOfslWONcb1deHP75wdJ4.jpg',
        release_date: '1971-12-19',
        vote_average: 8.3,
      },
      {
        id: 22,
        title: 'American Beauty',
        poster_path: 'https://image.tmdb.org/t/p/w500/fQJgeiwvF8mApZosFOv8n5h9rt0.jpg',
        release_date: '1999-09-15',
        vote_average: 8.3,
      },
      {
        id: 23,
        title: 'The Usual Suspects',
        poster_path: 'https://image.tmdb.org/t/p/w500/fo7q8TwzFUsALZdxvLBjo0OwhT9.jpg',
        release_date: '1995-08-16',
        vote_average: 8.5,
      },
      {
        id: 24,
        title: 'Léon: The Professional',
        poster_path: 'https://image.tmdb.org/t/p/w500/6i2zoPbI3fgsWqW5VAo0XmbpV1D.jpg',
        release_date: '1994-09-14',
        vote_average: 8.5,
      },
      {
        id: 25,
        title: 'The Pianist',
        poster_path: 'https://image.tmdb.org/t/p/w500/pkiVwbQ9GpD8soUg3Us0pB3zzM9.jpg',
        release_date: '2002-02-24',
        vote_average: 8.5,
      },
      {
        id: 26,
        title: 'The Silence of the Lambs',
        poster_path: 'https://image.tmdb.org/t/p/w500/2sBwvf3gdKsrF9BmnDklnLg0ieq.jpg',
        release_date: '1991-02-14',
        vote_average: 8.6,
      },
      {
        id: 27,
        title: 'The Shining',
        poster_path: 'https://image.tmdb.org/t/p/w500/f2u1oDyyOXJlApBXLyJz3Vqfr5r.jpg',
        release_date: '1980-05-23',
        vote_average: 8.4,
      },
      {
        id: 28,
        title: 'Saving Private Ryan',
        poster_path: 'https://image.tmdb.org/t/p/w500/9mfi0mLjcZSeGZYjHZquwYNrG9H.jpg',
        release_date: '1998-07-24',
        vote_average: 8.6,
      },
      {
        id: 29,
        title: 'The Bridge on the River Kwai',
        poster_path: 'https://image.tmdb.org/t/p/w500/izZCUPom8rm3QlAt4jbBftb92Qw.jpg',
        release_date: '1957-10-02',
        vote_average: 8.2,
      },
      {
        id: 30,
        title: 'City of God',
        poster_path: 'https://image.tmdb.org/t/p/w500/3hgo4yUOs5YZCjS1ZZkuzJ7tq91.jpg',
        release_date: '2002-02-06',
        vote_average: 8.6,
      }
    ];

    // Vraćanje podataka kao observable
    return of(movies);
  }
}