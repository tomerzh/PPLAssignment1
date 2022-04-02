import * as R from "ramda";

const stringToArray = R.split("");

/* Question 1 */

export const countLetters: (s: string) => {} = s => R.countBy(R.toLower)(stringToArray(s));

/* Question 2 */
const filterParentheses = (s: string) => (s === "(" || s === "{" || s === "[" || s === ")" || s === "}" || s === "]");

const myMap = new Map<string, number>([
    ["(", 0], ["{", 0], ["[", 0]
]);

const reduceMap = (pred: boolean, elements: string[]) =>
    elements.reduce((acc, curr) => 
    (curr === "(") ? (acc.get(curr) < 0)
    , myMap); 

export const isPaired: (s: string) => boolean = R.pipe((s: string) => stringToArray(s), R.filter(filterParentheses), 
R.reduce((acc, curr) => { (curr === "(") ? something : (curr === "{") ? something :
(curr === "[") ? something : (curr === ")") ? something : (curr === "}") ? something : (curr === "]") ? something : return acc; } , myMap))

/* Question 3 */
interface WordTree {
    root: string;
    children: WordTree[];
}

export const treeToSentence = (t: WordTree): string => undefined

