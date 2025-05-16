const revString = (str: string): string => {
    const revArr: string[] = [];

    for (let index = (str.length - 1); index >= 0; index--) {
        revArr.push(str[index]);
    }

    return revArr.join('');
}

const result = revString('abc');
console.log(result);
