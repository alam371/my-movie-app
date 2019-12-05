'use strict'

const Movie  = require('./movieModel');

// Helper function to list each of the movies in the database
exports.listMovies = async () => {
  try {
      const movies = await Movie.find();
      return movies;
  } catch (err) {
      throw new Error(err.message);
  }
};

// Create a new book that will be added to the database
exports.createMovie = async (movieData) => {
  // 1. Create a book instance
  try {
      const newMovie = await new Movie(movieData);
      // 2. Save book to database
      const movie = await newMovie.save();
      // 3. return with created book
      return movie;
  } catch (err) {
    // 4. If error, throw and controller will catch
      throw new Error(err.message);
  }
}

// const MOVIES = [
//   {
//     id: uuid(),
//     title: 'The Godfather',
//     director: 'Francis Ford Coppola',
//     plot: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
//     date: 1972,
//     hidden: false
//   },
//   {
//     id: uuid(),
//     title: 'Chinatown',
//     director: 'Roman Polanski',
//     plot: 'A private detective hired to expose an adulterer finds himself caught up in a web of deceit, corruption, and murder.',
//     date: 1974,
//     hidden: false
//   },
//   {
//     id: uuid(),
//     title: 'A Clockwork Orange',
//     director: 'Stanley Kubrick',
//     plot: 'In the future, a sadistic gang leader is imprisoned and volunteers for a conduct-aversion experiment, but it doesn\'t go as planned.',
//     date: 1971,
//     hidden: false
//   },
//   {
//     id: uuid(),
//     title: 'Jaws',
//     director: 'Steven Spielberg',
//     plot: 'When a killer shark unleashes chaos on a beach community, it\'s up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down.',
//     date: 1975,
//     hidden: false
//   },
//   {
//     id: uuid(),
//     title: 'The Pianist ',
//     director: 'Roman Polanski',
//     plot: 'A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.',
//     date: 2002,
//     hidden: false
//   },
//   {
//     id: uuid(),
//     title: 'Vertigo',
//     director: 'Alfred Hitchcock',
//     plot: 'A former detective with a fear of heights is hired to follow a woman apparently possessed by the past, in Alfred Hitchcock’s timeless thriller about obsession.',
//     date: 1958,
//     hidden: false
//   },
//   {
//     id: uuid(),
//     title: 'Citizen Kane',
//     director: 'Orson Welles',
//     plot: 'Given extraordinary freedom by Hollywood studio RKO for his debut film, boy wonder Welles created a modernist masterpiece that is regularly voted the best film ever made.',
//     date: 1941,
//     hidden: false
//   },
//   {
//     id: uuid(),
//     title: 'Tokyo Story',
//     director: 'Ozu Yasujiro',
//     plot: 'The final part of Yasujiro Ozu’s loosely connected ‘Noriko’ trilogy is a devastating story of elderly grandparents brushed aside by their self-involved family.',
//     date: 1953,
//     hidden: false
//   },
//   {
//     id: uuid(),
//     title: 'La Règle du jeu',
//     director: 'Jean Renoir',
//     plot: 'Made on the cusp of WWII, Jean Renoir’s satire of the upper-middle classes was banned as demoralising by the French government for two decades after its release',
//     date: 1939,
//     hidden: false
//   },
//   {
//     id: uuid(),
//     title: '2001: A Space Odyssey',
//     director: 'Stanley Kubrick',
//     plot: 'Stanley Kubrick took science fiction cinema in a grandly intelligent new direction with this epic story of man’s quest for knowledge.',
//     date: 1968,
//     hidden: false
//   },
//   {
//     id: uuid(),
//     title: 'Late Spring',
//     director: 'Ozu Yasujiro',
//     plot: 'Yasujiro Ozu’s exploration of the relationship between a widower and his unmarried adult daughter is often described as the perfect distillation of his style. Chishu Ryu and Setsuko Hara star. ',
//     date: 1949,
//     hidden: false
//   },
//   {
//     id: uuid(),
//     title: 'Apocalypse Now',
//     director: 'Francis Ford Coppola',
//     plot: 'Transplanting the story of Joseph Conrad’s colonial-era novel Heart of Darkness to Vietnam, Francis Ford Coppola created a visually mesmerising fantasia on the spectacle of war.',
//     date:  1979,
//     hidden: false
//   },
//   {
//     id: uuid(),
//     title: 'Seven Samurai',
//     director: 'Kurosawa Akira',
//     plot: 'Rice farmers hire a band of samurai to defend them against marauding bandits in Akira Kurosawa’s influential epic, a touchstone for action movies ever since.',
//     date: 1954,
//     hidden: false
//   },
//   {
//     id: uuid(),
//     title: 'Le Mépris',
//     director: 'Jean-Luc Godard',
//     plot: 'Working with his biggest budget to date, Jean-Luc Godard created a sublime widescreen drama about marital breakdown, set during pre-production on a film shoot.',
//     date: 1963,
//     hidden: false
//   },
//   {
//     id: uuid(),
//     title: 'In the Mood for Love',
//     director: 'Wong Kar-wai',
//     plot: 'Wong Kar-wai’s ravishing romance stars Maggie Cheung and Tony Leung as two wronged spouses in 1960s Hong Kong who find comfort in each other’s company',
//     date: 2000,
//     hidden: false
//   },
//   {
//     id: uuid(),
//     title: 'Rashomon',
//     director: 'Kurosawa Akira',
//     plot: 'Credited with bringing Japanese cinema to worldwide audiences, Akira Kurosawa’s breakthrough tells the story of a murder in the woods from four differing perspectives.',
//     date: 1950,
//     hidden: false
//   },
//   {
//     id: uuid(),
//     title: 'Mulholland Dr.',
//     director: 'David Lynch',
//     plot: 'In David Lynch’s labyrinthine neo-noir, Naomi Watts plays an aspiring ingénue who moves in with an amnesiac woman on her arrival in Hollywood. The famously open-ended plot reflects the film’s origin as a TV pilot.',
//     date: 2001,
//     hidden: false
//   },
//   {
//     id: uuid(),
//     title: 'La dolce vita',
//     director: 'Federico Fellini',
//     plot: 'Marcello Mastroianni is the paparazzi journalist whose life is an endless round of hedonistic parties and superficial liaisons as he searches for meaning amidst the crumbling grandeur of Rome’s once imperial city.',
//     date: 1960,
//     hidden: false
//   }
// ];
//
// const ACTORS = [
//   {
//     actor: 'Jack Nicholson',
//     movies: ['Chinatown', 'The shinning', 'The Witches of Eastwick', 'Something Gotta Give']
//   },
//   {
//     actor: 'Marlon Brandon',
//     movies: ['The Godfather','Guys and Dolls']
//   },
//   {
//     actor: 'Charles Chaplin',
//     movies: ['City Lights', 'The Circus']
//   },
//   {
//     actor: 'Ralph Fiennes',
//     movies: ['The Grand Budapest Hotel', 'The reader', 'The hurt locker', 'Spectre']
//   },
//   {
//     actor: 'Meryl Streep',
//     movies: ['Out of Africa', 'The devil wears prada', 'The iron lady', 'Into the woods']
//   },
//   {
//     actor: 'Helen Mirren',
//     movies: ['Winchester', 'The queen']
//   },
//   {
//     actor: 'Sigourney Weaver',
//     movies: ['Aliens', 'Avatar', 'Ghostbusters']
//   }
// ];
