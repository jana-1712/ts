
class User {
    public Id: number;
    public name: string;
    public email: string;
    private Password: string;
    public Phone: string;
    protected age: number;

    public notebooks: NoteBook[] = [];

    constructor(Id: number, name: string, email: string,
        Password: string, Phone: string, age: number) {

        this.Id = Id;
        this.name = name;
        this.email = email;
        this.Password = Password;
        this.Phone = Phone;

        if (age >= 18 && age <= 60) {
            this.age = age;
        } else {
            throw new Error("Age must be between 18 and 60");
        }
    }

    public displayInfo(): void {
        console.log("ID: " + this.Id);
        console.log("Name: " + this.name);
        console.log("Email: " + this.email);
        console.log("Phone: " + this.Phone);
        console.log("Age: " + this.age);
    }

    public addNotebook(notebook: NoteBook): void {
        this.notebooks.push(notebook);
    }
}


// 2. Admin Class

class Admin extends User {

    public manageNotes(notebook: NoteBook, note: Note): void {
        notebook.addNote(note);
        console.log("Note added successfully");
    }
}


// 3. Note Class

class Note {
    public Id: number;
    public title: string;
    public content: string;
    public userId: User;

    constructor(Id: number, title: string, content: string, userId: User) {
        this.Id = Id;
        this.title = title;
        this.content = content;
        this.userId = userId;
    }

    public preview(): string {
        return this.content.substring(0, 30) + "...";
    }
}


// 4. NoteBook Class

class NoteBook {
    private notes: Note[] = [];

    public addNote(note: Note): void {
        this.notes.push(note);
    }

    public removeNote(Id: number): void {
        this.notes = this.notes.filter(note => note.Id !== Id);
    }

    public getNotes(): Note[] {
        return this.notes;
    }
}



class Storage<T> {
    private items: T[] = [];

    public addItem(item: T): void {
        this.items.push(item);
    }

    public removeItem(item: T): void {
        this.items = this.items.filter(i => i !== item);
    }

    public getAllItems(): T[] {
        return this.items;
    }
}







// Testing the classes

const user1 = new User(
    1, "Jana", "jana@gmail.com",
    "12345", "01012345678", 22
);

const admin1 = new Admin(
    2, "Admin", "admin@gmail.com",
    "admin123", "01011111111", 30
);

const notebook1 = new NoteBook();

user1.addNotebook(notebook1);

const note1 = new Note(
    1, "My Note", "This is my first note in TypeScript", user1
);

notebook1.addNote(note1);

console.log(note1.preview());
user1.displayInfo();


const numbers = new Storage<number>();

numbers.addItem(10);
numbers.addItem(20);
numbers.addItem(30);

console.log(numbers.getAllItems());