import { Category} from './enums';
import { Book, Logger, Author, Librarian, Magazine } from './interfaces';
import { ReferenceItem, UniversityLibrarian, RefBook, Shelf } from './classes';
import { PersonBook, BookRequiredFields, UpdatedBook, CreateCustomerFunctionType } from './types';
import { getAllBooks, purge, createCustomer, getBooksByCategory, logCategorySearch, getBooksByCategoryPromise, logSearchResults } from './functions';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}


// ====================================================================================
// Task 01.02
// logFirstAvailable(getAllBooks());
// const titles = getBookTitleByCategory(Category.JavaScript);
// logBookTitles(titles);
// const result = getBookAuthorByIndex(1);
// console.log(result);
// console.log(calcTotalPages());

// ====================================================================================
// Task 03.01
// const titles = getBookTitleByCategory(Category.JavaScript);
// titles.forEach(title => console.log(title));
// const book = getBookById(1);
// console.log(book);
// ====================================================================================
// Task 03.02
// const myID = createCustomerId('Ann', 10);
// console.log(myID);
// let idGenerator: (name: string, id: number) => string =
//             (name: string, id: number) => `${id}-${name}`;
// idGenerator = createCustomerId;
// console.log(idGenerator('Alex', 20));
// ====================================================================================
// Task 03.03
// createCustomer('Anna');
// createCustomer('Boris', 35);
// createCustomer('Clara', 45, 'Kyiv');
// console.log(getBookTitleByCategory());
// logFirstAvailable();
// const myBooks = checkoutBooks('Ann', 1,2,4);
// console.log(myBooks);
// ====================================================================================
// Task 03.04
// const checkoutedBooks = getTitles(1, true);
// console.log(checkoutedBooks);
// ====================================================================================
// Task 03.05
// console.log(bookTitleTransform((getAllBooks()[0] as any).title));
// console.log(bookTitleTransform(123));

// ====================================================================================
// Task 04.01
// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     // year: 2015,
//     // copies: 3
//     pages: 200,
//     // markedDamaged(reason: string) {
//     //     console.log(`Damaged: ${reason}`);
//     // }

//     markedDamaged: (reason: string) => {
//         console.log(`Damaged: ${reason}`);
//     }
// };

// printBook(myBook);
// myBook.markedDamaged('missing back cover')

// ====================================================================================
// Task 04.02
// const logDamage: DamageLogger = (reason: string) => {
// const logDamage: Logger = (reason: string) => {
//     console.log(`Damaged: ${reason}`);
// };
// logDamage('missing back cover');

// ====================================================================================
// Task 04.03
// const favoriteAuthor: Author = {
//     name: 'Anna',
//     email: 'anna@gmail.com',
//     numBooksPublished: 10
// };

// const favoriteLibrarian: Librarian = {
//     name: 'Boris',
//     email: 'boris@gmail.com',
//     department: 'Classical Literature',
//     assistCustomer: null
// };

// ====================================================================================
// Task 04.04
// const offer: any = {
//     book: {
//         title: 'Essential TypeScript'
//     }
// };

// console.log(offer?.magazine);

// ====================================================================================
// Task 04.05
// console.log(getBookProp(getAllBooks()[0], 'title'));
// console.log(getBookProp(getAllBooks()[0], 'markedDamaged'));
// console.log(getBookProp(getAllBooks()[0], 'isbn')); // error

// ====================================================================================
// Task 05.01
// const ref = new ReferenceItem('My Title', 2020);
// console.log(ref);
// ref.printItem();
// ref.publisher = 'My Publisher';
// console.log(ref.publisher);
// ====================================================================================
// Task 05.02
// const refBook = new RefBook('Title', 2020, 10);
// console.log(refBook);
// refBook.printItem();
// ====================================================================================
// Task 05.03
// const refBook = new Encyclopedia('Title', 2020, 10);
// refBook.printCitation();
// console.log(refBook);
// ====================================================================================
// Task 05.04
// const favoriteLibrarian: Librarian = new UniversityLibrarian();
// console.log(favoriteLibrarian);
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris');
// ====================================================================================
// Task 05.05
// const personBook: PersonBook = {
//     name: 'Anna',
//     email: 'anna@gmail.com',
//     id: 1,
//     title: 'My Title',
//     available: true,
//     category: Category.CSS,
//     author: 'Anton Pelex'
// };
// console.log(personBook);
// ====================================================================================
// Task 06.05
// import('./classes')
//     .then(module => {
//         const reader = new module.Reader();
//         console.log(reader);
//         reader.name = 'Anna';
//         reader.take(getAllBooks()[1]);
//     });
// ====================================================================================
// Task 07.01
const inventory: Book[] = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];

// console.log(purge(inventory));
// console.log(purge([1, 2, 3, 4, 5, ' ']));
// ====================================================================================
// Task 07.02
// const bookShelf: Shelf<Book> = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// const firstBook = bookShelf.getFirst();
// console.log(firstBook);

// const magazines: Magazine[] = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' }
// ];
// const magazineShelf = new Shelf<Magazine>();
// magazines.forEach(mag => magazineShelf.add(mag));
// const firstMag = magazineShelf.getFirst();

// ====================================================================================
// Task 07.03
// magazineShelf.printTitle();
// const result = magazineShelf.find('Five Points');
// console.log(result);

// ====================================================================================
// Task 07.04
// const book: BookRequiredFields = {
//     id: 1,
//     title: 'Refactoring TypeScript',
//     author: 'unknown',
//     available: false,
//     category: Category.TypeScript,
//     markedDamaged: null,
//     pages: 300
// };

// const updatedBook: UpdatedBook = {
//     id: 1,
//     title: 'Refactoring JS'
// };

// const params: Parameters<CreateCustomerFunctionType> = ['Anna'];
// createCustomer(...params);
// let p: Parameters<typeof createCustomer>;

// ====================================================================================
// Task 08.01, 08.02

// const unLibr = new UniversityLibrarian();
// console.log(unLibr);
// unLibr.name = 'Anna';
// (unLibr as any).printLibrarian();
// unLibr['printLibrarian']();


// ====================================================================================
// Task 08.03
// const o = new UniversityLibrarian();
// o.assistFaculty = null;
// o.techCommunity = null;

// ====================================================================================
// Task 08.04
// const refBook = new RefBook('Title', 2020, 10);
// refBook.printItem();

// ====================================================================================
// Task 08.05
// const o = new UniversityLibrarian();
// o.name = 'Anna';
// o.assistCustomer('Boris');

// ====================================================================================
// Task 08.06
// const o = new UniversityLibrarian();
// o.name = 'Anna';
// o.assistCustomer('Boris');
// console.log(o.name);

// ====================================================================================
// Task 08.07
// const refBook = new RefBook('Title', 2020, 10);
// refBook.copies = 10;

// ====================================================================================
// Task 09.01
// console.log('Begin');
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('End');

// ====================================================================================
// Task 09.02
// console.log('Begin');
// getBooksByCategoryPromise(Category.JavaScript)
// .then(titles => {
    //     console.log(titles);
    //     return titles.length;
    // }).then(numberOfBooks => console.log(numberOfBooks));

    // getBooksByCategoryPromise(Category.Software)
    // .catch(err => console.log(err));
    // console.log('End');

// ====================================================================================
// Task 09.03
console.log('Begin');
logSearchResults(Category.JavaScript)
.catch(err => console.log(err));

console.log('End');