import * as R from "ramda";

const stringToArray = R.split("");

/* Question 1 */

export const countLetters: (s: string) => {} = s => R.countBy(R.toLower)(stringToArray(s));

/* Question 2 */
let parenthesesPair = (s: string): string => (s === "(") ? ")" : (s === "{") ? "}" : (s === "[") ? "]" : ""

export const isPaired: (s: string) => boolean = s => (isPairedRecursive(s, "(", 0) && isPairedRecursive(s, "{", 0) && isPairedRecursive(s, "[", 0));

const isPairedRecursive = (s: string, sTarget: string, x: number): boolean => 
    (s === "" && x === 0) ? true : (s === "" && x !== 0) ? false : (x < 0) ? false : 
    (s[0] === sTarget) ? isPairedRecursive(s.slice(1), sTarget, x+1) : 
    (s[0] === parenthesesPair(sTarget)) ? isPairedRecursive(s.slice(1), sTarget, x-1) : isPairedRecursive(s.slice(1), sTarget, x);

/* Question 3 */
interface WordTree {
    root: string;
    children: WordTree[];
}

export const treeToSentence = (t: WordTree): string => undefined

