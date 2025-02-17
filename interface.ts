// interface for objects and function types (when extending is needed).
// object type for unions, intersections, tuples, and function types (more flexible).
enum AnimalColors {
    BLACK = "#000000",
    WHITE = "#FFFFFF"
}

interface Animal {
    name: string
}

interface Bird extends Animal {
    color: string,
    hexCode: string,
}
const crow: Bird = {
    name: "crow",
    color: "black",
    hexCode: AnimalColors.BLACK,
}
const owl: Bird = {
    name: "owl",
    color: "white",
    hexCode: AnimalColors.WHITE,
}

// an array of objects
interface Predator extends Animal {
    hasClaws: boolean,
    hasVenom: boolean
}
const predators: Array<Predator> = [
    {
        name: "snake",
        hasClaws: false,
        hasVenom: true
    },
    {
        name: "lion",
        hasClaws: true,
        hasVenom: false
    }
]

console.log(predators);


