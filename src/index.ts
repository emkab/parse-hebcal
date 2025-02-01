import { Lexer } from "./lexer";

let input = `
ddd, DDDD/MMMM/YYYY AAA DDD
`;

let lexer = new Lexer(input);
lexer.tokenize();
console.log(lexer.toString());
