import { doStuff } from "./myModule";

const myWonderfulFunction = (x) => 10 * x;

console.log(myWonderfulFunction(89749874));

interface Args {
  x: number;
  y: number;
}

const myOtherFunction = (a: Args) => {
  return a.x + a.y;
};

doStuff();

console.log(myOtherFunction({ x: 23, y: 45 }));
