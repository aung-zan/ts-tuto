const identity = <T>(value: T): T => {
    return value;
}
export type User = {
    id: string,
    name: string,
    age: number
};
const user: User = {id: "1", name: "Aung", age: 30};
const userIdentity = identity(user);
console.log(userIdentity);

type BasicResponse<T> = {
    success: boolean,
    data: T
}

const failedResponse: BasicResponse<string> = {
    success: false,
    data: "something went wrong."
}
console.log(failedResponse);

const successResponse = <T>(value: T): BasicResponse<T> => {
    return {success: true, data: value};
};
const response1 = successResponse("hello");
console.log(response1);
const response2 = successResponse({id: "1", name: "Aung"});
console.log(response2);

