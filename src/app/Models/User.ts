export class User {

  constructor(id: any, username: any, email: any , password: any) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password ;
    this.connected = 1 ;

  }

  id: number;
  name: string;
  username: string;
  email: string;
  password: string;
  connected: number;

}
