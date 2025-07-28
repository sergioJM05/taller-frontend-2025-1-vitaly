export class User {
    constructor({
        id= 0,
        name = '',
        email = '',
        password = ''
                }={})
    {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }
}