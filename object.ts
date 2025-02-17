const person: {
    name: string,
    age: number,
    status: "active" | "inactive"
    isAdmin ?: true | false
} = {
    name: "Aung Min Zan",
    age: 30,
    status: 'active'
};
console.log(person);

person.isAdmin = true;
console.log(person);

// with custom type
type Person = {
    name: string,
    age: number,
    status: "active" | "inactive",
    isAdmin?: true | false
};

const personOne: Person = {
    name: "Aung",
    age: 30,
    status: "active"
}

const personTwo: Person = {
    name: "Theint",
    age: 30,
    status: "active"
}