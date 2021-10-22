export class User {
    id: string="";
    title: string="";
    username: string="";
    lastName: string="";
    gender: string="";
    email: string="";
    dateOfBirth: string="";
    registerDate: string="";
    phone: string="";
    picture: string="";

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
      }
}
