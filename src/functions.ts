import { Book, LibMgrCallback } from './interfaces';
import { Category } from './enums';
import { BookProperties } from './types';

function getBookProp(book: Book, prop: BookProperties) {
    if (typeof book[prop] === 'function') {
        return (book[prop] as Function).name;
    }

    return book[prop];
}


export function getAllBooks(): readonly Book[] {
    const books: readonly Book[] = <const>[
        { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript},
        { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript},
        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS},
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript}
    ];

    return books;
}
// readonly{title: string, available: boolean}[]
export function logFirstAvailable(books: readonly object[] = getAllBooks()): void {
    const numberIfBooks = books.length;
    let firstBookTitle: string = '';

    for (const book of <any>books) {
        if (book.available) {
            firstBookTitle = book.title;
            break;
        }
    }

    console.log(`Total Books: ${numberIfBooks}`);
    console.log(`First Available Book: ${firstBookTitle}`);
}

export function getBookTitleByCategory(category: Category = Category.JavaScript): Array<string> {
    const books = getAllBooks() as any[];
    const titles: string[] = [];

    for (const book of books) {
        if (book.category === category) {
            titles.push(book.title);
        }
    }

    return titles;
}

export function logBookTitles(titles: string[]): void {
    titles.forEach((title: string) => {
        console.log(title);
    });

}

export function getBookAuthorByIndex(index: number): [string, string] {
    const books = getAllBooks();
    const { title, author } = <any>books[index];

    return [title, author];
}

// export function calcTotalPages(): bigint {
//     const data = [
//         { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
//         { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
//         { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
//     ];

//     const result = data.reduce((acc: bigint, obj) => {
//         return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook);
//     }, 0n);

//     return result;
// }

export function getBookById(id: number): Book | undefined {
    const books = getAllBooks();
    return books.find((book: Book) => book.id === id);
}

export function createCustomerId(name: string, id: number): string {
    return `${id}-${name}`;
}

export function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Create customer ${name}`);

    if (age) {
        console.log(`Customer Age: ${age}`);
    }

    if (city) {
        console.log(`Customer City: ${city}`);
    }
}

export function checkoutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log(`Checking out books for ${customer}`);

    const titles: string[] = [];

    for (const id of bookIDs) {
        const book = getBookById(id);
        if (book && book.available) {
            titles.push(book.title);
        }
    }

    return titles;
}

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(id: number, available: boolean): string[];
export function getTitles(...args: [number | string | boolean, boolean?]): string[] {
    const books = getAllBooks();

    if ((args.length < 1) || (args.length > 2)) {
        return [];
    }

    if (args.length === 1) {
        const arg = args[0];
        if (typeof arg === 'string') {
            return books.filter((book: any) => book.author === arg).map((book: any) => book.title);
        }
        if (typeof arg === 'boolean') {
            return books.filter((book: any) => book.available === arg).map((book: any) => book.title);
        }
    }

    if (args.length === 2) {
        const [id, available] = args;
        if (typeof id === 'number' && typeof available === 'boolean') {
            return books.filter((book: any) => book.available === available && book.id === id).map((book: any) => book.title);
        }
    }
}

export function assertStringValue(value: any): asserts value is string {
    if (typeof value !== 'string') {
        throw new Error('Value should have been a string');
    }
}

export function bookTitleTransform(title: any): string {
    assertStringValue(title);

    return [...title].reverse().join('');
}

export function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

export function purge<T>(inventory: Array<T>): Array<T> {
    return inventory.slice(2);
}

export function getBooksByCategory(category: Category, callback: LibMgrCallback): void {
    setTimeout(() => {
        try {
            const titles: string[] = getBookTitleByCategory(category);
            if (titles.length > 0) {
                callback(null, titles);
            }
            else {
                throw new Error('No Books found');
            }
        } catch (error) {
            callback(error, null);
        }
    }, 2000);
}

export function logCategorySearch(err: Error, titles: string[]): void {
    if (err) {
        console.log(`Error message: ${err.message}`);
    }
    else {
        console.log(titles);
    }
}

export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
    return new Promise<string[]>((resolve, reject) => {
        setTimeout(() => {
            const titles: string[] = getBookTitleByCategory(category);

            if (titles.length > 0) {
                resolve(titles);
            }
            else {
                reject('No Books found');
            }
        }, 2000);

    });
}

export async function logSearchResults(category: Category): Promise<any> {
    const numberOfBooks = await getBooksByCategoryPromise(category);
    console.log(numberOfBooks.length);
}