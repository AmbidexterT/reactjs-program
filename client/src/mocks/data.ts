import KillBill from '../assets/images/movie1.png';
import Avengers from '../assets/images/movie6.png';
import Bohemia from '../assets/images/movie2.png';
import PulpFiction from '../assets/images/movie3.png';
import Inception from '../assets/images/movie4.png';
import Dogs from '../assets/images/movie5.png';
import Movie from 'types/Movie';

export const genres = ['All', 'Comedy', 'Documentary', 'Horror', 'Crime'];
export const sortOptions = [
  { name: 'Genres', value: 'genres' },
  { name: 'Rating', value: 'vote_average' },
  { name: 'Release date', value: 'release_date' },
]
const description =
  'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a ' +
  'suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to ' +
  'take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge ' +
  '(Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated ' +
  'people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra';

export const fakeMovieData: Movie[] = [
  {
    imageSource: KillBill,
    title: 'Kill Bill: Vol 2',
    description: description,
    years: 1994,
    genre: 'Action, Adventure',
    rating: 7.8,
    duration: 200,
  },
  {
    imageSource: Avengers,
    title: 'Avengers: War of Infinity',
    description: description,
    years: 2004,
    genre: 'Action, Adventure',
    rating: 7.8,
    duration: 200,
  },
  {
    imageSource: Bohemia,
    title: 'Bohemian Rhapsody',
    description: description,
    years: 2003,
    genre: 'Action, Adventure',
    rating: 7.8,
    duration: 200,
  },
  {
    imageSource: PulpFiction,
    title: 'Pulp Fiction',
    description: description,
    years: 2004,
    genre: 'Action, Adventure',
    rating: 7.8,
    duration: 200,
  },
  {
    imageSource: Inception,
    title: 'Inception',
    description: description,
    years: 2003,
    genre: 'Action, Adventure',
    rating: 7.8,
    duration: 200,
  },
  {
    imageSource: Dogs,
    title: 'Reservoir dogs',
    description: description,
    years: 1994,
    genre: 'Action, Adventure',
    rating: 7.8,
    duration: 200,
  },
  {
    imageSource: Avengers,
    title: 'Avengers: War of Infinity',
    description: description,
    years: 2004,
    genre: 'Action, Adventure',
    rating: 7.8,
    duration: 200,
  },
  {
    imageSource: Inception,
    title: 'Inception',
    description: description,
    years: 2003,
    genre: 'Action, Adventure',
    rating: 7.8,
    duration: 160,
  },
];
