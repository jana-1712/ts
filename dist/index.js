"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    UserId;
    UserName;
    UserEmail;
    UserPass;
    UserPhone;
    UserAge;
    constructor(UserId, UserName, UserEmail, UserPass, UserPhone, UserAge) {
        this.UserId = UserId;
        this.UserName = UserName;
        this.UserEmail = UserEmail;
        this.UserPass = UserPass;
        this.UserPhone = UserPhone;
        if (UserAge >= 18 && UserAge <= 60) {
            this.UserAge = UserAge;
        }
        else {
            throw new Error("Age must be between 18 and 60");
        }
    }
    displayInfo() {
        console.log("ID: " + this.UserId);
        console.log("Name: " + this.UserName);
        console.log("Email: " + this.UserEmail);
        console.log("Phone: " + this.UserPhone);
        console.log("Age: " + this.UserAge);
    }
}
const user1 = new User(1, "Jana", "jana@gmail.com", "12345", "01012345678", 22);
user1.displayInfo();
