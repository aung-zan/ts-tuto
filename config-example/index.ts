import add from "./math";

const myName = "AMZ";

{
    const myName = "Inner scope";
    const output = `My name is ${myName}`;

    console.log(output);
}

add(1, 2);