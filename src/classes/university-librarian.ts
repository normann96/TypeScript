import * as Interfaces from '../interfaces';
import { sealed, logger, writeble, logMethod, logParametr, format } from '../decorators';

@logger
@sealed('UniversityLibrarian')
export class UniversityLibrarian implements Interfaces.Librarian {
    department: string;
    @format()
    name: string;
    email: string;

    @logMethod
    assistCustomer(@logParametr custName: string): void {
        console.log(`${this.name} is assisting ${custName}`);
    }

    @writeble(true)
    assistFaculty() {
        console.log('Assisting faculty');
    }

    @writeble(false)
    techCommunity() {
        console.log('Teching community');
    }
}