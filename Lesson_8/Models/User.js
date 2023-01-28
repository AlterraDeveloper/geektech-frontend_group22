export default class User {
  constructor(username, login, password) {
    this.username = username;
    this.login = login;
    this.password = password;
  }

  greet(){
    return `Hello I'm ${this.username}`;
  }
}
