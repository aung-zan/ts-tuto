// primitive types <string, number, boolean, bigInt, symbol, null, undefined>
const myName: string = "Aung";
const age: number = 30;
const single: boolean = false;
const married: boolean = false;
const salary: bigint = BigInt(80000);
const icon: symbol = Symbol('@');

// literal union [primitive type > literal union]
let orderStatus: 'pending' | 'delivering' | 'delivered';
orderStatus = 'pending';

let statusCode: 200 | 400;
statusCode = 200;

// unknow and any types [unknow and any > primitive > literal union]
let unkownString: unknown = "Aung";
unkownString = 30;
unkownString = true;

let anyString: any = "Aung";
anyString = 30;
anyString = true;

/**
 * never type. [cannot sign anything to never type variable.]
 * throw error retun type, never ending while loop and default switch case.
 * @param message
 */
const throwError = (message: string) => {
    throw new Error (message);
}

throwError("Error");

// custom type, there are many custom types.
type stringOrNumber = string | number;
let newSalary: stringOrNumber = 3500;
newSalary = "USD 3500";