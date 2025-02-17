type NumberObj = {
    [index: number]: string
}
const productNames: NumberObj = {
    1: "Apple",
    2: "Samsaung",
    3: "Google",
    4: "Hawei"
}
console.log(productNames);

type StringObj = {
    [index: string]: number
}
const productPrice: StringObj = {
    "Apple": 40000,
    "Samsaung": 60000,
    "Google": 50000,
    "Hawei": 30000
}
console.log(productPrice);


type TodoList = {
    [index: string]: boolean
}
const SundayList = {
    Learn: true,
    Sweep: false,
    "Shower": false,
    "UpdateCV": false,
}
console.log(SundayList);

// predefined index
interface Human {
    name: string,
    address: string
}
interface PredefineHuman extends Human {
    [index: string]: string
}
const human: Array<PredefineHuman> = [
    {
        name: "A",
        address: "AA"
    },
    {
        name: "B",
        address: "BB",
        companyName: "BBB"
    },
    {
        name: "C",
        address: "CC",
        bloodType: "O",
        other: "others"
    }
]
console.log(human);

// union types in index
type TypeOne = {
    [index: string | number]: string
}
const p1: TypeOne = {
    name: "p1",
    1: "p1"
}
console.log(p1);

type TypeTwo = {
    [key in "name" | "age" | "email"]: string | number
}
const user1: TypeTwo = {
    name: "userOne",
    email: "test@mail.com",
    age: 20,
}
console.log(user1);
