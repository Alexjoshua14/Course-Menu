class Library {
  constructor() {
    this._Books = [];
    this._Movies = [];
    this._CDs = [];
  }

  //A getter to obtain the array of books
  get Books() {
    return this._Books;
  }

  //A getter to obtain the array of movies
  get Movies() {
    return this._Movies;
  }

  //A getter to obtain the array of CDs
  get CDs() {
    return this._CDs;
  }

  //Adds a book to the library
  //@params title A string for the title of the Book
  //        author A string for the name of the Author
  //        pages A number for the quantity of pages
  addBook(title, author, pages) {
    this._Books.push(new Book(title, author, pages));
  }

  //Adds a movie to the library
  //@params title String for the title of the Movie
  //        director String for the name of the Director
  //        runtime Number for the length of the Movie
  addMovie(title, director, runTime) {
    this._Movies.push(new Movie(title, director, runTime));
  }

  //Adds a CD to the library
  //@params title String for the title of the CD. artist String for the name of the artist of the CD. songs Array of songs on the CD
  addCD(title, artist, songs) {
    this._CDs.push(new CD(title, artist, songs));
  }

  //Returns full collection in a nice string
  fullCollection() {
    let books = 'Books: ';
    this._Books.forEach(book => 
    books += `${book.title}, `);
    
    let movies = 'Movies: ';
    this._Movies.forEach(movie => 
    movies += `${movie.title}, `); 
 
    let CDs = 'CDs: ';
    this._CDs.forEach(CD =>
    CDs += `${CD.title}, `);

    
    return `${books} \n${movies} \n${CDs}`;
  }

}

class Media {
  constructor(title) {
    this._title = title;
    this._ratings = [];
    this._isCheckedOut = false;
  }

  get title() {
    return this._title;
  }

  get ratings() {
    return this._ratings;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  getAverageRating() {
    let averageRating = 0;
    this._ratings.forEach(rating => averageRating += rating);
    averageRating /= this._ratings.length;
    return averageRating;
  }

  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }

  addRating(rating) {
    this._ratings.push(rating);
  }
}

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}

class CD extends Media {
  constructor(title, artist, songs) {
    super(title);
    this._artist = artist;
    this._songs = songs;
  }

  get artist() {
    return this._artist;
  }

  get songs() {
    return this._songs;
  }
}

const lib = new Library();
lib.addBook('We Can', 'John Trovolta', 5000);
lib.addBook('Where they at?', 'Stevie Queen', 410);
lib.addBook('Now', 'Joan Past', 1);

lib.addMovie('Blade Runner 2089', 'Suzan Crow', 240);
lib.addMovie('Barrel Runner 9802', 'Grant Crow', 241);
lib.addMovie('Where they at? (The Movie)', 'Steven King', 410);

lib.addCD('We Can Forevor', 'Joe Trovolta', ['We Cannot', 'Nevermind', 'Here We Go Again', 'Fast Lane']);
lib.addCD('Again and Again', 'Lil Karen', ['Again']);
lib.addCD('Gone', 'Lil Karen', ['See Me', 'Don\'t', 'Stay']);

//Adds ratings to the books in the library
lib.Books[0].addRating(4);
lib.Books[0].addRating(5);
lib.Books[0].addRating(4);
lib.Books[0].addRating(5);
lib.Books[0].addRating(4);
lib.Books[0].addRating(2);

lib.Books[1].addRating(3);
lib.Books[1].addRating(3);
lib.Books[1].addRating(5);
lib.Books[1].addRating(2);

lib.Books[2].addRating(2);
lib.Books[2].addRating(2);
lib.Books[2].addRating(1);
lib.Books[2].addRating(5);
lib.Books[2].addRating(2);

//console.log(lib.Books);
//console.log(lib.Movies);
//console.log(lib.CDs);
lib.Books.forEach(book =>
console.log(book.title + ': ' + book.getAverageRating()));

//Prints out the sample fullCollection
console.log(lib.fullCollection());
