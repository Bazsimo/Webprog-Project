import { Injectable } from '@angular/core';
import { User } from '../Models/Users';
import { ShoppingBasket } from '../Models/ShoppingBasket';
import { users } from '../HardDatabase/DatabaseHelper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;

  constructor() {
  }

  registerUser(name: string, nickName: string, email: string, passwordHash: string): void {
    const idCount = users.length;
    this.user = new User();
    this.user.id = idCount;
    this.user.name = name;
    this.user.nickName = nickName;
    this.user.email = email;
    this.user.passwordHash = passwordHash;
    this.user.shoppingBasket = new ShoppingBasket();

    users.push(this.user);
  }

  loginUser(user: User) {
    localStorage.setItem('loggedIn', JSON.stringify(true));
    localStorage.setItem('loggedInUser', JSON.stringify(user));
  }

  findUser(email: string, passwordHash: string): User {
    for (const user of users) {
      if (user.email === email && user.passwordHash === passwordHash) {
        console.log(user);
        console.log('found');
        return user;
      }
    }
    return undefined;
  }

}
