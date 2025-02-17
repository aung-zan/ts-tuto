/**
 * Turple is a custom type.
 */
type Color = [number, number, number];
const redColor: Color = [255, 0, 0];

type Random = [string, number, boolean];
const random: Random = ["Hello", 200, true];
const [str, num, bool] = random;
console.log(str);
console.log(num);
console.log(bool);

// react useState
type useStateType<T> = [T, (val: T) => void];
const useState = <T>(val: T): useStateType<T> => [val, (val: T) => {}]

const [val, setVal] = useState("Hello");