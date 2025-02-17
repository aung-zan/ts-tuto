import { User } from "./generic";

const responseData = JSON.parse('{"id":"1","name":"aung","age":30}')

const user = responseData as User;
console.log(user);
